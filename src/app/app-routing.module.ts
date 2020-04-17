import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/alloy-mixer' },
  { path: 'alloy-mixer', loadChildren: () => import('./pages/alloy-mixer/alloy-mixer.module').then(m => m.AlloyMixerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
