#!/usr/bin/env bash

# =====================================================
# QUICK START - Guide de démarrage rapide
# =====================================================
# Ce script aide à démarrer rapidement avec le portfolio

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Titre
echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🚀 PORTFOLIO PROFESSIONNEL - GUIDE DE DÉMARRAGE        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Menu principal
show_menu() {
    echo ""
    echo -e "${YELLOW}Que voulez-vous faire ?${NC}"
    echo ""
    echo "  1) Démarrer un serveur local (Python)"
    echo "  2) Démarrer un serveur local (Node.js)"
    echo "  3) Voir les fichiers du projet"
    echo "  4) Ouvrir dans l'explorateur"
    echo "  5) Initialiser Git"
    echo "  6) Voir les instructions de personnalisation"
    echo "  7) Afficher l'aide complète"
    echo "  0) Quitter"
    echo ""
    read -p "Votre choix (0-7): " choice
}

# Option 1: Serveur Python
start_python_server() {
    echo -e "${GREEN}▶ Démarrage du serveur Python...${NC}"
    echo "   Accédez au portfolio sur: http://localhost:8000"
    echo ""
    python3 -m http.server 8000 2>/dev/null || python -m SimpleHTTPServer 8000
}

# Option 2: Serveur Node.js
start_node_server() {
    echo -e "${GREEN}▶ Vérification de Node.js...${NC}"
    if command -v node &> /dev/null; then
        if ! command -v http-server &> /dev/null; then
            echo "   Installation de http-server..."
            npm install -g http-server
        fi
        echo -e "${GREEN}▶ Démarrage du serveur Node.js...${NC}"
        echo "   Accédez au portfolio sur: http://localhost:8080"
        echo ""
        http-server
    else
        echo -e "${RED}✗ Node.js non trouvé. Installez Node.js d'abord.${NC}"
    fi
}

# Option 3: Voir les fichiers
show_structure() {
    echo -e "${GREEN}▶ Structure du projet :${NC}"
    echo ""
    tree -L 2 -I 'node_modules' 2>/dev/null || find . -maxdepth 2 -type f | grep -v node_modules | sort
}

# Option 4: Ouvrir dans l'explorateur
open_explorer() {
    echo -e "${GREEN}▶ Ouverture de l'explorateur...${NC}"
    case "$OSTYPE" in
        darwin*) open . ;;
        linux*) xdg-open . 2>/dev/null || echo "Utilisez votre explorateur de fichiers" ;;
        msys*) start . ;;
        *) echo "Système non reconnu" ;;
    esac
}

# Option 5: Initialiser Git
init_git() {
    echo -e "${GREEN}▶ Initialisation de Git...${NC}"
    if [ -d ".git" ]; then
        echo -e "${YELLOW}  Git est déjà initialisé.${NC}"
    else
        git init
        git add .
        git commit -m "Initial commit - Portfolio professionnel"
        echo -e "${GREEN}✓ Git initialisé avec succès${NC}"
        echo ""
        echo "  Pour pousser sur GitHub :"
        echo "    git remote add origin https://github.com/votre-username/portfolio.git"
        echo "    git branch -M main"
        echo "    git push -u origin main"
    fi
}

# Option 6: Instructions de personnalisation
show_customization() {
    echo -e "${GREEN}▶ Instructions de personnalisation :${NC}"
    echo ""
    echo "1. FICHIER HTML (index.html)"
    echo "   ├─ Remplacez [Prénom] [Nom] par votre nom"
    echo "   ├─ Changez la photo profil"
    echo "   ├─ Mettez à jour l'email et téléphone"
    echo "   ├─ Personnalisez les sections (À propos, Parcours, Expériences)"
    echo "   └─ Ajoutez vos vrais projets"
    echo ""
    echo "2. FICHIER CSS (css/styles.css)"
    echo "   ├─ Modifiez les couleurs (variables :root)"
    echo "   ├─ Changez les polices Google si désiré"
    echo "   └─ Ajustez les animations/transitions"
    echo ""
    echo "3. FICHIER JAVASCRIPT (js/main.js)"
    echo "   ├─ Configurez le formulaire de contact"
    echo "   ├─ Ajoutez des réseaux sociaux"
    echo "   └─ Activez le dark mode si désiré"
    echo ""
    echo "4. ASSETS (assets/)"
    echo "   ├─ Mettez votre photo dans assets/images/"
    echo "   ├─ Ajoutez les captures d'écran de projets"
    echo "   └─ Ajoutez les logos des entreprises"
    echo ""
    echo "5. README.md"
    echo "   └─ Personnalisez selon vos besoins"
    echo ""
}

# Option 7: Aide complète
show_help() {
    echo -e "${GREEN}▶ Aide complète :${NC}"
    echo ""
    echo "FICHIERS IMPORTANTS :"
    echo "  index.html              → Contient toutes les sections du portfolio"
    echo "  css/styles.css          → Tous les styles et animations"
    echo "  js/main.js              → Toute l'interactivité"
    echo "  README.md               → Documentation complète"
    echo "  config.json             → Configuration (pour export PDF, etc)"
    echo "  GUIDE.css               → Guide de personnalisation"
    echo ""
    echo "DÉMARRER RAPIDEMENT :"
    echo "  1. Lancez un serveur local (option 1 ou 2)"
    echo "  2. Ouvrez http://localhost:8000 (ou 8080)"
    echo "  3. Ouvrez index.html dans votre éditeur"
    echo "  4. Personnalisez le contenu"
    echo "  5. Rechargez la page pour voir les changements"
    echo ""
    echo "PERSONNALISATION :"
    echo "  • Lisez le GUIDE.css pour comprendre la structure"
    echo "  • Consultez le README.md pour les explications détaillées"
    echo "  • Modifiez config.json pour les données centralisées"
    echo ""
    echo "DÉPLOIEMENT :"
    echo "  • GitHub Pages : Gratuit, lié à GitHub"
    echo "  • Netlify : Gratuit, plus de fonctionnalités"
    echo "  • Vercel : Gratuit, très rapide"
    echo ""
    echo "OUTILS RECOMMANDÉS :"
    echo "  • VS Code pour l'édition"
    echo "  • TinyPNG pour compresser les images"
    echo "  • DevTools (F12) pour tester le responsive"
    echo ""
}

# Boucle principale
while true; do
    show_menu
    
    case $choice in
        1) start_python_server ;;
        2) start_node_server ;;
        3) show_structure ;;
        4) open_explorer ;;
        5) init_git ;;
        6) show_customization ;;
        7) show_help ;;
        0) 
            echo -e "${GREEN}✓ Merci d'avoir utilisé ce portfolio !${NC}"
            echo -e "${BLUE}Bonne chance dans votre carrière de développeur ! 🚀${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}✗ Choix invalide. Veuillez sélectionner 0-7.${NC}"
            ;;
    esac
done
