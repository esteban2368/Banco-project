# React + TypeScript + Vite

Configuración y ejecución de aplicación

## Primeros Pasos

### Prerrequisitos

- Node.js (versión 18 o superior recomendada)
- npm o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone <https://github.com/esteban2368/Banco-project.git>
   cd banco-project
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```


### Construcción y Producción

1. Construye la aplicación:

   ```bash
   npm run build
   ```

2. Vista previa del build de producción:

   ```bash
   npm run preview
   ```

Esto servirá la aplicación construida localmente.

### Pruebas

Ejecuta las pruebas con:

```bash
npm test
```

NOTA: en caso de que falle la compilación ejecuta el modo desarrollo para ver la aplicación
Esto iniciará el servidor de desarrollo de Vite.

### Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

## Problemas Conocidos

### CORS al consumir servicios

Al consumir los servicios, puede surgir un problema de CORS (Cross-Origin Resource Sharing). Para esta prueba técnica, se optó por deshabilitar las políticas de CORS en el navegador Chrome, siendo conscientes de los peligros que conlleva esta práctica en un entorno de producción.

Para ejecutar Chrome con las políticas de CORS deshabilitadas en Windows, abre un CMD y ejecuta:

```bash
start chrome --disable-web-security --user-data-dir="C:\chrome_dev" --disable-site-isolation-trials
```



