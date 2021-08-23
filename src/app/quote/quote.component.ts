import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Life is short and we all have to do so many things. we need a constant source of motivation which pushes us when we are tired', ' by Campbell' ,new Date(2020,3,14)),
    new Quote(2,'Life is a question and how we live it is our answer. See your life as a question and live your journey of life such that it becomes the best answer to that question.','Gary Keller',new Date(2020,3,14)),
    new Quote(3,' Short life with huge respect is much better than a normal long life without respect.Try to live that kind of life which gives you huge respect and popularity. So that people will remember you even after your death. Most people nowadays live life in a comfort zone and even die in it.','Zainaba Jamal',new Date(2020,3,14)),
    new Quote(4,'Life is a precious gift given to us by nature. It is already very beautiful. But we forget this thing due to some bad experiences','Jimmy Craig',new Date(2020,3,14)),
    new Quote(5,'Life can be shaped in the desired way by changing your habits.We can shape our future in a better way changing our weak lifestyle into a healthier and lively one. It can be only done by replacing bad habits with good ones.','Justin Martin',new Date(2020,3,14)),
    new Quote(6,'Life is given to us by God to take this humanity to whole new level.','Marcus Garvey',new Date(2020,3,14)),
  ];

  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }

  deleteQuote(isComplete: any, index: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

    
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
