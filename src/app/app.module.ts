import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';


import { APP_ROUTES } from './app.routes';
import { ErrorComponent } from './error/error.component';
import { FilterPipe } from './filter.pipe';

import { LoggingService } from './services/logging/logging.service';
import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    ErrorComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [LoggingService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
