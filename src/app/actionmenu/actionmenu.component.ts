import { Component } from '@angular/core';
import { ReversePipe } from "../reverse.pipe";

@Component({
    selector: 'app-actionmenu',
    standalone: true,
    templateUrl: './actionmenu.component.html',
    styleUrl: './actionmenu.component.css',
    imports: [ReversePipe]
})
export class ActionmenuComponent {

}
