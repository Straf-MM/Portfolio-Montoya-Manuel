# Documentation du Portfolio BTS SIO

## Vue d'ensemble

Ce portfolio est une application web minimaliste et moderne conçue pour présenter les projets, expériences et compétences d'un étudiant en BTS SIO (Services Informatiques aux Organisations). L'application est construite avec **React 19**, **TypeScript**, **Tailwind CSS 4** et utilise **Wouter** pour le routage côté client.

## Structure du projet

```
portfolio-bts-sio/
├── client/                          # Application frontend
│   ├── public/                      # Ressources statiques
│   │   └── (images, favicons, etc.)
│   ├── src/
│   │   ├── components/              # Composants réutilisables
│   │   │   ├── Layout.tsx           # Composant principal avec navigation et footer
│   │   │   ├── ui/                  # Composants shadcn/ui
│   │   │   └── ErrorBoundary.tsx    # Gestion des erreurs
│   │   ├── pages/                   # Pages de l'application
│   │   │   ├── Home.tsx             # Page d'accueil
│   │   │   ├── Projects.tsx         # Galerie des projets
│   │   │   ├── Internships.tsx      # Expériences en stage
│   │   │   ├── TechWatch.tsx        # Veille technologique
│   │   │   ├── Certificates.tsx     # Certificats et formations
│   │   │   ├── Contact.tsx          # Page de contact
│   │   │   └── NotFound.tsx         # Page 404
│   │   ├── contexts/                # Contextes React
│   │   │   └── ThemeContext.tsx     # Gestion du thème clair/sombre
│   │   ├── lib/                     # Utilitaires et helpers
│   │   ├── App.tsx                  # Composant racine avec routage
│   │   ├── main.tsx                 # Point d'entrée React
│   │   └── index.css                # Styles globaux et thème
│   └── index.html                   # Template HTML
├── server/                          # Placeholder (non utilisé)
├── shared/                          # Placeholder (non utilisé)
├── package.json                     # Dépendances et scripts
├── tsconfig.json                    # Configuration TypeScript
├── tailwind.config.ts               # Configuration Tailwind CSS
├── vite.config.ts                   # Configuration Vite
└── DOCUMENTATION.md                 # Ce fichier
```

## Architecture et design

### Système de thème

Le portfolio utilise un système de thème clair/sombre basé sur des variables CSS. Le thème est géré par le contexte `ThemeContext` et peut être basculé via le bouton dans la barre de navigation.

**Fichiers clés:**
- `client/src/contexts/ThemeContext.tsx` - Gestion du thème
- `client/src/index.css` - Variables CSS pour les thèmes

**Comment ça fonctionne:**
1. Le `ThemeProvider` enveloppe l'application et fournit les fonctions `theme` et `toggleTheme`
2. Les variables CSS sont définies dans `:root` (thème clair) et `.dark` (thème sombre)
3. Le changement de thème ajoute/retire la classe `dark` sur l'élément `html`
4. Les transitions CSS assurent un changement fluide

### Navigation et Layout

Le composant `Layout` (dans `client/src/components/Layout.tsx`) gère:
- La barre de navigation avec liens vers toutes les pages
- Le menu mobile responsive
- Le bouton de basculement de thème
- Le footer avec liens sociaux

**Routes disponibles:**
- `/` - Page d'accueil
- `/projects` - Galerie des projets
- `/internships` - Expériences en stage
- `/tech-watch` - Veille technologique
- `/certificates` - Certificats et formations
- `/contact` - Page de contact

### Animations

Les animations sont définies dans `client/src/index.css` et incluent:
- `animate-fade-in` - Fondu d'apparition
- `animate-slide-up` - Glissement vers le haut
- `animate-slide-down` - Glissement vers le bas
- `animate-slide-left` - Glissement vers la gauche
- `animate-slide-right` - Glissement vers la droite

Les animations sont appliquées aux pages lors de leur chargement pour créer une expérience fluide.

## Customisation et maintenance

### Modifier le contenu des pages

#### Page d'accueil (`client/src/pages/Home.tsx`)

Pour modifier la présentation personnelle, éditez la section "À propos de moi" et "Mes études":

```tsx
<p className="text-foreground leading-relaxed mb-4">
  Je suis actuellement en deuxième année de BTS SIO...
</p>
```

#### Page des projets (`client/src/pages/Projects.tsx`)

Pour ajouter un nouveau projet, modifiez le tableau `projects`:

```tsx
const [projects] = useState<Project[]>([
  {
    id: 7,
    title: "Nom du projet",
    description: "Description du projet",
    technologies: ["Tech1", "Tech2"],
    date: "Mois Année",
    github: "https://github.com/...",
    image: "https://...",
  },
  // ... autres projets
]);
```

#### Page des stages (`client/src/pages/Internships.tsx`)

Les stages sont organisés en deux catégories. Pour modifier un stage:

```tsx
const internships: Record<number, Internship[]> = {
  1: [ // Stage 1
    {
      id: 1,
      title: "Titre du poste",
      company: "Nom de l'entreprise",
      period: "Dates",
      description: "Description",
      achievements: ["Réalisation 1", "Réalisation 2"],
      technologies: ["Tech1", "Tech2"],
    },
  ],
  // ...
};
```

#### Page de veille technologique (`client/src/pages/TechWatch.tsx`)

Pour ajouter une nouvelle section:

```tsx
const sections: Section[] = [
  {
    id: "nouvelle-section",
    title: "Titre de la section",
    content: "Contenu principal",
    subsections: [
      {
        title: "Sous-section",
        content: "Contenu de la sous-section",
      },
    ],
  },
  // ... autres sections
];
```

#### Page des certificats (`client/src/pages/Certificates.tsx`)

Pour ajouter un certificat:

```tsx
const certificates: Certificate[] = [
  {
    id: 7,
    title: "Nom de la certification",
    issuer: "Organisme",
    date: "Mois Année",
    status: "obtained" | "in-progress" | "planned",
    description: "Description",
    credentialId: "ID optionnel",
    link: "https://...",
  },
  // ... autres certificats
];
```

#### Page de contact (`client/src/pages/Contact.tsx`)

Pour modifier les informations de contact:

```tsx
<a href="mailto:votre.email@example.com">
  votre.email@example.com
</a>
```

Pour ajouter un document à télécharger:

```tsx
const documents = [
  {
    id: 5,
    title: "Nom du document",
    description: "Description",
    icon: FileText,
    link: "#",
  },
  // ... autres documents
];
```

### Modifier le thème et les couleurs

Les couleurs sont définies dans `client/src/index.css`. Pour modifier le thème:

1. **Thème clair** - Modifiez les variables dans `:root`
2. **Thème sombre** - Modifiez les variables dans `.dark`

Les variables principales sont:
- `--background` - Couleur de fond
- `--foreground` - Couleur du texte
- `--card` - Couleur des cartes
- `--accent` - Couleur d'accentuation
- `--border` - Couleur des bordures
- `--muted` - Couleur atténuée

### Ajouter des images

1. Placez les images dans `client/public/`
2. Référencez-les avec des chemins absolus: `/image.png`
3. Pour les images de projets, utilisez des URLs externes ou des chemins relatifs

### Ajouter des pages supplémentaires

1. Créez un nouveau fichier dans `client/src/pages/`
2. Importez-le dans `client/src/App.tsx`
3. Ajoutez la route dans le composant `Router`
4. Ajoutez le lien dans le composant `Layout`

Exemple:

```tsx
// App.tsx
import NewPage from "./pages/NewPage";

function Router() {
  return (
    <Switch>
      <Route path={"/new-page"} component={NewPage} />
      {/* ... autres routes */}
    </Switch>
  );
}
```

```tsx
// Layout.tsx
const navItems = [
  // ... autres items
  { href: "/new-page", label: "Nouvelle Page" },
];
```

## Déploiement

Le portfolio est une application statique React et peut être déployée sur:
- Vercel
- Netlify
- GitHub Pages
- Tout serveur web statique

Pour construire le projet:

```bash
pnpm build
```

Les fichiers de distribution seront dans le dossier `dist/`.

## Bonnes pratiques

### Code

1. **Composants réutilisables** - Créez des composants génériques dans `client/src/components/`
2. **Typage TypeScript** - Utilisez toujours les types TypeScript appropriés
3. **Styles cohérents** - Utilisez les classes Tailwind et les variables CSS existantes
4. **Accessibilité** - Assurez-vous que tous les éléments interactifs sont accessibles au clavier

### Contenu

1. **Mises à jour régulières** - Mettez à jour le portfolio avec vos nouveaux projets et certificats
2. **Informations à jour** - Gardez vos coordonnées et liens sociaux à jour
3. **Descriptions claires** - Écrivez des descriptions claires et concises de vos projets

### Performance

1. **Images optimisées** - Utilisez des images compressées et au bon format
2. **Lazy loading** - Les images sont chargées à la demande
3. **CSS minifié** - Le CSS est minifié en production

## Dépannage

### Le portfolio ne se charge pas

1. Vérifiez que le serveur de développement est en cours d'exécution: `pnpm dev`
2. Vérifiez les erreurs dans la console du navigateur (F12)
3. Vérifiez que tous les fichiers de pages sont créés

### Les styles ne s'appliquent pas

1. Vérifiez que les classes Tailwind sont correctes
2. Assurez-vous que le fichier `index.css` est importé dans `main.tsx`
3. Vérifiez que le thème est correctement configuré

### Les animations ne fonctionnent pas

1. Vérifiez que les classes d'animation sont correctement appliquées
2. Assurez-vous que les animations CSS sont définies dans `index.css`
3. Vérifiez les paramètres d'animation dans le navigateur

## Ressources utiles

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Wouter Documentation](https://github.com/molefrog/wouter)
- [shadcn/ui Components](https://ui.shadcn.com)

## Support et questions

Pour toute question ou problème, consultez la documentation du projet ou les fichiers source. Le code est commenté pour faciliter la compréhension.

---

**Dernière mise à jour:** Novembre 2024
**Version du portfolio:** 1.0.0
