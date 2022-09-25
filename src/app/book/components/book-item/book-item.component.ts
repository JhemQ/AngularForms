import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookInterface } from '../../models/book-interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book:BookInterface | undefined;
  @Output() bookEmitter = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }

  editBook(){
    this.bookEmitter.emit(this.book?.id)
  }

  deleteBook(){
    this.bookEmitter.emit(this.book?.id)
  }

}
