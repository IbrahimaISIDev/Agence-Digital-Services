# Agence-Mult-Services

## 📌 Introduction


**Agence Multi-Services** est une application web complète et robuste développée avec **Laravel** pour le backend, permettant une gestion fluide et efficace des services proposés par une agence digitale. Elle offre une multitude de fonctionnalités avancées, telles que la gestion des clients, des transactions financières, des notifications en temps réel et bien plus encore, pour assurer une expérience utilisateur optimale. L'architecture de l'application repose sur une séparation claire des responsabilités, ce qui facilite la maintenance et l'évolutivité du système. Le frontend est construit avec un framework moderne comme **React.js**, permettant une interface utilisateur dynamique, réactive et intuitive. Cette approche garantit une expérience fluide et performante pour les utilisateurs, tout en respectant les meilleures pratiques en matière de développement web et de scalabilité. L'application est conçue pour être facilement extensible et adaptable, offrant ainsi une solution pérenne pour la gestion des services multiples d'une agence digitale.


---
## 🚀 Technologies utilisées

- **Backend** : Laravel (PHP)
- **Base de données** : MySQL / PostgreSQL
- **Frontend** : React
- **Authentification** : Laravel Sanctum / Passport
- **Stockage** : AWS S3 / Local
- **Gestion des files d'attente** : Redis / Horizon
- **Tests** : PHPUnit / Pest
  
## 📂 Architecture du Projet

### 📁 **Backend (Laravel)**

#### 📂 `app/`
- **Console/** : Contient les commandes artisan personnalisées.
- **Exceptions/** : Gestion des erreurs personnalisées.
- **Http/** :
  - **Controllers/** : Contient les contrôleurs responsables du traitement des requêtes HTTP.
    - `AuthController.php` : Gestion de l'authentification.
    - `ClientController.php` : Gestion des clients.
    - `TransactionController.php` : Gestion des transactions.
  - **Middleware/** : Vérification des permissions et rôles.
    - `Authenticate.php` : Authentification des utilisateurs.
    - `CheckRole.php` : Vérification des rôles utilisateurs.
  - **Requests/** : Validation des données entrantes.
    - `StoreClientRequest.php` : Validation de la création d'un client.
    - `UpdateClientRequest.php` : Validation de la mise à jour d'un client.
- **Models/** :
  - `Client.php` : Modèle représentant un client.
  - `Transaction.php` : Modèle représentant une transaction.
- **Services/** : Contient la logique métier.
  - `ClientService.php` : Gère les actions liées aux clients.
  - `TransactionService.php` : Gère les transactions.
- **Repositories/** : Accès aux données via des classes spécifiques.
  - `ClientRepository.php` : Gestion des clients en base de données.
  - `TransactionRepository.php` : Gestion des transactions en base de données.
- **Interfaces/** : Définit des contrats pour les repositories.
  - `IClientRepository.php` : Interface pour la gestion des clients.
  - `ITransactionRepository.php` : Interface pour la gestion des transactions.
- **Events/** :
  - `ClientCreated.php` : Événement déclenché lorsqu'un client est créé.
  - `TransactionProcessed.php` : Événement déclenché lorsqu'une transaction est effectuée.
- **Listeners/** :
  - `SendClientWelcomeEmail.php` : Envoie un e-mail de bienvenue après la création d’un client.
  - `LogTransaction.php` : Enregistre les transactions dans un log.
- **Notifications/** :
  - `ClientRegistered.php` : Notification d'inscription d'un client.
  - `TransactionAlert.php` : Notification lors d'une transaction.
- **Providers/** :
  - `AppServiceProvider.php` : Configuration des services globaux.
  - `EventServiceProvider.php` : Enregistrement des événements et listeners.
  - `AuthServiceProvider.php` : Gestion des permissions et rôles.

#### 📂 `routes/`
- `api.php` : Routes pour l'API RESTful.
- `web.php` : Routes pour les pages web.

#### 📂 `database/`
- `factories/` : Génération de données factices.
- `migrations/` : Historique des modifications de la base de données.
- `seeders/` : Données initiales pour la base de données.

#### 📂 `resources/`
- `lang/` : Fichiers de traduction.
- `views/` : Templates Blade pour le rendu HTML.

#### 📂 `tests/`
- `Feature/ClientTest.php` : Tests fonctionnels des clients.
- `Feature/TransactionTest.php` : Tests fonctionnels des transactions.

---

## 📌 Installation et Configuration

### Cloner le projet
```bash
git clone https://github.com/IbrahimaISIDev/Agence-Digital-Services.git
cd Agence-Digital-Services

### 1️⃣ **Installation du Backend**
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### 2️⃣ **Installation du Frontend**
```bash
npm install
npm run dev
```

---

## 📌 Fonctionnalités
- **Authentification et gestion des rôles** (Admin, Utilisateur, etc.)
- **Gestion des clients et transactions**
- **Envoi de notifications (email, SMS, etc.)**
- **API RESTful pour l’intégration avec le frontend**
- **Événements et listeners pour automatiser certaines actions**
- **Sécurité avancée avec middleware et permissions**

---

## 📌 Commandes Artisan Utiles

### 📜 ** Exemples de Génération des fichiers**
```bash
php artisan make:model Client -mfs
php artisan make:controller ClientController --api
php artisan make:middleware CheckRole
php artisan make:request StoreClientRequest
php artisan make:event ClientCreated
php artisan make:listener SendClientWelcomeEmail
php artisan make:notification ClientRegistered
```

### 🛠 **Exécution des tests**
```bash
php artisan test
```

### 🔥 **Lancer le serveur Laravel**
```bash
php artisan serve
```

### 🚀 **Lancer le serveur Frontend**
```bash
npm run dev
```

---

## 📌 Contribution
Toute contribution est la bienvenue ! Merci de suivre les bonnes pratiques de développement et d’ouvrir une pull request.

---

## 📌 Licence
Ce projet est sous licence **MIT**.

## 📌 Conclusion

Cette architecture permet de mieux structurer le projet, d'assurer une séparation claire des responsabilités, et de faciliter la scalabilité. 🚀

## 📩 Contact

- **Auteur** : IbrahimaISIDev
- **Email** : sorydiallo371@gmail.com
- **GitHub** : [IbrahimaISIDev](https://github.com/IbrahimaISIDev)