const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ==================== MIDDLEWARE ====================
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ==================== CONFIGURATION EMAIL ====================

let transporter;
let isTestMode = false;

// Vérifier si on est en mode test (pas de configuration email)
if (!process.env.SENDGRID_API_KEY && !process.env.EMAIL_PASSWORD) {
    isTestMode = true;
    console.log('🧪 MODE TEST - Les messages s\'afficheront ici\n');
}

// SendGrid (Si SENDGRID_API_KEY est fourni)
if (process.env.SENDGRID_API_KEY) {
    transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY
        }
    });
    console.log('📤 Configuration: SendGrid');
}
// Gmail classique
else if (process.env.EMAIL_PASSWORD) {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER || 'faresboussou@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });
    console.log('📧 Configuration: Gmail');
}

// Vérifier la connexion (sauf en mode test)
if (!isTestMode && transporter) {
    transporter.verify((error, success) => {
        if (error) {
            console.error('❌ Erreur de configuration email:');
            console.error('   - Vérifiez EMAIL_USER dans .env');
            console.error('   - Vérifiez EMAIL_PASSWORD');
            console.error('   Erreur:', error);
        } else {
            console.log('✅ Service email configuré avec succès!');
        }
    });
}

// ==================== ROUTES ====================

// Route pour servir le formulaire
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour envoyer un email
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                error: 'Tous les champs sont requis' 
            });
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Email invalide' 
            });
        }

        // Si pas de configuration email, afficher un message de test
        if (!process.env.SENDGRID_API_KEY && !process.env.EMAIL_PASSWORD) {
            console.log('\n📨 ===== MESSAGE DE TEST =====');
            console.log(`De: ${name} (${email})`);
            console.log(`Sujet: ${subject}`);
            console.log(`Message:\n${message}`);
            console.log('=============================\n');
            
            return res.json({
                success: true,
                message: '✅ Message enregistré (Mode test - email non configuré)',
                isTest: true,
                data: { name, email, subject, message }
            });
        }

        // Configuration des emails
        const userMailOptions = {
            from: process.env.EMAIL_USER || 'faresboussou@gmail.com',
            to: email,
            subject: `Confirmation: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Merci ${name}! 🙏</h2>
                    <p>Nous avons bien reçu votre message et vous répondrons au plus tôt.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3>Récapitulatif de votre message:</h3>
                        <p><strong>Sujet:</strong> ${subject}</p>
                        <p><strong>Votre message:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <p>Cordialement,<br>
                    <strong>Fares EL BOUSFI</strong><br>
                    Développeur Web & Mobile<br>
                    <a href="https://farboussou.com">farboussou.com</a>
                    </p>
                </div>
            `
        };

        const adminMailOptions = {
            from: process.env.EMAIL_USER || 'faresboussou@gmail.com',
            to: process.env.EMAIL_USER || 'faresboussou@gmail.com',
            subject: `Nouveau message - ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>📨 Nouveau message reçu</h2>
                    
                    <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px;">
                        <p><strong>Nom:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Sujet:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <p style="margin-top: 20px; color: #888;">
                        <small>Ce message provient de votre formulaire de contact sur farboussou.com</small>
                    </p>
                </div>
            `
        };

        // Envoyer les deux emails
        await transporter.sendMail(userMailOptions);
        console.log('✅ Email de confirmation envoyé à:', email);

        await transporter.sendMail(adminMailOptions);
        console.log('✅ Email reçu par admin:', process.env.EMAIL_USER);

        res.json({ 
            success: true,
            message: 'Message envoyé avec succès!' 
        });

    } catch (error) {
        console.error('❌ Erreur:', error);
        res.status(500).json({ 
            error: 'Erreur lors de l\'envoi du message',
            details: error.message 
        });
    }
});

// ==================== SERVEUR ====================
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════╗
    ║   Portfolio - Serveur démarré      ║
    ║   http://localhost:${PORT}${' '.repeat(14 - PORT.toString().length)} ║
    ╚════════════════════════════════════╝
    `);
    
    console.log('\n📧 Configuration email:');
    if (process.env.SENDGRID_API_KEY) {
        console.log('   ✅ Service: SendGrid');
        console.log('   ✅ Email: ' + (process.env.EMAIL_USER || 'faresboussou@gmail.com'));
        console.log('   ✅ Prêt à envoyer des emails!');
    } else if (process.env.EMAIL_PASSWORD) {
        console.log('   ✅ Service: Gmail');
        console.log('   ✅ Email: ' + (process.env.EMAIL_USER || 'faresboussou@gmail.com'));
        console.log('   ✅ Prêt à envoyer des emails!');
    } else {
        console.log('   ⚠️  MODE TEST: Aucune configuration email');
        console.log('   📝 Pour activer les emails, voir: SETUP_EMAIL.md');
        console.log('   💡 Les messages de test seront affichés ici ↓');
    }
    
    console.log('\n📚 Documentation:');
    console.log('   📖 Guide rapide: SETUP_EMAIL.md');
    console.log('   🔧 Solutions avancées: EMAIL_SOLUTIONS.md');
});
