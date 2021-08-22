
import { Component, OnInit  } from "@angular/core";
import { Quote } from '../quote'

@Component ({
    selector: 'app-quote',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class detailsComponent implements OnInit {
    quotes: Quote[] = [
        new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
        new Quote(2,'Buy Cookies','I have to buy cookies for the parrot'),
        new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon'),
        new Quote(4,'Get Dog Food','Pupper likes expensive snacks'),
        new Quote(5,'Solve math homework','Damn Math'),
        new Quote(6,'Plot my world domination plan','Cause I am an evil overlord'),
      ];
    toggleDetails(index:number) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    constructor() {}

    ngOnInit(){

    }
}




