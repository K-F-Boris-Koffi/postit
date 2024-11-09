
*****************
* Post-it  3.0 *
*****************

Découvrez Post-it 3.0, l'application Web ultime pour créer et gérer vos notes directement depuis votre navigateur. Grâce à son design zen et intuitif, ajouter, modifier et supprimer des notes devient un véritable plaisir. Profitez d'une interface simple et élégante pour organiser vos idées et vos tâches en toute simplicité.

### 1. Fonctionnalités

- Afficher la toute les notes existant sur une vue
- Poster une nouvelle Note
- Afficher les détails d'une note
- Modifier une note
- Supprimer une note

### 2. Technologies Utilisées

- JavaScript
- Vue.js 3 à travers Vue CLI
- HTML
- CSS

### 3. Prérequis

- Node.js
- npm

### 4. Installation

4.1 Clonez le dépôt :

   -bash
   git clone git@github.com:EpitechCodingAcademyPromo2024/C-DEV-121-ABJ-1-1-postit-franck.koffi.git

4.2  Accédez au répertoire du projet :

   -bash
   cd post-it-app

4.3 Installez les dépendances :

   -bash
   npm install
   npm i @vue/cli-'service'


### 5-Utilisation

5.1 Démarrez le serveur de développement :

   -bash
   npm run serve
5.2 Ouvrez votre navigateur et allez à l'adresse :

   http://localhost:** ou Ctrl + Click sur  http://localhost:** Fourni dans le terminal

### 6. Structure du Projet

post-it-app/
|_ public/
|__|__index.html
|__|__package_post-it.svg
|__ src/
|	|__ assets/
|	|	|__ check_circle.svg
|	|	|__ delete.svg
|	|__ |__ icon_add.svg
|	|	|__ package_post-it.svg
|	|	|__ pencil-svgrepo-com.svg
|	|__ |__ post-it_bleu.svg
|	|__ router/
|	|	|__ index.js
|	|__ store/
|	|	|__ index.js
|	|__ view/
|	|__ |__|components/
|	|	|__|__ HomeView.vue
|	|	|__|__ PostitAdd.vue
|	|	|__|__ PostitEdit.vue
|	|	|__|__ PostItView.vue
|	|__ App.vue
|	|__ main.js
|	|__ style.css
|__	test/unit/
|	|	|__ example.spec.js
|__ .gitignore
|__ babel.config.js
|__ package-lock.json
|__ package.json
|__ README.md
|__ vite.config.js

### 7.  API

http://62.72.5.95:1999/notes

### 8. Routes

-GET /notes : Récupérer tous les post-it
-GET /notes/:id : Récupérer un post-it par ID
-POST /notes : Ajouter un nouveau post-it
-PUT /notes/:id : Mettre à jour un post-it par ID
-DELETE /notes/:id : Supprimer un post-it par ID

### 9. Améliorations Futures

- Amélioration du design
-Ajouter un système de drag un drop
-Ajouter des fonctionalinées de recheres et de tries

### 10. Contributions

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.


Auteurs

Franck Boris Koffi (https://github.com/franck-koffi-eu)