import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ComponentsModule } from './components/components.module';
import { MaterialsModule } from './modules/materialIo.module';
import { AppComponent } from './app.component';



// ---------------------------------------------------------------------------
// -----------------------   PIPES | SERVICES  -------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// -----------------------   GUARDS | RESOLVERS  -----------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// -----------------------   ROUTES ------------------------------------------
// ---------------------------------------------------------------------------


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MaterialsModule,
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
