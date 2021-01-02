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
    `私は、2019年10月に来日し現在日本語学校で日本語を勉強しています。卒業した後、日本で新しい経験を積みたいと思っておりフランスで培った経験を活かして日本で働きたいと思っています。`,
    `フランスではWeb開発の分野で、特にフロントエンドとして７年間の経験があります（2011−2019）。`,
    `もし日本（可能であれば関西地方）でフロントエンド職をお探しでしたら遠慮なく私までご連絡ください。可能な限り早く対応いたします。`
  ];
  button = 'Download CV';
}
