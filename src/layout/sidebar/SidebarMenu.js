import { Calendar, Home, Layers, Lock } from 'react-feather';
import { v4 as uuid } from 'uuid';

export const SidebarMenu = [
    {
        id: uuid(),
        title: 'Dashboard',
        icon: <Home size={15} className='nav-icon me-2' />,
        link: '/'
    },
    {
        id: uuid(),
        title: 'LAYOUTS & PAGES',
        grouptitle: true
    },
    {
        id: uuid(),
        title: 'Pages',
        icon: <Layers size={15} className='nav-icon me-2' />,
        children: [
            { id: uuid(), link: '#', name: 'Profile' },
            { id: uuid(), link: '#', name: 'Settings' },
            { id: uuid(), link: '#', name: 'Billing' },
            { id: uuid(), link: '#', name: 'Pricing' },
            { id: uuid(), link: '#', name: '404 Error' }
        ]
    },
    {
        id: uuid(),
        title: 'Authentication',
        icon: <Lock size={15} className='nav-icon me-2' />,
        children: [
            { id: uuid(), link: '#', name: 'Sign In' },
            { id: uuid(), link: '#', name: 'Sign Up' },
            { id: uuid(), link: '#', name: 'Forget Password' }
        ]
    },
    {
        id: uuid(),
        title: 'Calendar',
        icon: <Calendar size={15} className='nav-icon me-2' />,
        link: '#'
    },

];

export default SidebarMenu;
