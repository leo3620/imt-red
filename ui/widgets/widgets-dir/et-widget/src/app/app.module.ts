import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    if (!customElements.get('et-app')) {
      const el = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('et-app', el);
    }
  }

  ngDoBootstrap() {}
}
