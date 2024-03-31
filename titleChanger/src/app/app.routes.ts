import { Routes } from '@angular/router';
import { RouteComponent } from './route/route.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: "",
        component: MainComponent
    },
    {
        path: "route",
        component: RouteComponent
    },
    // {
    //     path: "",
    //     redirectTo: "main",
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: "", //kiedyś było main
        pathMatch: 'full'
    }
];
