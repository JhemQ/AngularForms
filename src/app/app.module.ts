import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { BlogModule } from './blog/blog.module';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommandBarComponent,

  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BlogModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
