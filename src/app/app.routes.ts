import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { MedicoesComponent } from './medicoes/medicoes.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Medições',
        component: MedicoesComponent
    },
    {
        path: 'medicoes',
        title: 'Medições',
        component: MedicoesComponent
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