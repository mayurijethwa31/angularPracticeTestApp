import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAp';
  messageFromParent = "I'm a parent";
  public message = "";
  public messageFromFeatureChild: "";
}
