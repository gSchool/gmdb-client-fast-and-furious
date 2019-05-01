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

  it('should have a movie-info', () => {
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('div.movie-info').innerText).toBeTruthy('');
  });

  it('should have a plot', () => {
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('div.textarea').innerText).toBeTruthy('');
  });



});
