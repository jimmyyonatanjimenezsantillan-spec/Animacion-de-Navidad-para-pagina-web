# Animación de Navidad para página web

Efectos navideños para páginas web creados para la universidad UPM. También puedes integrarlos en tu propia página web.

La animación incluye luces, un árbol, confeti y un trineo con la mascota ODO y renos en pixel art.

## Ver la demostración

Abre `demo.html` en tu navegador. La animación empieza automáticamente y el botón permite repetirla.

## Usar en tu página

1. Copia `revolucion.css` y `revolucion.js` a tu proyecto.
2. Agrega el CSS dentro de `<head>` y el JavaScript con `defer`. Ajusta las rutas si guardaste los archivos en otra carpeta:

   ```html
   <link rel="stylesheet" href="revolucion.css">
   <script src="revolucion.js" defer></script>
   ```

El efecto se reproduce al cargar la página y se desvanece durante su último segundo, hasta desaparecer a los nueve segundos; la franja y el distintivo navideños permanecen visibles. No requiere dependencias ni archivos de imagen adicionales.

Para ofrecer un botón que vuelva a reproducirlo, agrega dentro de `<body>`:

```html
<button type="button" onclick="window.replayRevolucionEffect()">
  Reproducir animación
</button>
```

`demo.html` contiene un ejemplo completo. Puedes editar los textos, colores e ilustraciones en los archivos CSS y JavaScript para adaptarlos a tu página.
