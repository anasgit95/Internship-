import React from 'react';

const touslesprojets = React.lazy(() => import('./views/touslesprojets'));
const NewProject = React.lazy(() => import('./views/NewProject'));
const ProjectSelecitonnes = React.lazy(() => import('./views/ProjetSelectionnes.js'));

const ProjetsenCours = React.lazy(() => import('./views/ProjetsenCours'));
const Mademande = React.lazy(() => import('./views/Mademande'));

const Projetslibres = React.lazy(() => import('./views/Projetslibres'));

const EnAttentes = React.lazy(() => import('./views/EnAttentes'));
const Tous = React.lazy(() => import('./views/Tous'));
const approuvees = React.lazy(() => import('./views/approuvees'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Dashboard1 = React.lazy(() => import('./views/Dashboard/Dashboard1'));

const ProjetsSelectionnes = React.lazy(() => import('./views/ProjetsSelectionnes'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard1', name: 'Dashboard', component: Dashboard1 },
    { path: '/base/Mademande', name: 'Mademande', component: Mademande },
  { path: '/base', exact: true, name: 'Base', component: ProjetsenCours },
  { path: '/Liste/ProjetsenCours', name: 'Projetencours', component: ProjetsenCours },
  { path: '/Liste/touslesprojets', name: 'projets', component: touslesprojets },
  { path: '/Liste/Projetslibres', name: 'Projetslibres', component: Projetslibres },
  { path: '/Etudiants/Tous', name: 'Etudiants', component: Tous },
  { path: '/Etudiants/approuvées', name: 'Etudiants approuvées', component:approuvees },
  { path: '/Etudiants/EnAttentes', name: 'EtudiantsEnAttente', component: EnAttentes },

  { path: '/MesProjets', exact: true, name: 'Mes Projets', component: ProjetsSelectionnes },
  { path: '/MesProjets/ProjetsSelectionnes', name: 'Projet ProjetsSelectionnes', component: ProjectSelecitonnes },
    { path: '/MesProjets/ProjetsSelectionnes', name: 'Projet ProjetsSelectionnes ', component: ProjetsSelectionnes },
  { path: '/MesProjets/NewProject', name: 'NewProjet', component: NewProject },

  { path: '/MesProjets/MesProjets', name: 'Mes Projets', component: EnAttentes },
  
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
