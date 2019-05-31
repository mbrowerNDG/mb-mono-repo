import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 model = 'projects'
  constructor(private httpClient: HttpClient) { }

getUrl()
{
  return `${BASE_URL}${this.model}`;
}
all() {
return this.httpClient.get(this.getUrl());
}
getUrlForId(id){
  return `${this.getUrl()}/${id}`
}
create(project) {
  return this.httpClient.post(this.getUrlForId(project.id), project);
}
update(project) {
  return this.httpClient.patch(this.getUrlForId(project.id), project);
}
delete(projectId) {
  return this.httpClient.delete(this.getUrlForId(projectId));
}
}
