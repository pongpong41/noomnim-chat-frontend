import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SocketIoModule } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { ChatComponent } from './chat/chat.component';
import { SearchComponent } from './chat/search/search.component';
import { GroupComponent } from './chat/group/group.component';
import { GroupService } from './group.service';
import { NewMessageComponent } from './chat/message-box/new-message/new-message.component';
import { ChatService } from './chat.service';
import { MessageBoxComponent } from './chat/message-box/message-box.component';
import { MessageComponent } from './chat/message-box/message/message.component';
import { TimePipe } from './time.pipe';
import { environment } from 'src/environments/environment';
import { SectionHeaderComponent } from './chat/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    GroupComponent,
    MessageBoxComponent,
    SearchComponent,
    NewMessageComponent,
    MessageComponent,
    SectionHeaderComponent,
    TimePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    environment.production ?
      SocketIoModule.forRoot({ url: undefined, options: { path: '/api/socket.io' } }) :
      SocketIoModule.forRoot({ url: environment.apiUrl }),
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
