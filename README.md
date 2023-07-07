# Proyecto CRUD para una lista de tareas

Este proyecto contiene operaciones CRUD (Create, Read, Update and Delete) para una lista de tareas en la biblioteca comunitaria.

## Funcionalidades:

1. Obtener todas las tareas, estatus y responsables de las tareas.
2. Obtener una tarea, estatus y responsable por su ID.
3. Crear y/o agregar una nueva tarea o responsable.
4. Actualizar información de una tarea, estatus o responsable según sea necesario.
5. Eliminar una tarea, estatus o responsable por su ID.

## Tecnologías utilizadas:

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- Nodemon
- Body Parser
- EJS
- Dotenv
- HTML
- CSS

## Uso:

1. Iniciar la aplicación: `npm start` o `nodemon` o `node index.js`.
2. Puedes probar los siguientes endpoints desde Postman, los cuales devuelven y reciben datos en formato JSON.

### Endpoints para las tareas:

- Obtener todas las tareas: `GET /api/todo/`
- Obtener una tarea por su ID: `GET /api/todo/{id}`
- Crear una nueva tarea: `POST /api/todo/create` con la siguiente estructura en JSON:
  ```json
  {
    "task": "Asignarle género a los libros",
    "task_responsable": "Gabriel Garcia",
    "deadline": "06-15-2023",
    "status": "64a600bda2472a22f78cf5b8",
    "update": "Falta enumerar todos los libros"
  }
  ```
- Actualizar una tarea por su ID: `PATCH /api/todo/update/{id}` con la siguiente estructura en JSON:
  ```json
  {
    "task": "Organizar libros",
    "task_responsable": "Gabriel Garcia",
    "deadline": "06-15-2023",
    "status": "64a600bda2472a22f78cf5b8",
    "update": ""
  }
  ```
- Eliminar una tarea por su ID: `DELETE /api/todo/delete/{id}`

### Endpoints para los estatus:

- Obtener todos los estatus: `GET /api/status/`
- Obtener un estatus por su ID: `GET /api/status/{id}`
- Actualizar un estatus por su ID: `PATCH /api/status/update/{id}` con la siguiente estructura en JSON:
  ```json
  {
    "status": "pending"
  }
  ```

### Endpoints para los responsables de las tareas:

- Obtener todos los responsables de las tareas: `GET /api/responsable/`
- Obtener un responsable por su ID: `GET /api/responsable/{id}`
- Crear un nuevo responsable: `POST /api/responsable/create` con la siguiente estructura en JSON:
  ```json
  {
    "task_responsable": "Kevin"
  }
  ```
- Actualizar un responsable por su ID: `PATCH /api/responsable/update/{id}` con la siguiente estructura en JSON:
  ```json
  {
    "task_responsable": "Santiago"
  }
  ```
- Eliminar un responsable por su ID: `DELETE /api/responsable/delete/{id}`

Puedes acceder a la aplicación y su interfaz front-end en `http://localhost:3000/`.

## Acerca de:

Este proyecto es una lista de tareas CRUD para la biblioteca comunitaria. Proporciona una API para gestionar las tareas, estatus y responsables asociados a las tareas.
