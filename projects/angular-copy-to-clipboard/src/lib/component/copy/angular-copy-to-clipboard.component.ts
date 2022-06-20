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
  @Input() content!: string | number;
  @Input() height: number = 25;
  @Input() width: number = 25;
  @Input() color: string = 'gray';
  hasGradient: boolean = false;
  @HostBinding("style.--c-i-color") iconColor: string = '';
  constructor() { }

  ngOnInit(): void {
    this.iconColor = this.color;
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
