import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwappComponent } from './swapp.component';

describe('SwappComponent', () => {
  let component: SwappComponent;
  let fixture: ComponentFixture<SwappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwappComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
