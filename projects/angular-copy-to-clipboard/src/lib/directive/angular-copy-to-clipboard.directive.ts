import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[copyToClipboard]'
})
export class AngularCopyToClipboardDirective {
  @Input() targetId!: string | number;
  @Output() success: EventEmitter<boolean> = new EventEmitter();
  @Output() error: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    this.copy();
  }
  public copy(): void {
    if (!this.targetId) {
      this.error.emit(true);
      return;
    }
    const target = document.getElementById(this.targetId.toString());
    navigator.clipboard.writeText(target?.innerText || '').then(() => {
      this.success.emit(true);
    }
    ).catch(e => {
      const range = document.createRange();
      const selection = window.getSelection();
      if (!target) {
        this.error.emit(true);
      } else {
        range.selectNodeContents(target);
        selection?.removeAllRanges();
        selection?.addRange(range);
        const res = document.execCommand('copy');
        if (res) {
          this.success.emit(true);
        } else {
          this.error.emit(true);
        }
      }
    });

  }
}
