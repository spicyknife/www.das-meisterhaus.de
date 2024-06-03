import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BauenComponent } from './bauen/bauen.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import { ViewsComponent } from './referenzen/views/views.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { IndividuellComponent } from './bauen/individuell/individuell.component';
import { CleverComponent } from './bauen/clever/clever.component';
import { BudgetrechnerComponent } from './service/budgetrechner/budgetrechner.component';
import { ZinsrechnerComponent } from './service/zinsrechner/zinsrechner.component';
import { ZinsbindungComponent} from './service/zinsbindung/zinsbindung.component';
import { TilgungsrechnerComponent } from './service/tilgungsrechner/tilgungsrechner.component';
import { FinanzierungsanfrageComponent } from './service/finanzierungsanfrage/finanzierungsanfrage.component';
import { KonfiguratorComponent } from './bauen/konfigurator/konfigurator.component';
import { StepAComponent } from './bauen/konfigurator/step-a/step-a.component';
import { StepBComponent } from './bauen/konfigurator/step-b/step-b.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'bauen', component: BauenComponent },
  { path: 'referenzen', component: ReferenzenComponent },
  { path: 'referenz/:id', component: ViewsComponent },
  { path: 'unternehmen', component: UnternehmenComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'individuell-bauen', component: IndividuellComponent },
  { path: 'clever-bauen', component: CleverComponent },
  { path: 'budgetrechner', component: BudgetrechnerComponent},
  { path: 'zinsrechner', component: ZinsrechnerComponent},
  { path: 'vergleich-zinsbindung', component: ZinsbindungComponent},
  { path: 'tilgungsrechner', component: TilgungsrechnerComponent},
  { path: 'finanzierungsanfrage', component: FinanzierungsanfrageComponent},
  { path: 'konfigurator', component: KonfiguratorComponent},
  { path: 'konfigurator/schritt-1', component: StepAComponent},
  { path: 'konfigurator/schritt-2', component: StepBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  HomepageComponent,
  BauenComponent,
  ReferenzenComponent,
  ViewsComponent,
  UnternehmenComponent,
  ImpressumComponent,
  DatenschutzComponent,
  IndividuellComponent,
  CleverComponent,
  BudgetrechnerComponent,
  ZinsrechnerComponent,
  ZinsbindungComponent,
  TilgungsrechnerComponent,
  FinanzierungsanfrageComponent,
  KonfiguratorComponent,
  StepAComponent,
  StepBComponent
];
