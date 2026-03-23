# Strapi CMS Backend - Spanish Wine Camps

Este es el backend de Strapi CMS para gestionar el contenido de Spanish Wine Camps.

## Instalación

1. **Instalar dependencias:**
```bash
cd strapi-backend
npm install
```

2. **Configurar variables de entorno:**
```bash
cp .env.example .env
```

Edita el archivo `.env` y genera valores seguros para:
- `APP_KEYS` - 4 claves aleatorias separadas por comas
- `API_TOKEN_SALT` - Una cadena aleatoria
- `ADMIN_JWT_SECRET` - Una cadena aleatoria
- `TRANSFER_TOKEN_SALT` - Una cadena aleatoria
- `JWT_SECRET` - Una cadena aleatoria

Puedes generar valores aleatorios con:
```bash
openssl rand -base64 32
```

3. **Iniciar Strapi:**
```bash
npm run develop
```

Esto iniciará Strapi en modo desarrollo en `http://localhost:1337`

## Configuración Inicial

1. **Crear cuenta de administrador:**
   - Al iniciar Strapi por primera vez, se abrirá el navegador
   - Crea tu cuenta de administrador

2. **Configurar permisos de API:**
   - Ve a Settings > Users & Permissions Plugin > Roles > Public
   - Habilita los permisos de lectura (find, findOne) para:
     - Hero
     - Journey
     - Partner
     - Guide
     - Camp Config

3. **Subir contenido:**
   - Ve a Content Manager
   - Crea y publica contenido para cada tipo:
     - Hero (Single Type)
     - Journeys (Collection Type)
     - Partners (Collection Type)
     - Guides (Collection Type)
     - Camp Config (Single Type)

## Modelos de Contenido

### Hero (Single Type)
- `title`: Título principal
- `subtitle`: Subtítulo/descripción
- `backgroundImage`: Imagen de fondo
- `primaryButtonText`: Texto del botón principal
- `secondaryButtonText`: Texto del botón secundario

### Journey (Collection Type)
- `title`: Título del viaje
- `sectionId`: ID único para la sección
- `description`: Descripción del viaje
- `image`: Imagen del viaje
- `date`: Fecha del viaje
- `dateText`: Texto de fecha (ej: "Coming Soon")
- `price`: Precio
- `priceCurrency`: Moneda (default: EUR)
- `maxParticipants`: Máximo de participantes
- `currentParticipants`: Participantes actuales
- `guests`: Lista de invitados (componente)
- `includedItems`: Items incluidos (componente)
- `order`: Orden de visualización

### Partner (Collection Type)
- `name`: Nombre del partner
- `logo`: Logo del partner
- `website`: URL del sitio web
- `description`: Descripción
- `order`: Orden de visualización

### Guide (Collection Type)
- `name`: Nombre del guía
- `image`: Foto del guía
- `bio`: Biografía
- `title`: Título/cargo
- `order`: Orden de visualización

### Camp Config (Single Type)
- `launchDateOffsetDays`: Días de offset para la fecha de lanzamiento
- `defaultMaxParticipants`: Máximo de participantes por defecto
- `defaultCurrentParticipants`: Participantes actuales por defecto

## Desarrollo

- **Modo desarrollo:** `npm run develop`
- **Modo producción:** `npm run build && npm run start`

## Notas

- La base de datos SQLite se guarda en `.tmp/data.db`
- Las imágenes se guardan en `public/uploads/`
- Para producción, considera usar PostgreSQL o MySQL en lugar de SQLite
