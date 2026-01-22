#!/bin/bash

# ════════════════════════════════════════
# Script de démarrage du portfolio
# ════════════════════════════════════════

echo "🚀 Démarrage du Portfolio..."
echo ""

# Vérifier que .env existe
if [ ! -f ".env" ]; then
    echo "⚠️  Le fichier .env n'existe pas!"
    echo "Création du fichier .env..."
    cat > .env << 'EOF'
# Configuration Email
EMAIL_USER=faresboussou@gmail.com
EMAIL_PASSWORD=your_app_password_here
PORT=3000
EOF
    echo "✅ Fichier .env créé"
    echo "📝 IMPORTANT: Mettez à jour EMAIL_PASSWORD avec votre App Password Gmail"
fi

# Vérifier que node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

echo ""
echo "════════════════════════════════════════"
echo "✅ Serveur démarrage sur http://localhost:3000"
echo "════════════════════════════════════════"
echo ""

npm start
