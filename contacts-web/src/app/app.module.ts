import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
