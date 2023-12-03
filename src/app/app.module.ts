import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { EventSectionComponent } from './event-list/event-section/event-section.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event-list/tasksList/:id', component: EventListComponent },
  { path: 'event-section/:id/Tasks', component: EventSectionComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    EventListComponent,
    HomeHeaderComponent,
    HeroComponent,
    EventSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
