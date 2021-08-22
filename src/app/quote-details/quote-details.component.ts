import { from } from "rxjs";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "@angular/compiler";

export class quoteDetailComponent implements OnInit {
    @Input() quote: Quote;
    @Output() isComplete = new EventEmitter<boolean>();

    quoteComplete(complete: boolean) {
        this.isComplete.emit(complete);
    }
    constructor() {}
    ngOnInit() {
        
    }
}