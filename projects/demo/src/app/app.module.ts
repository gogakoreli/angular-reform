import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReformModule } from 'reform';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReformModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
