# GUIDE DE DÉPLOIEMENT

Ce document explique comment déployer votre portfolio en ligne.

## 📋 Table des matières

- [Avant de déployer](#avant-de-déployer)
- [Option 1 : GitHub Pages](#option-1--github-pages-gratuit)
- [Option 2 : Netlify](#option-2--netlify-gratuit)
- [Option 3 : Vercel](#option-3--vercel-gratuit)
- [Option 4 : Serveur personnalisé](#option-4--serveur-personnalisé)
- [Optimisations avant déploiement](#optimisations-avant-déploiement)
- [Domaine personnalisé](#domaine-personnalisé)
- [Certificat SSL/HTTPS](#certificat-sslhttps)
- [FAQ](#faq)

## ✅ Avant de déployer

Avant de mettre votre portfolio en ligne, vérifiez :

```
□ Toutes les infos personnelles sont correctes
□ Les images sont optimisées (< 500KB chacune)
□ Les liens sont tous valides
□ Le formulaire de contact fonctionne
□ Pas d'erreurs dans la console (F12 > Console)
□ Responsive design testé sur mobile
□ Tous les navigateurs testés
□ Copyright mis à jour
□ Pas de fichiers sensibles (passwords, etc)
```

---

## Option 1 : GitHub Pages (Gratuit ⭐)

### Prérequis
- Compte GitHub
- Git installé sur votre ordinateur

### Étapes

1. **Créez un repository GitHub**
   - Allez sur [github.com](https://github.com)
   - Cliquez sur "New repository"
   - Nommez-le `portfolio`
   - Cochez "Add a README file"
   - Cliquez "Create repository"

2. **Clonez le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio.git
   cd portfolio
   ```

3. **Copiez vos fichiers**
   ```bash
   cp -r /chemin/vers/votre/portfolio/* .
   ```

4. **Commitez et poussez**
   ```bash
   git add .
   git commit -m "Initial commit - Portfolio professionnel"
   git push origin main
   ```

5. **Activez GitHub Pages**
   - Allez dans Settings du repository
   - Cherchez "Pages" dans le menu de gauche
   - Sous "Build and deployment"
   - Sélectionnez "Deploy from a branch"
   - Sélectionnez "main" et "/" (root)
   - Cliquez "Save"

6. **Voilà !**
   - Votre portfolio est accessible à : `https://votre-username.github.io/portfolio`
   - Les mises à jour : `git push` suffit !

### Avantages
- ✅ Gratuit à 100%
- ✅ Intégré à GitHub
- ✅ Redéploiement automatique
- ✅ Certificat SSL/HTTPS inclus
- ✅ Pas besoin de connaissances DevOps

### Inconvénients
- ❌ Domaine GitHub Pages (option : achetez un domaine)
- ❌ Limité aux sites statiques

---

## Option 2 : Netlify (Gratuit + Pro)

### Prérequis
- Compte GitHub (ou GitLab/Bitbucket)
- Votre code sur GitHub

### Étapes

1. **Créez un compte Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez "Sign up"
   - Connectez-vous avec GitHub

2. **Autorisez Netlify**
   - GitHub vous demande une autorisation
   - Cliquez "Authorize netlify"

3. **Sélectionnez votre repository**
   - Cliquez "New site from Git"
   - Sélectionnez "GitHub"
   - Cherchez "portfolio"
   - Cliquez dessus

4. **Configuration**
   - Build command : (laissez vide, c'est un site statique)
   - Publish directory : . (current directory)
   - Cliquez "Deploy site"

5. **Voilà !**
   - Votre portfolio est accessible à une URL netlify.app
   - Les mises à jour automatiques : `git push`

### Avantages
- ✅ Encore plus facile que GitHub Pages
- ✅ Meilleure interface
- ✅ Domaine gratuit (vous pouvez ajouter le vôtre)
- ✅ Déploiement en 1 clic
- ✅ Support formulaires intégré

### Inconvénients
- ❌ Option payante pour certaines fonctionnalités
- ❌ Moins connu que GitHub

---

## Option 3 : Vercel (Gratuit + Pro)

### Prérequis
- Compte GitHub
- Votre code sur GitHub

### Étapes

1. **Créez un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez "Sign Up"
   - Connectez-vous avec GitHub

2. **Autorisez Vercel**
   - GitHub vous demande une autorisation
   - Cliquez "Authorize Vercel"

3. **Importez votre projet**
   - Cliquez "Add New..."
   - Sélectionnez "Project"
   - Cherchez "portfolio"
   - Cliquez "Import"

4. **Configuration**
   - Framework : (laissez "Other")
   - Root Directory : . (current)
   - Cliquez "Deploy"

5. **Voilà !**
   - Votre portfolio est accessible immédiatement
   - Les mises à jour automatiques : `git push`

### Avantages
- ✅ Extrêmement rapide
- ✅ Temps de déploiement quasi instantané
- ✅ Interface très belle
- ✅ Support du domaine personnalisé gratuit

### Inconvénients
- ❌ Moins d'options de customisation
- ❌ Communauté plus petite

---

## Option 4 : Serveur personnalisé

### Avec OVH, Ionos, SiteGround, etc

1. **Louer un hosting**
   - Achetez un plan d'hébergement (10-15€/an)
   - Vous recevez les identifiants FTP

2. **Connectez-vous en FTP**
   ```bash
   ftp votre-domain.fr
   # Entrez vos identifiants
   ```

3. **Téléchargez les fichiers**
   - Naviguez vers le dossier `public_html` ou `www`
   - Déplacez tous vos fichiers HTML/CSS/JS

4. **Vérifiez**
   - Ouvrez votre domaine dans le navigateur
   - Tout doit fonctionner !

### Alternative : Avec SSH/SFTP
```bash
# Plus sécurisé que FTP
sftp -r . utilisateur@votre-domain.fr:/public_html/
```

### Avantages
- ✅ Contrôle total
- ✅ Domaine personnel immédiatement
- ✅ Flexibilité maximale

### Inconvénients
- ❌ Coût (10-20€/an minimum)
- ❌ Gestion manuelle des updates
- ❌ Besoin de connaissances serveur

---

## Optimisations avant déploiement

### Images
```bash
# Compressez les images avec TinyPNG, ImageOptim, etc
# Avant : 5MB d'images
# Après : 500KB d'images
# → Votre site charge 10x plus vite !
```

### CSS et JavaScript
```bash
# Minifiez en production
# Avant : styles.css (50KB)
# Après : styles.min.css (15KB)

# Utilisez des outils :
# - CSSNano pour CSS
# - Terser pour JavaScript
# - Webpack/Parcel pour bundler
```

### Cache navigateur
```html
<!-- Dans .htaccess (si serveur Apache) -->
<FilesMatch "\\.(jpg|jpeg|png|gif|ico|css|js)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### SEO Basics
```html
<!-- Dans <head> -->
<meta name="description" content="Mon portfolio professionnel...">
<meta name="keywords" content="développeur, web, portfolio">
<meta name="author" content="Votre Nom">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="https://votre-domain.fr">
```

---

## Domaine personnalisé

### Acheter un domaine
- [Namecheap.com](https://namecheap.com)
- [Gandi.net](https://gandi.net)
- [OVH.fr](https://ovh.fr)
- [Google Domains](https://domains.google.com)

**Coût :** 5-15€/an selon l'extension

### Lier le domaine à GitHub Pages
1. Achetez votre domaine
2. Allez dans les paramètres DNS
3. Ajoutez un record CNAME :
   ```
   Nom : www
   Valeur : votre-username.github.io
   ```
4. Allez dans Settings → Pages → Custom domain
5. Entrez votre domaine
6. Attendez le déploiement

### Lier le domaine à Netlify
1. Dans Netlify → Settings → Domain management
2. Cliquez "Add domain"
3. Entrez votre domaine
4. Allez dans votre registrar DNS
5. Changez les nameservers vers ceux de Netlify

---

## Certificat SSL/HTTPS

### GitHub Pages
- ✅ SSL inclus automatiquement

### Netlify
- ✅ SSL inclus automatiquement

### Vercel
- ✅ SSL inclus automatiquement

### Serveur personnalisé
- Utilisez Let's Encrypt (gratuit)
  ```bash
  # Avec Certbot
  sudo certbot certonly -d votre-domain.fr
  ```

---

## FAQ

### Q: Quel service choisir ?
**R:**
- **Débutant** : Netlify (plus facile)
- **Développeur GitHub** : GitHub Pages (intégré)
- **Performance max** : Vercel (le plus rapide)
- **Contrôle total** : Serveur personnel

### Q: Mon site n'apparaît pas après 1h
**R:** Attendez 24h maximum pour la propagation DNS. Videz le cache : `Ctrl+Shift+R`

### Q: Comment mettre à jour mon portfolio ?
**R:** 
```bash
git add .
git commit -m "Mise à jour portfolio"
git push
# Redéploiement automatique en 1-2 minutes
```

### Q: Puis-je utiliser plusieurs services ?
**R:** Oui ! Déployez sur Netlify ET Vercel ET GitHub Pages simultanément. C'est un site statique, c'est possible.

### Q: Comment ajouter un formulaire de contact vrai ?
**R:** Utilisez Formspree :
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Q: Mon site est lent
**R:** 
1. Compressez vos images (> 90% du poids)
2. Minifiez CSS/JS
3. Activez le cache navigateur
4. Utilisez un CDN
5. Vérifiez avec PageSpeed Insights

### Q: Comment masquer un fichier du serveur ?
**R:** Utilisez `.gitignore`
```
# Ignorer les fichiers sensibles
passwords.txt
.env
secrets/
```

---

## 🎉 Félicitations !

Votre portfolio est en ligne ! Maintenant :

1. ✅ Partagez le lien sur LinkedIn
2. ✅ Mettez-le dans votre email
3. ✅ Ajoutez-le à vos candidatures
4. ✅ Partagez sur les réseaux sociaux
5. ✅ Mettez-le à jour régulièrement

**Bonne chance dans votre carrière de développeur ! 🚀**

---

**Besoin d'aide ?**
- Docs GitHub Pages : https://pages.github.com/
- Docs Netlify : https://docs.netlify.com/
- Docs Vercel : https://vercel.com/docs
- Stack Overflow : https://stackoverflow.com/

**Dernière mise à jour :** Janvier 2024
