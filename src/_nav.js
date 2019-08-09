export default {
  items: [
    {
      name: 'Accueil',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: ' 5 NEWS',
      },
    },
  
    {
      name: 'Liste des Projets',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'tous les projets ',
          url: '/base/Breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'projets en cours ',
          url: '/base/Cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'projets libres',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
    
      ],
    },
    {
      name: 'Liste des Etudiant ',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        
        {
          name: 'Tous les Etudiants',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Etudiants approuvées',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Étudiant en attentes ',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
      
    
    {
      name: 'Mes projets',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Projets Selectionnés ',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Étudiants ',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
      
      ],
    },

    
    
    
  ],
};
