import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defaultText = '';

  onValueChange(event) {
    console.log(event.markDown); // this should print markdown which user entered
    console.log(event.html); // this should print html output for the markdown
  }

  constructor() {
  }

}
