import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CdktreeComponentModule } from './cdktree/cdktree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CdktreeComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
