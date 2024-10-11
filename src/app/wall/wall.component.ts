import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../component/card/card.component";
import {GitlabProjectsResponse} from "../model/gitlab.projects.response.model";
import {WallService} from "./wall.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.scss'
})
export class WallComponent implements OnInit {
  public datasource!: GitlabProjectsResponse;

  constructor(private wallService: WallService) {
  }

  ngOnInit() {
    this.wallService.getInformation().subscribe(value => this.datasource = value);
    interval(15000).subscribe(() => {
      this.wallService.getInformation().subscribe(value => this.datasource = value);
    });

  }
}
