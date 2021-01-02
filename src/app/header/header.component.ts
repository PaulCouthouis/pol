import { Component } from '@angular/core';

@Component({
  selector: 'pol-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name = 'Paul Couthouis';
  photo = 'assets/images/test2.jpg';
}
