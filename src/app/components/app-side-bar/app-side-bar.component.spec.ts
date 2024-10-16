import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSideBarComponent } from './app-side-bar.component';

describe('SideBarComponent', () => {
  let component: AppSideBarComponent;
  let fixture: ComponentFixture<AppSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
