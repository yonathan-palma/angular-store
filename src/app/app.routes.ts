import { Routes } from '@angular/router';

import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shered/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: ()=> import('@products/pages/list/list.component')
            },
            {
                path: 'about',
                loadComponent: ()=> import('./domains/info/pages/about/about.component')
            },
            {
                path: 'product/:id',
                loadComponent: ()=> import('@products/pages/product-detail/product-detail.component')
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
