import { TableHermesComponent } from './table-hermes/table-hermes.component';
import { TableMiddlewareComponent } from './table-middleware/table-middleware.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'middleware', component: TableMiddlewareComponent},
    {path: 'hermes', component: TableHermesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
