import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from './user';
import { SocketResponse } from './response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createClient = this.socket.fromEvent<SocketResponse>('create-client');
  user?: User;

  constructor(private socket: Socket) {
    this.createClient.subscribe(msg => {
      if (msg.data) {
        this.user = msg.data;
      }
    });
  }

  login(name: string) {
    this.socket.emit('create-client', name);
  }

  logout() {
    this.user = undefined;
  }
}
