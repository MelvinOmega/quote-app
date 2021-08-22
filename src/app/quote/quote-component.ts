// import { Quote } from "@angular/compiler";
// import { Component, OnInit} from "@angular/core";
// import { Quote } from '../details';
// import { Quote } from "../quote";

// @Component({
//     selector: 'app-quote',
//     templateUrl: './details.component.html',
//     styleUrls: ['details.component.css']
// })
// export class detailsComponent implements OnInit {
//     quotes: Quote[] = [
//         new Quote(1,'watch finding nemo'),
//     ];
// }

// import { Quote } from "@angular/compiler";
import { Component, OnInit  } from "@angular/core";
import { Quote } from '../quote'

@Component ({
    selector: 'app-quote',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class detailsComponent implements OnInit {
    myQuotes:Quote[] = [
        new Quote(1,"Your dreams"),
        new Quote(2,"Your dreams"),
        new Quote(3,"Your dreams"),
        new Quote(4,"Your dreams"),
        new Quote(5,"Your dreams"),

    ];
    toggleDetails(index:number) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    // deleteGoal(isComplete: boolean, index: numbetr) {
    //     if(isComplete){
    //         let toDelete = confirm('Are')
    //     }
    // }



    // addNewQuote(qs) {
    //     let quoteLenght = this.myQuotes.length;
    // }
    constructor() {}

    ngOnInit(): void {

    }
}





