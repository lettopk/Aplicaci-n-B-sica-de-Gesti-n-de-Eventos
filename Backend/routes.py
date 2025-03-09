from flask import request, jsonify
from app import app, db
from models import Event

@app.route("/events", methods=["POST"])
def create_event():
    data = request.json
    new_event = Event(**data)
    db.session.add(new_event)
    db.session.commit()
    return jsonify(new_event.to_dict()), 201

@app.route("/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    return jsonify([event.to_dict() for event in events])

@app.route("/events/<int:id>", methods=["GET"])
def get_event(id):
    event = Event.query.get_or_404(id)
    return jsonify(event.to_dict())

@app.route("/events/<int:id>", methods=["PUT"])
def update_event(id):
    event = Event.query.get_or_404(id)
    data = request.json
    for key, value in data.items():
        setattr(event, key, value)
    db.session.commit()
    return jsonify(event.to_dict())

@app.route("/events/<int:id>", methods=["DELETE"])
def delete_event(id):
    event = Event.query.get_or_404(id)
    db.session.delete(event)
    db.session.commit()
    return jsonify({"message": "Evento eliminado"})
