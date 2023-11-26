export const navigation: any[] = [
    {
        id: 'home',
        title: 'Inicio',
        icon: 'home',
        link: '/home',
        children: []
    },
    {
        id: 'select',
        title: 'Ventas',
        icon: 'settings',
        children: [
            {
                id: '',
                title: 'Nueva Venta',
                link: '/new-sale',
            },
            {
                id: '',
                title: 'ventas',
                link: '/sales',
            }
        ]
    },
    {
        id: 'select',
        title: 'Productos',
        icon: 'build',
        children: [
            {
                id: '',
                title: 'Nuevo Producto',
                link: '/new-products',
            },
            {
                id: '',
                title: 'Productos',
                link: '/products',
            }
        ]
    },
    {
        id: 'select',
        title: 'Clientes',
        icon: 'groups_2',
        children: [
            {
                id: '',
                title: 'Nueva Cliente',
                link: '/new-customer'
            },
            {
                id: '',
                title: 'Clientes',
                link: '/customers'
            }
        ]
    },
    {
        id: 'select',
        title: 'Proveedor',
        link: '',
        icon: 'domain',
        children: [
            {
                id: '',
                title: 'Nueva Proveedor',
            },
            {
                id: '',
                title: 'Proveedores',
            }
        ]
    },
    {
        id: 'select',
        title: 'Usuarios',
        link: '',
        icon: 'person',
        children: [
            {
                id: '',
                title: 'Nueva Usuario',
            },
            {
                id: '',
                title: 'Usuarios',
            }
        ]
    },

];