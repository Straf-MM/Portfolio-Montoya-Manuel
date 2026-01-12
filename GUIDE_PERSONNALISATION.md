# Guide de Personnalisation Rapide

Ce guide vous aide à personnaliser rapidement votre portfolio avec vos propres informations.

## 1. Informations personnelles

### Modifier le nom et les contacts

**Fichier:** `client/src/pages/Contact.tsx`

Cherchez et remplacez:
```tsx
// Avant
<a href="mailto:votre.email@example.com">
  votre.email@example.com
</a>

// Après
<a href="mailto:votre.vrai.email@example.com">
  votre.vrai.email@example.com
</a>
```

Faites de même pour le téléphone et la localisation.

### Ajouter vos réseaux sociaux

**Fichier:** `client/src/components/Layout.tsx`

Modifiez les liens dans la section "Social Links":
```tsx
<a href="https://linkedin.com/in/votre-profil" className="text-accent hover:underline text-sm">
  LinkedIn
</a>
<a href="https://github.com/votre-username" className="text-accent hover:underline text-sm">
  GitHub
</a>
```

## 2. Ajouter vos projets

**Fichier:** `client/src/pages/Projects.tsx`

Trouvez le tableau `projects` et ajoutez votre projet:

```tsx
{
  id: 7,
  title: "Mon Projet Awesome",
  description: "Une description courte et claire de ce que fait le projet",
  technologies: ["React", "Node.js", "MongoDB"],
  date: "Décembre 2024",
  github: "https://github.com/votre-username/mon-projet",
  image: "https://via.placeholder.com/400x250?text=Mon+Projet",
}
```

**Conseils:**
- Utilisez des images de haute qualité (au moins 400x250px)
- Listez les technologies réellement utilisées
- Fournissez des liens GitHub ou de déploiement si disponibles

## 3. Documenter vos stages

**Fichier:** `client/src/pages/Internships.tsx`

Pour le premier stage:
```tsx
const internships: Record<number, Internship[]> = {
  1: [
    {
      id: 1,
      title: "Votre Titre de Poste",
      company: "Nom de l'Entreprise",
      period: "Janvier - Février 2024",
      description: "Description détaillée du stage...",
      achievements: [
        "Première réalisation importante",
        "Deuxième réalisation importante",
        "Troisième réalisation importante",
      ],
      technologies: ["Tech1", "Tech2", "Tech3"],
    },
  ],
  // ...
};
```

## 4. Ajouter vos certificats

**Fichier:** `client/src/pages/Certificates.tsx`

Ajoutez vos certificats au tableau:

```tsx
{
  id: 7,
  title: "Nom de la Certification",
  issuer: "Organisme qui l'a délivré",
  date: "Mois Année",
  status: "obtained", // ou "in-progress" ou "planned"
  description: "Description de ce que valide cette certification",
  credentialId: "ID123456", // Optionnel
  link: "https://lien-vers-la-certification.com",
}
```

## 5. Personnaliser la veille technologique

**Fichier:** `client/src/pages/TechWatch.tsx`

Le contenu sur les backdoors est déjà fourni. Pour le modifier ou ajouter des sections:

```tsx
{
  id: "ma-section",
  title: "Titre de ma section",
  content: "Contenu principal de la section...",
  subsections: [
    {
      title: "Sous-section 1",
      content: "Contenu détaillé...",
    },
  ],
}
```

## 6. Changer les couleurs du thème

**Fichier:** `client/src/index.css`

Cherchez les sections `:root` (thème clair) et `.dark` (thème sombre).

Pour modifier la couleur d'accent (bleue par défaut):

```css
:root {
  /* Avant - Bleu */
  --accent: oklch(0.55 0.2 259.815);
  
  /* Après - Rouge */
  --accent: oklch(0.55 0.2 20);
}

.dark {
  /* Avant - Bleu */
  --accent: oklch(0.65 0.2 259.815);
  
  /* Après - Rouge */
  --accent: oklch(0.65 0.2 20);
}
```

**Note:** Les couleurs utilisent le format OKLCH. Vous pouvez utiliser des outils en ligne pour convertir vos couleurs préférées.

## 7. Ajouter un logo personnalisé

**Fichier:** `client/src/components/Layout.tsx`

Remplacez le texte "Portfolio" par votre logo:

```tsx
// Avant
<a className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
  Portfolio
</a>

// Après
<a className="hover:opacity-80 transition-opacity">
  <img src="/mon-logo.png" alt="Logo" className="h-8 w-auto" />
</a>
```

Placez votre image dans `client/public/mon-logo.png`.

## 8. Modifier le contenu de la page d'accueil

**Fichier:** `client/src/pages/Home.tsx`

Modifiez les sections "À propos de moi" et "Mes études":

```tsx
<p className="text-foreground leading-relaxed mb-4">
  Votre présentation personnelle ici...
</p>
```

## 9. Ajouter des documents à télécharger

**Fichier:** `client/src/pages/Contact.tsx`

Ajoutez vos documents au tableau:

```tsx
const documents = [
  {
    id: 5,
    title: "Mon Certificat",
    description: "Description du certificat",
    icon: FileText,
    link: "https://lien-vers-le-fichier.pdf",
  },
  // ...
];
```

## 10. Déployer votre portfolio

Une fois personnalisé, vous pouvez déployer sur:

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement que c'est un projet Vite
3. Votre portfolio sera en ligne en quelques secondes

### Netlify
1. Connectez votre repository GitHub à Netlify
2. Configurez la commande de build: `pnpm build`
3. Configurez le dossier à déployer: `dist`

### GitHub Pages
1. Modifiez `vite.config.ts` pour ajouter: `base: '/portfolio-bts-sio/'`
2. Exécutez: `pnpm build`
3. Poussez le dossier `dist` vers la branche `gh-pages`

## Checklist de personnalisation

- [ ] Modifier le nom et les coordonnées
- [ ] Ajouter vos réseaux sociaux
- [ ] Ajouter vos projets
- [ ] Documenter vos stages
- [ ] Ajouter vos certificats
- [ ] Personnaliser la veille technologique
- [ ] Ajouter votre logo (optionnel)
- [ ] Changer les couleurs si désiré
- [ ] Ajouter vos documents (CV, rapports)
- [ ] Tester sur mobile et desktop
- [ ] Déployer en ligne

## Besoin d'aide?

Consultez la `DOCUMENTATION.md` pour des explications plus détaillées sur la structure du projet.

---

**Bonne chance avec votre portfolio! 🚀**
