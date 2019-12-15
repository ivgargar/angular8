import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = true;
  toggleParagraph() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
}
