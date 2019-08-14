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
          url: '/Liste/touslesprojets',
          icon: 'icon-puzzle',
        },
        {
          name: 'projets en cours ',
          url: '/Liste/ProjetsenCours',
          icon: 'icon-puzzle',
        },
        {
          name: 'projets libres',
          url: '/Liste/Projetslibres',
          icon: 'icon-puzzle',
        },
    
      ],
    },
    {
      name: 'Liste des Etudiants ',
      url: '/Etudiant',
      icon: 'icon-cursor',
      children: [
        
        {
          name: 'Tous les Etudiants',
          url: '/Etudiants/Tous',
          icon: 'icon-cursor',
        },
        {
          name: 'Etudiants approuvées',
          url: '/Etudiants/approuvées',
          icon: 'icon-cursor',
        },
        {
          name: 'Étudiant en attentes ',
          url: '/Etudiants/EnAttentes',
          icon: 'icon-cursor',
        },
      ],
    },
      
    
    {
      name: 'Mes projets',
      url: '/MesProjets',
      icon: 'icon-bell',
      children: [
        {
          name: 'Projets Selectionnés ',
          url: '/MesProjets/ProjetsSelectionnes',
          icon: 'icon-bell',
        },
        {
          name: 'Étudiants ',
          url: '/MesProjets/MesProjets',
          icon: 'icon-bell',
        },
      
      ],
    },

    
    
    
  ],
};
