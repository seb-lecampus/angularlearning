import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHelloComponent } from './page-hello.component';

describe('PageHelloComponent', () => {
  let component: PageHelloComponent;
  let fixture: ComponentFixture<PageHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
