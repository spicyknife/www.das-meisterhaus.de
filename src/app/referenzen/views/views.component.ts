import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface View {
  details: string[];
  images: string[];
}

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  view: View = { details:[], images:[]};
  views: View[] = [
    // ***********************************
    // ***********************************
    // ATTIKADACH - REFERENZ 01
    {
      images: [
        '../../../assets/img/referenzen/attikadach/referenz-attikadach-01/slide-01.jpg',
        '../../../assets/img/referenzen/attikadach/referenz-attikadach-01/slide-02.jpg',
        '../../../assets/img/referenzen/attikadach/referenz-attikadach-01/slide-03.jpg'
      ],
      details: [
        'Emskirchen',
        '2009',
        'EFH',
        'Attikadach',
        '160 m²',
        '2',
        'Nein'
      ]
    },
    // ***********************************
    // ***********************************
    // PULTDACH - REFERENZ 01
    {
      images: [
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-01/slide-01.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-01/slide-02.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-01/slide-03.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-01/slide-04.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-01/slide-05.jpg'
      ],
      details: [
        'Bad Windsheim',
        '2006',
        'EFH',
        'Pultdach',
        '122 m²',
        '2',
        'Nein'
      ]
    },
    // PULTDACH - REFERENZ 02
    {
      images: [
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-02/slide-01.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-02/slide-02.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-02/slide-03.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-02/slide-04.jpg',
        '../../../assets/img/referenzen/pultdach/referenz-pultdach-02/slide-05.jpg'
      ],
      details: [
        'Schwanstetten',
        '2011',
        'EFH',
        'Pultdach',
        '169 m²',
        '2',
        'Nein'
      ]
    },
    // ***********************************
    // ***********************************
    // SATTELDACH - REFERENZ 01
    {
      images: [
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-01/slide-01.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-01/slide-02.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-01/slide-03.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-01/slide-04.jpg'
      ],
      details: [
        'Emskirchen',
        '2016',
        'EFH',
        'Satteldach',
        '152 m²',
        '2',
        'Nein'
      ]
    },
    // SATTELDACH - REFERENZ 02
    {
      images: [
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-02/slide-01.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-02/slide-02.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-02/slide-03.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-02/slide-04.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-02/slide-05.jpg'
      ],
      details: ['Birnbaum', '2014', 'EFH', 'Satteldach', '160 m²', '2', 'Ja']
    },
    // SATTELDACH - REFERENZ 03
    {
      images: [
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-03/slide-01.jpg',
        '../../../assets/img/referenzen/satteldach/referenz-satteldach-03/slide-02.jpg'
      ],
      details: ['Dachsbach', '2016', 'EFH', 'Satteldach', '122 m²', '2', 'Ja']
    },
    // ***********************************
    // ***********************************
    // VERSETZTES PULTDACH - REFERENZ 01
    {
      images: [
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-01/slide-01',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-01/slide-02',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-01/slide-03',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-01/slide-04',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-01/slide-05'
      ],
      details: [
        'Schwanstetten',
        '2008',
        'EFH',
        'Versetztes Pultdach',
        '251 m²',
        '2',
        'Nein'
      ]
    },
    // VERSETZTES PULTDACH - REFERENZ 02
    {
      images: [
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-02/slide-01.jpg',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-02/slide-02.jpg',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-02/slide-03.jpg'
      ],
      details: [
        'Neustadt a.d. Aisch',
        '2012',
        'EFH',
        'Versetztes Pultdach',
        '128 m²',
        '2',
        'Ja'
      ]
    },
    // VERSETZTES PULTDACH - REFERENZ 03
    {
      images: [
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-03/slide-01.jpg',
        '../../../assets/img/referenzen/versetztes-pultdach/referenz-versetztes-pultdach-03/slide-02.jpg'
      ],
      details: [
        'Diespeck',
        '2017',
        'EFH',
        'Versetztes Pultdach',
        '200 m²',
        '2',
        'Nein'
      ]
    },
    // ***********************************
    // ***********************************
    // WALMDACH - REFERENZ 01
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-01/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-01/slide-02.jpg'
      ],
      details: ['Hohlweiler', '2007', 'EFH', 'Walmdach', '116 m²', '1', 'Nein']
    },
    // WALMDACH - REFERENZ 02
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-02/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-02/slide-02.jpg'
      ],
      details: [
        'Neustadt a.d. Aisch',
        '2008',
        'EFH',
        'Walmdach',
        '256 m²',
        '3',
        'Nein'
      ]
    },
    // WALMDACH - REFERENZ 03
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-03/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-03/slide-02.jpg'
      ],
      details: ['Altheim', '2008', 'EFH', 'Walmdach', '105 m²', '1', 'Nein']
    },
    // WALMDACH - REFERENZ 04
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-04/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-04/slide-02.jpg'
      ],
      details: ['Schwabach', '2012', 'EFH', 'Walmdach', '180 m²', '2', 'Nein']
    },
    // WALMDACH - REFERENZ 05
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-05/slide-01.jpg'
      ],
      details: ['Diespeck', '2010', 'EFH', 'Walmdach', '153 m²', '2', 'Nein']
    },
    // WALMDACH - REFERENZ 06
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-06/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-06/slide-02.jpg'
      ],
      details: [
        'Oberhöchstadt',
        '2016',
        'EFH',
        'Walmdach',
        '153 m²',
        '1',
        'Nein'
      ]
    },
    // WALMDACH - REFERENZ 07
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-07/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-07/slide-02.jpg'
      ],
      details: ['Dachsbach', '2018', 'EFH', 'Walmdach', '171 m²', '2', 'Nein']
    },
    // WALMDACH - REFERENZ 08
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-08/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-08/slide-02.jpg'
      ],
      details: [
        'Neustadt a.d. Aisch (Süd)',
        '2019',
        'EFH',
        'Walmdach',
        '129 m²',
        '2',
        'Ja'
      ]
    },
    // WALMDACH - REFERENZ 09
    {
      images: [
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-09/slide-01.jpg',
        '../../../assets/img/referenzen/walmdach/referenz-walmdach-09/slide-02.jpg'
      ],
      details: [
        'Neustadt a.d. Aisch (Süd)',
        '2019',
        'EFH',
        'Walmdach',
        '168 m²',
        '2',
        'Nein'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if(id!==null) {
      this.view = this.views[+id - 1];
    }
  }
  // ********* TESTIMONIALS ********* //
  // ITEM-1
  testimonial1Text =
    'Tolle Beratung, kompetentes Team. Der Geschäftsführer Uwe Hassler hat sich persönlich sehr viel Zeit genommenen. Das Team geht auf alle Wünsche ein und gab uns von Anfang an bis zur Fertigstellung ein super Gefühl. Hat alles wie versprochen funktioniert. klare Empfehlung!';
  testimonial1Author = 'Frank von Feilitzsch';
  // ITEM-2
  testimonial2Text =
    'Herrn Haßler kenne ich als soliden Partner auf Augenhöhe. Für seine Kunden hat er immer ein offenes Ohr. Von der Bauvorbereitung bis hin zur Ausführung wurde man freundschaftlich begleitet. Unser Wohnhaus wurde fristgerecht und qualitativ hochwertig erstellt. Kleinere Problemchen werden schnell geklärt. Diese Firma kann ich gerne weiterempfehlen.';
  testimonial2Author = 'Alexander Girsig';
  // ITEM-3
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
