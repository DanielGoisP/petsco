import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfildousarioComponent } from './perfildousario/perfildousario.component';
import { SobreComponent } from './sobre/sobre.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  {path: 'perfildousuario', component: PerfildousarioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'perdidos', component: PerdidosComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'profissionais', component: ProfissionaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
