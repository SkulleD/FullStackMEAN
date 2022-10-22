<h2>08/10/2022</h2>

- Visto el Curso de Onboarding BecasOW.

*A partir de aquí comienzan los cursos de la carrera de Full Stack MEAN.*

- <h4>1: Curso HTML5 y CSS3, por Juan Diego Pérez (Punto 1/6 - Introducción)</h4>

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

  ################################################################################

 - <h4>2: Curso JavaScript para Principiantes, por Cristina Ponce</h4>
  
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
  
  Tipos de variables en JavaScript: var (se puede trabajar con ella después de haberlas declarado pero sin todavía darles valor, let (hace falta darles valor
  para poder trabajar con ellas) y const (tienen valor constante que nunca va a cambiar).
  
  Los nombres de las variables var y let se deben escribir en camelCase y las const en MAYÚSCULAS.
  
  <h2>15/10/2022</h2>
  
  Tipos de datos primitivos: numbers (números), strings (texto), booleans (true/false), undefined (no definido) y null (valor nulo).
  Operaciones de comparación de datos: typeof, NaN (not a number), isNaN(), toString() para pasar un número a texto y .toFixed() para redondear decimales.
  
  <b>Práctica: Números </b>
  
  ![Curso2_1a codigo](https://user-images.githubusercontent.com/51362780/195987342-d5a9cd41-18c4-44a0-9b03-723c8b6778ff.png)
  
  ![Curso2_1b codigo](https://user-images.githubusercontent.com/51362780/195987348-8bdb1681-d881-4ae1-acee-787047b04dbd.png)

  Operaciones de strings:
  Concatenar texto, typeof, .length, .includes(), .slice(inicio, final), .replace('este texto', 'por otro'), .trim() y .split(',');

  <b>Práctica: Textos </b>
  
  ![Curso2_2 codigo](https://user-images.githubusercontent.com/51362780/195991783-9ccd66c7-9740-4dc4-8512-8e0a1a099765.png)

  Variables booleanas:
  Solo admiten valores true o false.
  
  <b>Práctica: Booleanas </b>
  
  ![Curso2_3 codigo](https://user-images.githubusercontent.com/51362780/195992670-0e0859ca-5902-4848-a7be-93590784ae2c.png)
  
  Undefined:
  
  var a;
  
  console.log(typeof a). No tiene valor porque todavía no ha sido definida.
  
  Null:
  
  var a = null;
  
  console.log(type of a). Nos devolverá tipo objeto.
  
  <h2>16/10/2022</h2>
    
  Funciones:
  
  Se define con "function nombreFuncion() {}"
  
  Por lo general, realizan una única tarea, engloban tu lógica. Las cosas que se generen dentro, se quedan dentro (a no ser que hagamos un return).
  
  Pueden recibir parámetros y aplicar su lógica con ellos. Pueden retornar esos valores modificados y pueden tener un valor por defecto.
  
  Se pueden asignar funciones a variables. También se pueden hacer en forma de funciones flecha (lambdas).
  
  Hecho el examen final del curso de JavaScript para Principiantes. Certificado conseguido.
  
  ![Certificado Curso 2](https://user-images.githubusercontent.com/51362780/196053731-de3e7d93-5c9b-4c74-9fb4-c537a12ef7ae.png)
  
  ################################################################################

  <h2>17/10/2022</h2>
  
 - <h4>3: Curso JavaScript Intermedio, por Jonathan Rodríguez</h4>
  
  Objeto: es una colección de propiedades con formato clave : valor.
  
  Se pueden declarar en una variable, construyéndolos desde una función o usando new object.
  
  <b>Práctica: Objetos </b>
  
  ![Curso3_1 codigo y resultado](https://user-images.githubusercontent.com/51362780/196273589-588ab471-8cf6-40b2-a190-6eaf5286d92e.png)

  Objeto Date:
  
  var date = new Date(); Esto tomará la fecha actual del sistema. También sirve para obtener la hora.
  
  Algunos métodos de Date: getDate(); getYear(), getMinutes(), getMilliseconds().
  
  Objeto Math:
  
  Nos permite realizar diferentes operaciones matemáticas, como hallar el mínimo o máximo o redondear un número decimal. Trae métodos con valores
  predefinidos, como el valor de PI usando Math.PI. También sirve para generar números pseudoaleatorios con Math.random().
  
  Arrays:
  
  Un array es un conjunto ORDENADO de datos por posiciones. En JavaScript, estos pueden ser de cualquier tipo de dato.
  
  Se puede crear un array ya indicando todos sus valores, o usando "new Array()" e indicar el total de posiciones del array o rellenándolo con cierto
  número de valores. No tienen un tamaño fijo, se les puede añadir o quitar tamaño a arrays ya creados.
  
  Bucles:
  
  Sirven para ir iterando los elementos que contiene un array. Un bucle se divide en 3 partes: el comienzo de la iteración, la condición que hará que
  el bucle deje de dar vueltas (iterar) y en cuánto se quiere ir incrementando cada vuelta.
  
  <b>Práctica: Arrays y bucles </b>
  
![Curso3_2 codigo y resultados](https://user-images.githubusercontent.com/51362780/196288028-e219643b-6e3e-42e7-9e0d-b15628fe25fb.png)

  <h2>18/10/2022</h2>
  
  DOM:
  
  Es básicamente lo que forma estructura de nuestra web. Está formado por ciertos elementos como: nodos (elementos de la web), selectores (usando JavaScript
  pueden acceder a los nodos y realizar acciones como extraer información o eliminarlos), document...
  
  Selectores:
  
  Utilizamos Document para acceder al DOM de nuestra página gracias a sus métodos, ya que hace referencia a todo lo que hay en nuestra web.
  
  Window hace referencia a toda la ventana en general.
  
  Eventos:
  
  ¿Qué es un evento? Es una acción que sucede en el sistema y te informa para que puede responder de alguna manera si así lo deseas.
  
  Tipos de eventos: de teclado (oprimir alguna tecla o combinación de ellas), de ratón (hacer doble click o click derecho), del navegador, eventos propios...
  
  Expresiones regulares:
  
  ¿Qué son? Vienen siendo un objeto más. Describen patrones de texto, están incluidas en la mayoría de lenguajes de programación y simplifican las tareas
  de procesamiento de cadenas de texto. Se utilizan para buscar, leer y reemplazar información de cadenas de texto. Estructura: /expresión-regular/[parámetros].
  
  Search permite saber si un patrón está en una cadena o no Devuelve el índice de la primera coincidencia o -1 si no hay. Exec ejecuta una búsqueda de las
  coincidencias de una expresión regular en una stringy devuele un array o null. Test ejecuta una búsqueda de una ocurrencia entre la expresión regular y retorna
  string o booleano. Match obtiene todas las ocurrencias de una expresión regular en una string.
  
  Caracteres especiales: \t = tabulador, \r = retorno de carro, \n = nueva línea, \d = un dígito del 0 al 9, \w = cualquier caracter alfanumérico,
  \s = espacio en blanco.
  
  Los corchetes [] sirven para crear grupos de caracteres. La barra | para indicar diferentes opciones. Dólar $ representa el final de la string (en modo multilínea
  representa una posición en vez de un caracter).
  
  Hecho el examen final del curso de JavaScript Intermedio. Certificado conseguido.
  
  ![Certificado Curso 3](https://user-images.githubusercontent.com/51362780/196500949-f03c73d2-d272-47a8-a6f6-99dc5a5916d3.png)

  <h2>20/10/2022</h2>
  
  - <h4>4: Curso JavaScript Avanzado, por Pablo Huet Carrasco</h4>
  
  Tipos y tipado dinámico:
  
  El tipado de JavaScript es dinámico porque se establecen tipos en tiempo de ejecución, no de compilación. Una variable puede tener cualquier tipo de valor.
  
  Tipado débil:
  
  Las variables son declaradas sin tipo y estas no exigen la asociación con un tipo de datos de forma implícita y unívoca. Los valores pueden
  modificarse, compararse y operar entre ellos sin hacer conversiones previas.
  
  Coerción de tipos:
  
  Proceso de convertir un dato de un tipo a otro. Existen 2 tipos: coerción explícita (casting) e implícita (esta solo es posible en lenguajes con tipado
  débil como JavaScript). En este lenguaje existen 3 tipos de conversiones: String(), Number() y Boolean().
  Con el el operador de triple comparación "===" podremos evitar coerción de tipos, al comparar valor y tipo.
  
  Expresiones y operadores:
  
  Una expresión es cualquier acción que nos da un resultado y se realiza entre uno o más operandos. Los operadores son unarios si actúan sobre un único
  operando y binarios si es entre dos. Los operadores pueden ser de comparación, de asignación o aritméticos.
  
  Estructuras de datos:
  
  Una estructura de datos es una forma de organizar de forma más concreta los datos que permite optimizar su uso. Cada estructura de datos es una abstracción útil
  para ciertas tareas. La estructura de datos más comúnmente utilizada en JavaScript es el Array o lista.
  
  Estructura Set: Estructura de datos compuesta por valores ÚNICOS. Métodos principales: add(); has() y delete().
  
  Estructura Map: Estructura de datos que, igual que un objeto de JavaScript, los almacena como clave : valor. Métodos principales: get(), set() y delete().
  
  Colas y pilas: Ambas son colecciones que implementan un método para añadir y otro para extraer. La única diferencia que tienen es el orden de extracción.
  
  Listas enlazadas: Cada miembro tiene una referencia al siguiente, por lo tanto, su orden no coincide con el orden en memoria, sino que está determinado por
  dichas referencias. En algunos casos pueden ser más eficientes que un array, pero son sobre todo, eficientes para representación de estructuras como grafos.
  
  Asincronía en JavaScript:
  
  JS es un lenguaje síncrono, solo dispone de una única pila de llamada y heap. La asincronía con las web APIs se resuelve gracias al cilo de eventos. Cada llamada
  a una API genera un callback y estos callbacks son solo cuando la pila de llamadas está vacía.
  
  Promises o Promesas:
  
  Es un objeto de JavaScript que nos permite realizar una acción asíncrona la puede resolverse en el momento actual, en el futuro o nunca. Una promesa recibe 2
  callbacks, el de resolución y el de rechazo. Es posible encadenar todos los then() o catch() que queramos, ya que una promise se devuelve a sí misma.
  También se puede usar finally(), que se ejecutará en una promise siempre al final e independientemente del estado en que se encuentre.
  
  Callsbacks y Errores:
  
  Un callback es una función que se provee como parámetro y es llamada por la función objetivo al completar su tarea con éxito. Estos pueden ser síncronos o
  asíncronos. Los callbacks se usan a menudo en operaciones sincrónicas para continuar tareas.
  
  En una promise, una función callback nunca es llamada antes de que termine el bucle de eventos. 
  
  Encadenamiento de Promises:
  
  Cada uso del handler (manejador) then() devuelve una nueva promise con el resultado que haya sido devuelto en el callback anterior. El valor devuelto por defecto
  será el que se resuelva en la promise retornada. También es posible una promise explícitamente, lo que hará que todos los handles subsiguientes esperen
  su resolución.
  
  Errores y gestión:
  
  El catch en las promises no solo gestiona rejects explícitos, también actúa como un try...catch. Cualquier throw de error de cualquier manejador then ocasionará
  el rechazo de la promise y será capturado por el manejador catch.
  
  Async y Await:
 
  Funciones asíncronas: Es una función precedida de async que devuelve siempre una promesa. Cualquier valor devuelto que no sea una promesa será introducido en
  una promesa resuelta. Estas funciones no comparten el tipo Function, sino que están tipadas com AsyncFunction.
  
  Uso de await: Se usa en funciones asíncronas definidas con la palabra async. En conjunción con una promise, congela la ejecución de la función
  hasta que la promise vuelva a ser resuelta. También puede ser usada en cualquier función que devuelva una promise. Que la función sea asíncrona no
  afecta al flujo del programa principal. Se seguirán realizando todas las llamadas hasta la resolución.
  
  <h2>21/10/2022</h2>
  
  Programación funcional:
  
  Se basa en el uso de funciones matemáticas para resolver todos los problemas, es decir, el uso de funciones con transparencia referencial y sin efectos colaterales.
  
  Una función pura es cualquiera que no tiene ningún efecto secundario. Su resultado depende únicamente de los parámetros de entrada.
  
  Una función idempotente es aquella que aplicada sobre sí misma da ella misma. Si se le llama muchas veces sigue dando el mismo resultado.

  Funciones de primera clase:
  
  Son las que pueden ser tratadas como cualquier variable, por lo que pueden ser pasadas como argumentos, retornadas o asignadas a otra variable. En JS
  todas las funciones son de primera clase.
  
  Closure en funciones:
  
  Closure es cuando se devuelve una función anónima dentro de otra función, por lo tanto la resultante tiene acceso a las variables definidas en la función
  generadora. Closure es único para la función contenida y el acceso a sus variables está limitado a la función. Usando Closures es una manera de crear
  propiedades privadas en JS.
  
  Funciones de orden superior:
  
  Son una abstracción de tareas comunes para funciones. Operan con funciones o devuelven nuevas funciones. Nos permiten realizar abstracción no solo por valor
  sino también por valores. Si lo hacemos bien podemos aplicar composición de funciones.
  
  Programación funcional. ¿Qué NO es programación funcional?
  
  Uso de bucles de iteración (usando mejor la recursión), usar variables var o let (mejor const) y mutaciones de objetos y métodos que producen efectos secundarios
  como fill, pop o push (una mutación es un cambio en la estructura de un objeto, en vez de sustitución de la instancia).
  
  ¿Qué es la currificación o currying? Se trata del proceso en que conviertes funciones de N argumentos en N funciones de 1 argumento. Es una forma de reutilizar
  funciones, convirtiéndolas en "factorías de funciones".
  
  <h2>22/10/2022</h2>
  
  Módulos:
  
  ¿Qué es un módulo? Es un script autocontenido que reúne un conjunto de clases con un namespace propio. Algunas ventajas de usar módulos son que, al ser
  autocontenidos, estos no tienen dependencia del resto del código y actualizarlos es fácil, ya que no es necesario hacer cambios en el resto del código.
  La reusabilidad de módulos facilita evitar la duplicación de código.
  
  Librerías de funciones:
  
  Es habitual tener librerías auxiliares que complementen nuestro código, pero estas funciones suelen requerir variables que pueden resultar caóticas si se
  definen a nivel global.
  
  Acercamiento modular: Al disponer de un scope propio, las variables se vuelven inmodificables fuera del mismo, lo que permite tener librerías completamente
  aisladas en forma de módulos.
  
  Creación de submódulos:
  
  Podemos crear submódulos usando las claves del objeto de retorno, lo cual nos permite reorganizar el código en funcionalidades y subfuncionalidades.
  
  Hecho el examen final del curso de JavaScript Avanzado. Certificado conseguido.
  
  ![Certificado Curso 4](https://user-images.githubusercontent.com/51362780/197338543-66b66e50-5da7-437a-8538-797f55aae058.png)

  - <h4>5: Curso de Git, por Juan Carlos Rubio</h4>


