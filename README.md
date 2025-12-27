(# Sistema de Gestión — SGPA)

**Sistema de Gestión para Tesis (SGPA)** es una aplicación web para gestionar información académica: profesores, estudiantes, asignaturas, cursos, publicaciones, eventos, posgrados y otros módulos relacionados con la gestión universitaria.

---

## 🧩 Características principales

- Gestión de usuarios y roles
- CRUD de profesores, asignaturas, cursos y publicaciones
- Módulos de investigación, eventos y posgrados
- Conexión a base de datos MySQL
- API REST organizada por recursos

---

## 🛠️ Tecnologías

- Frontend: **React**, **Vite**, **Tailwind CSS**
- Backend: **Node.js**, **Express**
- Base de datos: **MySQL**
- Gestor de paquetes: **pnpm** (se incluye `pnpm-lock.yaml`)

---

## 🚀 Requisitos previos

- Node.js (v18+ recomendado)
- pnpm (opcional, puedes usar npm/yarn)
- MySQL (crea una base de datos para la aplicación, p. ej. `SGPA`)

---

## 📥 Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd "sistema-gestion"
```

2. Instala dependencias del frontend (desde la raíz):

```bash
pnpm install
pnpm run dev
# o con npm: npm install && npm run dev
```

3. Instala y ejecuta el backend (carpeta `api`):

```bash
cd api
pnpm install
# Ejecuta el servidor
node index.js
# (Se recomienda agregar un script `start` o usar nodemon en desarrollo)
```

El backend por defecto escucha en el puerto `3002` (ver `api/index.js`).

---

## ⚙️ Variables de entorno

Se recomienda crear un archivo `.env` dentro de `api/` con estas variables (ejemplo):

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=admin
DB_NAME=SGPA
API_PORT=3002
```

Nota: Actualmente la configuración por defecto está en `api/src/config/dbConfig.js`; adaptar a variables de entorno mejora seguridad y flexibilidad.

---

## 📡 Endpoints principales (ejemplos)

La API expone rutas bajo `/api/*`. Algunos recursos disponibles:

- `/api/users`
- `/api/asignaturas`
- `/api/cursos`
- `/api/profesor`
- `/api/publicaciones`
- `/api/eventos`
- `/api/posgrado`

Ejemplo (consultar todas las asignaturas):

```bash
curl http://localhost:3002/api/asignaturas
```

---

## 📁 Estructura del proyecto (resumen)

- `/api` — Código del servidor (Express)
	- `index.js` — Punto de arranque del backend
	- `src/routes` — Definición de rutas por recurso
	- `src/models` — Modelos y acceso a datos
	- `src/controllers` — Lógica de negocio
- `/src` — Frontend (React + Vite)

---

## ✅ Buenas prácticas y recomendaciones

- Mover credenciales y parámetros sensibles a variables de entorno
- Añadir scripts `start`/`dev` en `api/package.json` (p. ej. `start: node index.js`, `dev: nodemon index.js`)
- Incluir migraciones o un script SQL con el esquema de la base de datos

---

## 🤝 Contribuciones

Si quieres contribuir, abre un issue describiendo la mejora o envía un PR con cambios claros y pruebas cuando aplique.

---

## 📄 Licencia

Licencia: **MIT** (o la que prefieras aplicar). Añade un archivo `LICENSE` si corresponde.

---

## ✉️ Contacto

Para preguntas o soporte, contacta con el autor del proyecto (añade tu email o perfil aquí).


---

**¡Listo!** Este README contiene las instrucciones básicas para instalar, ejecutar y entender la estructura del proyecto. Actualízalo con más detalles (migraciones SQL, diagramas ER, ejemplos de payloads) según avances en la tesis.

