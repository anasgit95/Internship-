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
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'projets en cours ',
          url: '/base/cards',
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
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
      
    
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },

    
    
    
  ],
};
