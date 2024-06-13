import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtisitsComponent } from './page-artisits.component';

describe('PageArtisitsComponent', () => {
  let component: PageArtisitsComponent;
  let fixture: ComponentFixture<PageArtisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArtisitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArtisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
