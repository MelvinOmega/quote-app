import { Quote } from "@angular/compiler";
import { Component, OnInit} from "@angular/core";
import { Quote } from '../details';
import { Quote } from "../quote";

@Component({
    selector: 'app-quote',
    templateUrl: './details.component.html',
    styleUrls: ['details.component.css']
})
export class detailsComponent implements OnInit {
    quotes: Quote[] = [
        new Quote(1,'watch finding nemo'),
    ];
}

