import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTransPopOverComponent } from './new-trans-pop-over.component';

describe('NewTransPopOverComponent', () => {
  let component: NewTransPopOverComponent;
  let fixture: ComponentFixture<NewTransPopOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTransPopOverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTransPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
