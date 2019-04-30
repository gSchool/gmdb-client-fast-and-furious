import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image', () => {
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('div.poster').innerText).toContain('poster1');
  });

  it('should have a title', () => {
    const e1 = fixture.nativeElement;
    
    expect(e1.querySelector('div.title').innerText).toBeTruthy('Coco');
  });

  xit('should have a movie-info', () => {
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('div.').innerText).toBeTruthy();
  });

  xit('should have a plot', () => {
    
    expect(component).toBeTruthy();
  });



});
