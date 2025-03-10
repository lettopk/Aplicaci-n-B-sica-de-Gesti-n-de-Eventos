import { TestBed } from '@angular/core/testing';
import { EventListComponent } from './event-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventService } from '../../services/event.service';

describe('EventListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, EventListComponent], 
      providers: [EventService] 
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EventListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
