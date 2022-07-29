import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.components';
import { StartComponet } from './courses/star/start.componet';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent,
    StartComponet,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
