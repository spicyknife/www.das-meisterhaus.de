import { SharedModule } from './shared/shared.module';
import { KontaktModule } from './kontakt/kontakt.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import { FilterComponent } from './referenzen/filter/filter.component';
import { ResultsComponent } from './referenzen/results/results.component';
import { ViewsComponent } from './referenzen/views/views.component';
import { ReferenzSliderComponent } from './referenzen/views/referenz-slider/referenz-slider.component';
import { ReferenzDetailsComponent } from './referenzen/views/referenz-details/referenz-details.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { IndividuellComponent } from './bauen/individuell/individuell.component';
import { CleverComponent } from './bauen/clever/clever.component';
import { AktionshausFilterComponent } from './bauen/clever/aktionshaus-filter/aktionshaus-filter.component';
import { AktionshaeuserComponent } from './bauen/clever/aktionshaeuser/aktionshaeuser.component';
import { AttikaComponent } from './bauen/clever/aktionshaeuser/attika/attika.component';
import { FlachdachComponent } from './bauen/clever/aktionshaeuser/flachdach/flachdach.component';
import { KrueppelwalmdachComponent } from './bauen/clever/aktionshaeuser/krueppelwalmdach/krueppelwalmdach.component';
import { PultdachComponent } from './bauen/clever/aktionshaeuser/pultdach/pultdach.component';
import { PultdachVersetztComponent } from './bauen/clever/aktionshaeuser/pultdach-versetzt/pultdach-versetzt.component';
import { SatteldachComponent } from './bauen/clever/aktionshaeuser/satteldach/satteldach.component';
import { WalmdachComponent } from './bauen/clever/aktionshaeuser/walmdach/walmdach.component';
import { BauenComponent } from './bauen/bauen.component';
import { FinanzierungsanfrageComponent } from './service/finanzierungsanfrage/finanzierungsanfrage.component';
import { BudgetrechnerComponent } from './service/budgetrechner/budgetrechner.component';
import { ZinsrechnerComponent } from './service/zinsrechner/zinsrechner.component';
import { ZinsbindungComponent } from './service/zinsbindung/zinsbindung.component';
import { TilgungsrechnerComponent } from './service/tilgungsrechner/tilgungsrechner.component';
import { KonfigStartComponent } from './bauen/konfigurator/start/start.component';
import { KonfiguratorComponent } from './bauen/konfigurator/konfigurator.component';
import { KonfiguratorHeadComponent } from './bauen/konfigurator/konfigurator-head/konfigurator-head.component';
import { StepBauweise } from './bauen/konfigurator/step-bauweise/step-bauweise.component';
import { StepAktionshaus } from './bauen/konfigurator/step-aktionshaus/step-aktionshaus.component';
import { StepDachform } from './bauen/konfigurator/step-dachform/step-dachform.component';
import { StepDachfarbe } from './bauen/konfigurator/step-dachfarbe/step-dachfarbe.component';
import { StepFensterfarbe } from './bauen/konfigurator/step-fensterfarbe/step-fensterfarbe.component';
import { StepSchornstein } from './bauen/konfigurator/step-schornstein/step-schornstein.component';
import { StepAusstattung } from './bauen/konfigurator/step-ausstattung/step-ausstattung.component';
import { KaufenComponent } from './kaufen/kaufen.component';
import { AccessibilitySettingsComponent } from './shared/accessibility-settings/accessibility-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BauenComponent,
    ReferenzenComponent,
    FilterComponent,
    ResultsComponent,
    ViewsComponent,
    ReferenzSliderComponent,
    ReferenzDetailsComponent,
    UnternehmenComponent,
    ImpressumComponent,
    DatenschutzComponent,
    IndividuellComponent,
    CleverComponent,
    AktionshausFilterComponent,
    AktionshaeuserComponent,
    AttikaComponent,
    FlachdachComponent,
    KrueppelwalmdachComponent,
    PultdachComponent,
    PultdachVersetztComponent,
    SatteldachComponent,
    WalmdachComponent,
    FinanzierungsanfrageComponent,
    BudgetrechnerComponent,
    ZinsrechnerComponent,
    ZinsbindungComponent,
    TilgungsrechnerComponent,
    KonfigStartComponent,
    KonfiguratorComponent,
    KonfiguratorHeadComponent,
    StepBauweise,
    StepAktionshaus,
    StepDachform,
    StepDachfarbe,
    StepFensterfarbe,
    StepSchornstein,
    StepAusstattung,
    KaufenComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    KontaktModule,
    SharedModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
