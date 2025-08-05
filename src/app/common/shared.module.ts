import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../common/components/footer/footer.component';
import { HeaderComponent } from '../common/components/header/header.component';
import { HeaderContactComponent } from '../common/components/header-contact/header-contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeaderContactComponent,
    FooterComponent
  ],
})
export class SharedModule { }
