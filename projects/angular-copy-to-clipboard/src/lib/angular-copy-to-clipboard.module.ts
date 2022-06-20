import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularCopyToClipboardComponent } from './component/copy/angular-copy-to-clipboard.component';
import { AngularCopyToClipboardDirective } from './directive/angular-copy-to-clipboard.directive';



@NgModule({
  declarations: [
    AngularCopyToClipboardComponent,
    AngularCopyToClipboardDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularCopyToClipboardComponent,
    AngularCopyToClipboardDirective
  ]
})
export class AngularCopyToClipboardModule { }
