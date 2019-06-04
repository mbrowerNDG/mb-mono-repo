import { Project } from '@workshop/core-data';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  currentProject: Project;
  orginalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input()
  set project(value) {
    if (value) this.orginalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }

  constructor() {}

  ngOnInit() {}
}
