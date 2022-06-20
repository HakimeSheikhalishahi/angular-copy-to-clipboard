import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-copy-to-clipboard',
  templateUrl: './angular-copy-to-clipboard.component.html',
  styleUrls: ['./angular-copy-to-clipboard.component.css']
})
export class AngularCopyToClipboardComponent implements OnInit {
  @Output() success: EventEmitter<boolean> = new EventEmitter();
  @Output() error: EventEmitter<boolean> = new EventEmitter();
  @Input() targetId!: string | number;
  @Input() height: number = 1.3;
  @Input() width: number = 1.3;
  @Input() color: string = 'gray';
  hasGradient: boolean = false;
  @HostBinding("style.--c-i-color") iconColor: string = '';
  constructor() { }

  ngOnInit(): void {
    this.iconColor = this.color;
  }
  public copy(): void {
    if(!this.targetId){
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
        if (!res) {
          this.error.emit(true);
        }
      }
    });

  }
}
