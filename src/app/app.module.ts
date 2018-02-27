import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ResaltadoDirective } from './directives/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgSwitchComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
