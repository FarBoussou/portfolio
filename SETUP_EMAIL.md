# 🚀 Guide Rapide - Configuration Email

## Problème

L'erreur "Les mots de passe d'applications ne sont pas disponibles" signifie que **tu n'as pas activé l'authentification à 2 facteurs (2FA)** sur Gmail.

## 2 Solutions Faciles

### ✅ Solution 1: SendGrid (RECOMMANDÉ - 5 minutes)

**Avantages**: Gratuit, 100 emails/jour, pas besoin de 2FA

1. **Créer un compte SendGrid**
   - Allez sur: https://sendgrid.com/free
   - Cliquez "Sign Up"
   - Remplissez le formulaire
   - Vérifiez votre email

2. **Générer une clé API**
   - Connectez-vous à SendGrid
   - Allez dans **Settings → API Keys**
   - Cliquez **"Create API Key"**
   - Copiez la clé (commence par `SG.`)

3. **Ajouter à `.env`**
   ```
   EMAIL_USER=ton_email@gmail.com
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
   PORT=3000
   ```

4. **Démarrer**
   ```bash
   npm start
   ```

✅ **FAIT!** Ton formulaire fonctionne!

---

### 🔐 Solution 2: Gmail "Accès moins sécurisé" (15 minutes)

**Avantages**: Aucun compte externe nécessaire

⚠️ **À utiliser UNIQUEMENT pour tester** (moins sécurisé)

1. **Activer "Accès moins sécurisé"**
   - Allez sur: https://myaccount.google.com/security
   - Cherchez "Accès moins sécurisé des applications"
   - Activez-le (switch bleu)

2. **Ajouter à `.env`**
   ```
   EMAIL_USER=ton_email@gmail.com
   EMAIL_PASSWORD=ton_mot_de_passe_gmail
   PORT=3000
   ```

3. **Démarrer**
   ```bash
   npm start
   ```

✅ **FAIT!** Ça devrait marcher!

---

## 🎯 Quelle solution choisir?

| | SendGrid | Gmail "Accès moins sûr" |
|---|----------|----------------------|
| **Rapidité** | 5 min ✅ | 15 min ✅ |
| **Sécurité** | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Gratuit** | Oui (100/jour) | Oui |
| **Production** | Recommandé | Non |
| **Test rapide** | Parfait | Parfait |

---

## 📋 Fichiers à modifier

**Fichier: `.env`** (à la racine du projet)

```
# Option 1: SendGrid
EMAIL_USER=ton_email@gmail.com
SENDGRID_API_KEY=SG.xxxxx

# Option 2: Gmail
EMAIL_USER=ton_email@gmail.com
EMAIL_PASSWORD=ton_mot_de_passe

PORT=3000
```

---

## 🚀 Démarrer

```bash
# 1. Modifier .env avec tes paramètres
nano .env

# 2. Lancer le serveur
npm start

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

---

## ✅ Tester

1. Ouvre http://localhost:3000
2. Va à la section "Contact"
3. Remplit le formulaire
4. Clique "Envoyer"
5. Regarde ta boîte email 📧

---

## ❓ Ça ne marche pas?

1. **Ouvre la console** (F12 dans le navigateur)
2. **Envoie le formulaire**
3. **Regarde les messages d'erreur**
4. **Copie l'erreur** et cherche une solution

**Erreurs courantes:**

- `Invalid credentials` → Vérifie EMAIL_USER/EMAIL_PASSWORD
- `Connection refused` → Le serveur n'est pas lancé
- `undefined` → `.env` non rempli

---

**Besoin d'aide avancée?** Voir [EMAIL_SOLUTIONS.md](EMAIL_SOLUTIONS.md)
