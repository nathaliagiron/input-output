import { NgModule } from "@angular/core";

import { RouterModule, Routes, Router } from '@angular/router';
import { getCardRoute } from './pages/get-card/get-card.routing';
import { homeRoute } from './pages/home/home.routing';


const appRoutes: Routes = [
    ...homeRoute,
    ...getCardRoute,
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}