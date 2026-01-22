#!/usr/bin/env bash

# =====================================================
# LANCER LE PORTFOLIO - Script de démarrage
# =====================================================
# Ce script lance le portfolio localement

clear

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🚀 DÉMARRAGE DU PORTFOLIO PROFESSIONNEL               ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier Python
if command -v python3 &> /dev/null; then
    echo "✓ Python 3 trouvé"
    echo ""
    echo "🌐 Démarrage du serveur local..."
    echo "   Accédez au portfolio sur: http://localhost:8000"
    echo ""
    echo "   Appuyez sur Ctrl+C pour arrêter le serveur"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✓ Python trouvé"
    echo ""
    echo "🌐 Démarrage du serveur local..."
    echo "   Accédez au portfolio sur: http://localhost:8000"
    echo ""
    echo "   Appuyez sur Ctrl+C pour arrêter le serveur"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python n'est pas installé"
    echo ""
    echo "Alternatives :"
    echo "  1. Installez Python : https://python.org"
    echo "  2. Ouvrez directement index.html dans votre navigateur"
    echo "  3. Utilisez Node.js : npm install -g http-server && http-server"
fi
