import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../tabs/tabs.module#TabsPageModule'
      },
      {
        path: 'second',
        loadChildren: '../info/info.module#InfoPageModule'
      },
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'third',
        loadChildren: '../car/car.module#CarPageModule'
      },
      {
        path: 'third/add',
        loadChildren: '../car-add/car-add.module#CarAddPageModule'
      },
      {
        path: 'fourth',
        loadChildren: '../trailer/trailer.module#TrailerPageModule'
      },
      {
        path: 'fourth/add',
        loadChildren: '../trailer-add/trailer-add.module#TrailerAddPageModule'
      },
      {
        path: 'fifth',
        loadChildren: '../history/history.module#HistoryPageModule'
      },
      {
        path: 'sixth',
        loadChildren: '../help/help.module#HelpPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
