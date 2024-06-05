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
import { StepBauweise } from './bauen/konfigurator/step-bauweise/step-bauweise.component';
import { StepAktionshaus } from './bauen/konfigurator/step-aktionshaus/step-aktionshaus.component';
import { StepDachform } from './bauen/konfigurator/step-dachform/step-dachform.component';
import { StepDachfarbe } from './bauen/konfigurator/step-dachfarbe/step-dachfarbe.component';
import { StepFensterfarbe } from './bauen/konfigurator/step-fensterfarbe/step-fensterfarbe.component';
import { StepSchornstein } from './bauen/konfigurator/step-schornstein/step-schornstein.component';
import { StepAusstattung } from './bauen/konfigurator/step-ausstattung/step-ausstattung.component';
import { KonfigStartComponent } from './bauen/konfigurator/start/start.component';

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
  { path: 'konfigurator-home', component: KonfigStartComponent},
  { path: 'konfigurator', component: KonfiguratorComponent},
  { path: 'konfigurator/schritt-1', component: StepBauweise},
  { path: 'konfigurator/schritt-2', component: StepAktionshaus},
  { path: 'konfigurator/schritt-3', component: StepDachform},
  { path: 'konfigurator/schritt-4', component: StepDachfarbe},
  { path: 'konfigurator/schritt-5', component: StepFensterfarbe},
  { path: 'konfigurator/schritt-6', component: StepSchornstein},
  { path: 'konfigurator/schritt-7', component: StepAusstattung}
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
  StepBauweise,
  StepAktionshaus,
  StepDachform,
  StepDachfarbe,
  StepFensterfarbe,
  StepSchornstein,
  StepAusstattung,
];
