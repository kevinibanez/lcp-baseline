import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ---------------------------------------------------------------------------
// -----------------------   UX - elements  ----------------------------------
// ---------------------------------------------------------------------------
import { MaterialsModule } from '../modules/materialIo.module';
import { HeaderComponent } from './ux/header/header.component';
import { FooterComponent } from './ux/footer/footer.component';
// ---------------------------------------------------------------------------
// -----------------------   CONTRACTOR  -------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// -----------------------   PROJECTS  ---------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// -----------------------   WAGEDATA  ---------------------------------------
// ---------------------------------------------------------------------------








@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        RouterModule,
        MaterialsModule,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    entryComponents: [
    ],
    providers: [
    ]
    })
export class ComponentsModule {
}


