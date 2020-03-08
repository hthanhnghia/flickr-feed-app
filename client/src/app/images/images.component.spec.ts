import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './images.component';
import { ImagesService } from './images.service';
import { ImagesServiceMock } from '../mocks/images.service.mock';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        HttpClientModule,
        { provide: ImagesService, useClass: ImagesServiceMock },
      ],
      declarations: [ImagesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one image`, async(() => {
    expect(component.data.length).toEqual(1);
  }));

  it(`html should render one image`, async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelectorAll('.card-body img');
    expect(el.length).toEqual(1);
  }));
});
