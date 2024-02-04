import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/admin/products/products.module').then( m => m.ProductsPageModule)
  },  {
    path: 'customers',
    loadChildren: () => import('./modules/admin/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./modules/admin/schedule/schedule.module').then( m => m.SchedulePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
