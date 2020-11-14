import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
    {
        data: { title: 'Components' },
        path: '',
        loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)
    },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule) },
    { path: 'directives', loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule) },
    {
        data: { title: 'Other' },
        path: 'other',
        loadChildren: () => import('./other/other.module').then((m) => m.OtherModule)
    }
];
