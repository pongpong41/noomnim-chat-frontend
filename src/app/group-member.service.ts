import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Group } from './group';
import { HTTPResponse } from './response';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GroupMemberService {
  members?: User[];
  currentId?: number;

  constructor(private http: HttpClient) { }

  getMembers(groupId?: number) {
    if (this.currentId === groupId) { return this.members; }
    this.currentId = groupId;
    if (groupId) {
      this.http.get<HTTPResponse<Group[]>>(resolve(environment.apiUrl, 'group/members?keys=' + groupId)).subscribe((res) => {
        this.members = res.data;
      });
    } else {
      this.members = undefined;
    }
    return this.members;
  }
}
