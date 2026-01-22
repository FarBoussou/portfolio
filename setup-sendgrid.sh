#!/bin/bash

# ════════════════════════════════════════════════════════════════
# Installation rapide avec SendGrid (RECOMMANDÉ)
# ════════════════════════════════════════════════════════════════

echo "🚀 Installation rapide du formulaire de contact"
echo ""
echo "Nous allons utiliser SendGrid (100 emails gratuits/jour)"
echo ""

# Étape 1
echo "📝 ÉTAPE 1: Créer un compte SendGrid"
echo "   1. Allez sur: https://sendgrid.com/free"
echo "   2. Créez un compte gratuit"
echo "   3. Vérifiez votre email"
echo ""
read -p "Appuyez sur ENTRÉE quand c'est fait..."

# Étape 2
echo ""
echo "🔑 ÉTAPE 2: Générer une clé API SendGrid"
echo "   1. Connectez-vous à SendGrid"
echo "   2. Allez dans Settings → API Keys"
echo "   3. Cliquez sur 'Create API Key'"
echo "   4. Donnez-lui un nom (ex: 'Portfolio')"
echo "   5. Copiez la clé (elle commence par SG.)"
echo ""

read -p "Entrez votre clé API SendGrid (SG.xxxx): " SENDGRID_KEY

# Étape 3
echo ""
echo "📧 ÉTAPE 3: Entrez votre email"
read -p "Entrez votre email (ex: nom@gmail.com): " EMAIL

# Créer le fichier .env
cat > .env << EOF
# Configuration SendGrid
EMAIL_USER=$EMAIL
SENDGRID_API_KEY=$SENDGRID_KEY
PORT=3000
EOF

echo ""
echo "✅ Fichier .env créé avec succès!"
echo ""
echo "Démarrage du serveur..."
npm start
