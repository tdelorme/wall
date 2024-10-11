import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GitlabProjectsResponse} from "../model/gitlab.projects.response.model";

@Injectable({
  providedIn: 'root'
})
export class WallService {

  constructor(private http: HttpClient) { }

  getInformation(): Observable<GitlabProjectsResponse> {
    return this.http.get<GitlabProjectsResponse>('/api/wall/branch');
  }
}
