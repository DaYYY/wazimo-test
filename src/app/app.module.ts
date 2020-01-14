import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: PeopleListComponent }];
@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
