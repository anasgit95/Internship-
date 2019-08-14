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
      name: 'Mes Condidatures',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Suivre ma Demande',
          url: '/base/Mademande',
          icon: 'icon-puzzle',
        },
        
    
      ],
    },
    {
      name: 'Projects ',
      url: 'Projects',
      icon: 'icon-cursor',
      children: [
        
        {
          name: 'Tous les Projects',
          url: '/Liste/touslesprojets ',
          icon: 'icon-cursor',
        },
        {
          name: 'Projects selectionnées ',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
       
      ],
    },
      
    
   
    
    
    
  ],
};
