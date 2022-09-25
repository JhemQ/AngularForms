import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookService } from './services/book.service';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    CommandBarComponent
  ],
  providers:[BookService]
})
export class BookModule { }
