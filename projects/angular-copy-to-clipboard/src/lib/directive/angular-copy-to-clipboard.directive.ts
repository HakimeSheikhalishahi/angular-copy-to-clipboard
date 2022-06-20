import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[copyToClipboard]'
})
export class AngularCopyToClipboardDirective {
  @Input() content!: string | number;
  @Input() targetId!: string | number;
  @Output() success: EventEmitter<boolean> = new EventEmitter();
  @Output() error: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    this.copy();
  }
  public copy(): void {
    if (this.targetId) {
      const target = document.getElementById(this.targetId.toString());
      this.content = target?.innerText || '';
    }
    navigator.clipboard.writeText(this.content.toString()).then(() => {
      this.success.emit(true);
    }
    ).catch(e => {
      this.error.emit(true);
    });
  }
}
