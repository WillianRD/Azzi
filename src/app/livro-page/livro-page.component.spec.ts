import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroPageComponent } from './livro-page.component';

describe('LivroPageComponent', () => {
  let component: LivroPageComponent;
  let fixture: ComponentFixture<LivroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
