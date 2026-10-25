# 🎬 Streaming Search App

Aplicación de consola (CLI) hecha con Node.js para buscar películas y series usando la API pública de [TMDB](https://www.themoviedb.org/). Escribes lo que quieres ver, eliges un resultado de la lista y la app te muestra su detalle.

## ¿Qué hace?

- Busca películas y series por texto (en español).
- Muestra los resultados en una lista interactiva para elegir uno.
- Muestra el detalle: título, descripción, puntuación y fecha de estreno.
- Permite hacer otra búsqueda sin cerrar la aplicación.

## Ejemplo de uso

Ejemplo ilustrativo de una sesión:

```
🎬 Bienvenido a Streaming Search App

🔍 ¿Qué película o serie deseas buscar? matrix
📋 Selecciona un resultado:
❯ Matrix (Película)
  Matrix Reloaded (Película)
  ...

📌 Detalle:
  Título     : Matrix
  Descripción: ...
  Puntuación : ...
  Estreno    : ...

¿Deseas hacer otra búsqueda? (Y/n)
```

## Tecnologías

| Tecnología | Para qué se usa |
|---|---|
| Node.js | Entorno de ejecución |
| Axios | Peticiones HTTP a la API de TMDB |
| Inquirer | Menús y preguntas interactivas en la consola |
| dotenv | Variables de entorno (API key) |
| nodemon | Recarga automática en desarrollo |

## Arquitectura

El proyecto sigue el patrón **MVC adaptado a una aplicación de consola**: la "vista" es la salida por terminal.

```
src/
├── app.js                       # Punto de entrada
├── config/
│   └── env.js                   # Lee las variables de entorno
├── controllers/
│   └── searchController.js      # Flujo de la app: menú, selección y detalle
└── models/
    └── searchModel.js           # Acceso a la API de TMDB (búsqueda y detalle)
```

- **Modelo** (`searchModel.js`): consulta TMDB con Axios (`/search/multi` y `/{tipo}/{id}`).
- **Controlador** (`searchController.js`): coordina las preguntas al usuario, llama al modelo e imprime el resultado.
- **Configuración** (`env.js`): centraliza la API key y la URL base.

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS reciente) y npm.
- Una cuenta gratuita en TMDB y su **API key**: https://www.themoviedb.org/settings/api

## Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Anrd3/streaming-search-app.git
   cd streaming-search-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto:

   ```env
   TMDB_API_KEY=tu_api_key_de_tmdb
   TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. Ejecuta la aplicación:

   ```bash
   npm start
   ```

   Para desarrollo con recarga automática:

   ```bash
   npm run dev
   ```

> ⚠️ Nunca subas tu archivo `.env` a GitHub. Ya está incluido en `.gitignore`.

## Posibles mejoras

- Pruebas automatizadas para el modelo y el controlador.
- Manejo de errores de red y de API key inválida.
- Paginación de resultados.
- Exponer la búsqueda como una API REST con Express.

## Autor

**Andrés Londoño Avendaño**, Ingeniero de Software.
GitHub: [@Anrd3](https://github.com/Anrd3)

## Licencia

Distribuido bajo licencia MIT. Consulta el archivo `LICENSE`.
