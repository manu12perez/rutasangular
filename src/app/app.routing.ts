import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";

//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAR DENTRO DE ANGULAR 
//PARA LA NAVEGACION DE RUTAS
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TablamultiplicarroutingComponent } from "./components/tablamultiplicarrouting/tablamultiplicarrouting.component";

//NECESITAMOS UN ARRAY CON LAS RUTAS, DICHO ARRAY SERA DEL TIPO Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "numerodoble", component: NumerodobleComponent },
    { path: "numerodoble/:numero", component: NumerodobleComponent },
    { path: "tablamultiplicar/:numero", component: TablamultiplicarroutingComponent },
    { path: "**", component: NotfoundComponent },

]

//DESDE ESTA CLASE DEBEMOS EXPORTAR EL ARRAY DE RUTAS COMO PROVEEDOR
export const appRoutingProvider: any[] = [];
//LAS RUTAS EN SI MISMAS
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);