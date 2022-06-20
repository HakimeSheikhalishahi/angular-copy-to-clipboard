import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCopyToClipboardComponent } from './angular-copy-to-clipboard.component';

describe('AngularCopyToClipboardComponent', () => {
  let component: AngularCopyToClipboardComponent;
  let fixture: ComponentFixture<AngularCopyToClipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCopyToClipboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCopyToClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
