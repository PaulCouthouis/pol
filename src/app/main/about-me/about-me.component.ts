import { Component } from '@angular/core';

@Component({
  selector: 'pol-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  name = 'Paul Couthouis';
  photo = 'assets/images/photo.jpg';
  job = 'Frontend-developer';
  description = [
    `Après bientôt une année et demi sabbatique au Japon où j'ai pu découvrir la culture et apprendre la langue dans un école spécialisé, je souhaite désormais tenter ma chance, ici au Japon, professionnellement.`,
    `Je possède 7 ans d'expériences (2011 - 2019) en France dans le domaine du développement web, plus précisément en tant que front-end. Mes dernières emplois m'ont permis d'utiliser l'efficace framework Angular (dans ses versions 2+), même si je pense m'en sortir tout aussi bien avec des bibliothèques comme VueJS ou React, au vu des philosophies très similaires (séparation de l'interface par composants réutilisables).`,
    `Je pense être rigoureux et à l'écoute. J'aime développer des applications qui soient performantes, maintenables et au risque de régressions limités. C'est pour ça que j'encourage toujours à mettre en place une politique de tests unitaires et d'intégration.
`,
    `C'est en tout cas cette politique que j'ai pu en mettre en place dans mon dernier travail en France où j'étais le "lead" d'une équipe de 4 développeurs front. Cette mission m'a donné l'opportunité de travailler avec des développeurs moins expérimenté. De la même manière que mes ainées par le passé, j'ai pu ainsi gouter au plaisir de transmettre mes connaissances.
`,
    `Je sais comprendre et m'exprimer en japonais, j'ai d'ailleurs passer récemment l'examen du JLPT N2 où j'attends désormais les résultats fin janvier 2021.
J'ai cependant bien conscient que je dois encore m'améliorer et une première expérience professionnel dans un cadre japonais serait une bonne occasion pour cela.
`,
    `Si vous êtes à la recherche d'un développeur front-end pour une entreprise basé au Japon (de préférence dans la région du Kansai), n'hésitez pas à me contacter, je serais le plus réactif possible.
`
  ];
  button = 'Download CV';
}
