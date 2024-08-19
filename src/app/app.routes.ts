import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'lista',
        title: 'Lista',
        component: ListaComponent
    },
    // {
    //     path: 'orders',
    //     component: OrdersComponent,
    //     data: { breadcrumb: 'Orders' }
    //   }
    // {
    //     path: 'pedidos/followup',
    //     component: PedidosComponent
    // },
    // {
    //     path: 'cotacoes/criar',
    //     component: PedidosComponent
    // },
    // {
    //     path: 'cotacoes/listar',
    //     component: PedidosComponent
    // }

];