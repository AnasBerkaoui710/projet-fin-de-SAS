📚 Library Management System – SAS Final Project (ENAA)
🧩 Problématique

La bibliothèque municipale de Casablanca souhaitait moderniser son système de gestion manuel des livres et abonnés.
L’objectif était de créer une application console simple et fonctionnelle permettant aux bibliothécaires de gérer les livres, les abonnés, et les emprunts/retours sans interface graphique.

🚀 Objectif du projet

Développer une application console en JavaScript qui facilite la gestion quotidienne d’une bibliothèque :

Ajouter et consulter des livres

Gérer les abonnés

Enregistrer les emprunts et les retours

Afficher les livres disponibles et trier le catalogue

⚙️ Processus de développement
1. Analyse du besoin

Lecture du cahier des charges fourni (Brief Fin SAS).
Identification des principales fonctionnalités à implémenter :

Gestion des livres

Gestion des abonnés

Gestion des emprunts

2. Conception des structures de données

Trois tableaux principaux :

livres → contient les informations sur les livres

abonnes → stocke les abonnés

emprunts → conserve les emprunts actifs

3. Implémentation des fonctionnalités

Chaque partie a été développée en plusieurs étapes :

A. Gestion des livres

Ajouter un ou plusieurs livres

Trier par titre ou par année

Afficher les livres disponibles

Rechercher un livre par ISBN

B. Gestion des abonnés

Ajouter un nouvel abonné

Afficher la liste des abonnés

C. Gestion des emprunts

Enregistrer un emprunt (un abonné emprunte un livre disponible)

Enregistrer un retour (le livre redevient disponible)

Afficher les emprunts en cours

Toutes les fonctions ont été écrites sans utiliser les fonctions prédéfinies comme find, push, ou sort pour mieux comprendre la logique algorithmique.

4. Boucle de menu principale

L’application est contrôlée par un menu interactif dans la console qui redirige vers les différentes sections selon le choix de l’utilisateur.

🧠 Résultat final

L’application permet désormais de :

Gérer efficacement le stock de livres et les abonnés.

Suivre les emprunts en temps réel.

Offrir une expérience claire et fluide pour les bibliothécaires.

Exécution du programme :

node gestion_biblio.js

🛠️ Outils utilisés

Langage : JavaScript

Environnement : Node.js (console)

Éditeur : Visual Studio Code

Module utilisé : prompt-sync pour la saisie utilisateur

🏫 Informations du projet

Projet : Brief Fin SAS – Gestion d’une Bibliothèque
Établissement : ENAA (École Numérique Ahmed Al Hansali)
Travail : Individuel
Durée : 01/09/2025 → 03/09/2025
Présenté par : Anas Berkaoui
