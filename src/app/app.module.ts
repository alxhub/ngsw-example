import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { CheckForUpdateService } from './check-for-update.service';
import { LogUpdateService } from './log-update.service';
import { PromptUpdateService } from './prompt-update.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
    CheckForUpdateService,
    LogUpdateService,
    PromptUpdateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
