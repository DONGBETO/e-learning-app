#  React e-Learning Platform

Une plateforme d'apprentissage construite avec **React + Tailwind CSS**, permettant :
 Affichage des cours avec recherche  
 Page de détail avec **lecteur vidéo** et **doublage audio**  
 Authentification simple avec **localStorage**  
 Navigation sécurisée (protection des routes)  

---

## Fonctionnalités

- Page d’accueil avec liste des cours (titre, auteur, image)
- Détail d’un cours avec lecteur vidéo
- **Doublage audio** (changer la langue avec un bouton)
- Sous-titres simulés + barre de progression
- Authentification (login / register) avec redirection
- Navbar avec déconnexion

---

##  Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **React Router DOM**

---

##  Structure du projet

e-Learning-app/my-project/
├── public/
│   ├── data/courses.json
│   ├── images/
│   │   ├── react.jpg
│   │   ├── node.jpg
│   │   └── ...
│   ├── videos/
│   │   └── react.mp4
│   ├── audios/
│       └── audio.mp3
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CourseCard.jsx
│   │   └── CoursePlayer.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── CourseDetail.jsx
│   │   └── ...
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── utils/auth.js
│   └── App.jsx
├── package.json
└── README.md


---

##  Installation & Exécution

```bash
# 1. Cloner le projet
git clone https://github.com/DONGBETO/e-learning-app.git

# 2. Aller dans le dossier
cd e-learning-app puis cd my-project

# 3. Installer les dépendances
npm install

# 4. Lancer le projet
npm run dev

