import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/404/erro.404.component";
import { NavBarComponent } from "./component/nav/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([
            {
                path:'**', component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}