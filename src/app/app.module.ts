import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { quoteDetailComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StrikethroughDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    quoteDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
