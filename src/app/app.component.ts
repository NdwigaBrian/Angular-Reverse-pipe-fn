import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionmenuComponent } from "./actionmenu/actionmenu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ActionmenuComponent]
})
export class AppComponent {
  title = 'red';
}
