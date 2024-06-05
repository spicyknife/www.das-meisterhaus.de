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
import { StepABauweise } from './bauen/konfigurator/step-a-bauweise/step-a-bauweise.component';
import { StepBAktionshaus } from './bauen/konfigurator/step-b-aktionshaus/step-b-aktionshaus.component';
import { StepCDachform } from './bauen/konfigurator/step-c-dachform/step-c-dachform.component';
import { StepDDachfarbe } from './bauen/konfigurator/step-d-dachfarbe/step-d-dachfarbe.component';
import { StepEFensterfarbe } from './bauen/konfigurator/step-e-fensterfarbe/step-e-fensterfarbe.component';
import { StepFSchornstein } from './bauen/konfigurator/step-f-schornstein/step-f-schornstein.component';
import { StepGAusstattung } from './bauen/konfigurator/step-g-ausstattung/step-g-ausstattung.component';

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
  { path: 'konfigurator/schritt-1', component: StepABauweise},
  { path: 'konfigurator/schritt-2', component: StepBAktionshaus},
  { path: 'konfigurator/schritt-3', component: StepCDachform},
  { path: 'konfigurator/schritt-4', component: StepDDachfarbe},
  { path: 'konfigurator/schritt-5', component: StepEFensterfarbe},
  { path: 'konfigurator/schritt-6', component: StepFSchornstein},
  { path: 'konfigurator/schritt-7', component: StepGAusstattung}
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
  StepABauweise,
  StepBAktionshaus,
  StepCDachform,
  StepDDachfarbe,
  StepEFensterfarbe,
  StepFSchornstein,
  StepGAusstattung,
];
