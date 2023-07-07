Proyecto CRUD para una lista de tareas


Descripción:

Este proyecto contiene operaciones CRUD (Create, Read, Update and Delete) para una lista de tareas para la libería comunitaria.

Funcionalidades:

1.Obtener todas las tareas, estatus y responsables por las tareas.
2.Obtener las tareas, estatus y responsables por las tareas por su ID.
3.Crear y/o agregar una tarea o nuevo responsable.
4.Actualizar información una tarea, estatus o persona responsable según se requiera.
5.Eliminar tareas, estatus y responsables de las tareas por su ID.

Tecnologías utilizadas:

JavaScript
Node.js
Express
MongoDB
Mongoose
Nodemon
Body Parser
Ejs
Dotenv
HTML
CSS

Uso:

1.Inicia la aplicación: npm start nodemon ó node indes.js
2.Desde postman puedes probar los siguentes endpoints los cuales se solicitan y muestan en formato json


Tasks:

http://localhost:3000/api/todo/
http://localhost:3000/api/todo/'id'
http://localhost:3000/api/todo/delete/'id'
http://localhost:3000/api/todo/create con la siguiente estructura en json

  {
      "task" : "Asignarle género a los libros",
      "task_responsable" : "Gabriel Garcia",
      "deadline" : "06-15-2023",
      "status" : "64a600bda2472a22f78cf5b8",
      "update" : "Falta enumerar todos los libros"
      }


-http://localhost:3000/api/todo/update/'id'

 {
      "task" : "organizar libros",
      "task_responsable" : "Gabriel Garcia",
      "deadline" : "06-15-2023",
      "status" : "64a600bda2472a22f78cf5b8",
      "update" : ""
      }


Status:

http://localhost:3000/api/status/
http://localhost:3000/api/status/'id'
http://localhost:3000/api/status/update/'id'

    {
    "status" : "pending"
    }


Task Responsable:

    {
    "task_responsable" : "Kevin"
    }

    
  <li>http://localhost:3000/api/responsable/</li>
  <li>http://localhost:3000/api/responsable/'id'</li>
  <li>http://localhost:3000/api/responsable/delete/'id'</li>
  <li>http://localhost:3000/api/responsable/update/'id'</li>

  
    {
    "task_responsable" : "Santiago"
    }


Puedes acceder a la aplicación en su parte front end en http://localhost:3000/
