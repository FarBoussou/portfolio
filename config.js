// ═══════════════════════════════════════════════════════════
// CONFIGURATION EMAILJS - À REMPLIR AVEC VOS CLÉS
// ═══════════════════════════════════════════════════════════

/*
GUIDE COMPLET EMAILJS:

ÉTAPE 1: Aller sur https://www.emailjs.com/
ÉTAPE 2: Créer un compte (gratuit)
ÉTAPE 3: Dans le dashboard:
   - Aller à "Email Services" → Ajouter service Gmail
   - Autorisez l'accès à votre email
   - Copiez le SERVICE_ID

ÉTAPE 4: Créer un template d'email
   - Aller à "Email Templates" → Create New Template
   - Utiliser ces variables dans le template:
     {{recipient_name}}  - Nom du visiteur
     {{from_email}}      - Email du visiteur
     {{subject}}         - Sujet du message
     {{message}}         - Corps du message
     {{to_email}}        - Email où recevoir (votre email)
   - Copiez le TEMPLATE_ID

ÉTAPE 5: Copier votre PUBLIC_KEY
   - Aller à "Account" section
   - Trouvez "Public Key"
   - Copiez-la

ÉTAPE 6: Remplissez les valeurs ci-dessous:
*/

// Configuration EmailJS - ⚠️ REMPLACEZ CES VALEURS ⚠️
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'SWunUQyL2jYMAIMDi',        // ← REMPLACEZ par votre PUBLIC_KEY
    SERVICE_ID: 'service_9ex2mgh',          // ← REMPLACEZ par votre SERVICE_ID
    TEMPLATE_ID: 'template_dwxqs6a',        // ← REMPLACEZ par votre TEMPLATE_ID
    RECIPIENT_EMAIL: 'faresboussou@gmail.com'  // ← REMPLACEZ par votre email
};

// Validation au chargement
window.addEventListener('load', function() {
    if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'SWunUQyL2jYMAIMDi') {
        console.warn('⚠️  EmailJS: Configuration incomplète - Veuillez mettre à jour config.js avec vos clés EmailJS');
        console.warn('👉 Allez sur https://www.emailjs.com/ pour obtenir vos clés');
    }
});

/*
DÉCOMMENTEZ LE CODE CI-DESSOUS DANS main.js POUR ACTIVER EMAILJS

Ajoutez ce code après les autres fonctions d'initialisation :

// ==================== FORMULAIRE DE CONTACT ====================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            showToast('Veuillez remplir tous les champs requis', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Veuillez entrer une adresse email valide', 'error');
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
        submitBtn.disabled = true;

        // Envoyer l'email de confirmation au visiteur
        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
            recipient_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: email,  // Email du visiteur
            portfolio_url: 'https://farboussou.com'  // Remplacez par votre URL de portfolio
        }).then(() => {
            showToast('Message envoyé avec succès!', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }).catch((error) => {
            showToast('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
            console.error('Error:', error);
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        });
    });
}
*/
                                                                                                                                                                                                                                                                                                                                                                                                           