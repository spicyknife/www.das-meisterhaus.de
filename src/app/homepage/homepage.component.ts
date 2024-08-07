import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  // ********** SLIDER ********** //
  // ITEM-1
  slide1ImageSrc = '../../assets/img/slider/bauen.jpg';
  slide1Headline = 'Bauen';
  slide1Subline = '';
  slide1Url = '/bauen';
  // ITEM-2
  slide2ImageSrc = '../../assets/img/slider/individuell-bauen.jpg';
  slide2Headline = 'Individuell bauen';
  slide2Subline = '';
  slide2Url = '/individuell-bauen';
  // ITEM-3
  slide3ImageSrc = '../../assets/img/slider/clever-bauen.jpg';
  slide3Headline = 'Konfigurator';
  slide3Subline = '';
  slide3Url = '/starte-konfigurator';

  // ********** SUB-NAVIGATION ********** //
  // ITEM-1
  subNavItem1Headline = 'Bauen';
  subNavItem1Subline = '';
  subNavItem1Url = '/bauen';
  subNavItem1Size = 'col-6';
  subNavItem1Id = 'bauen';
  // ITEM-2
  subNavItem2Headline = 'Konfigurator';
  subNavItem2Subline = '';
  subNavItem2Url = '/starte-konfigurator';
  subNavItem2Size = 'col-6';
  subNavItem2Id = 'clever-bauen';
  // ITEM-3
  subNavItem3Headline = 'Referenzen';
  subNavItem3Subline = '';
  subNavItem3Url = '/referenzen';
  subNavItem3Size = 'col-3';
  subNavItem3Id = 'referenzen';
  // ITEM-4
  subNavItem4Headline = 'Kaufen';
  subNavItem4Subline = '';
  subNavItem4Url = '/ueber-uns';
  subNavItem4Size = 'col-3';
  subNavItem4Id = 'unternehmen';
  // ITEM-5
  subNavItem5Headline = 'Über uns';
  subNavItem5Subline = '';
  subNavItem5Url = '/ueber-uns';
  subNavItem5Size = 'col-3';
  subNavItem5Id = 'unternehmen';

  // ********** TESTIMONIALS ********** //
  // ITEM-1
  testimonial1Text =
    'Tolle Beratung, kompetentes Team. Der Geschäftsführer Uwe Hassler hat sich persönlich sehr viel Zeit genommenen. Das Team geht auf alle Wünsche ein und gab uns von Anfang an bis zur Fertigstellung ein super Gefühl. Hat alles wie versprochen funktioniert. klare Empfehlung!';
  testimonial1Author = 'Frank von Feilitzsch';
  // ITEM-2
  testimonial2Text =
    'Herrn Haßler kenne ich als soliden Partner auf Augenhöhe. Für seine Kunden hat er immer ein offenes Ohr. Von der Bauvorbereitung bis hin zur Ausführung wurde man freundschaftlich begleitet. Unser Wohnhaus wurde fristgerecht und qualitativ hochwertig erstellt. Kleinere Problemchen werden schnell geklärt. Diese Firma kann ich gerne weiterempfehlen.';
  testimonial2Author = 'Alexander Girsig';
  testimonial3Text =
    'Top Adresse für alle, die mit einem kompetenten Partner bauen wollen. Die halten was andere versprechen.  Haben schon ganz andere Erfahrungen machen müssen. Tolles Team, vom Geschäftsführer bis zum Bauleiter.  Wir waren immer zufrieden. Nur zum empfehlen.';
  testimonial3Author = 'Jörg Böhrer';
  // ITEM-4
  testimonial4Text =
    'Sehr gute Erfahrungen mit der Fa. Astori. Herr Hassler ist kompetent und ehrlich. Probleme werden nicht verschoben, sondern sofort aus der Welt geschafft. Ich habe bereits 2 Häuser mit Astori gebaut und würde mich jederzeit wieder dafür entscheiden.';
  testimonial4Author = 'Uli Petschler';
  // ITEM-5
  testimonial5Text =
    'Sehr gute Erfahrung gemacht. Hat immer alles geklappt und es wurde alles  eingehalten wie vereinbart. Würde ich jedem sofort weiterempfehlen. Top Adresse!';
  testimonial5Author = 'Wolfgang Stark';
  ngOnInit() {}
}
