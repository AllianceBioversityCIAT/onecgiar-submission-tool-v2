import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOptionComponent } from './sidebar-option.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarOptionComponent', () => {
  let component: SidebarOptionComponent;
  let fixture: ComponentFixture<SidebarOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOptionComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarOptionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
