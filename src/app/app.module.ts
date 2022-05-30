import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import * as pages from '../pages';

@NgModule({
  declarations: [
    AppComponent,
    pages.CardsComponent,
    pages.CopyComponent,
    pages.DragClassComponent,
    pages.DragDelayComponent,
    pages.DragHandleComponent,
    pages.FormComponent,
    pages.GroupsComponent,
    pages.LockAxisComponent,
    pages.NestedComponent,
    pages.SimpleComponent,
    pages.SimpleHorizontalComponent,
    pages.SimpleScrollerComponent,
    pages.TransitionDurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmoothDnDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
