
import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = "red"
  selectedProject: Project[];
  projects$;
  constructor(private projectsService: ProjectsService) { 
  
  }
  
  ngOnInit() {
    this.getProjects();
  }
  getProjects(){
  this.projects$ = this.projectsService.all();
  }
  selectProject(project){
   this.selectedProject = project;
   
  }
  cancel(){
    this.selectProject(null);
  }
}
