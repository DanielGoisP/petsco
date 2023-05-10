import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CadAnimalComponent } from './cad-animal/cad-animal.component';

import { FormsModule, ReactiveFormsModule } from
'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SobreComponent } from './sobre/sobre.component';
import { PerfildousarioComponent } from './perfildousario/perfildousario.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { LugaresComponent } from './lugares/lugares.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroComponent,
    LoginComponent,
    CadAnimalComponent,
    SobreComponent,
    PerfildousarioComponent,
    PerdidosComponent,
    ProfissionaisComponent,
    LugaresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
