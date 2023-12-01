export const navigation: any[] = [
    {
        id: 'home',
        title: 'Inicio',
        icon: 'home',
        link: '/home',
        rol: 'admin',
        children: []
    },
    {
        id: 'select',
        title: 'Ventas',
        rol: 'admin',
        icon: 'settings',
        children: [
            {
                id: '',
                title: 'Nueva Venta',
                rol: 'admin',
                link: '/new-sale',
            },
            {
                id: '',
                title: 'ventas',
                rol: 'admin',
                link: '/sales',
            }

        ]
    },
    {
        id: 'select',
        title: 'Productos',
        rol: ['admin', 'user', ''],
        icon: 'build',
        children: [
            {
                id: '',
                title: 'Nuevo Producto',
                rol: 'admin',
                link: '/new-products',
            },
            {
                id: '',
                title: 'Inventario de Productos',
                rol: 'admin',
                link: '/inventory-products',
            },
            {
                id: '',
                title: 'Productos',
                rol: 'user',
                link: '/products',
            }
        ]
    },
    {
        id: 'select',
        title: 'Clientes',
        rol: 'admin',
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
        rol: 'admin',
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
        rol: 'admin',
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