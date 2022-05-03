import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt.component';

const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class KontaktRoutingModule {}

export const routingComponents = [
    KontaktComponent
];
