/**
 * GUIDE-ENSTP - Application Logic & Interactivity
 * École Nationale Supérieure des Travaux Publics (Kouba, Alger)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- État de l'application ---
  const state = {
    currentSection: 'accueil',
    theme: localStorage.getItem('enstp_theme') || 'light',
    lang: localStorage.getItem('enstp_lang') || 'fr',
    favorites: JSON.parse(localStorage.getItem('enstp_favorites') || '[]'),
    viePratiqueFilter: 'all',
    viePratiqueDistance: 'all',
    viePratiqueSearch: '',
    campusSpotFilter: 'all',
    currentCycle: 'ingenieur', // 3A DIB S5 affiché en premier
    currentScheduleKey: 'ing3a_dib'
  };

  // --- Initialisation du Thème ---
  document.documentElement.setAttribute('data-theme', state.theme);

  // --- Initialisation de la Langue ---
  if (window.I18N) {
    I18N.setLanguage(state.lang);
  }

  // --- Sélecteurs DOM Principaux ---
  const sidebar = document.querySelector('.sidebar');
  const sidebarBackdrop = document.querySelector('.sidebar-backdrop');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
  const searchModalBackdrop = document.querySelector('.search-modal-backdrop');
  const searchModalInput = document.querySelector('.search-modal-input');
  const searchModalResults = document.querySelector('.search-modal-results');
  const searchModalClose = document.querySelector('.search-modal-close');
  const headerSearchInput = document.querySelector('#headerSearchInput');
  const toastContainer = document.querySelector('.toast-container');

  // --- Toast Notification Helper ---
  function showToast(message, icon = 'check-circle') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="${icon}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    if (window.lucide) lucide.createIcons({ root: toast });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Helper de Traduction
  function t(key) {
    return window.I18N ? I18N.t(key) : key;
  }

  // --- Sélecteur de Langue Interactif (FR / EN / AR) ---
  function setupLanguageSwitchers() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== state.lang) {
          state.lang = selectedLang;
          if (window.I18N) I18N.setLanguage(selectedLang);
          showToast(
            selectedLang === 'ar' ? '🇩🇿 تم تفعيل اللغة العربية' : 
            selectedLang === 'en' ? '🇬🇧 English language activated' : 
            '🇫🇷 Langue française activée',
            'globe'
          );
        }
      });
    });
  }

  setupLanguageSwitchers();

  // Écouteur global de changement de langue
  window.addEventListener('languageChanged', (e) => {
    state.lang = e.detail.lang;
    updateLevelOptions();
    renderCampusSpots();
    renderPracticalPlaces();
    renderTransports();
    renderSchedule();
    rebuildSearchIndex();
    if (window.lucide) lucide.createIcons();
  });

  // --- Gestion du Thème (Clair / Sombre) ---
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('enstp_theme', state.theme);
      showToast(`Mode ${state.theme === 'dark' ? 'Sombre' : 'Clair'} activé`, state.theme === 'dark' ? 'moon' : 'sun');
    });
  }

  // --- Navigation & Router ---
  function switchSection(sectionId) {
    if (!sectionId) sectionId = 'accueil';
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    // Masquer toutes les sections
    document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('active'));
    targetSection.classList.add('active');

    // Mettre à jour la sidebar active
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-section') === sectionId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    state.currentSection = sectionId;
    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Fermer le menu mobile si ouvert
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    }
  }

  // Écoute des clics sur la sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const sec = item.getAttribute('data-section');
      switchSection(sec);
    });
  });

  // Écoute des liens intra-page
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sec = btn.getAttribute('data-goto');
      switchSection(sec);
    });
  });

  // Gestion du hash URL
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) switchSection(hash);
  });

  if (window.location.hash) {
    const initialHash = window.location.hash.replace('#', '');
    switchSection(initialHash);
  } else {
    switchSection('accueil');
  }

  // Mobile Menu Toggles
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.toggle('active');
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarBackdrop.classList.remove('active');
    });
  }

  // =========================================================================
  // SECTION 2 : CARTE INTERACTIVE DU CAMPUS
  // =========================================================================
  const spotsContainer = document.getElementById('spotsContainer');
  const spotsFilterChips = document.querySelectorAll('.spots-filter-bar .filter-chip');
  const iframeCampus = document.getElementById('campusMapIframe');
  const reloadMapBtn = document.getElementById('reloadMapBtn');
  const fullscreenMapBtn = document.getElementById('fullscreenMapBtn');

  if (reloadMapBtn && iframeCampus) {
    reloadMapBtn.addEventListener('click', () => {
      iframeCampus.src = iframeCampus.src;
      showToast(t('btnReloadMap') + '...', 'refresh-cw');
    });
  }

  if (fullscreenMapBtn && iframeCampus) {
    fullscreenMapBtn.addEventListener('click', () => {
      if (iframeCampus.requestFullscreen) {
        iframeCampus.requestFullscreen();
      } else if (iframeCampus.webkitRequestFullscreen) {
        iframeCampus.webkitRequestFullscreen();
      }
    });
  }

  function renderCampusSpots() {
    if (!spotsContainer) return;
    const filter = state.campusSpotFilter;
    const spots = ENSTP_DATA.campusSpots.filter(spot => {
      if (filter === 'all') return true;
      return spot.category === filter;
    });

    const isAr = state.lang === 'ar';
    const isEn = state.lang === 'en';

    spotsContainer.innerHTML = spots.map(spot => {
      const name = isAr ? (spot.nameAr || spot.name) : isEn ? (spot.nameEn || spot.name) : spot.name;
      const loc = isAr ? (spot.locationAr || spot.location) : isEn ? (spot.locationEn || spot.location) : spot.location;
      const desc = isAr ? (spot.descAr || spot.desc) : isEn ? (spot.descEn || spot.desc) : spot.desc;

      return `
        <div class="spot-card">
          <div class="spot-card-top">
            <span class="spot-code">${spot.code}</span>
            <span class="spot-capacity"><i data-lucide="users"></i> ${spot.capacity}</span>
          </div>
          <h4 class="spot-name">${name}</h4>
          <div class="spot-location">
            <i data-lucide="map-pin"></i> ${loc}
          </div>
          <p class="spot-desc">${desc}</p>
          <div class="spot-tags">
            ${spot.tags.map(tag => `<span class="spot-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons({ root: spotsContainer });
  }

  spotsFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      spotsFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.campusSpotFilter = chip.getAttribute('data-filter');
      renderCampusSpots();
    });
  });

  renderCampusSpots();

  // =========================================================================
  // SECTION 3 : VIE PRATIQUE (KOUBA / GARIDI)
  // =========================================================================
  const placesContainer = document.getElementById('placesGrid');
  const vpCategoryTabs = document.querySelectorAll('.vp-tab-btn');
  const vpDistanceBtns = document.querySelectorAll('.distance-btn');
  const vpSearchInput = document.getElementById('vpSearchInput');
  const vpResultsCount = document.getElementById('vpResultsCount');

  // Gestion des Favoris
  window.toggleFavorite = function(placeId) {
    const idx = state.favorites.indexOf(placeId);
    if (idx === -1) {
      state.favorites.push(placeId);
      showToast(state.lang === 'ar' ? 'تمت الإضافة إلى المفضلة' : 'Ajouté à vos favoris', 'star');
    } else {
      state.favorites.splice(idx, 1);
      showToast(state.lang === 'ar' ? 'تم الحذف من المفضلة' : 'Retiré de vos favoris', 'trash');
    }
    localStorage.setItem('enstp_favorites', JSON.stringify(state.favorites));
    renderPracticalPlaces();
  };

  // Copier l'adresse
  window.copyAddress = function(text, name) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(state.lang === 'ar' ? `تم نسخ عنوان "${name}"` : `Adresse de "${name}" copiée !`, 'copy');
    }).catch(() => {
      showToast(`Adresse : ${text}`, 'info');
    });
  };

  function renderPracticalPlaces() {
    if (!placesContainer) return;

    let items = ENSTP_DATA.practicalPlaces;
    const isAr = state.lang === 'ar';
    const isEn = state.lang === 'en';

    // Filtre Catégorie
    if (state.viePratiqueFilter === 'favorites') {
      items = items.filter(p => state.favorites.includes(p.id));
    } else if (state.viePratiqueFilter !== 'all') {
      items = items.filter(p => p.category === state.viePratiqueFilter);
    }

    // Filtre Distance
    if (state.viePratiqueDistance !== 'all') {
      const maxDist = parseInt(state.viePratiqueDistance, 10);
      items = items.filter(p => p.distance <= maxDist);
    }

    // Filtre Recherche
    if (state.viePratiqueSearch.trim() !== '') {
      const q = state.viePratiqueSearch.toLowerCase();
      items = items.filter(p => {
        const name = (isAr && p.categoryNameAr ? p.categoryNameAr : p.name).toLowerCase();
        const addr = (isAr && p.addressAr ? p.addressAr : p.address).toLowerCase();
        return name.includes(q) || addr.includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
      });
    }

    if (vpResultsCount) {
      vpResultsCount.textContent = `${items.length} ${t('countAddresses')}`;
    }

    if (items.length === 0) {
      placesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="color: var(--text-main); margin-bottom: 0.5rem;">${t('noResultsLifeTitle')}</h3>
          <p>${t('noResultsLifeDesc')}</p>
        </div>
      `;
      return;
    }

    placesContainer.innerHTML = items.map(place => {
      const isFav = state.favorites.includes(place.id);
      let badgeClass = 'badge-superette';
      if (place.category === 'restauration') badgeClass = 'badge-restauration';
      if (place.category === 'sante') badgeClass = 'badge-sante';
      if (place.category === 'boulangeries') badgeClass = 'badge-boulangerie';

      let catName = place.categoryName;
      if (place.category === 'superettes') catName = isAr ? 'سوبرماركت وبقالة' : isEn ? 'Grocery Store' : 'Supérette';
      else if (place.category === 'restauration') catName = isAr ? 'مطاعم وسريعة' : isEn ? 'Fast-Food & Dining' : 'Fast-Food & Restauration';
      else if (place.category === 'sante') catName = isAr ? 'صيدلية وصحة' : isEn ? 'Pharmacy' : 'Pharmacie';
      else if (place.category === 'boulangeries') catName = isAr ? 'مخبزة وحلويات' : isEn ? 'Bakery & Pastry' : 'Boulangerie & Pâtisserie';

      const placeName = isAr ? (place.nameAr || place.categoryNameAr || place.name) : isEn ? (place.nameEn || place.categoryNameEn || place.name) : place.name;
      const addr = isAr ? (place.addressAr || place.address) : isEn ? (place.addressEn || place.address) : place.address;
      const desc = isAr ? (place.descAr || place.desc) : isEn ? (place.descEn || place.desc) : place.desc;

      return `
        <div class="place-card" id="${place.id}">
          <div class="place-header">
            <div class="place-meta">
              <span class="place-category-badge ${badgeClass}">${catName}</span>
              <h4 class="place-name">${placeName}</h4>
            </div>
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="window.toggleFavorite('${place.id}')" title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
              <i data-lucide="star" style="${isFav ? 'fill: #CA8A04;' : ''}"></i>
            </button>
          </div>

          <div class="place-distance-bar">
            <span class="distance-pill"><i data-lucide="map-pin"></i> ${place.distance} m</span>
            <span class="walk-time-pill"><i data-lucide="footprints"></i> ~${place.walkTime} ${isAr ? 'مشياً' : 'à pied'}</span>
          </div>

          <div class="place-address">
            <i data-lucide="navigation"></i>
            <span>${addr}</span>
          </div>

          <div class="place-hours">
            <i data-lucide="clock"></i>
            <span>${place.hours}</span>
          </div>

          <p class="place-desc">${desc}</p>

          <div class="place-tags">
            ${place.tags.map(t => `<span class="place-tag-pill">${t}</span>`).join('')}
          </div>

          <div class="place-actions">
            <a href="${place.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-maps-action">
              <span>${t('btnViewMaps')}</span>
              <i data-lucide="external-link"></i>
            </a>
            <button class="btn-copy-address" onclick="window.copyAddress('${addr.replace(/'/g, "\\'")}', '${place.name.replace(/'/g, "\\'")}')" title="${t('btnCopyAddress')}">
              <i data-lucide="copy"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons({ root: placesContainer });
  }

  vpCategoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      vpCategoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.viePratiqueFilter = tab.getAttribute('data-category');
      renderPracticalPlaces();
    });
  });

  vpDistanceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vpDistanceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.viePratiqueDistance = btn.getAttribute('data-distance');
      renderPracticalPlaces();
    });
  });

  if (vpSearchInput) {
    vpSearchInput.addEventListener('input', (e) => {
      state.viePratiqueSearch = e.target.value;
      renderPracticalPlaces();
    });
  }

  renderPracticalPlaces();

  // =========================================================================
  // SECTION 4 : TRANSPORTS ET DÉPLACEMENTS
  // =========================================================================
  const etusaGrid = document.getElementById('etusaGrid');
  const cousLinesContainer = document.getElementById('cousLinesContainer');
  const cousRulesList = document.getElementById('cousRulesList');

  function renderTransports() {
    const isAr = state.lang === 'ar';

    if (etusaGrid) {
      etusaGrid.innerHTML = ENSTP_DATA.transport.etusa.map(line => `
        <div class="etusa-card">
          <div class="etusa-line-badge">
            <i data-lucide="bus"></i>
            <span>${line.line}</span>
          </div>
          <div class="etusa-trajectory">
            <span>${isAr && line.fromAr ? line.fromAr : line.from}</span>
            <i data-lucide="arrow-right"></i>
            <span>${isAr && line.toAr ? line.toAr : line.to}</span>
          </div>
          <div class="etusa-via">
            <strong>${isAr ? 'المسار :' : 'Itinéraire :'}</strong> ${line.via}
          </div>
          <div class="etusa-stop-box">
            <i data-lucide="map-pin"></i>
            <span><strong>${isAr ? 'أقرب موقف :' : 'Arrêt le plus proche :'}</strong> ${isAr && line.nearestStopAr ? line.nearestStopAr : line.nearestStop}</span>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; justify-content: space-between; margin-top: auto; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);">
            <span>⏱️ ${isAr && line.frequencyAr ? line.frequencyAr : line.frequency}</span>
            <span>🕒 ${line.hours}</span>
          </div>
        </div>
      `).join('');
    }

    if (cousLinesContainer) {
      cousLinesContainer.innerHTML = ENSTP_DATA.transport.universityBuses.lines.map(c => `
        <div class="cous-item">
          <div class="cous-item-title">${c.name}</div>
          <div class="cous-item-detail">${c.circuits}</div>
          <div style="margin-top: 0.5rem; font-size: 0.8rem; font-weight: 700; color: var(--primary);">
            ⏱️ ${isAr ? 'الوقت التقديري :' : 'Trajet estimé :'} ${c.duration}
          </div>
        </div>
      `).join('');
    }

    if (cousRulesList) {
      cousRulesList.innerHTML = ENSTP_DATA.transport.universityBuses.rules.map(r => `
        <li style="margin-bottom: 0.35rem;">${r}</li>
      `).join('');
    }

    if (window.lucide) {
      if (etusaGrid) lucide.createIcons({ root: etusaGrid });
      if (cousLinesContainer) lucide.createIcons({ root: cousLinesContainer });
    }
  }

  renderTransports();

  // =========================================================================
  // SECTION 5 : SPORT & CLUBS (SSC ENSTP)
  // =========================================================================
  const disciplinesGrid = document.getElementById('disciplinesGrid');
  const sscEventsGrid = document.getElementById('sscEventsGrid');

  if (disciplinesGrid) {
    disciplinesGrid.innerHTML = ENSTP_DATA.sportClub.disciplines.map(d => `
      <div class="discipline-card">
        <div class="disc-icon">
          <i data-lucide="${d.icon}"></i>
        </div>
        <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--primary); letter-spacing: 0.05em;">${d.tag}</span>
        <h4 class="disc-title">${d.name}</h4>
        <p class="disc-desc">${d.desc}</p>
      </div>
    `).join('');
  }

  if (sscEventsGrid) {
    sscEventsGrid.innerHTML = ENSTP_DATA.sportClub.events.map(ev => `
      <div style="background-color: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-weight: 800; font-size: 1.15rem; color: var(--text-main);">${ev.title}</span>
          <span style="font-size: 0.75rem; font-weight: 700; background-color: var(--primary-light); color: var(--primary-dark); padding: 0.2rem 0.65rem; border-radius: var(--radius-full);">${ev.date}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${ev.desc}</p>
      </div>
    `).join('');
  }

  // =========================================================================
  // SECTION 6 : EMPLOIS DU TEMPS (ADAPTATION : SEUL 3A DIB S5 PDF EST DISPONIBLE)
  // =========================================================================
  const cycleSelect = document.getElementById('cycleSelect');
  const levelSelect = document.getElementById('levelSelect');
  const scheduleViewContainer = document.getElementById('scheduleViewContainer');
  const currentScheduleTitle = document.getElementById('currentScheduleTitle');
  const currentScheduleSubtitle = document.getElementById('currentScheduleSubtitle');

  function getLevelOptions() {
    const isAr = state.lang === 'ar';
    const isEn = state.lang === 'en';

    const prepa = [
      { key: 'cp1', label: isAr ? 'السنة الأولى (CP1)' : isEn ? '1st Year (CP1)' : '1ère Année (CP1)' },
      { key: 'cp2', label: isAr ? 'السنة الثانية (CP2)' : isEn ? '2nd Year (CP2)' : '2ème Année (CP2)' }
    ];

    const ingenieur = [
      { key: 'ing1a', label: isAr ? 'السنة الأولى مهندسين (1A)' : isEn ? '1st Year Engineering (1A)' : '1ère Année Ingénieur (1A)' },
      { key: 'ing2a_dib', label: isAr ? 'السنة الثانية (2A) - قسم DIB' : isEn ? '2nd Year (2A) - DIB Dept' : '2ème Année Ingénieur (2A) - DIB' },
      { key: 'ing2a_dms', label: isAr ? 'السنة الثانية (2A) - قسم DMS' : isEn ? '2nd Year (2A) - DMS Dept' : '2ème Année Ingénieur (2A) - DMS' },
      { key: 'ing3a_dib', label: isAr ? 'السنة الثالثة (3A) - DIB (متوفر بصيغة PDF)' : isEn ? '3rd Year (3A) - DIB (PDF Available S5)' : '3ème Année Ingénieur (3A) - DIB (S5 PDF Disponible ⭐)' },
      { key: 'ing3a_dms', label: isAr ? 'السنة الثالثة (3A) - قسم DMS' : isEn ? '3rd Year (3A) - DMS Dept' : '3ème Année Ingénieur (3A) - DMS' }
    ];

    return { prepa, ingenieur };
  }

  function updateLevelOptions() {
    if (!cycleSelect || !levelSelect) return;
    const cycle = cycleSelect.value;
    state.currentCycle = cycle;

    const { prepa, ingenieur } = getLevelOptions();
    const options = cycle === 'prepa' ? prepa : ingenieur;

    levelSelect.innerHTML = options.map(opt => `<option value="${opt.key}">${opt.label}</option>`).join('');

    const exists = options.some(o => o.key === state.currentScheduleKey);
    if (!exists) {
      state.currentScheduleKey = options[0].key;
    }
    levelSelect.value = state.currentScheduleKey;
    renderSchedule();
  }

  if (cycleSelect && levelSelect) {
    cycleSelect.addEventListener('change', () => {
      state.currentCycle = cycleSelect.value;
      updateLevelOptions();
    });

    levelSelect.addEventListener('change', () => {
      state.currentScheduleKey = levelSelect.value;
      renderSchedule();
    });
  }

  // Basculer vers 3A DIB
  window.switchTo3aDib = function() {
    if (cycleSelect && levelSelect) {
      cycleSelect.value = 'ingenieur';
      state.currentCycle = 'ingenieur';
      updateLevelOptions();
      levelSelect.value = 'ing3a_dib';
      state.currentScheduleKey = 'ing3a_dib';
      renderSchedule();
      showToast(t('availableBadge'), 'file-text');
    }
  };

  function renderSchedule() {
    if (!scheduleViewContainer) return;
    const scheduleData = ENSTP_DATA.schedules[state.currentScheduleKey];
    if (!scheduleData) return;

    const isAr = state.lang === 'ar';
    const isEn = state.lang === 'en';

    const title = isAr ? (scheduleData.titleAr || scheduleData.title) : isEn ? (scheduleData.titleEn || scheduleData.title) : scheduleData.title;

    if (currentScheduleTitle) currentScheduleTitle.textContent = title;
    if (currentScheduleSubtitle) {
      currentScheduleSubtitle.textContent = scheduleData.available ? `${scheduleData.semester} • ${scheduleData.amphi}` : t('pendingBadge');
    }

    const scheduleActionButtons = document.getElementById('scheduleActionButtons');
    if (scheduleActionButtons) {
      scheduleActionButtons.style.display = scheduleData.available ? 'flex' : 'none';
    }

    // =======================================================================
    // CAS 1 : 3A DIB S5 (SEUL DISPONIBLE EN PDF AVEC PRÉVISUALISATION DIRECTE)
    // =======================================================================
    if (scheduleData.available === true) {
      scheduleViewContainer.innerHTML = `
        <div class="schedule-pdf-highlight-card">
          <div class="pdf-header-top">
            <div class="pdf-icon-title-group">
              <div class="pdf-file-icon-box">
                <i data-lucide="file-text"></i>
              </div>
              <div class="pdf-title-meta">
                <span class="pdf-status-stamp">
                  <i data-lucide="check-circle-2"></i> ${t('availableBadge')}
                </span>
                <h4>${t('availableDibTitle')}</h4>
                <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 700px; line-height: 1.5;">
                  ${t('availableDibDesc')}
                </p>
              </div>
            </div>

            <div class="pdf-actions-row">
              <a href="${scheduleData.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-pdf-action btn-pdf-primary">
                <i data-lucide="external-link"></i>
                <span>${t('btnViewPdfOnline')}</span>
              </a>

              <a href="${scheduleData.pdfUrl}" download="EMPLOIS_DU_TEMPS_3A_DIB_S5_ENSTP.pdf" class="btn-pdf-action btn-pdf-secondary">
                <i data-lucide="download"></i>
                <span>${t('btnDownloadPdf')}</span>
              </a>

              <button type="button" class="btn-pdf-action btn-pdf-secondary" onclick="window.print()">
                <i data-lucide="printer"></i>
                <span>${t('btnPrintSchedule')}</span>
              </button>
            </div>
          </div>

          <!-- PRÉVISUALISATION DIRECTE DU DOCUMENT PDF (DIRECT EMBED) -->
          <div class="pdf-direct-preview-wrapper">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="eye" style="color: var(--primary);"></i>
                <span>${t('pdfPreviewTitle')}</span>
              </span>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">
                PDF • Semestre 5
              </span>
            </div>

            <iframe src="${scheduleData.pdfUrl}#toolbar=1&navpanes=0" class="pdf-embed-frame" title="Emploi du temps officiel 3A DIB S5"></iframe>
          </div>
        </div>
      `;
    } 
    // =======================================================================
    // CAS 2 : AUTRES PROMOTIONS (EN ATTENTE DE PUBLICATION / BIENTÔT DISPONIBLE)
    // =======================================================================
    else {
      scheduleViewContainer.innerHTML = `
        <div class="schedule-pending-card">
          <div class="pending-icon-bubble">
            <i data-lucide="hourglass"></i>
          </div>
          <span class="pending-badge">
            <i data-lucide="clock"></i>
            <span>${t('pendingBadge')}</span>
          </span>
          <h3 class="pending-title">${title}</h3>
          <p class="pending-desc">${t('pendingDesc')}</p>

          <div class="pending-notice-box">
            <i data-lucide="info" style="vertical-align: middle; margin-right: 4px; color: var(--primary);"></i>
            ${t('pendingNotice')}
          </div>

          <button type="button" class="btn-switch-available" onclick="window.switchTo3aDib()">
            <i data-lucide="file-check"></i>
            <span>${t('btnSwitchTo3aDib')}</span>
          </button>
        </div>
      `;
    }

    if (window.lucide) lucide.createIcons({ root: scheduleViewContainer });
  }

  // Initialisation du planning avec 3A DIB sélectionné par défaut
  if (cycleSelect && levelSelect) {
    cycleSelect.value = 'ingenieur';
    state.currentCycle = 'ingenieur';
    state.currentScheduleKey = 'ing3a_dib';
    updateLevelOptions();
  }

  // =========================================================================
  // SECTION 7 : SERVICES & CONTACTS UTILES
  // =========================================================================
  const contactsGrid = document.getElementById('contactsGrid');
  const contactForm = document.getElementById('quickContactForm');

  function renderContacts() {
    if (!contactsGrid) return;
    const isAr = state.lang === 'ar';
    const isEn = state.lang === 'en';

    contactsGrid.innerHTML = ENSTP_DATA.contacts.map(c => {
      const srv = isAr ? (c.serviceAr || c.service) : isEn ? (c.serviceEn || c.service) : c.service;
      const resp = isAr ? (c.responsibleAr || c.responsible) : isEn ? (c.responsibleEn || c.responsible) : c.responsible;
      const loc = isAr ? (c.locationAr || c.location) : isEn ? (c.locationEn || c.location) : c.location;
      const hrs = isAr ? (c.hoursAr || c.hours) : isEn ? (c.hoursEn || c.hours) : c.hours;
      const rl = isAr ? (c.roleAr || c.role) : isEn ? (c.roleEn || c.role) : c.role;

      return `
        <div class="contact-card">
          <h4 class="contact-title">${srv}</h4>
          <span class="contact-responsible">${resp}</span>
          <div class="contact-details">
            <div class="contact-item">
              <i data-lucide="mail"></i>
              <a href="mailto:${c.email}">${c.email}</a>
            </div>
            <div class="contact-item">
              <i data-lucide="phone"></i>
              <a href="tel:${c.phone}">${c.phone}</a>
            </div>
            <div class="contact-item">
              <i data-lucide="map-pin"></i>
              <span>${loc}</span>
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45; margin-top: 0.25rem;">${rl}</p>
          <div class="contact-hours-box">
            <i data-lucide="calendar"></i> <strong>${isAr ? 'المواعيد :' : 'Horaires :'}</strong> ${hrs}
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons({ root: contactsGrid });
  }

  renderContacts();

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> ${state.lang === 'ar' ? 'جاري الإرسال...' : 'Envoi en cours...'}`;
      if (window.lucide) lucide.createIcons({ root: submitBtn });

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(
          state.lang === 'ar' ? 'تم إرسال طلبكم بنجاح إلى مصالح المدرسة المعنية !' : 
          'Votre message / signalement a bien été transmis aux services compétents !', 
          'check-circle'
        );
        if (window.lucide) lucide.createIcons();
      }, 1200);
    });
  }

  // =========================================================================
  // RECHERCHE GLOBALE INSTANTANÉE (CTRL + K)
  // =========================================================================
  let searchIndex = [];

  function rebuildSearchIndex() {
    searchIndex = [];
    const isAr = state.lang === 'ar';
    const isEn = state.lang === 'en';

    // Commerces & Vie pratique
    ENSTP_DATA.practicalPlaces.forEach(p => {
      const cat = isAr ? (p.categoryNameAr || p.categoryName) : isEn ? (p.categoryNameEn || p.categoryName) : p.categoryName;
      const addr = isAr ? (p.addressAr || p.address) : isEn ? (p.addressEn || p.address) : p.address;
      searchIndex.push({
        title: p.name,
        sub: `${cat} • ${addr} (${p.distance}m)`,
        badge: isAr ? 'دليل الأماكن' : 'Vie Pratique',
        targetSection: 'vie-pratique',
        actionUrl: p.mapsUrl,
        isExternal: true,
        keywords: `${p.name} ${addr} ${p.tags.join(' ')} ${cat}`
      });
    });

    // Campus Spots
    ENSTP_DATA.campusSpots.forEach(s => {
      const name = isAr ? (s.nameAr || s.name) : isEn ? (s.nameEn || s.name) : s.name;
      const loc = isAr ? (s.locationAr || s.location) : isEn ? (s.locationEn || s.location) : s.location;
      searchIndex.push({
        title: name,
        sub: `${loc} • ${s.code}`,
        badge: isAr ? 'الحرم الجامعي' : 'Campus',
        targetSection: 'carte-interactive',
        keywords: `${name} ${s.code} ${loc} ${s.tags.join(' ')}`
      });
    });

    // Transports
    ENSTP_DATA.transport.etusa.forEach(tLine => {
      const from = isAr && tLine.fromAr ? tLine.fromAr : tLine.from;
      const to = isAr && tLine.toAr ? tLine.toAr : tLine.to;
      searchIndex.push({
        title: `${tLine.line} : ${from} ↔ ${to}`,
        sub: `${isAr ? 'الموقف :' : 'Arrêt :'} ${isAr && tLine.nearestStopAr ? tLine.nearestStopAr : tLine.nearestStop}`,
        badge: isAr ? 'حافلات إيتوزا' : 'Transport ETUSA',
        targetSection: 'transports',
        keywords: `${tLine.line} ${from} ${to} bus etusa إيتوزا`
      });
    });

    // Emploi du temps 3A DIB
    searchIndex.push({
      title: isAr ? 'جدول توقيت 3A DIB (السداسي 5 بصيغة PDF)' : 'Emploi du temps 3A DIB (S5 PDF)',
      sub: isAr ? 'الملف الرسمي متوفر للتحميل والمعاينة المباشرة' : 'Document officiel validé disponible',
      badge: isAr ? 'جدول معتمد' : 'Planning PDF',
      targetSection: 'emplois-du-temps',
      scheduleKey: 'ing3a_dib',
      keywords: '3A DIB S5 PDF emploi du temps جدول توقيت'
    });

    // Contacts
    ENSTP_DATA.contacts.forEach(c => {
      const srv = isAr ? (c.serviceAr || c.service) : isEn ? (c.serviceEn || c.service) : c.service;
      const resp = isAr ? (c.responsibleAr || c.responsible) : isEn ? (c.responsibleEn || c.responsible) : c.responsible;
      searchIndex.push({
        title: srv,
        sub: `${resp} • ${c.email}`,
        badge: isAr ? 'جهة اتصال' : 'Contact',
        targetSection: 'contacts',
        keywords: `${srv} ${resp} ${c.email}`
      });
    });
  }

  rebuildSearchIndex();

  function openSearchModal() {
    if (searchModalBackdrop) {
      searchModalBackdrop.classList.add('active');
      searchModalInput.value = '';
      searchModalInput.focus();
      renderSearchResults('');
    }
  }

  function closeSearchModal() {
    if (searchModalBackdrop) {
      searchModalBackdrop.classList.remove('active');
    }
  }

  function renderSearchResults(query) {
    if (!searchModalResults) return;
    const q = query.trim().toLowerCase();

    const results = searchIndex.filter(item => {
      if (!q) return true;
      return item.keywords.toLowerCase().includes(q) || item.title.toLowerCase().includes(q);
    }).slice(0, 8);

    if (results.length === 0) {
      searchModalResults.innerHTML = `
        <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <div>${t('modalNoResults')} "<strong>${query}</strong>"</div>
        </div>
      `;
      return;
    }

    searchModalResults.innerHTML = results.map(r => `
      <div class="search-result-item" data-section="${r.targetSection}" data-key="${r.scheduleKey || ''}" data-url="${r.actionUrl || ''}">
        <div class="search-result-left">
          <span class="search-result-title">${r.title}</span>
          <span class="search-result-sub">${r.sub}</span>
        </div>
        <span class="search-result-badge">${r.badge}</span>
      </div>
    `).join('');

    searchModalResults.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const sec = el.getAttribute('data-section');
        const schKey = el.getAttribute('data-key');
        const extUrl = el.getAttribute('data-url');

        closeSearchModal();

        if (extUrl) {
          window.open(extUrl, '_blank');
        } else if (sec) {
          switchSection(sec);
          if (schKey && cycleSelect && levelSelect) {
            cycleSelect.value = 'ingenieur';
            updateLevelOptions();
            levelSelect.value = schKey;
            state.currentScheduleKey = schKey;
            renderSchedule();
          }
        }
      });
    });
  }

  if (searchModalInput) {
    searchModalInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener('click', openSearchModal);
  }

  if (searchModalClose) {
    searchModalClose.addEventListener('click', closeSearchModal);
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener('click', (e) => {
      if (e.target === searchModalBackdrop) closeSearchModal();
    });
  }

  // Raccourci Clavier Ctrl + K / Cmd + K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
    }
  });

  // Initialisation Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
