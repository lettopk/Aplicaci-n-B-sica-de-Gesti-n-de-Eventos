import pytest
from app import app, db, Event

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///:memory:"
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_get_events(client):
    """Debe devolver una lista vacía al inicio"""
    response = client.get('/events')
    assert response.status_code == 200
    assert response.json == []

def test_create_event(client):
    """Debe permitir crear un evento"""
    response = client.post('/events', json={
        "title": "Evento de Prueba",
        "date": "2025-06-01T15:00",
        "location": "Bogotá",
        "description": "Descripción del evento"
    })
    assert response.status_code == 201
    assert response.json["title"] == "Evento de Prueba"

def test_update_event(client):
    """Debe actualizar un evento existente"""
    client.post('/events', json={
        "title": "Evento Viejo",
        "date": "2025-05-01T16:20",
        "location": "Cali",
        "description": "Vieja descripción"
    })
    response = client.put('/events/1', json={
        "title": "Evento Actualizado",
        "date": "2025-05-01T13:45",
        "location": "Cali",
        "description": "Nueva descripción"
    })
    assert response.status_code == 200
    assert response.json["title"] == "Evento Actualizado"

def test_delete_event(client):
    """Debe eliminar un evento"""
    client.post('/events', json={
        "title": "Evento a Eliminar",
        "date": "2025-07-01T11:30",
        "location": "Bogotá",
        "description": "Eliminar este evento"
    })
    response = client.delete('/events/1')
    assert response.status_code == 204

    # Verificar que ya no existe
    response = client.get('/events')
    assert response.json == []
