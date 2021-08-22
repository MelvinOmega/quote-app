// import { from } from "rxjs";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "@angular/compiler";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      }) 


export class quoteDetailComponent implements OnInit {
    @Input() quote!: Quote;
    @Output() isComplete = new EventEmitter<boolean>();

    quoteComplete(complete: boolean) {
        this.isComplete.emit(complete);
    }

    quoteDelete(complete:boolean){
        this.isComplete.emit(complete);
    }
    constructor() {}
    ngOnInit() {
        
    }
}