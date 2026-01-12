# Portfolio Manuel Montoya - BTS SIO

## 📋 Description

Portfolio web complet et personnalisé pour Manuel Montoya, étudiant en BTS SIO spécialisé dans la filière Réseaux et Infrastructure. Le portfolio présente :

- **Page d'accueil** : Présentation personnelle avec focus sur la spécialité réseau
- **Page Projets** : Galerie pour vos projets académiques et professionnels
- **Page Stages** : Détails de vos expériences en entreprise (2 stages)
- **Page Veille Technologique** : Présentation sur les Backdoors et malwares
- **Page Certificats** : Certifications professionnelles obtenues et prévues
- **Page Contact** : Formulaire de contact fonctionnel + informations personnelles

## 🎨 Thèmes Disponibles

5 thèmes magnifiques à choisir :
1. **Clair** - Minimaliste et professionnel
2. **Sombre** - Mode sombre élégant
3. **Holographique** - Framboise et bleu vibrants
4. **Sunset** - Dégradés chauds (orange, rose, pourpre)
5. **Ocean** - Bleus et verts apaisants

Sélecteur de thème accessible en bas du site.

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- pnpm (gestionnaire de paquets)

### Étapes d'installation

1. **Extraire l'archive**
```bash
tar -xzf portfolio-bts-sio-source.tar.gz
cd portfolio-bts-sio
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Lancer le serveur de développement**
```bash
pnpm dev
```

Le portfolio sera accessible à `http://localhost:3000`

## 📝 Personnalisation

### Modifier les informations personnelles

**Page d'accueil** (`client/src/pages/Home.tsx`)
- Votre nom et titre
- Description personnelle
- Domaines de compétence

**Page Contact** (`client/src/pages/Contact.tsx`)
- Numéro de téléphone : 07 71 01 03 87
- Localisation : Horbourg-Wihr
- Email : pro.manuel.montoya@gmail.com
- Liens réseaux sociaux (LinkedIn, GitHub)

### Remplir vos stages

**Page Stages** (`client/src/pages/Internships.tsx`)
- Stage 1 : À remplir avec vos détails (entreprise, dates, missions, compétences)
- Stage 2 : À compléter quand vous l'aurez effectué

### Ajouter vos projets

**Page Projets** (`client/src/pages/Projects.tsx`)
- Remplacez le message "En développement" par vos vrais projets
- Ajoutez des images, descriptions et technologies utilisées

### Ajouter vos certificats

**Page Certificats** (`client/src/pages/Certificates.tsx`)
- Remplacez le message "À venir" par vos certificats obtenus
- Listez vos certifications avec dates et liens

## 🛠️ Structure du Projet

```
portfolio-bts-sio/
├── client/
│   ├── src/
│   │   ├── pages/           # Pages du portfolio
│   │   │   ├── Home.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Internships.tsx
│   │   │   ├── TechWatch.tsx
│   │   │   ├── Certificates.tsx
│   │   │   └── Contact.tsx
│   │   ├── components/      # Composants réutilisables
│   │   ├── contexts/        # Contexte du thème
│   │   ├── index.css        # Styles globaux + thèmes
│   │   └── App.tsx          # Routage principal
│   └── public/              # Assets statiques
├── server/                  # Backend (Express + tRPC)
├── drizzle/                 # Schéma et migrations DB
├── package.json
└── README.md
```

## 📱 Fonctionnalités

✅ **Navigation fluide** - Transitions douces entre les pages
✅ **Animations subtiles** - Fade-in, slide-up, hover effects
✅ **Thème switchable** - 5 thèmes disponibles
✅ **Formulaire de contact** - Intégration Formspree
✅ **Responsive** - Adapté mobile, tablette, desktop
✅ **Full-stack** - Backend Express + tRPC + Base de données
✅ **Mode sombre/clair** - Support complet des thèmes

## 🔧 Commandes Disponibles

```bash
# Démarrer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Démarrer la version production
pnpm start

# Vérifier les types TypeScript
pnpm check

# Formater le code
pnpm format

# Lancer les tests
pnpm test

# Pousser les migrations DB
pnpm db:push
```

## 📧 Formulaire de Contact

Le formulaire de contact est intégré avec **Formspree** et envoie tous les messages à :
📧 **pro.manuel.montoya@gmail.com**

Les messages reçus incluent :
- Nom de l'expéditeur
- Email de l'expéditeur
- Sujet du message
- Contenu du message

## 🌐 Déploiement

### Option 1 : Manus (Recommandé)
Le portfolio est prêt pour être publié sur Manus avec :
- Domaine personnalisé (xxx.manus.space)
- SSL/HTTPS automatique
- Base de données incluse
- Stockage S3 pour les fichiers

### Option 2 : Vercel / Netlify
Exportez le projet et déployez sur votre plateforme préférée.

## 📚 Documentation Supplémentaire

- `DOCUMENTATION.md` - Guide technique complet
- `GUIDE_PERSONNALISATION.md` - Guide rapide des modifications courantes

## 💡 Conseils de Maintenance

1. **Mettez à jour régulièrement** vos projets et stages
2. **Testez tous les thèmes** pour vérifier la cohérence visuelle
3. **Vérifiez les liens** (réseaux sociaux, documents)
4. **Optimisez les images** avant de les ajouter
5. **Testez sur mobile** avant chaque publication

## 📞 Support

Pour toute question ou amélioration, consultez la documentation du projet ou contactez votre formateur BTS SIO.

---

**Créé avec ❤️ pour Manuel Montoya**
Portfolio BTS SIO - Spécialiste Réseaux
