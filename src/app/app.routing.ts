import { Route } from "@angular/router";


export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    {
        path: '',
        children: [
            {
                path: 'home',
                data: {},
                loadChildren: () => import('../app/modules/admin/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'new-products',
                data: {},
                loadChildren: () => import('../app/modules/admin/new-products/new-products.module').then(m => m.NewProductsModule),
            },
            {
                path: 'inventory-products',
                data: {},
                loadChildren: () => import('./modules/admin/inventory-products/inventory-products.module').then(m => m.InventoryProductsModule),
            },
            {
                path: 'products',
                data: {},
                loadChildren: () => import('./modules/admin/products/products.module').then(m => m.ProductsModule),
            },
        ]
    }
]