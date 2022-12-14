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

  - <h4>5: Curso de Git, por Juan Carlos Rubio Pineda</h4>

  ¿Qué es GIT?
  
  Sistema distribuido de control de versiones, muy potente, no depende de un repositorio central, es software libre, dispone de historial de revisiones completo
  y con ramas diferentes de código (branches) y fusiones de código (merges) es un proceso ágil.
  
  Nos permite movernos "en el tiempo" hacia delante o hacia detrás de forma que podemos sacar bloques de códigos de diferentes ficheros en diferentes momentos
  del tiempo gracias a que las fotografías de estado del histórico se almacenan en un flujo de un repositorio remoto. Git maneja sus datos como una secuencia de
  copias instantáneas.
  
  Detalles de estados de un fichero:
  
  Confirmado -> Los datos del archivo están guardados de forma segura de manera local (commited).
  
  Modificado -> El archivo ha sido modificado pero aún no lo has guardado en tu base de datos local (untracked).
  
  Preparado -> Has marcado un archivo modificado en su versión actual para que vaya en tu próxima confirmación (staged).
  
  Fases: Trabajamos en el working directory, vamos metiendo archivos en el área de staging y por último pasamos estos al directorio git.

  <h2>23/10/2022</h2>
  
  Descargo git y tkdiff. A partir de aquí trabajo usando la consola de comandos de Git.
  
  Aprobando cambios:
  
  Creo el subdirectorio "escenario1" en mi carpeta TestGit con mkdir y accedo con cd. Después lanzo el comando git init para cree las estructuras necesarias para
  poder albergar un repositorio de git.
  
  ![Git1](https://user-images.githubusercontent.com/51362780/197399463-d8f4c0a2-90aa-401a-84e5-b10164866d22.png)
  
  ls -lart .git/ nos muestra todo lo que sustenta la funcionalidad de Git.
  
  Creo el fichero readme.md añadiendo su primera línea: echo "# primera linea de un fichero readme.md" > readme.md
  
  Con el comando git status compruebo si está o no en el área de staging, la que viene después de la del working directory, ni tampoco en la de commit porque todavía
  no he lanzado ninguna revisión.
  
  ![Git2](https://user-images.githubusercontent.com/51362780/197399479-9d4d4b3c-b305-4783-9873-65d1a7db138a.png)
  
  Con el comando git add lo meto en el área de staging, por lo tanto, si vuelvo a poner status, ahora me saldrá que sí está en esa área.
  
  ![Git3](https://user-images.githubusercontent.com/51362780/197399487-0c7fa32f-3195-4ce0-a702-5ec37204bd1c.png)

  Con el comando git commit lo lanzo al área de commit. Se puede usar el atributo -m para agregar un mensaje al commit. Para poder hacer el commit, antes tengo
  que decirle mi correo y nombre de usuario. Con git log puedo ver las diferentes revisiones y sus identificadores hash (hash ID). Usando un comando como
  git log --pretty=format:"%h %an %ar - %s" o git log --pretty"%h %an %ar - %s" (sin el format) nos muestra las revisiones añadiendo más detalles que
  sustituyen a los parámetros que hayamos introducido.
  
  ![Git4](https://user-images.githubusercontent.com/51362780/197399494-c118d231-32de-4188-a449-551eb6bd9b2e.png)

  Con git diff veo las diferencias entre versiones de un fichero en commit y uno que ha sido modificado pero aún no se ha hecho su commit. Si le digo git difftool
  entonces usaría la herramienta vimdiff para mostrarme las diferencias a pantalla partida. Si meto la herramiento tkdiff que había descargado previamente en
  la carpeta usr/bin de Git, ahora este reconocerá tkdiff como herramienta para mostrar las diferencias.
  
  Si le digo git show y a continuación mi hash ID nos muestra qué cambió en esa revisión en específico.
  
  A la hora de borrar o renombrar/mover ficheros es importante usar git rm y git mv, ya que si se escriben sin el "git" delante, hay que hacer pasos extra
  para que Git se dé cuenta y nosotros podemos tampoco darnos cuenta de que no se ha realizado el cambio de estado.
  
  Si editamos un fichero y le decimos git status se habrá dado cuenta de que ha sido modificado. Con git diff y añadiendo el atributo --staged haremos que compare
  con los que se encuentran en área de staging, no los del working directoy.

  Trabajo remoto:
  
  Vinculándome con el proyecto Bat usando el comando git remote add origin https://github.com/sharkdp/bat. Usando git fetch origin para mostrarme los objetos
  que tiene. Uso git pull origin master para meterlo en mi rama principal llamada "master", el nombre que dan por defecto. Con git branch -v -a puedo ver el
  acceso a las ramas que tengo.
  
  ![Git5](https://user-images.githubusercontent.com/51362780/197414054-3586dfec-e900-4431-b69a-a4653eb25d8a.png)

  Con git clone obtengo el directorio de un repositorio en mi carpeta deseada. Si por casualidad lo meto en la carpeta que quería, puedo usar rm -rf para que
  fuerce el borrado recursivo de todo lo que contiene esa carpeta y volver a clonar en la que quería.
  
  ![Git6](https://user-images.githubusercontent.com/51362780/197416497-f1f3c2da-7c2e-4e2f-9517-8fd9d86ddd8c.png)

  Con git push origin master subo el contenido al repositorio master. Me pedirá las credenciales necesarias antes de poder hacerlo.
  
  Con git checkout me puedo traer el contenido de una rama o un archivo, ya que admite ambos. Sin embargo, si por ejemplo tengo un archivo llamado "master" igual
  que la rama principal, le diría git checkout --master para dejarle claro que quiero el archivo al ponerle esos -- delante.
  
  Si por casualidad elimino un archivo sin querer y quiero recuperarlo porque sé que aún está en un revisión anterior puedo usar git checkout HEAD -- .
  Eso lo que hace es recuperar todo lo de la revisión más reciente.
  
  Con git reset HEAD puedo deshacer el lanzamiento de un archivo al área de staging.
  
  Con git reset --HARD puedo traerme el contenido del commit y al mismo tiempo eliminar lo que estaba en área de staging y todo lo que hubiese en el working
  directory que no todavía no haya sido incluido en el staging.
  
  Con git revert le digo que me revierta los últimos cambios hechos con la hash ID de la modificación deseada. También se puede indicar un rango de posiciones,
  por ejemplo decirle git revert HEAD...HEAD~2.
  
  <h2>24/10/2022</h2>
  
  Flujos de trabajo:
  
  Usando git branch puedo crear una nueva rama. Primero indico el nombre de la rama y luego el de la principal, por ejemplo: git branch new-master master.
  Uso git checkout y nombre de la nueva rama para moverme a esa rama. Si solamente pongo git branch me mostrará todas mis ramas locales . Si le añado "-a" me
  muestra también las ramas en remoto y si además añado "-v" me mostará también incluirá el mensaje commit más reciente de cada rama.
  
  Puedo unir una rama a otra con el comando git merge rama1 rama2.
  
  Usando git branch -d rama puedo eliminar esa rama en caso de que ya no la necesite.
  
  Git guarda todos los cambios en el repositorio. Tenemos diferentes maneras de localizar problemas en nuestros commits.
  
  Para poder ver un cambio que esté en el área de staging tengo que añadir --cached al comando que ya vimos de git diff (git diff --cached).
  
  Para filtrar los cambios de hitos y verlos mejor puedo usar git log -p -n y número para que me muestra los N últimos. Por ejemplo: git log -p -n 4.
  También le puedo decir que me los muestre entre un rango de tiempo determinado, por ejemplo: git log --since="2 weeks ago" --until="2 days ago".

  Con git blame puedo saber qué autores han hecho cada modificación de cada archivo, por ejemplo: git blame src/output.rs
  Si quiero saber solo los autores de ciertas modificaciones de un archivo, por ejemplo de las que se encuentran de 6 a 8, puedo hacer git blame -L 6,8 archivo.
  
  Puedo ser detallista o quisquilloso acerca de cuáles de unos commits quiero unir/merge. Para ello puedo usar git cherry-pick. Por ejemplo:
  git cherry-pick origin/master 5d5bf61.
  
  Una historia limpia es mucho más fácil de seguir. Es posible reescribir la historia de GIT para reestructurar los commits y asegurar de que son comprensibles
  antes de subir los cambios con el comando rebase. Esto solo se debería hacer con commits que no hayamos compartido con otras personas vía push.
  Ejemplo: git rebase --interactive --root.
  
  Git da la posibilidad de etiquetar puntos concretos importantes de la historia. Ejemplo: git tag -a v1.5 -m "Esta es la versión 1.5". Luego vemos la información
  con git show v1.5
  
  Puedo moverme en el tiempo entre estados de un directorio Git. Si después de hacer un commit me doy cuenta de que me ha olvidado algún archivo
  puedo hacer git commit --amend para mover el puntero hacia atrás, hacer los cambios necesarios y regresar hacia delante, cargándome ese hito, pero arreglando
  lo que me faltaba.
  
  Con git stash puedo hacer una instantánea del momento exacto en el que estoy en ese momento y poder recuperar ese contenido más adelante si lo necesitase
  con el comando git stash apply.
  
  Repositorios Corporativos:
  
  Tanto GitHub como GitLab sirven como servicios de hosting para GIT proporcionando una interfaz que va por encima como una capa adicional de GIT.
  
  Hecho el examen final del curso de Git. Certificado conseguido.
  
  ![Certificado Curso 5](https://user-images.githubusercontent.com/51362780/197885917-50d071c8-add5-4517-a686-8aa05790e1ac.png)

  <h2>25/10/2022</h2>
  
  - <h4>6: Curso de Angular para Principiantes, por Jonatan Lucas</h4>

  Descargo las herramientas necesarias, como NVM, que es un gestor de versiones de Node y el propio Node. También se usará Git, pero ya lo tenía del curso anterior.

  Repaso TypeScript:
  
  En TypeScript la forma de crear una variable es let, a diferencia de JavaScript que la más usada es var. Se encuentran también las tuplas (tuples) que son
  similares a los arrays, con la diferencia de que una vez inicializados no podremos modificar sus valores.
  
  Existe la variable any, que se usará cuando aún no tengamos definida nuestra estructura de datos.
  
  TypeScript permite hacer programación orientada a objetos.
  
  SPA (Sngle-Page Application):
  
  Una SPA es una aplicación web donde todo se carga en la primera petición. Se encarga de enrutado, interfaz fluida y acceso a datos.

  Lo importante, ¿qué es Angular?:
  
  Es un framework desarrollado en TypeScript por Google en 2010.
  
  Características:
  
  Buena velocidad y rendimiento. Es multiplataforma. Carga solo el código de la vista que estemos viendo en ese momento.
  
  Productividad. Permite crear component, módulos, etc de forma rápida. Angular CLI. Integración con la mayoría de editores de texto.
  
  Angular CLI es una herramienta en línea de comandos para poder trabajar en Angular, la instalamos con el siguiente comando en nuestra consola: npm install -g @angular/cli
  
  Algunos de los comandos de Angular CLI son:
  
  ng new: crea un nuevo proyecto en Angular.
  
  ng build: compila el proyecto.
  
  ng config, ng update: para configurar nuestra proyecto.
  
  ng add: para añadir plugins al proyecto.
  
  ng serve: para ejectuar la aplicación en servidor local.
  
  <b>Práctica: Creando mi primer proyecto en Angular</b>
  
  ![Angular practica1 enunciado](https://user-images.githubusercontent.com/51362780/197846661-cdc7716a-e777-4867-9e92-fbdd2001769a.png)
  
  ![Angular practica1_1](https://user-images.githubusercontent.com/51362780/197837793-88eba1dd-292a-4313-acf4-748c2d7cbcae.png)

  ![Angular practica1_3](https://user-images.githubusercontent.com/51362780/197837846-3f19ff5e-2876-4f97-8358-3e1ec3c03f80.png)

  ![Angular practica1_4](https://user-images.githubusercontent.com/51362780/197837857-96721a9e-820f-40c3-8622-f6c956eb4c66.png)

  ![Angular practica1_5](https://user-images.githubusercontent.com/51362780/197837873-0cabd9bb-421d-41fd-b7a7-996d0d3dedd0.png)

  Arquitectura de Angular:

  Angular se basa en módulos y cada uno de ellos puede tener una funcionalidad concreta en nuestra aplicación. Cada módulo puede contener componentes, servicios,
  directivas, etc... Toda aplicación contiene un módulo raíz que realiza la función de cargar todo lo necesario para nuestra aplicación.
  
  Cada app de Angular tiene al menos un NgModel, el módulo raíz. Una app pequeña solo suele tener uno, pero la mayoría de apps tienen muchos módulos.
  
  <b>Práctica: Creando mi estructura de trabajo</b>
  
  ![Angular practica2 enunciado](https://user-images.githubusercontent.com/51362780/197846685-39711b4e-e447-4629-9045-48b0b16b259e.png)
  
  ![Angular practica2](https://user-images.githubusercontent.com/51362780/197845781-ca8fc1b3-3631-4f8f-a71e-24e6060ae67f.png)
  
  <h2>26/10/2022</h2>
  
  Componentes de Angular:
  
  Un componente puede albergar vistas completas o parte de una vista. Definen la lógica de una plantilla dentro de una clase a través de una API de
  atributos/propiedades y métodos. Para crear un componente se usa en consola el comando: ng generate component nombre_componente. También se puede
  abreviar como ng g c nombre_componente.
  
  Ciclo de vida de un componente: Constructor, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked y OnDestroy.
  
  Metadatos de un componente: Le indican a Angular de dónde obtener los principales bloques que se necesitan para crear y presentar un componente y su vista.
  Los principales son: selector, templateUrl y styleUrls. Se puede usar un provider para que solo afecte a ese componente y no a toda la aplicación.
  
  Plantillas y vistas: Una plantilla es como un archivo HTML donde se le añade la sintaxis de Angular para poder alterar el DOM a través de la lógica de
  la aplicación.
  
  <b>Práctica: Creando mi primer componente</b>
  
  Ejecuto en Powershell el comando Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine para poder realizar la prática, ya que sino Windows
  no deja hacerlo.
  
  ![Angular practica3](https://user-images.githubusercontent.com/51362780/198078131-a5a5f405-309a-477b-95df-e518b80e0591.png)

  Data Binding en Angular:
  
  Hace referencia al enlace de los atributos o métodos de nuestro componente con la plantilla. Sin un framework seríamos responsables de enlazar la información
  en el HTML con el componente, lo que supondría un trabajo pesado. Desde el componente al DOM se mostrará el valor del atributo o método en el DOM. Esta opción
  solo es válida para enlazar un valor con una propiedad/atributo de una etiqueta HTML. Desde el DOM al componente lanza eventos del DOM y ejecuta un evento cuando
  se lance dicho evento. Double data-binding: se utiliza en etiquetas input.
  
  Directivas:
  
  Las directivas procesan el DOM y lo transforman de acuerdo con las instrucciones dadas en ellas. Para crear directivas se usa @Directive(), donde el valor
  selector indicará la misma. Podríamos decir que técnicamente un componente es una directiva, pero con un decorador diferente. Hay 2 tipos:
  estructurales (Modifican el diseño del DOM: "*ngFor", "*ngIf") y de atributo (Alteran la aparencia o comportamiento de un elemento)
  
  El símbolo # (almohadilla) se usa para declarar una variable en plantilla. Con ella tenemos acceso a los valores de la etiqueta donde se inicializa.
  
  Navegación:
  
  La etiqueta '<head>' es la que permite a Angular crear el punto de partida. de la navegación.
  
  Si queremos añadir rutas en Angular podemos hacer con: ng generate module app-routing --flat--module=app. Para añadir rutas usaremos los parámetros de ruta:
  path (nombre url) y component (componente al que accede). Hay rutas extras: path:" (indica la ruta por defecto de la web) y path:'**' (cuando la ruta
  no se encuentra en el router de Angular).
  
  RouterOutlet:
  
  Se encarga de mostrar vistas de los componentes cargados en cada una de las rutas creadas. Tenemos que tener mínimo esta etiqueta en app.component.htmh.
  Navegación entre vistas: RouterLink (atributo de etiqueta). Clase router (se llama a este método desde el HTML a través de un click). Para 'volver' al
  último enlace guardado en el historial desde un componente se utilizará una clase diferente al Router de Angular, se llama Location y es de JavaScript.
  
  <b>Práctica: Navegando en mi proyecto</b>
  
  ![Angular practica5_2](https://user-images.githubusercontent.com/51362780/198097684-bac3c176-af4f-4a17-bdca-1527eb5517bf.png)
  
  ![Angular practica5_4](https://user-images.githubusercontent.com/51362780/198097712-e177d8ef-a22f-4582-8db4-46e8bb627c2f.png)

  Inyectores de dependencias:
  
  Enlazan un componente con un servicio u otro tipo de clase que se necesite. El metadato usado es @Injectable(). Para añadir un servicio al inyector usamos
  los providers. Se crea un inyector principal para toda la aplicación y luego inyectores adicionales según se necesiten. Cada instancia de un servicio en
  el inyector es única (singleton).
  
  Servicios en Angular:
  
  Se usa para añadir funcionalidades extra a la aplicación. Aumentan la reutilización de funcionalidades sobre componentes. Sus usos más habituales son
  reutilizar código y peticiones a REST API. Usamos el comando: ng generate service nombreServicio.
  
  Peticiones HTTP:
  
  La mayoría de aplicaciones web se comunican con un servidor y estos les proporcionan la información necesario a través del protocolo HTTP. Los navegadores
  modernos admiten 2 APIs: XMLHttpRequest y Fetch. En Angular tenemos la librería HttpClient, basada en la interfaz XMLHttpRequest, para realizarlas.
  Lo habitual es manejar la información entre nuestra aplicación y el servidor a través del formato JSON, son las conocidas REST API. Para poder realizar
  peticiones en nuestro proyecto hace falta cargar el módulo HttpClientModule en el raíz, cargar la librería en el servicio que la necesitemos e
  iniciar la clase.
  
  Observables:
  
  Equivalen a callback() en JavaScript. Se usan para peticiones asíncronas. Una vez recibida la respuesta del servidor, el Observable envía la
  información al/los componentes que están esperando dicha información.
  
  Tipos de Peticiones HTTP:
  
  GET: recupera información.
  
  POST: recupera información en un body.
  
  DELETE: elimina un objeto del servidor.
  
  PUT: actualiza información de un objeto del servidor.
  
  Muchas peticiones requieren cabeceras/headers para operaciones como, por ejemplo, el token de autorización para operaciones de guardado o eliminar un objeto
  del servidor.
  
  <b>Práctica: Peticiones API REST</b>
  
  ![Angular practica6_1](https://user-images.githubusercontent.com/51362780/198107268-7077d353-284c-4865-b149-60c4f8e1cbb0.png)

  ![Angular practica6_3](https://user-images.githubusercontent.com/51362780/198107278-ccb9dc3b-01f2-4d5d-bb58-a37badff1e12.png)

  Formularios:
  
  Angular provee 2 tipos de formularios. Ambos recogen los eventos y datos desde las etiquetas input, validan datos, crean modelos de formularios y los envían
  al componente. Los 2 tipos son: Formularios Template-drive /de plantilla (para webs con 1 ó 2 formularios como máximo) y formularios Reactive/reactivos
  (para webs con muchos formularios, como una zona de administración).
  
  Validación: se realiza de la misma forma que cualquier formulario en HTML. Angular usa directivas para unir esos atributos con sus funciones de
  validación, por ejemplo: required, minlength, forbiddenName.

  <h2>27/10/2022</h2>
  
  <b>Práctica: Formulario en Angular</b>
  
  ![Angular practica7_1](https://user-images.githubusercontent.com/51362780/198332508-a14c99bb-4be9-482b-8e85-a2fbd0e877db.png)

  ![Angular practica7_3](https://user-images.githubusercontent.com/51362780/198332526-533fce88-e36a-4151-9390-1032203c74a1.png)

  ![Angular practica7_4](https://user-images.githubusercontent.com/51362780/198332583-2b560f7a-8608-40e0-8961-3826d5ac765e.png)

  ![Angular practica7_7](https://user-images.githubusercontent.com/51362780/198332598-34e38ffd-99c6-46ef-a69c-a3d15e6fffea.png)
  
  Hecho el examen final del curso de Angular para Principiantes. Certificado conseguido.
  
  ![Certificado Curso 6](https://user-images.githubusercontent.com/51362780/198350520-87b7683f-e7bd-47f7-843e-59746e2f3a5b.png)

  - <h4>7: Curso de Angular - Ampliando Conceptos, por Jonatan Lucas</h4>
  
  Relaciones entre componentes:
  
  Cuando hablamos de relación Padre-Hijo entre componentes nos referimos a cuando la etiqueta de un componente se encuentra en la plantilla de otro.
  
  Tipos:
  
  -> Comunicación Padre-Hijo a través del decorador @Input(). @Input() enlaza el atributo de la etiqueta con el atributo del componente.
  
  -> Comunicación Padre-Hijo con @ngOnChanges(). @onChanges() detecta la modificación de datosy realiza alguna tarea de comprobación
  
  -> Comunicación Hijo-Padre a través de métodos.
  
  -> Acceso del componente Padre a atributos y métodos del componente hijo.
  
  -> Acceso del componente Padre a atributos y métodos del componente hijo a través del decorador @ViewChild()
  
  -> Comunicación entre componentes a través de un servicio.
  
  Decorador @Output: El atributo que lo tenga será tipo EventEmitter<>. Este tipo de objetos emiten un evento que se recupera en el componente padre. Para poder
  iniciarlo necesitamos llamar al método .emit(). La forma de recibir el Padre el evento del componente hijo es introducir el nombre del atributo
  entre paréntesis y se iguala el evento a un método del componente padre. Si el evento del componente hijo envía algún valor debemos añadir al método
  del componente Padre la variable $event.
  
  Relación mediante servicios:
  
  Cada atributo que queramos compartir a través de un servicio deberá de tener estos tres objetos: atributo privado, Observable para suscribirnos y 
  un método setter que actualizará el valor del atributo privado. Utilizaremos la clase Subject cuando los componentes estén en la misma vista, es decir,
  relación Padre-Hijo o que ambos sean Hijos de otro componentes. Para relacionar componentes que se encuentran en vistas distintas usaremos la clase
  BehaviorSubject.
  
  <h2>28/10/2022</h2>
  
  <b>Práctica: Creando usos de relación entre componentes</b>
  
  ![Curso7 practica1_1](https://user-images.githubusercontent.com/51362780/198732583-dd698868-56c1-4140-a3e2-cf8eaf3e0878.png)

  ![Curso7 practica1_3](https://user-images.githubusercontent.com/51362780/198732641-eaab6977-a4d0-4805-9471-210c2159bce7.png)

  ![Curso7 practica1_7](https://user-images.githubusercontent.com/51362780/198732695-a6b3fe7f-6c95-47f7-b56c-247beca26790.png)

  Directiva ngClass:
  
  Nos permite añadir o eliminar las clases CSS que queramos y actualiza nuestro diseño.
  
  Directiva ngStyle:
  
  Nos permite añadir o eliminar los estilos que queramos y actualiza nuestro diseño. La principal diferencia es que ngStyle añade un valor dependiendo de
  la condición.
  
  Directiva ngSwitch:
  
  Nos permite renderizar diferentes elementos según la condición dada.
  
  Pipes en Angular:
  
  Son tuberías que se utiliza para transformar el valor de una variable, como poner un texto en mayúsculas o filtrar una lista, así: {{ valorVariable | nombrePipe }}
  Podemos crear nuestras propias pipes con el comando: "ng generate pipe nombre Pipe".
  
  <b>Práctica: ngClass y Pipes</b>
  
  ![Curso7 practica2_1](https://user-images.githubusercontent.com/51362780/198738447-d3d36560-8765-4404-84dc-866cc835a9e6.png)

  ![Curso7 practica2_2](https://user-images.githubusercontent.com/51362780/198738464-666c72a5-35d4-4198-abe2-01fd992a0c2d.png)

  ![Curso7 practica2_4](https://user-images.githubusercontent.com/51362780/198738480-a0c997dc-f004-4d7b-a61e-08db8f45bef0.png)

  Extraer parámetros:
  
  Añadimos el parámetros coloando ":" delante del nombre en la ruta. Para pasar el parámetro añadimos el valor que tendrá nuestro parámetro en la url.
  Podemos recuperar el parámetro con la clase ActivatedRoute.
  
  Rutas anidadas:
  
  Podemos crear varios niveles de rutas para agrupar diferentes funcionalidades y componente bajo un mismo componente principal. Pero no basta con eso, también
  hay que colocar componente que tengas rutas anidadas una etiqueta <router-outlet> para que Angular sepa renderizarlas.
  
  <h2>29/10/2022</h2>
  
  CanActivate:
  
  Es un servicio con su propia forma de crearse. Para crear un "guard" se usa el comando: ng generate guard auth --implements CanActivate.
  Se utiliza para limitar a los usuarios el acceso a ciertas rutas como puede ser una zona de administración. Para comprobar el acceso a una ruta debemos añadir
  el parámetro canActivate a la ruta creada y pasarle en un array la clase del servicio guard.
  
  <b>Práctica: Creando nuevas rutas</b>
  
  ![Curso7 practica3_1](https://user-images.githubusercontent.com/51362780/198841725-5182e63d-a3f6-446b-ab45-d7b6e5492dc7.png)

  ![Curso7 practica3_3](https://user-images.githubusercontent.com/51362780/198841796-b5ec8abb-6045-4fb8-8f17-9b7a00eceec6.png)
  
  ![Curso7 practica3_12](https://user-images.githubusercontent.com/51362780/198841813-690a4c82-46ae-4a82-bc2f-9bb160d9b0ae.png)

  <b>Práctica: Añadiendo seguridad</b>
  
  ![Curso7 practica4_1](https://user-images.githubusercontent.com/51362780/198842470-6794180e-4e0a-4163-80ce-503f77d4c807.png)

  ![Curso7 practica4_3](https://user-images.githubusercontent.com/51362780/198842484-5b631330-5a69-4362-b95c-bba6bb29a39d.png)

  ![Curso7 practica4_4](https://user-images.githubusercontent.com/51362780/198842488-e19284f7-40ac-4fcc-9342-103e88b5106d.png)

  Submódulos y sus componentes:
  
  Para crear un nuevo módulo usamos: ng generate module nombreModulo. El código por defecto de los submódulos es similar al AppModule que está en nuestro proyecto.
  Para saber nuestro módulo raíz usaremos el archivo main.ts, que ya mencionamos en el curso anterior, para que Angular identifique su módulo principal.
  
  Para crear componentes de los submódulos se usa: ng generate component submodulo/componente.
  
  Mostrar los componentes de un submódulo:
  
  Hay 2 formas: añadiendo el componente a los exports de dicho submódulo y así poder utilizar su selector en otro punto fuera de este submódulo o, también, la otra
  manera, que es añadiendo rutas al submódulo y sus componentes, llamado "lazy loading". Hay que añadir una ruta en el archivo de rutas para importar el
  submódulo a cargar. En el submódulo (u otro app-sub-routing, si queremos crearlo) debemos añadir las rutas al enrutado con .forChild()
  
  <b>Práctica: Transformando mi aplicación en submodular</b>
  
  ![Curso7 practica5_1](https://user-images.githubusercontent.com/51362780/198845150-f6704de7-d4c8-441e-8340-1a02da22491a.png)
  
  ![Curso7 practica5_2](https://user-images.githubusercontent.com/51362780/198845153-a98e3622-8025-4930-b775-0621de1fa689.png)

  ![Curso7 practica5_5](https://user-images.githubusercontent.com/51362780/198845163-6230b6f5-439f-4e8b-9d42-5f8c9e299ffb.png)

  Formularios reactivos:
  
  Hay 2 tipos de formularios en Angular, como se vio en el curso pasado: Template-driven y Reactive, ahora nos centramos en estos últimos. Como recordamos, se usan
  para webs con muchos formularios como una zona de administración.
  
  Lo primero que se hace es añadir el módulo ReactiveFormsModule a nuestro módulo para poder usar las funcionalidades de Angular para formulario reactivo. La clase
  más básica para crear un formulario reactivo es FormControl, que nos permite crear una instancia de un objeto y podremos utilizarlo en el formulario HTML.
  Usaremos FormGroup para tener un formulario de varios campos. Para enlazar con el atributo del componente usaremos formGroup para el formulario y formControlName
  para cada uno de los valores. Los form group se pueden anidar.
  
  Validar formularios reactivos:
  
  A diferencia de los formularios de plantilla o template, en los reactivos añadimos los requisitos de validación a continuación de la declaración de parámetro. En el
  HTML será parecido a los de plantilla, con unas diferencias: no es necesario colocar atributos como required o minLength.
  
  <b>Práctica: Creando un formulario reactivo</b>
  
  ![Curso7 practica6_1](https://user-images.githubusercontent.com/51362780/198846474-fe24d350-628d-40ab-a9b1-bf2dd04e9de1.png)

  ![Curso7 practica6_3](https://user-images.githubusercontent.com/51362780/198846481-fac6c8b1-05c5-4b04-ab64-7ae082e7e16d.png)

  ![Curso7 practica6_4](https://user-images.githubusercontent.com/51362780/198846496-718f029f-3550-4e74-8059-c5a7d0dd912d.png)

  <h2>30/10/2022</h2>
  
  Material Design:
  
  "Material" es un lenguaje de diseño que define un conjunto de pautas que muestran cómo diseñar un sitio web. Le indica qué botones se deben usar y cuáles, cómo
  animarlos o moverlos, cómo deben colocarse, etc... Es un lenguaje diseño principalmente para dispositivos móviles. Diferencias con Bootstrap:
  Este está orientado a crear una mejor experiencia del sitio web en vez de hacerlo responsive, este se basa en componentes a la hora de trabajar en vez de
  ser una biblioteca UI que presenta un sistema de cuadrícula. Ambos son compatibles con todos los navegadores de hoy en día y ambo tienen una amplia
  documentación y comunidad (Bootstrap más porque lleva más tiempo).
  
  Para instalar Material usamos el comando: ng add @angular/material.
  
  Usando Angular Material:
  
  También necesitamos importar la clase que necesitemos usar en los imports del módulo. Donde necesitemos la etiqueta la etiqueta podremos añadirle siguiente
  su nomenclatura.
  
  <b>Práctica: Añadiendo estilo a mi aplicación</b>
  
  ![Curso7 practica7_1](https://user-images.githubusercontent.com/51362780/198891616-945f1896-6f00-43cf-8d46-5d30d8126ebb.png)

  ![Curso7 practica7_2](https://user-images.githubusercontent.com/51362780/198891641-5e661f6d-d621-4424-b057-a5572b92e476.png)

  ![Curso7 practica7_4](https://user-images.githubusercontent.com/51362780/198891643-baddeeb2-1b23-44d0-8671-dd9ba6aa2d04.png)
  
  Compilar nuestra aplicación:
  
  Con el comando "ng build --prod" o "ng build" podemos compilarla. Angular compila una serie de archivos entre los que podemos ver el index.html, los estilos,
  la carpeta assets y los archivos JavaScript para poder ejecutar nuestra aplicación.
  
  Hecho el examen final del curso de Angular - Ampliando Conceptos. Certificado conseguido.
  
  ![Certificado Curso 7](https://user-images.githubusercontent.com/51362780/199107606-3c726ea3-b559-4d3f-9392-32fcfb66f3d3.png)

  <h2>31/10/2022</h2>

  - <h4>8: Curso de Buenas Prácticas en Angular, por Samuel Comino</h4>
  
  Archivo de configuración de Angular CLI:
  
  "sourceRoot": en donde le decimos a Angular que se encuentran todos los archivos del documento. El predeterminado es "src".
  
  "prefix": está presente en todos los componentes, directivas y pipes. El predeterminado es "app".
  
  "outputPath": es el directorio donde Angular compilará la aplicación. El predeterminado es "dist/myapp".
  
  "index": es el punto de entrada de nuestra web.
  
  "main": el módulo de inicio.
  
  "assets": donde metemos archivos como imágenes que queramos mostrar en la aplicación. También se puede cambiar el icono.
  
  "styles": para darle una hoja de estilos.
  
  Usando Tslint:
  
  En este archivo se pueden modificar una gran cantidad de parámetros, como tener que dejar un espacio en blanco después de abrir llaves en un if, que el
  máximo de caracteres en una línea sea 140, etc...
  
  Con el comando ng lint podemos comprobar si todos nuestros archivos están cumpliendo las normas.
  Con el comando ng serve -o nos dice donde hay errores en nuestra aplicación.
  
  Nombres de ficheros:
  
  La guía de estilos de Angular dice que los nombres de archivos de componentes deben acabar siempre en ".component". Los nombres de los ficheros deben
  aparecer separados por guiones. El nombres de las clases debe estar en camelCase y el nombre de las clases de componentes deben tener el sufijo "Component"
  al final del nombre. El nombre de los ficheros de servicios debe terminar en ".service". Todos los modelos deben terminar en ".model". Los de ruta deben terminar
  en "-routing.module"
  
  Principio de responsabilidad única:
  
  Es importante que un objeto, una clase o un archivo solo debe realizar un única función. El orden de cosas en una clase debe ser: propiedades -> constructor ->
  implementaciones del componente -> métodos públicos -> métodos privados
  
  Estructura:
  
  Es importante tener bien estructura la aplicación y para ello un buen método es tenerlo todo organizado en carpeta. Cada carpeta debe tener cosas que tengan
  relaciones en común con el nombre de la carpeta.
  
  <h2>01/11/2022</h2>
  
  Lazy Loading:
  
  Si tenemos una aplicación que ocupa, por ejemplo, más de 5MB, no es necesario que los usuarios se descarguen toda la aplicación. Dentro de las rutas, al final
  se le indica con un # el módulo que queremos que Angular cargue, por ejemplo #LoginModule.
  
  Optimizando bundles:
  
  Con el comando npm install -g source-map explorer podemos instalar la librería Source Map Explorer. Añadiendo "sme" después de run y ejecutar el comando nos genera
  un html con todo lo que hay en el proyecto.
  
  Compilar la aplicación:
  
  Para compilarla usamos el comando "ng build" (también se puede añadir --prod pero no hace falta).
  
  Hecho el examen final del curso de Buenas Prácticas en Angular. Certificado conseguido.
  
  ![Certificado Curso 8](https://user-images.githubusercontent.com/51362780/200062336-62e2772c-7f84-44ed-a9d9-55828c178120.png)

  <h2>03/11/2022</h2>
  
  - <h4>9 (FINAL): Curso de MongoDB, por Pedro Martín</h4>
  
  Bases de datos SQL:
  
  Son la forma más extendida de almacenar información, la cual se organiza en tablas y cada tabla está formada por filas/registros. La información puede estar
  relacionada, por eso se llaman bases de datos relacionales. Usan SQL como lenguaje estructurado de consultas. Permiten el uso de transacciones, respetando
  los 4 principios ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad), que básicamente se encarga de que la base de datos (BD) tenga coherencia y no
  queden registros sueltos. Las BD SQL siguen un esquema con reglas que la información obtenida en las tablas debe cumplir. Almacenan datos estructurados.
  
  Bases de datos noSQL:
  
  Con la llegada de internet, las bases de datos relacionales suponen una alternativa a las tradicionales. Un punto negativo que tienen es que no siguen
  los principios ACID comentados antes. En principio no usan lenguaje de consultas SQL, pero el término "noSQL" se suele referir más a "no solo SQL" para
  indicar que también pueden hacer consultas. En este tipo de bases de datos se encuentran las documentales, las orientadas a grafos o las de clave-valor.
  Mejoran la felixibiblidad y escalabilidad con respecto a las SQL.
  
  Características de MongoDB:
  
  Está orientada a documentos json. No sigue ningún esquema. Disponible de consola construida sobre JavaScript, lo que permite ejecutar muchas de sus funciones.
  Es utilizada ampliamente en aplicaciones para internet y Bid Data.
  
  JSON:
  
  Significa JavaScript Object Notation. Tiene un formato sencillo para el intercambio de objetos y se trata, a su vez, de un subconjunto de la notación
  literal de objetos de JavaScript. Surgió como una alternativa a XML como lenguaje de intercambio de datos y es mucho más sencillo de leer y escribir.
  Se trata de un formato muy extendido en bases de datos noSQL, como MongoDB. Está soportado por multitud de lenguajes de programación. Un objeto json
  está formado por uno o varios pares clave:valor. Soporta diferentes tipos de datos, como cadenas, valores nulos y booleanos. Los objetos json siempre
  empiezan con una llave y terminar con otra llave.
  
  SQL vs noSQL:
  
  Ventajas de SQL: Madurez, ACID, estándares bien definidos (SQL), sencillez en la escritura.
  
  Desventajas de SQL: Mantenimiento difícil y costoso, poca flexibilidad frente a cambios en el diseño inicial, elección del proveedor más adecuado, complejidad.
  
  Ventajas de noSQL: Versatilidad, crecimiento horizontal, baja necesidad de recursos, optimización.
  
  Desventajas de noSQL: Documentación del software, no hay estándar consensuado, herramientas GUI.
  
  <h2>04/11/2022</h2>
  
  Comandos útiles en MongoDB:
  
  Ctrl+L -> Limpiar consola.
  show dbs -> Mostrar mis bases de datos.
  use <nombre BD> -> Cambiarse de base de datos.
  show collections/show tables -> Listar colecciones de una base de datos.
  db.getName() o db() -> Mostrar el nombre de la base de datos.
  db.stats() -> Listar metadatos de una BD.
  db.help() -> Ayuda sobre comandos.
  db.hostInfo() -> Información sobre el servidor.
  Date() -> Mostrar fecha y hora del sistema.
  db.<collectionName>.find().pretty() -> Dar formato JSON.
  
  Jerarquía del almacenamiento de información:
  
  SQL -> Tablas -> Filas/registros -> Columnas/Campos.
  noSQL -> Colecciones -> Documentos JSON -> Propiedades.
  
  Tipos de datos:
  
  Simples: números, cadenas de texto, fecha, hora, booleanos.
  
  Complejos: arrays, objetos, binary data, objectId, expresiones regulares.
  
  <b>Práctica: Creando una base de datos</b>
  
  ![Curso9 practica1 enunciado](https://user-images.githubusercontent.com/51362780/200065237-324bbec0-26d4-41f1-af5c-c95bbe908c1d.png)

  brew services start mongodb-community@5.0
  
  Nueva pestaña

  use concesionario
  
  db.coches.insertOne({})
  
  db.coches.insertOne({matricula:1,marca:'toyota',modelo:2021,version:['sport','confort'],kilometros:'200km',fecha_de_matriculacion:Date()})
  
  show dbs
  
  db.dropDatabase()
  
  show dbs
  
  <h2>05/11/2022</h2>
  
  Operaciones con datos 1 (CRUD):
  
  CRUD significa Create, Read, Update y Delete.
  
  Insertar:
  
  Un solo documento: db.collectionName.insertOne(<json>);
  
  Varios documentos: db.collectionName.insertMany(<json>);
  
  Actualizar:
  
  Un solo documento: db.collectionName.updateOne(<condicion>, <update>);
  
  Varios documentos: db.collectionName.updateMany(<condicion>, <update>);
  
  Reemplazar documento: db.collectionName.replaceOne(<condicion>, <update>);
  
  Eliminar:
  
  Un solo documento: db.collectionName.deleteOne(<json>);
  
  Varios documentos: db.collectionName.deleteMany(<json>);
  
  Bases de datos Schemaless:
  
  Se suele decir que las BD noSQL son "schemaless" o que no tienen esquema. Un esquema se puede definir como un conjunto de reglas que la información contenida
  en la tabla debe cumplir, por lo que muestran datos que deben ser estructurados. El esquema es un conjunto de restricciones al almacenar la información. 
  Tener esquemas tiene ventajas y desventajas: mayor control de lo que se almacena en una tabla significa menos flexibilidad.
  
  A veces, los datos a almacenar no siguen una estructura, son los datos desestructurados (schemaless). Con ellos se hace una mejor gestión de la memoria
  necesaria para almacenar la información. Es uno de los motivos por los que surge noSQL.
  
  Colecciones - documentos JSON:
  
  En una colección se pueden almacenar documentos json con contenido muy distinto entre sí. En una tabla de datos SQL, dos filas que se almacenen deberán tener
  los mismos campos, llamándose igual y respetando las reglas del esquema.
  
  ¿Puedo guardar datos estructurados en una base de datos SQL?
  
  Sí. Los datos no tendrán restricciones a la hora de guardarse en las colecciones siempre que tengan formato JSON.
  
  Documentos "embedidos":
  
  Hace referencia a guardar una cosa dentro de otra cosa. En este caso, guardar un documentos JSON dentro de otro como valor de una de sus propiedades.
  
  Documentos referenciados:
  
  A diferencia de los embedidos, en un documentos JSON se guarda solo el valor de una o varias propiedades, en lugar del documento completo. Normalmente se
  guarda el valor de una propiedad que identifica inequívocamente al documento referenciado.
  
  ¿Qué diseño elegir?
  
  Para embebidos dependerá de cómo se quiera almacenar la información y la naturaleza y el contexto de las aplicaciones que vayan a consumir la información.
  
  Para referenciados de las preferencias de roles como arquitectos de software y de bases de datos teniendo en cuenta factores futuros como la escalabilidad
  en cuanto a volumen de datos, usuarios/aplicaciones y sus formas de acceder a la información, etc.
  
  <h2>06/11/2022</h2>
  
  Operaciones con datos 2 (CRUD):
  
  Consultar:
  
  db.collection.find() -> Devuelve todos los documentos de la colección.
  
  db.collection.find(<filter>) -> Devuelve todos los documentos de la colección que cumplan filtros especificados.
  
  ¿Qué son los índices?
  
  Son estructuras de datos especiales gestionadas por MongoDB. Almacenan una pequea porción de datos de la colección. El índice almacena el valor de un campo
  específico o de un conjunto de campos, ordenados por el valor de dichos campos.
  
  Permiten optimizar la ejecución de las consultas que afecta a la velocidad con la que estas se ejecutan y devuelven el resultado. Sin los índices, MongoDB debe
  hacer un análisis de la colección, con el fin de encontrar los documentos que cumplan con los criterios de consulta. En definitiva, mejoran el rendimiento de la
  base de datos en relación a la ejecución de consultas.
  
  Tipos de índices: Simples/de un solo campo, compuestos/de varios campos, únicos, sparse, otros (hashed, geospatial, text. etc...)
  
  <h2>07/11/2022</h2>
  
  Hecho el examen final del curso de Buenas MongoDB. Certificado conseguido.
  
  ![Certificado Curso 9](https://user-images.githubusercontent.com/51362780/200429586-2d5f81b9-51e0-4e80-b0d2-ae449e484104.png)
  
  ¡¡Carrera de programador fullstack MEAN terminada!!
  
  ![Certificado CARRERA FULLSTACK MEAN](https://user-images.githubusercontent.com/51362780/200429692-3175d84b-8b5d-479c-b16b-2af65d3e7649.png)
