import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.components';
import { StartComponet } from './courses/star/start.componet';
import { ReplacePip } from './courses/pip/replace.pip';
import { navBarcomponent } from './courses/nav-bar/nav-bar.component';
import { Error404component } from './error-404/error-404.componet';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent,
    StartComponet,
    ReplacePip,
    navBarcomponent,
    Error404component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:'courses', pathMatch: 'full'
      },
      {
        path:'courses', component: courseListComponent
      },
      {
        path:'**', component: Error404component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
