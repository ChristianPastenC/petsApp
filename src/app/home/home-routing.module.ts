import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VerIndexComponent } from '../ver-index/ver-index.component';

const routes: Routes = [
  { path: '',
      component: HomeComponent,
      children: [
        { path: '', component: VerIndexComponent},
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
