import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({

  imports: [
    HomeComponent,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  declarations: []
})
export class AppModule {
}
