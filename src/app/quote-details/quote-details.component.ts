import { from } from "rxjs";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "@angular/compiler";

export class QuoteDetailComponent implements OnInit {
    @Input() quotes: Quote;
    @Output() isComplete = new EventEmitter<boolean>();

    quoteComplete(complete: boolean) {
        this.isComplete.emit(complete);
    }
    constructor() {}
    ngOnInit() {
        
    }
}