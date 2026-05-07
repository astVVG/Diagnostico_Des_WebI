# CRUD de Tareas con Django y React

## Nombre del proyecto

CRUD de Tareas con Django y React

---

## Descripción

Este proyecto es una aplicación web tipo CRUD desarrollada con Django y React. La aplicación permite gestionar tareas escolares mediante una interfaz web sencilla, donde el usuario puede registrar, consultar, editar y eliminar tareas.

El sistema trabaja con una entidad llamada `Tarea`, la cual almacena información como el título, descripción, materia, profesor y fecha de entrega.

El backend fue desarrollado con Django y Django REST Framework para crear una API REST. El frontend fue desarrollado con React y consume la API mediante Axios. La interfaz utiliza estilos CSS en línea directamente dentro del componente principal.

---

## Tecnologías utilizadas

### Backend

- Python
- Django
- Django REST Framework
- SQLite

### Frontend

- React
- JavaScript
- Axios
- CSS en línea

### Herramientas adicionales

- Visual Studio Code
- Git
- GitHub
- Navegador web

---

## Funcionalidades

La aplicación permite realizar las siguientes acciones:

- Registrar nuevas tareas.
- Consultar la lista de tareas registradas.
- Editar tareas existentes.
- Eliminar tareas.
- Visualizar la información principal de cada tarea.
- Consumir datos desde una API REST creada con Django.

Cada tarea contiene los siguientes campos:

| Campo | Descripción |
|---|---|
| `titulo` | Título o nombre de la tarea |
| `descripcion` | Descripción de la tarea |
| `materia` | Materia relacionada con la tarea |
| `profesor` | Nombre del profesor |
| `fecha_entrega` | Fecha límite de entrega |

---

## Instrucciones para ejecutar el proyecto

```bash
git clone URL_DEL_REPOSITORIO
cd Diagnostico_Des_WebI

cd backend
python -m venv venv
venv\Scripts\activate

pip install django djangorestframework django-cors-headers

python manage.py makemigrations
python manage.py migrate

python manage.py runserver

cd frontend

npm install
npm install axios

npm start
