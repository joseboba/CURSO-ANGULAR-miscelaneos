import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { routes } from './components/usuario/usuario.routes';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id', 
        component: UsuarioComponent, 
        children: routes
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot(app_routes);