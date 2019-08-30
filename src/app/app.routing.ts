import { NgModule, Component } from "@angular/core";
import {Routes, RouterModule} from "@Angular/router";
import { LoginComponent } from './login/login.component';

//se crea una constante de tipo Routes

export const routes:Routes = [{
    path : 'login',
    component: LoginComponent
}

]

//inicio mi decorador

@NgModule({

     imports:[RouterModule.forRoot(routes,{useHash:true} )],
     exports:[RouterModule],
     providers:[]

})
export class AppRoutingModule{}