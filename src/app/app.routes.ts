import { Routes } from '@angular/router';
import { AdminClientesComponent } from './pages/admin/admin-clientes/admin-clientes.component';
import {ClienteFormComponent} from './pages/cliente-form/cliente-form.component';
import{MenuComponent} from './shared/menu/menu.component';

export const routes: Routes = [
    {path: 'admin-clientes', component: AdminClientesComponent},
    {path: 'cliente-cadastro', component: ClienteFormComponent},
];

