import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { CourComponent } from './pages/cour/cour.component';
import { EleveComponent } from './pages/eleve/eleve.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: AcceuilComponent,
  },
  {
    path: 'cours',
    component: CourComponent,
  },
  {
    path: 'classes',
    component: ClasseComponent,
  },
  {
    path: 'eleves',
    component: EleveComponent,
  },
  {
    path: 'apropos',
    component: AproposComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
