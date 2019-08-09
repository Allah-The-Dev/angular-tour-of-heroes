import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule ],
  declarations: [ 
    AppComponent, 
    HeroesComponent, 
    HeroDetailComponent, 
    MessageComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService, MessageService]
})
export class AppModule { }
