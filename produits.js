// ╔══════════════════════════════════════════════════════════════╗
// ║         FICHIER DE CONFIGURATION DES PRODUITS               ║
// ║         Les Gourmandises de Gladys                          ║
// ║                                                              ║
// ║  👉 C'est ici que vous gérez TOUS vos produits.             ║
// ║     Ajoutez, modifiez ou supprimez des produits              ║
// ║     sans toucher aux autres fichiers.                        ║
// ╚══════════════════════════════════════════════════════════════╝

// ── CONFIGURATION GLOBALE ─────────────────────────────────────
const CONFIG = {
  wa_number:    '262692000000',    // 👈 Remplacez par votre vrai numéro WhatsApp (sans + ni espaces)
  order_page:   'commande.html',   // Nom du fichier de commande
  delivery_fee: 2.00,              // Frais de livraison (€)
  site_url:     'https://votre-site.re', // URL de votre site
};

// ── FAMILLES DE PRODUITS ──────────────────────────────────────
// Chaque famille a :
//   id    : identifiant unique (sans espace, sans accent)
//   label : nom affiché sur le site
//   emoji : icône de la famille
//   desc  : description courte affichée sous le titre

const FAMILLES = [
  {
    id:    'classiques',
    label: 'Les Classiques',
    emoji: '⭐',
    desc:  'Nos recettes signatures, les indémodables de la maison.',
  },
  {
    id:    'incontournables',
    label: 'Les Incontournables',
    emoji: '🔥',
    desc:  "Des associations généreuses qui font toujours l'unanimité.",
  },
  {
    id:    'vege',
    label: 'Les Végé',
    emoji: '🌿',
    desc:  'Pour ceux qui préfèrent sans viande, avec autant de gourmandise.',
  },
];

// ── PRODUITS ─────────────────────────────────────────────────
// Chaque produit a :
//   id          : identifiant unique (sans espace ni accent)
//   famille     : doit correspondre à un "id" de FAMILLES ci-dessus
//   emoji       : icône du produit
//   name        : nom affiché
//   desc        : description courte
//   ingredients : liste des ingrédients (affichés en tags)
//   price       : prix en € — utilisez un POINT : 1.50 (pas une virgule)
//   unit        : unité affichée (ex : "pièce", "pack")
//   badge       : null = pas de badge, ou texte : "⭐ Best-seller", "✨ Nouveau", "🎊 -10%"
//   available   : true = visible sur le site / false = masqué (sans supprimer)

const PRODUITS = [

  // ════════════════════════════════
  // ⭐ LES CLASSIQUES
  // ════════════════════════════════
  {
    id:          'classique-fromage',
    famille:     'classiques',
    emoji:       '🧀',
    name:        'Samoussas Fromage',
    desc:        "Fromage fondant dans une pâte croustillante. La gourmandise à l'état pur.",
    ingredients: ['Fromage', 'Oignons Vert'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'classique-crabe',
    famille:     'classiques',
    emoji:       '🦀',
    name:        'Samoussas Crabe',
    desc:        'Chair de crabe délicatement assaisonnée avec une touche de Combava, enveloppée dans une pâte fine et croustillante.',
    ingredients: ['Crabe', 'Oignon', 'Persil', 'Combava'],
    price:       0.40,
    unit:        'pièce',
    badge:       '🌟 Spécialité',
    available:   true,
  },
  {
    id:          'classique-poulet',
    famille:     'classiques',
    emoji:       '🍗',
    name:        'Samoussas Poulet',
    desc:        'Poulet émincé au gingembre frais. Doux, parfumé, irrésistible.',
    ingredients: ['Poulet', 'Gingembre', 'Ail', 'Épices créoles'],
    price:       0.40,
    unit:        'pièce',
    badge:       '⭐ Best-seller',
    available:   true,
  },
  {
    id:          'classique-porc',
    famille:     'classiques',
    emoji:       '🥓',
    name:        'Samoussas Porc',
    desc:        'Porc moelleux et préparés à la réunionnaise. Une farce généreuse aux arômes du terroir.',
    ingredients: ['Porc', 'Oignon', 'Thym', 'Épices'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'classique-jambon-fromage',
    famille:     'classiques',
    emoji:       '🥪',
    name:        'Samoussas Jambon Fromage',
    desc:        'Le duo gagnant ! Jambon moelleux et fromage fondant dans un croustillant parfait.',
    ingredients: ['Jambon', 'Fromage', 'Oignons Vert'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'classique-thon',
    famille:     'classiques',
    emoji:       '🐟',
    name:        'Samoussas Thon',
    desc:        'Thon fondant, oignons confits et persil frais. Un mélange savoureux et léger.',
    ingredients: ['Thon', 'Oignon', 'Persil', 'Épices'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },

  // ════════════════════════════════
  // 🔥 LES INCONTOURNABLES
  // ════════════════════════════════
  {
    id:          'incont-emmental-kiri',
    famille:     'incontournables',
    emoji:       '🫕',
    name:        'Samoussas Emmental & Kiri',
    desc:        "L'alliance crémeuse du Kiri et du fondant de l'Emmental. Une gourmandise intense et douce.",
    ingredients: ['Emmental', 'Kiri', 'Oignons Vert'],
    price:       0.40,
    unit:        'pièce',
    badge:       '💛 Coup de cœur',
    available:   true,
  },
  {
    id:          'incont-brede-lardons',
    famille:     'incontournables',
    emoji:       '🥬',
    name:        'Samoussas Bréde Lardons',
    desc:        "Brédes tendres de La Réunion mêlées à des lardons dorés. Le goût authentique de l'île.",
    ingredients: ['Brédes', 'Lardons', 'Oignon', 'Ail', 'Épices créoles'],
    price:       0.40,
    unit:        'pièce',
    badge:       '🌴 Créole',
    available:   true,
  },

  // ════════════════════════════════
  // 🌿 LES VÉGÉ
  // ════════════════════════════════
  {
    id:          'vege-bredes',
    famille:     'vege',
    emoji:       '🌱',
    name:        'Samoussas Brédes',
    desc:        'Brédes fraîches de La Réunion cuisinées aux épices douces. Simple, authentique et savoureux.',
    ingredients: ['Brédes', 'Oignon', 'Ail', 'Curcuma', 'Épices'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'vege-fromage',
    famille:     'vege',
    emoji:       '🧀',
    name:        'Samoussas Fromage',
    desc:        'Fromage fondant et fines herbes. Aussi disponible dans les Classiques.',
    ingredients: ['Fromage', 'Oignons Vert', 'Poivre'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'vege-emmental-kiri',
    famille:     'vege',
    emoji:       '🫕',
    name:        'Samoussas Emmental & Kiri',
    desc:        'Kiri crémeux et Emmental fondant. Aussi disponible dans les Incontournables.',
    ingredients: ['Emmental', 'Kiri', 'Oignons Vert'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'vege-legumes',
    famille:     'vege',
    emoji:       '🥦',
    name:        'Samoussas Légumes',
    desc:        'Pommes de terre fondantes, carottes et épices douces. La recette traditionnelle végétarienne.',
    ingredients: ['Pomme de terre', 'Carotte', 'Curcuma', 'Épices'],
    price:       0.40,
    unit:        'pièce',
    badge:       null,
    available:   true,
  },
  {
    id:          'vege-chevre-miel',
    famille:     'vege',
    emoji:       '🍯',
    name:        'Samoussas Chèvre Miel',
    desc:        "Fromage de chèvre fondant nappé d'un filet de miel doux. Une note sucrée-salée inoubliable.",
    ingredients: ['Chèvre', 'Miel', 'Thym'],
    price:       0.40,
    unit:        'pièce',
    badge:       '✨ Nouveau',
    available:   true,
  },

];

// ── PACKS & OFFRES ────────────────────────────────────────────
// Champs supplémentaires :
//   perks     : liste des avantages affichés sur la carte
//   price_old : ancien prix barré (ex: 8.00), ou null si pas de promo

const PACKS = [
  {
    id:        'pack10',
    emoji:     '📦',
    name:      'Pack 10 samoussas',
    desc:      'Composez votre propre sélection parmi toutes nos familles. Idéal pour un apéro.',
    perks:     ['10 samoussas au choix', 'Toutes familles disponibles', 'Précisez vos saveurs en note', 'Emballage soigné'],
    price:     4.00,
    price_old: null,
    badge:     null,
    available: true,
  },
  {
    id:        'pack20',
    emoji:     '🎉',
    name:      'Pack Fête — 20 pièces',
    desc:      '20 samoussas assortis pour vos événements et rassemblements. Économie de -10%.',
    perks:     ['20 samoussas assortis', 'Économie -10%', 'Idéal fêtes & réceptions', 'Emballage festif'],
    price:     7.20,
    price_old: 8.00,
    badge:     '🎊 -10%',
    available: true,
  },
];
