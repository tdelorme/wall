import {Component, Input} from '@angular/core';
import {Project} from "../../model/project.model";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() data: Project[] = [];
  @Input() title: string = "";

  getPipelineLink(pipelineNumber: number | undefined | null) {
    return `http://gitlab.ent.local/etude/fmi/java/${this.title}/-/pipelines/${pipelineNumber}`;
  }
}
