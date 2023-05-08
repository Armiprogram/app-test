import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/personal/personal.component';
import { CoffeComponent } from './components/coffe/coffe.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AdministracionComponent } from './components/administracion/administracion.component';

const routes: Routes = [
{path:"home",component:HomeComponent },
{path:"personal",component:PersonalComponent },
{path:"coffe",component:CoffeComponent},
{path:"contactos",component:ContactosComponent },
{path:"administracion",component:AdministracionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
