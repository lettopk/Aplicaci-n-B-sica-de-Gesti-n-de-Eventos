import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService]
    });

    service = TestBed.inject(EventService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should get a events list', () => {
    const mockEvents = [
      { id: 1, title: 'Evento 1', date: '2025-01-01T11:00', location: 'Cali', description: 'Descripción evento 1' },
      { id: 2, title: 'Evento 2', date: '2025-02-01T12:00', location: 'Bogotá', description: 'Descripción evento 2' }
    ];

    service.getEvents().subscribe(events => {
      expect(events.length).toBe(2);
      expect(events).toEqual(mockEvents);
    });

    const req = httpMock.expectOne('http://127.0.0.1:5000/events'); // Ajusta la URL si es necesario
    expect(req.request.method).toBe('GET');
    req.flush(mockEvents);
  });

  it('should add an event', () => {
    const newEvent = { id: 3, title: 'Evento 3', date: '2025-03-01T13:50', location: 'Medellin', description: 'Descripción evento 3' };

    service.createEvent(newEvent).subscribe(event => {
      expect(event).toEqual(newEvent);
    });

    const req = httpMock.expectOne('http://127.0.0.1:5000/events');
    expect(req.request.method).toBe('POST');
    req.flush(newEvent);
  });
});
