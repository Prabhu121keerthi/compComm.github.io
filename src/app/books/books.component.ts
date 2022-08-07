import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  books: Book[] = [
    {
      image : "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      name : "Clean Code",
      author : "Robert C Martin",
      amount : 700
    },

    {
      image : "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
     name : "Pragmatic Programer",
     author : "David Thomas",
     amount: 800
    },
    {
      image : "https://m.media-amazon.com/images/I/81Adpoh9IqL._AC_SS130_.jpg",
     name : "Art of Computer Programming",
     author : "Donald john",
     amount : 500
    },
    {
      image : "https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/591/9788120340077.jpg",
     name : "Introduction to Algorithm",
     author : "T Cormen",
     amount : 900
    },
  ]

   cart : Book[] = [];

  isShowing : boolean = true;

  addToCart(book : Book) {
    console.log(book);
  }

}
