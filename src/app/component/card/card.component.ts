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
  @Input() title: string = '';

  getPipelineLink(pipelineNumber: number | undefined | null) {
    return `http://gitlab.ent.local/etude/fmi/java/${this.title}/-/pipelines/${pipelineNumber}`;
  }

  getClassByPipelineStatus(pipelineStatus: string) {
    let clazz = '';
    
    switch(pipelineStatus) {
      case 'success':
        clazz = 'success-pipeline';
        break;
      case 'manual': 
        clazz = 'waiting-pipeline';
        break;
      case 'pending':
      case 'running':
        clazz = 'pending-pipeline';
        break;
      case 'failed':
        clazz = 'failed-pipeline'
        break;
      default:
        clazz = 'unknow';
    }

    return clazz;
  }
}
