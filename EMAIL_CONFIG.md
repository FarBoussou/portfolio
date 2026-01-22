# 📧 Configuration du système d'email

## Nouvelle Architecture

Le formulaire de contact utilise maintenant un **serveur Node.js** au lieu d'EmailJS. C'est plus fiable et plus flexible.

## Configuration Gmail (REQUIS)

### Étape 1: Activer les App Passwords sur Gmail

1. Allez sur: https://myaccount.google.com/apppasswords
2. Sélectionnez:
   - App: `Mail`
   - Device: `Windows Computer` (ou autre)
3. Cliquez sur "Generate"
4. Copiez le mot de passe généré (16 caractères)

### Étape 2: Ajouter le mot de passe dans `.env`

Ouvrez le fichier `.env` à la racine du projet et remplacez:

```
EMAIL_USER=faresboussou@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Par votre mot de passe généré (sans les espaces).

### Étape 3: Lancer le serveur

```bash
npm start
```

Le serveur se lancera sur http://localhost:3000

## Vérification

1. Ouvrez http://localhost:3000
2. Allez à la section "Contact"
3. Remplissez le formulaire et envoyez
4. Vérifiez votre email pour la confirmation

## Fichiers modifiés

- `server.js` - Serveur Node.js (NOUVEAU)
- `js/main.js` - Formulaire utilise maintenant l'API
- `.env` - Configuration Gmail (À remplir)
- `package.json` - Dépendances Node.js

## Dépannage

Si ça ne fonctionne pas:

1. Vérifiez que `EMAIL_PASSWORD` est correctement rempli dans `.env`
2. Ouvrez la console du navigateur (F12) et regardez les messages d'erreur
3. Vérifiez les logs du serveur
4. Assurez-vous d'avoir généré un "App Password" et pas utilisé votre mot de passe Gmail

## Sécurité

⚠️ **IMPORTANT**: Avant de déployer en production:
- Ne commitez PAS le fichier `.env` sur GitHub
- Ajoutez `.env` au fichier `.gitignore`
- Les App Passwords Gmail sont sûrs à utiliser
