<h2>08/10/2022</h2>

- Visto el Curso de Onboarding BecasOW.

*A partir de aquí comienzan los cursos de la carrera de Full Stack MEAN.*

- <h4>Curso HTML5 y CSS3 (Punto 1/6 - Introducción)</h4>

  HTML: Hypertext Markup Language. Las páginas web son ficheros con extensión HTML.
  
  CSS: Cascading Style Sheets. Se asocia a la página web HTML para darle un estilo visual.
  
  
<h2>09/10/2022</h2>

- <h4>Curso HTML5 y CSS3 (Punto 2/6 - HTML5 y CSS3)</h4>

  Historia de las diferentes versiones de HTML desde la primera en 1991 hasta ahora (HTML 1.0, 2.0, 3.2, 4.01, XHTML 1.0, HTML5).
  
  Etiquetas simples como <"h1"> o <"p">. Atributos.
  
  Estructura de una página HTML (<"!DOCTYPE html">, <"html">, <"head">, <"meta">, <"body">...).

<h2>10/10/2022</h2>

 - <h4>Curso HTML5 y CSS3 (Punto 3/6 - Añadiendo contenido. Etiquetas básicas)</h4>
  
   Etiquetas de formato (Negrita <"b">, Enfasis <"em">, Superíndice <"sup">, Cita corta <"q">, Cita <"cite">...).
  
   Otros elementos (Salto de línea <"/br">, Separación de tema <"/hr">, Párrafo <"p">). 
  
   Imágenes, tipos de rutas, enlaces fuera y dentro de la página y enlaces en imágenes.
   
   <b>Práctica: mostrar 3 imágenes centradas, 2 arriba y 1 abajo, con enlaces a otras webs.</b>

  Resultado:
  
![Practica 1 result](https://user-images.githubusercontent.com/51362780/194929410-1ce96c21-39a4-489b-99bd-39798da4b4f5.png)

  Listas ordenadas, no ordenadas y de definición.
  
  <b>Práctica: hacer una lista ordenada con números romanos, una no numerada con style disc y otra mezclando ambos tipos de listas.</b>

  Resultado:
  
![Curso1_5 resultado](https://user-images.githubusercontent.com/51362780/194951863-e0f00df9-d9e9-4d4c-b7ef-53ce037aa0fa.png)


<h2>11/10/2022</h2>

  Tablas simples (table, tr, th/td) y complejas (colgroup, caption, tbody...). Alargar celdas con rowspan y colspan.
  
  Estilos de CSS para cambiar los bordes de tablas (bordes colapsados, sin colapsar...).
  
  <b>Práctica: Tabla con imágenes y listas dentro. </b>
  
  Resultado:
  
  ![Curso1_8 resultado](https://user-images.githubusercontent.com/51362780/195142755-bb821d4a-0927-44fe-8cf3-42a80c0f8b10.png)

  - <h4>Curso HTML5 y CSS3 (Punto 4/6 - Formularios)</h4>
  
    Métodos POST (no se ven los datos enviados en la url) y GET (sí que se ven).
    Input, select, textarea, button (normal, reset, submit), fieldset, legend... Atributos como readonly, required, placeholder, disabled...
    Tipos de input (reset, submit, button, radio, checkbox, list, datalist, color, range, file...).
    
    <b>Práctica: Formulario estándar.</b>
    
    Resultado:
    
  ![Curso1_11 resultado](https://user-images.githubusercontent.com/51362780/195215891-528fc808-3d7f-4fad-b878-9e82275e1bfe.png)

<h2>12/10/2022</h2>

  - <h4>Curso HTML5 y CSS3 (Punto 5/6 - Más etiquetas accesibilidad)</h4>
  
    Etiquetas multimedia de audio y video (atributos: width, height, poster), source (atributos: src, type) y track (atributos: src, kind, srclang, label, type).           Atributos audio y video: controls (muestra controles de reproducción), autoplay, loop, muted...
    
    Etiquetas semánticas header (encabezado), footer (pie de página), main, section, article, aside, details, dialog, summary y nav.
    Se se utilizan para maquetar y se comportan como la etiqueta div, pero estas añaden significado a su contenido.
    
    Más etiquetas: iframe (web dentro de otra web), canvas (dibujar lienzo), span, script (para introducir JavaScript), object y embed (mostrar contenido PDF).
    
    Accesibilidad en HTML: Usar etiquetas semánticas en vez de div, usar atributo for para las labels para que se asocien a sus campos correspondientes, añadir             atributo alt a imágenes, especificar idioma de página, utilizar cabeceras (h1, h2...) correctamente.
    Usar atributos ARIA (Accesible Rich Internet Application) como role, aria-owns, aria-hidden, aria-checked, aria-label, aria-disabled...
    
    
  - <h4>Curso HTML5 y CSS3 (Punto 6/6 - CSS)</h4>

  Historia de CSS.
  Primera versión, CSS 1.0, en 1996. Servía para ordenar el desorden que había a la hora de dar estilos en diferentes navegadores, para dar propiedas al estilo de       letra, poner colores de texto y fondo, alinear textos, imágenes o tablas, manejar posicionamiento y márgenes de elementos...
  CSS versión 2 (1998): mejoras en posicionmiento de elementos, sombras, dirección de texto...
  CSS versión 2.1 (2011): corrige errores antiguos, añade extensiones a navegadores...
  La versión 3 es modula y cada módulo madura y se estandariza de forma independiente. Añade esquinas redondeadas, gradientes, transiciones y animaciones, nuevos         layouts flex y grid, media-queries...
  
  Se recomienda usar "<link href= rel= type=/>" para añadir la hoja de estilos a nuestra página web, ya que es el método que       menos problemas nos va a dar.
  
  Modelo de cajas. Todos los elementos de una web están compuestos por cajas.

  Selectores y Ficheros.
  Son reglas que nos permiten seleccionar los elementos de nuestra web para modificar sus estilos visuales o propiedades.
  Algunos selectores: # (selector universal), #id (elemento con atributo id), .class (elemento con valor en atributo clase), etiqueta (selecciona esa etiqueta)...
  También se puede hacer cosas como "selector1, selector2" para que tengan ambos sus propiedades, o "selector1>selector2", "selector1+selector2".
  
  En Cascada.
  Significa que los estilos de los elementos padre se van propagando hacia abajo y que  si hay más de una regla que se pueda aplicar a un elemento y hay conflicto
  entonces se aplicará lo más específico.
  
  Propiedades interesantes.
  Los colores pueden expresarse mediante el nombre en inglés, de forma hexadecimal o RGB.
  Los fondos pueden modificarse usando la propiedad "background" y añadiendo cosas como -color, -image, -repeat, -origin...
  Para tamaño de elementos se usan width y height. Se pueden expresar en píxeles (px), procentaje (%), o en relación al tamaño de letra
  del navegador (em) o de la letra que tiene la etiqueta HTML (rem).
  
  Márgenes, bordes y padding:
  margin: 50px, margin: 20px 50px 20px 50px, margin-left, margin-top...
  border: 1px solid black, border-style: solid, border-color: black, border-bottom, border-right...
  
  Texto:
  Cambiar la fuente de letra (font-family), cosas como negrita o cursiva (font-weight), justificar el texto (text-align), tabular (text-indent),
  cosas como subrayar o tachar texto (text-decoration),
  
  <b>Práctica: Usar selectores para modificar visualmente la tabla del tercer ejercicio. </b>
  
  Resultado:
  
  ![Curso1_21 resultado](https://user-images.githubusercontent.com/51362780/195370409-f02fe630-c07b-43c0-9272-6de4a909a92b.png)


  Pseudoselectores:
  Palabras clave que se añaden a selectores para indicar el estado de los elementos.
  
  Pseudoselectores de estado: link (indica si hemos visitado ese enlace o no), visited (indica si ha sido visitado), enabled (permite seleccionar elementos HTML
  habilitados), disabled (lo contrario a lo anterior), checked (elementos de formulario que hayamos seleccionado), required (elementos de fomulario requeridos)...
  
  Pseudoselectores de estado: first (primera ocurrencia del selector), last (lo contrario a lo anterior), first-of-type (primera ocurrencia de ese tipo del selector),
  nth-last-child (enésimo último hijo)...
  
  Pseudoelementos:
  Palabras clave que se añaden a los selectores y que indican una parte de un elemento al que nos permiten añadir contenido.
  Ejemplos son first-line (selecciona primera línea), first-letter (primera letra), after (elementos que están después), before (elementos que están antes),
  selected (elementos que están seleccionados)...
  
  <b>Práctica: Tabla con con estilos de pseudoselectores y pseudoelementos.</b>
  
  Resultado:
  
  ![Curso1_23 resultado](https://user-images.githubusercontent.com/51362780/195378344-82740143-090e-4767-a773-507180a4e2f4.png)

  Estilos por defecto:
  Los aplican los propios navegadores con sus hojas de estilo para hacer las páginas más legibles. Para tener consistencia en nuestras páginas habría que
  resetar esas hojas de estilo usando hojas de reseteo para poder usar las nuestras sin problemas. Hay que hacerlo con cuidado para no borrar estilos necesarios.
  
  Prefijos específicos para navegadores:
  Son propiedades experimentales para indicar que a un navegador se le ha dado soporte antes que a otros.
  Valores comunes son -webkit- (Chrome, Safari, Opera, navegadores de iOS...), -moz- (Firefox), -o- (versiones antiguas de Opera)
  o -ms- (Internet Explorer, Microsoft Edge).
  
  Optimización de CSS:
  ¿Qué es? Se trata de borrar reglas innecesarias, ordenar las propiedades alfabéticamente, dejarlo en la cabecera, partirlo en varios si es muy grande,
  organizar las reglas según la relación que tengan...
  
  Herramientas relacionadas con CSS:
  Preprocesadores CSS para generar CSS haciendo que la estructura sea más legible y fácil de mantener y también añaden cosas como variables, selectores
  anidados, bucles...
  
  <h2>13/10/2022</h2>
  
  Hecho el examen final del curso de HTML5 y CSS3. Certificado conseguido.
  
  ![Curso 1 certificado](https://user-images.githubusercontent.com/51362780/195642729-6aaeafe2-ac07-4975-8226-adee2036d0d4.png)

  - <h4>Curso JavaScript para Principiantes (Punto 1/4 - Introducción)</h4>
  
  ¿Qué es un lenguaje de programación web?
  
  La forma en la que escribes tu código para comunicarte con la web.
  
  ¿Qué es un framework?
  
  Es como una caja de herramientas que te permite de forma relativamente sencilla construir un sistema de enrutado, gestionar tu base de datos hacia un punto
  específico, servidores, gestión de estado...
  
  ¿Qué es una librería?
  
  Es una dependencia que introduces en tu proyecto para que te aporte alguna funcionalidad.
  
  ¿Para qué sirve jQuery?
  
  Te permite tener compatibilidad con el máximo posible de navegadores escribiendo muy pocas líneas de código. "Write less, do more".
  
  ¿Qué es Java?
  
  Es un lenguaje de desarrollo backend que necesita ser compilado, mientras que JavaScript, por lo general, no.
  
  ¿Qué es VanillaJS?
  
  Básicamente usar JavaScript puro, sin añadidos, como se se define desde la base.
  
  ¿Qué son frontend y backend?
  La parte de frontend es la que se ve al visitar una página (HTML, CSS; JavaScript) y backend todo lo que hay por detrás y que no vemos (PHP, bases de datos,
  servidores...).
 
  JavaScript fue creado por Brendan Eich y originalmente llamado LiveScript. Al sacarlo al mercado decidieron llamarlo JavaScript porque vieron que Java
  estaba ganando popularidad. Ecma International y W3C son las organizaciones que se encargan de ir actualizando las especificaciones (ECMAScript) cada año.
