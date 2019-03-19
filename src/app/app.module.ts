import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import { SocketIoModule } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './chat/message/message.component';
import { SearchComponent } from './chat/search/search.component';
import { GroupComponent } from './chat/group/group.component';
import { GroupService } from './group.service';
import { NewMessageComponent } from './chat/message/new-message/new-message.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    GroupComponent,
    MessageComponent,
    SearchComponent,
    NewMessageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    SocketIoModule.forRoot({ url: 'http://localhost:3000' }),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    GroupService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
