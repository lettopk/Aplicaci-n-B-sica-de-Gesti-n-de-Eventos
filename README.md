# AplicacionBasicaDeGestionDeEventos
Proyecto de aplicación web para la gestión de eventos, funcionalidades CRUD
Tecnologías utilizadas

    Frontend: Angular
    Backend: Flask (Python)
    Base de datos: SQLite

Estructura del proyecto

backend/             # API con Flask
│   ├── app.py
│   ├── database.db
│   ├── models.py
│   ├── routes.py
│   ├── test_app.py      # Pruebas unitarias
gestion_eventos/
│── frontend/            # Aplicación Angular
│   ├── src/
│   ├── package.json
│   ├── angular.json
│── README.md            # Documentación

Instalación y ejecución
 Backend (Flask)
    Instalar dependencias, en la terminal de la ubicaicon del proyecto ejecutar:
      cd backend
      pip install -r requirements.txt

  luego Ejecutar el servidor Flask en la terminal de la ubicaicon del proyecto (/backend):
      python app.py

 Frontend (Angular)
    Instalar dependencias, en la terminal de la ubicaicon del proyecto ejecutar:
      cd gestion_eventos
      npm install

  Ejecutar la aplicación Angular,  en la terminal de la ubicaicon del proyecto (/gestion_eventos):
      ng serve

Acceder en el navegador:
http://localhost:4200/


Pruebas:
Backend (Flask)

Ejecutar pruebas unitarias con:
    pytest test_app.py

Frontend (Angular)
Ejecutar pruebas unitarias con:
    ng test

Funcionalidades

Crear, listar, actualizar y eliminar eventos
Validación de formularios en frontend
Pruebas unitarias para backend y frontend

    
