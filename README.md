# Román Pettenon | RPIS — Sitio Web Corporativo

## Estructura del Proyecto

```
rpis-website/
├── index.html          ← Página principal (subir a la raíz del hosting)
├── css/
│   └── style.css       ← Todos los estilos del sitio
├── js/
│   └── main.js         ← Interacciones: scroll reveal, menú, formulario
├── img/                ← Carpeta para agregar imágenes futuras
├── .htaccess           ← Configuración Apache (compresión, caché, seguridad)
├── robots.txt          ← Configuración para motores de búsqueda
└── README.md           ← Este archivo
```

## Instrucciones de Despliegue

### Opción A — Subir por FTP/SFTP (cPanel, Plesk, etc.)
1. Conectarse al hosting con FileZilla u otro cliente FTP.
2. Navegar hasta `public_html/` (o `www/`, según el hosting).
3. Subir **todos los archivos y carpetas** manteniendo la estructura.
4. Verificar que `index.html` quede en la raíz del directorio público.

### Opción B — Subir por el Administrador de Archivos de cPanel
1. Ingresar al cPanel → "Administrador de Archivos".
2. Navegar a `public_html/`.
3. Usar "Subir" y cargar el ZIP directamente, luego extraerlo ahí.

## Configuración Post-Instalación

### Activar HTTPS (recomendado)
En `.htaccess`, descomentar las siguientes líneas:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Actualizar robots.txt
Cambiar `tusitio.com` por el dominio real:
```
Sitemap: https://romanpettenon.com/sitemap.xml
```

### Conectar el Formulario de Contacto
El formulario actual muestra un mensaje de confirmación visual (simulado).
Para que envíe emails reales, opciones recomendadas:
- **Formspree** (gratis): reemplazar el `onsubmit` con action de Formspree
- **PHPMailer**: agregar un archivo `send.php` en el servidor
- **Netlify Forms**: si se aloja en Netlify, agregar `data-netlify="true"` al form

### Número de WhatsApp
El botón de WhatsApp apunta a: `https://wa.me/543585187423`
Si el número cambia, buscarlo en `index.html` y reemplazarlo.

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 puro (variables, grid, flexbox, animaciones)
- JavaScript vanilla (sin dependencias ni frameworks)
- Google Fonts: Barlow Condensed, Barlow, Share Tech Mono

## Compatibilidad
- Chrome, Firefox, Safari, Edge — versiones modernas
- Responsive: optimizado para móvil (320px+), tablet y escritorio
- Sin dependencias externas más allá de Google Fonts

---
© 2025 Román Pettenon RPIS — Todos los derechos reservados.
