import { MenuItem } from '../models/menu-item.interface';

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        route: '/dash',
        icon: 'dashboard',
        roles: ['Manager', 'Cliente', 'Tecnico', 'Administracion']
    },
    {
        id: 'users',
        label: 'Usuarios',
        route: '/dash/users',
        icon: 'people',
        roles: ['Manager', 'Administracion']
    },
    {
        id: 'reports',
        label: 'Reportes',
        route: '/dash/reports',
        icon: 'assessment',
        roles: ['Manager', 'Administracion', 'Tecnico']
    },
    {
        id: 'settings',
        label: 'Configuración',
        route: '/dash/settings',
        icon: 'settings',
        roles: ['Administracion']
    },
    {
        id: 'clientes',
        label: 'Clientes',
        route: '/dash/clientes',
        icon: 'group',
        roles: ['Manager']
    },
    {
        id: 'usuarios-registrados',
        label: 'Usuarios Registrados',
        route: '/dash/usuarios-registrados',
        icon: 'manage_accounts',
        roles: ['Manager']
    },
    {
        id: 'api-endpoints',
        label: 'API Control',
        route: '/dash/api-endpoints',
        icon: 'api',
        roles: ['Manager']
    }
];