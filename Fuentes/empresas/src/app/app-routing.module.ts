import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './componentes/menu/menu.module#MenuPageModule' },
  { path: 'tab1-details', loadChildren: './componentes/tab1-details/tab1-details.module#Tab1DetailsPageModule' },
  { path: 'tab2-details', loadChildren: './componentes/tab2-details/tab2-details.module#Tab2DetailsPageModule' },
  { path: 'tab3-details', loadChildren: './componentes/tab3-details/tab3-details.module#Tab3DetailsPageModule' },
  { path: 'tab4-details', loadChildren: './componentes/tab4-details/tab4-details.module#Tab4DetailsPageModule' },
  { path: 'car', loadChildren: './componentes/car/car.module#CarPageModule' },
  { path: 'car-add', loadChildren: './componentes/car-add/car-add.module#CarAddPageModule' },
  { path: 'car-details', loadChildren: './componentes/car-details/car-details.module#CarDetailsPageModule' },
  { path: 'trailer', loadChildren: './componentes/trailer/trailer.module#TrailerPageModule' },
  { path: 'trailer-add', loadChildren: './componentes/trailer-add/trailer-add.module#TrailerAddPageModule' },
  { path: 'trailer-details', loadChildren: './componentes/trailer-details/trailer-details.module#TrailerDetailsPageModule' },
  { path: 'history', loadChildren: './componentes/history/history.module#HistoryPageModule' },
  { path: 'help', loadChildren: './componentes/help/help.module#HelpPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
