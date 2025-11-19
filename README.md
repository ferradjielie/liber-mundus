# Liber Mundus

**Liber Mundus** (livres du monde en latin) est une application web qui permet de découvrir les auteurs littéraires du monde entier, classés par pays. L’utilisateur peut naviguer entre les pays pour consulter la liste des auteurs associés, accéder à leurs biographies et visualiser leurs œuvres les plus emblématiques.

---

## Table des matières

* [Fonctionnalités](#fonctionnalités)
* [Technologies](#technologies)
* [Installation](#installation)
* [Utilisation](#utilisation)
* [A venir](#a-venir)

---

## Fonctionnalités

Actuellement implémentées :

* Affichage dynamique de la liste des pays et des auteurs
* Gestion des images et affichage des cards auteur avec nom et prénom
* Navigation vers une page de détail pour chaque auteur
* Structure backend en MVC avec routes, contrôleurs et modèles
* Gestion des erreurs et codes HTTP

---

## Technologies

* **Frontend :** React (Vite), React Router, CSS Modules
* **Backend :** Node.js, Express
* **Base de données :** MySQL

---

## Installation

1. Clone le dépôt :

```bash
git clone <URL_DU_REPO>
```

2. Installation du backend :

```bash
cd backend
npm install
```

3. Installation du frontend :

```bash
cd frontend
npm install
```

4. Lancer le backend :

```bash
npm run dev
```

5. Lancer le frontend :

```bash
npm run dev
```

---

## Utilisation

* Depuis la page d’accueil, naviguez vers la liste des pays
* Cliquez sur un pays pour voir ses auteurs
* Cliquez sur un auteur pour accéder à sa page détail

---

## À venir

* Ajout d’un système de livres favoris pour les utilisateurs
* Mise en place d’un système d’authentification via JWT
* Amélioration de la page détail d’un auteur (biographie et œuvres)

---

## Structure du projet

```
frontend/
 ├─ src/
 │   ├─ pages/
 │   │   ├─ Home/
 │   │   ├─ Countries/
 │   │   ├─ AuthorsList/
 │   │   └─ AuthorDetail/
 │   ├─ components/
 │   └─ assets/
backend/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 └─ config/
```

---

## Licence

MIT
