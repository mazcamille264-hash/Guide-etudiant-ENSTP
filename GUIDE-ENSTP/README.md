# 🏛️ Guide Numérique de l'Étudiant ENSTP (Kouba, Alger)

Plateforme web moderne, dynamique et interactive centralisant toutes les informations et services essentiels pour les élèves-ingénieurs et enseignants de l'**École Nationale Supérieure des Travaux Publics (ENSTP)** de Kouba, Alger.

---

## ✨ Points Clés & Dernières Adaptations

### 1. 📅 Module des Emplois du Temps (3A DIB S5 PDF & Attente Élégante)
- **Fichier officiel disponible :** L'emploi du temps de la **3ème Année Ingénieur - Département Infrastructures de Base (DIB - Semestre 5 / S5)** est directement disponible via le fichier [`EMPLOIS DU TEMPS S5.pdf`](./EMPLOIS%20DU%20TEMPS%20S5.pdf).
- **Visionneuse PDF Directe Intégrée :** Aperçu pleine page haute lisibilité (700 px) directement intégré dans la page sans nécessité de logiciel externe.
- **Actions Rapides Dédiées :**
  - ↗️ **Consulter le PDF en Ligne** (ouverture sécurisée dans un nouvel onglet).
  - 📥 **Télécharger l'Emploi du Temps PDF** (téléchargement direct du document officiel).
  - 🖨️ **Imprimer** (feuille de style optimisée `@media print`).
- **Suppression des Créneaux Horaires Mockés :** Tous les tableaux horaires fictifs ont été retirés pour laisser place au document officiel authentique.
- **Gestion des Autres Sections (CP1, CP2, 1A, 2A DIB/DMS, 3A DMS) :**
  - Affichage d'un état **"Bientôt disponible / En attente de publication"** élégant avec icône animée de sablier et badge d'information.
  - Message explicatif précisant que les emplois du temps sont en cours d'actualisation par la scolarité.
  - Bouton de redirection rapide vers l'emploi du temps actif de la 3A DIB S5.

### 2. 🎨 Habillage Visuel & Photo Officielle ENSTP
- **Photo Officielle Haute Définition (`enstp-photo.webp`) :** Bannière d'accueil habillée avec la photographie de référence du portail et de l'architecture emblématique de l'école.
- **Voile Semi-Transparent (*Overlay*) Soigné :** Dégradé subtil combinant l'anthracite profond et des reflets d'orange ENSTP garantissant un contraste exceptionnel et une lisibilité parfaite des titres et boutons.
- **Identité Graphique Lumineuse :** Thème "Light Colors" inspiré du logo officiel (Orange vif `#F26522`, Blanc pur `#FFFFFF`, Gris très clair `#F8FAFC`, et touches sombres `#0F172A`).

### 3. 🌍 Système Trilingue Intégral (Français / Anglais / Arabe) & Support RTL
- **Double Sélecteur de Langue Interactif (`🇫🇷 FR` | `🇬🇧 EN` | `🇩🇿 AR`) :**
  - Présent dans l'en-tête supérieur (*Header*).
  - Présent dans la barre latérale (*Sidebar*) pour un accès instantané sur mobile et grand écran.
  - Sauvegarde automatique du choix linguistique dans le `localStorage`.
- **Prise en charge complète du mode RTL (*Right-To-Left*) pour la langue Arabe :**
  - Inversion naturelle et symétrique de la mise en page (Sidebar basculée à droite).
  - Typographie arabe dédiée via la police Google Font **Cairo**.
  - Réorientation contextuelle des marges, chevrons, flèches, badges et alignements de textes.
- **Traduction à 100% du Contenu :** Menus, présentations des 2 départements DIB/DMS, 12 spots du campus, 19 adresses de vie pratique avec noms et adresses localisés, lignes de transport ETUSA, club sportif SSC, contacts administratifs et formulaire interactif.

---

## 🎨 Charte Graphique & Typographie
- **Couleurs Principales :** 
  - 🟠 **Orange Officiel ENSTP :** `#F26522` / `#EA580C`
  - ⚪ **Blanc Pur :** `#FFFFFF`
  - 🔘 **Gris Clair Moderne :** `#F8FAFC` / `#F1F5F9`
  - ⚫ **Anthracite & Ardoise :** `#0F172A` / `#334155`
- **Typographies :**
  - *Outfit* : Titres principaux et chiffres clés.
  - *Plus Jakarta Sans* : Textes courants latins (FR / EN).
  - *Cairo* : Textes en langue arabe (AR / RTL).
- **Responsive Design :** Fluide et parfaitement adapté sur smartphone, tablette et écran large.
- **Mode Sombre / Clair :** Bascule instantanée jour/nuit mémorisée.

---

## 📂 Architecture des 7 Sections

1. **🏠 ACCUEIL & PRÉSENTATION ENSTP**
   - Bannière Hero avec photo officielle (`enstp-photo.webp`).
   - Présentation de la vocation nationale de l'ENSTP dans les méga-projets d'infrastructures.
   - Statistiques clés (+54 ans d'excellence, +12 000 ingénieurs, 12+ laboratoires).
   - Présentation approfondie des départements **DIB** (Infrastructures de Base) et **DMS** (Matériaux et Structures).
   - Cartes d'accès rapide (*Hub*).

2. **🗺️ CARTE DU CAMPUS & SPOTS CLÉS**
   - Intégration directe de la carte interactive : [Ouvrir la Carte Interactive](https://hostmyclaudehtml.com/p/E3VLDo-1sX).
   - Répertoire filtrable des 12 points d'intérêt majeurs (Amphis A, B, d'Honneur, Labos Géotechnique, Matériaux, Bâtiments DIB/DMS, Bibliothèque, Foyer SSC).

3. **🛒 VIE PRATIQUE (KOUBA / GARIDI)**
   - 19 adresses réelles géolocalisées avec distances à pied précises :
     - *Supérettes & Épiceries* (Supérette 1, 2, Magra, El Kbayli, El Benna 1, El Benna 2).
     - *Fast-Food & Restauration* (Almas Alsham, Spartacos, Kasr Tacos, Pizza On Est Là, Chicken Story, Sushi Terkmani, Tacozza, Fast-Foods 5, 6, 7, 8).
     - *Pharmacies & Boulangeries* (Pharmacie Chikhi, Boualem, Boulangerie La Baguette, Viennoiserie, Soummam).
     - *Favoris ⭐* : Sauvegarde locale dans le navigateur.
   - Boutons d'itinéraires Google Maps directs et copie d'adresse en 1 clic.

4. **🚌 TRANSPORTS ET DÉPLACEMENTS**
   - Réseau de bus **ETUSA** (Lignes 67, 82, 04 et navettes).
   - Connexions **Métro** (Haï El Badr, Les Fusillés) et stations de taxis de Garidi et Kouba.
   - Transport universitaire **ONOU (Cous)** avec arrêt officiel devant le portail.

5. **⚽ SPORT & CLUB SSC (SCHOOL SPORT CLUB)**
   - Présentation du club sportif officiel des futurs ingénieurs.
   - Disciplines (Football, Basketball, Volleyball, Échecs, Fitness, Randonnée).
   - Lien direct vers le compte officiel Instagram [@ssc.enstp](https://www.instagram.com/ssc.enstp?obrf=MTFtNm85eGoyNzlqOQ==).

6. **📅 EMPLOIS DU TEMPS**
   - Sélecteurs par cycle et promotion.
   - Affichage immédiat de l'emploi du temps officiel 3A DIB S5 via visionneuse PDF et boutons de téléchargement/consultation.
   - Fiche d'attente soignée pour les autres promotions avec bascule en 1 clic vers la 3A DIB.

7. **📞 SERVICES & CONTACTS UTILES**
   - Coordonnées directes (téléphone, email, bureaux, horaires d'accueil) de la Direction Générale, Scolarité Centrale, Départements DIB/DMS, Bibliothèque, Stages et Santé.
   - Formulaire interactif de contact et de signalement rapide.

---

## 🚀 Utilisation & Déploiement

Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur web moderne (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). Aucun serveur d'application complexe n'est requis.
