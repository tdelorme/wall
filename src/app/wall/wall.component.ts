import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../component/card/card.component";
import {WallService} from "./wall.service";
import {interval, switchMap} from "rxjs";

@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.scss'
})
export class WallComponent {
  datasource$ = interval(15000).pipe(switchMap(() => this.wallService.getInformation()));

  constructor(private wallService: WallService) {
  }
}
