Este proyecto es una aplicación web que muestra información detallada sobre las naves espaciales de Star Wars. Utiliza una API pública para obtener datos sobre las naves.

Funcionalidades Implementadas:
- Pantalla principal: Muestra el listado de naves espaciales con información básica (nombre y modelo).
- Detalle de la nave: Al hacer clic en una nave en el listado, se muestra una página con detalles completos de la nave, sus pilotos y las películas en las que ha salido.
- Paginación: Se cargan más naves al final del listado al hacer scroll.
- Página de bienvenida y barra de navegación: implementación de una página de bienvenida con un botón para acceder a la lista de naves con una barra de navegación superior para acceder a diferentes secciones de la aplicación.
- Login y registro: Implementación de una pantalla de login y registro utilizando FireBase. El usuario se muestra como autenticado después de registrarse correctamente.
- Rutas Protegidas: Las rutas que muestran información de las naves solo son accesibles para usuarios autenticados.
- Pruebas Unitarias: Se han implementado pruebas unitarias para tres componentes de la aplicación con Vitest.

Tecnologías Utilizadas: 
- React.js
- Redux
- React Router
- FireBase
- Vitest (para pruebas unitarias)
