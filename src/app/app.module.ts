import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
