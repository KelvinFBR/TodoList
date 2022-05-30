# Modulos y Webpack

El Webpack es un empaquetador de modulos. El webpack nos ayudara a hacer muchos trabajos de manera automatica como:

- Gestionar las dependencias: es decir que el webpack junto con el npm nos permitira instalarlo y manejarlo de manera casi automatica y nosotros nos dedicamos a escribir el codigo para hacer uso de dicho paquete.
- Nos permitira montar un servidor de desarrollo y prueba con el objetivo de acelerar el proceso de produccion para no perder tiempo en guardar los cambios y recargar la pagina.
- Nos permitira carga modulos de manera que podamos segmentar nuestro aplicacion en diferentes archivos para hacer mas facil el mantenimiento de nuestra aplicacion.
- Nos permite convertir a diferentes formatos, En pocas palabra nos permite pasar nuestro codigo en ES8 a versiones mas antiguas compatibles como (ES5 por ej).
- Tambien nos minimiza el codigo, con solo ejecutar unos comandos tenemos todo minimizado y listo para produccion.
- Compilaciones de SASS a CSS.
- Compilar de TS a JS.
- y nos permite trabajar con JS Moderno, y desprocuparnos de que nuestras aplicacion no va funcionar de manera correcta en otros navegadores mas antiguos.

> Una de las cosa malas de webpack al inicio es la configuracion, pero ya despues que la tengamos configurada podemos guardar esa configuracion en un repositorio en github y cuando la queramos usa la descargamos y en segundo estamos listo para trabajar.
>
> Tambien puede ser algo complicado detectar problemas con algun paquete, pero vale la pena ya que nos automatiza muchas de las funciones que realizamos en un tiempo menor que si lo hariamos nosotros nos tardariamos mucho tiempo. Es decir que webpack nos ahorra tiempo y futuros errores.

# Configuracion inicial - configuracion de package.json

Con el comando de `npm init` nos creara el package.json el cual es utilizado en todos las aplicaciones en node, el cual le dira a nosotros y a node como funciona la aplicacion, que dependencias son necesarias para pasarlas a produccion, que cosa debo descartar cuando lo queiro pasar ya a produccion, cosas que solo necesito en desarrollo. y lo hiremos configurando al momento de ejecutar el comando `npm init` aunque si los queremos como viene por default teniendo la oportunidad de configurarlo mas adelante podemos utilizar este comando `npm init --yes` o abreviado `npm init -y`.
Al ejecutar el comando nos pedira:

- Lo primero que nos indicara es el nombre que tendra el package(paquete) por default toma el nombre del directorio.
- La version.
- La Descripcion de la configuracion.
- Luego indicarle cual es el punto inicial de nuestas aplicacion lo podemos dejar por default o agregarle uno.
- Luego si tenemos algun camando para realizar pruebas automaticas, como: (jest)
- Luego le indicamos el repositorio de git.
- Luego nos indicara que le coloquemos el keywords esto es para ayudarnos cuando lo subamos al repositorio de paquetes de node a poder encontrar nuestras aplicacion o proyecto y a otras personas que tambien esten interesada en la app.
- Luego le indicamos el autor podemos colocar nuestro nombre.
- luego le indicamos la licencia pero si no tenemos les damos enter para que coloque la que tiene por default.

> Al final de todo creara una archivo con una estructura parecida a un objetos literales la diferencia es que en **JS** es opcional colocar las comillas a las propiedades de los objetos, pero en un archivo.json es obligatorio colocar las propiedades entre comillas dobles(""). No es permitido comillas simples(''). Los archivos json nacieron de los objetos literales.

> El package.json es necesario para nosotros saber que paquetes son necesarios para que mi aplicacion funcione, que paquetes no voy a ocupar en produccion, cuales son los comando que necesito hacer para crear la aplicacion final o el paquete final.

# modulos

Algo que tenemos que tener en cuenta que ejecutar varios archivos linkeados en el html no es igual que ejecutar un unico archivo que este modulado es decir que solo se ejecuta uno pero que se conecta con otros utilizando el import y export, es como un unico archivo conectado a varios archivos ayudandonos a que nos interfieran los nombres de las variables y funciones tambien ayudandonos a que sea mas facil las solucion de peroblemas ya que los tenemos de forma modular dividido por varios archivo. otro de los problemas que cualquier persona puede acceder a nuestro codigo y esto no esta bien pero con los modulos esos se soluciona.

No es recomendable tener toda nuestras logica en un solo archivo esto como digimos anteriormente lo hace dificil de mantener, leer, de encontrar errores etc...

Si tenemos varos archivos **JS** en el **HTML** cuando ejecutemos nuestras aplicacion cada uno de esos archivos **JS** hara una peticion http hacia nuestros server donde estemos corriendo nuestras aplicacion, asi que no es lo mismo correr solo un archivo un poco mas grande, a que haga diferentes lecturas a diferentes espacios en disco para recuperar la informnacion, es mas eficiente que solo lo hagamos con unico archivo.

# Instalacion y configuracion de webpack por defecto

> Algo que tenemos que tener en cuenta a la hora de instalar webpack es encontrarce en el directorio donde se encuentran el archivo package.json.

La capteta src(source) eventualmente es el directorio que webpack va a verificar.

El comando para instalar webpack es: `npm install webpack webpack-cli --save-dev` lo que indica que va instalar el webpack adicionalmente instala el webpack-cli que es el comand line interface(interfaz de linea de comandos) y luego la bandera de --save-dev que le indica que lo va a guardar como una dependencia de desarrollo es decir que no hira a produccion no hira al server.

Ya cuando se descarga todo en el archivo package.json veremos que creo una apartado donde coloca las DevDependencies(dependencias de desarrolo) que en este caso es webpack y webpack-cli, tambien encontraremos el node_module donde se encuentras los archivos y otras dependencias que son utilizas para que los paquetes funciones en este caso webpack.

Luego debemos crear un script en el package.json `"build":"webpack"` esto lo que hara es que cuando yo ejecute el comando **build** va a disparar webpack con su configuracion por default en mi proyecto, y por defecto buscara la carpera **src** va a ver los archivos de **JS** y los va a unificar, comprimir y lo va a dejar listos para produccion. para ejecutar el comando **build** debemos de estar en el directorio donde esta el package.json el comando es `npm run build` esto ejecutara el comando de webpack pero con la configuracion por default porque no le hemos hecho nada.

Al ejecutar este comando el webpack nos creara una carpeta llamada **dist** con un archivo **JS** con nuestro codigo ya listo para produccion, en este archivo de **JS** nos creara todos lo que necesitamos para importar modulos, para trabajarlo de manera segura, para protegerlo etc..

> En la carpeta **dist** que nos crea webpack con el archivo main.js es el archivo que vamos a ejecutar en nuestras aplicacion, pero tenemos un problema de estar colocando ese archivo en en **HTML**, pero por una configuracion que le podemos dar al webpack podemos decirle que mueva el **index.html** al dist tambien que automaticamente asigne el archivo al script del **HTML**. Otras de las cosas que tiene webpack es que al archivo **main.js** que crear webpack le colocaque un hash EJ: **"./dist/main.87fd6g6f78g6d.js"** el cual nos es util si queremos prevenir que nuestra aplicacion se almacene en la cache del navegador web de un cliente, es decir que cuando hagamos algun cambio en nuestra aplicacion y si utilizamos un hash en el archivo el navegador web notara que el archivo cambio, entonces hay que volver hacer la peticion de todo su nuevo codigo.

El dist guarda lo que vamos a subir al servidor

# Archivo de configuracion de webpack

Webpack nos permite gestionar tareas automaticas, para hacer eso debemos de crear una archivo de configuracion llamado `webpack.config.js` este archivo para la configuracion de webpack.

si nosotros no le damos uno modo al webpack al ejecutar el **build** lo que hara es remover los comentarios, simplificarlos etc.. pero yo quieros que esos comentarios que me ayudan en el desarrollo se encuentre, para eso debemos expecificar en el archivo de configuracion de webpack el `modo:"development"`

Ya para expecificar la configuracion creamos otra propiedad llamada module( `module:{}` ), y dentro de module creamos otra propiedad de array llamada rules ( `rules:{}` ) Las rules o reglas sirven para decirle a webpack que hacer con ciertos archivos o que hacer en ciertas ocasiones. Una de las cosa que anteriormente digimos que debe hacer debemos de indicarselo aqui como mover el archivo index.html al dist.pero para eso necesitamos instalar unos cuantos paquetes que son el html-loader y el html-webpapck-plugin lo podemos instalar de la siguiente manera `npm i -D html-loader html-webpack-plugin`. el `-D` es lo mismo que `--save-dev`. estos paquete me ayudaran a mover el `index.html` al dist y el segundo me ayudara a incrustar el **bundle(archivo creado por webpack para produccion que es la agrupacion de todos los archivos JS en uno solo)** a nuestro `index.html`.

Ya luego de haber descargardo los paquetes vamos al archivo de configuracion en **rules** y dentro de su estructura array colocamos una estructura que inicia como un objeto literal y dentro colocamos una propiedad llamada `test:` este es para indicarles a webpacks cuando valla analizando archivo por archivo a cual le aplicara lo que le indequemos mediante una evaluacion de expresion regular Ej:

```js
rules: [
  {
    // aqui le estoy indicando que solo le aplique esta regla si el archivo tiene extencion `.html`
    test: /\.html$/,
  },
];
```

ya luego de expecificar el test le vamos ahora a indicar que es los que usara si la condicion de la expresion regular se cumple.

```js
rules:[
    {
        // aqui le estoy indicando que solo le aplique esta regla si el archivo tiene extencion `.html`
        test: /\.html$/
        use:[
            {
                // le estamos indicando que utilice el paquete que instalamos de html-loader
                loader: 'html-loader'
            }
        ]
    }
]
```

La forma que anteriormente hicimos es una forma en la que se creaba pero ahora en nuevas actualizaciones se configura de la siguente manera.

```js
rules:[
    {
        test:/\.html$/i
        loader: 'html-loader'
        Options: {
          sources: false,
        }
    }
]
```

Luego aplicamos la parte del plugin que usaremos que lo colocamos dentros del `module` de esta manera.

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");

 module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        Options: {
           sources: false,
        },
      },
    ],
  },
  plugins: [
    //   en este creamos una nueva instancia del paquete que nos traimos arriba.
    new HtmlWebPackPlugin({
      // aqui le indicamos cual es el archivo que quiero tomar
      template: "./src/index.html",
    //   y hacia donde quiero colocarlo
      filename: "./index.html",
    }),
  ],
```

### esta es la configuracion final aunque se le puede agregar otras opciones.

> esta es una de las forma de configurarla - estas es antigua esta obsoleta

```js
// aqui estamos cargardo archivos de otros paquetes, estamos requiriendo este paquete en esta aplicacion, y como esto lo estamos corriendo en node, node reconoce este comando y no nos dara error
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  // Aqui inicia la configuracion de webpack
  module: {
    // Las reglas sirven para decirle a webpack que hacer con ciertos archivos o que hacer en ciertas ocasiones.

    // Una de las cosa que anteriormente digimos que debe hacer debemos de indicarselo aqui como mover el archivo index.html al dist.pero para eso necesitamos instalar unos cuantos paquetes que son el html-loader y el html-webpapck-plugin.
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      // aqui le indicamos cual es el archivo que quiero tomar
      template: "./src/index.html",
      //   y hacia donde quiero colocarlo
      filename: "./index.html",
    }),
  ],
};
```

> Estas es otra de las formas esta es la forma mas reciente y actualizada de realizar la configuracion

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          //   este nos ayuda a que no aplique atributos como el href de las imagenes
          sources: false,

          minimize: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
```

Para que alla dos importaciones en el html hay que eliminar el script del html que hace funcion de template.

Si queremos que los index y los html este simplificados y minificados en una sola linea, esto hace que el navegador carge menos informacion innecesaria y tambien los comentarios solo tenelos que colocar en las opciones el minimize con el valor de true si usas la fomar antigua lo colocas en el `use:[{}]`.

```js
 module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options:
            {
                //   este nos ayuda a que no aplique atributos como el href de las imagenes
                sources:false,

                minimize: false
            },
      },
    ],
  },
```

# Webpack dev Server

anterior metes cuando nosotros haciamos algun cambio en nuestros archivos los cambios no estaban reflejandose en nuestra pagina eso porque para eso debemos de correr el comando de `npm run build` para que haga los cambios en el bundle. pero eso es algo tedioso el estar corriendo el mismo comando cada vez que queremos ver los cambios en nuestra pagina.

Ahora para solucionar ese problema vamos a instalar un paquete, y lo podemos instalar de estas manera `npm i -D webpack-dev-server` este paquete nos ayudara a poder crear un servidos de desarrollo esto porque algunas de las cosas que hacemos en nuestras app no es posible acceder a ellas o que se ejecute sin un servidor por eso el `webpack-dev-server` nos permite usar un servidor de desarrollo, esto lo podemos usar colocando un nuevo script despues de instalar el `webpack-dev-server` de estas formas:
`"start": 'webpack-dev-server --open'` el --open le indica que tan pronto se levante el web server abrelo.
Y lo ejecutamos con el comando `npm start` si vemos no colocamos el `run` esto porque el `start` es un comando especial que lo permite ejecutar sin el `run`.

Al ejecutar el comando levantara el servidor y abre el index.html en el server local, tambien estara pendiente a los cambios de los archivos que nosotros tenemos definidos en nuestras reglas, y los va compilar y hacer todos el proceso de `npm run build` nosotros de manera instantania en nuestras aplicacion y reflejandola al instante. en la terminal no le des al basurero ya que este limpiara toda la terminal junto al los proseso(server).

Si por alguna razon tenemos un problema con el puerto 8080 que es el que nos coloca por default el `webpack-dev-server` porque ya esta ocupado podemos cambiarlo en la misma propieda del `start` colocado un puerto que este libre o el que queramos, de la siguiente manera: `"start": 'webpack-dev-server --open --port=8081'` asi solucionamos el error de que el puerto esta ocupado.

# Importancia estilos de forma dinamica

Ahora veremos las dos formas mas comunes de trabajar con estilos una es cargar estilos de manera dinamica y la segunda es tener estilos globales.

Ahora creamos una carpeta de los css y creamos un archivo de estilos las mayoria de las veces el nombre del archivo de css es el mismo del componente o archivo `js` aunque si ejecutamos el `npm start` esto no aplicara los estilos ya que falta hacer una cuantas cosas. Una de las cosa buenas que tiene el webpack no esta por defecto pero yo puedo cargar css dependiendo del componente que quiero cargar o que estoy requiriendo en ese momento es decir que al momento de cargar algun componente en ese momento importo los estilos para eso componete en especifico.

Nosotros debemos de alguna manera decirle al webpack que mueva el archivo de css y que lo coloque dentro del bundle de nuestra aplicacion, pero en este caso como dijimos anteriormente vamos hacer dos formas, vamos hacer el primero que es importar esos estilos en el archivo(js) del componente cuando estamos requiriendo ese archivo del componente, para realizar esto debemos de instalar unos cuantos paquetes que son el `css-loader` que es el que nos va a permitir junto al `style-loader` leer el archivo y a su vez inyectarlo, minimizarlo para colocarlo en nuestro bundle.

Ahora lo que tenemos que hacer es colocar la importacion de esos estilos que van a cargar en el momento de llamar o usar ese componente. Usualmente en varios framework estan el archivo css y el js en el mismo lugar ya que se corresponden entre ellos. De esta manera se vera la importacion de los estilos en el archivo js o el componente:

```js
// Aqui lo le estoy diciendo a mi archivo de componente que va requerir importar este archivo de css
import "../css/componentes.css";
```

Ya despues de colocar la importacion tenemos que configurarlo en el `webpack.config.js` lo que haremos es lo siguente coloca otro rule de esta manera:

```js
  module: {
    rules: [
    // esta son las nueva reglas aplicada para el css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options:
            {
                minimize: false

                // este nos ayuda a que no aplique atributos como el href de las imagenes

                // esta propiedad es importante al utilizar el **file-loader** y al crear el proyecto para produccion ya que las imagenes nos daria error y nos crearia un archivo a parte cuando no es necesario
                sources:false,
            },
      },
    ],
  },
```

Ya de esta manera los estilos estan aplicados a los componetes importados al momento de hacer uso de ellos
y si entramos al archivo js del bundle y buscamos partes del css podemos ver como webpack hizo la importacion del css igual como una libreria de js entonces esto nos ayuda para solo ejecutar esos estilos en el momento en el que yo quiero utilizar ese componete o los que lo tengan importados. y si lo abrimos mediante el archivo directo podemos ver que aplica los estilos es decir que si esta aplicando los estilos de manera dinamica al momento de requerir ese archivo.

Ya si ejecutamos nuestro server de desarrollo com `npm start` podemos ver los cambios de los estilos en tiempo real.

Entonces nosotros podemos crear nuestros propios arcrivos de estilos css he importarlos o requerirlos cuando nosotro necesitemos trabajar con ciertos componentes.

Pero podriamos tener algunos inconveniente porque necesitamos tener unos estilos globales en mi aplicacion y que esos estilos globales sean un archivo independiente en el bundle(dist), y que esos estilos globales esten asociados en mi index, porque es posible que nosotros queramos manejar ese archivo en el cache y los demas archivos de manera independiente.

# Creando un archivo de estilos de forma global en la aplicacion.

Nosotros ahora queremos crear unos estilos globales es decir es esos estilos esten importados en mi index.html y que el archivo independiente este en la capeta de distribucion(dist).

ahora crearemos en el `src` un archivo de estilos ej: **style.css**, muchos de los framework trabajan de esta manera colocando el **style.css**
en la carpeta src y esto le indica que es el archivo global de la aplicacion.

Ahora para hacer que esos estilos se aplique podemos ir al archivo **index.js** he importarlos, pero nosotros no solo queremos eso sino que esos estilos esten en el **dist** y esten aplicados al **index.html** de produccion. Para eso necesitamos hacer unas cuantas instalaciones como el `mini-css-extract-plugin` y podemos instalarlo de la siguiente manera. `npm i -D mini-css-extract-plugin` algo que tenemos que tener en cuenta es que cuando contenga la palabra plugin eso quieres decir que su instalacion es como anteriormente la hicimos con el **HtmlWebPackPlugin** de esta forma. haciendo tambien la importacion del plugin al json.

Ahora debemos importar el plugin instalando y aplicar una reglas. Es parecido a la primera rule que aplicamos al css pero que la diferencia es que solo a un unico archivo es al cual se lo vamos aplicar. de esta manera:

como vemos en este ejemplo debemos de excluir los archivos **styles.css** ya que como el primeros aplica a todos los `.css` el siguiente no se ejecutaria para aplicar el `[MiniCssExtractPligin.loader, "css-loader"]` el segundo solo sera aplicado a un unico o unicos archivos que tengan o cumplan el nombre **styles.css**.

```js
     {
        test: /\.css$/i,
        exclude: /styles\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles\.css$/i,
        use: [MiniCssExtractPligin.loader, "css-loader"],
      },
```

Ahora necesitamos indicarle como va a trabajar el **MiniCssExtractPligin**.

```js
  new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPligin({
      // Aqui aplicamos el nombre que va a contener el archivo
      filename: "[name].css",

      //* Esto es para que no nos tire unos warning
      ignoreOrder: true,
    }),
```

Ya podemos ejecutar el `npm run build` y nos creara el archivo de estilos global en el **dist** y aplicando esos estilos globales al **index.html** de produccion.

tambien podemos aplicarles unas cuantas cosas mas como un hash para prevenir el cache. de esta manera:

> Pero esto es util en produccion por ahora el dasarrollo no es necesario.

```js
new MiniCssExtractPlugin({
      // Aqui aplicamos el nombre que va a contener el archivocss
      filename: "[name].[contenthash].css",
      //* Esto es para que no nos tire unos warning
      ignoreOrder: true,
    }),
```

Si nosotros queremos minificar nuestros estilos de css, debemos de hacer una instalacion de npm esto si quieres, para eso lo instalamos de la siguiente manera: `npm i -D optimize-css-assets-webpack-plugin` para versiones de webpack v3 o below y `npm i -D css-minimizer-webpack-plugin` para versiones v5 above. este se instala de una manera diferente en la documentacion podemos ver como se implementa. y antes de configuirarlo en el json debemos de importar porque es un plugin,de esta manera:

Esto solo aplicara cuando estemos en el modo de produccion

```js
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
```

# Manejo de Imagenes

Para iniciar a manejar imagenes con webpack creamos una carperta en **src** llamada **assets** donde colocaremos imagenes y otras cosas. Esto es para que nuestro proyecto tengo un orden de forma estandar, pero ya nosotros sabemos como es que webpack teminara evaluandolos.

Podemos descargar una imagen y colocarla en el index como anteriormente se hace pero eso al ejecutar el comando `npm start` del server nos dara error porque en la parte de la imagen que colocamos en el index.html no sabe que hacer con ella para eso debemos de especificarles al webpack que debemos de hacer con estas imagenes, y para esos debemos de instalar y configiurar en el **webpack.config.js**.

Con el comando de `npm i -D file-loader` instalamos para desarrollo el paquete que necesitamos, luego de eso vamos a configurarlo haciendo una expresion regular que evalue cualquier tipo de imagenes. Estas es la configuracion actualizada del file-loader:

> En la actualidad es necesario otros paquetes
> este nos ayuda con las importaciones de imagenes dentro de los componentes(Archivos `.js`).

```js
    //*   este es apara hacer uso de imagenes o archivos en js - pero es mejor utilizarlos de manera statica podemos pasar esos archivos, img a la capeta dist para ser usados.
    {
        test: /\.(png|jpg|svg|gif)$/i,
        loader: "file-loader",
        //   * y para que a la hora de importar unos modulos no nos de problema.
        options: { esModule: false },
    },

// ============

    {
      test: /\.(png|jpg|svg|gif)$/i,
      loader: "file-loader",

    //* y para que a la hora de importar unos modulos no nos de problema.
      options: { esModule: false },
    },
```

Todos mis **assets** van a ser recursos estaticos, es decir que estaran en el **dist** con la misma direccion, son recursos que yo no voy a cambiar, en versiones anteriores era suficiente con el file-loader, pero ahora necesitamos de otro paquete para que nos copie todo el directorio de assets en nuestra carpeta de distribucion(dist). Para eso necesitamos instalar el `copy-webpack-plugin` con el comando `npm i -D copy-webpack-plugin` con este plugin nos permitira hacer ese tipo de movimientos que queremos.

```js
    const CopyPlugin = require("copy-webpack-plugin");

    new CopyPlugin({
          patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
```

# Webpack - Production mode.

Si nosotros queremos generar o trabajar nuestro proyecto en produccion en el archivo de configuracion de webpack podemos colocar en mode:"production" y de esta manera al hacer `npm run build` estariamos generando nuestros proyecto para produccion, tambien hay que tener en cuenta que algunos plugin o paquetes toman este parametro para saber que hacer con la configuracion que hicimos como por ejemplo el plugin de mininizer de css, y el **index.html** pero algunos de los archivos no estan preparados para produccion. Y es algo tediozo el estar cambiando de modo **development** a **production**. Asi que para eso debemos de crear otro archivo de configuracion para el modo dev o prod, que esten separados para que con ayuda de los script podamos ejecutar uno o el otro con un simple comando.

Lo que debemos de hacer es crear otro archivo de configuracio de webpack para produccion.
`webpack.prod.js`

para crear nuestro archivo `JS` de manera semi-manual vamos a la configuracion de produccion y crearmos una nueva propiedad `output:{}` que es un objeto de dentro le colocamos una propiedad `filename:'name.js'` por default le esta poniendo `main.js`. Pero aqui podemos especificar el nombre que tendra el archivo js para produccion y como en las configuraciones de los archivos anteriores podemos colocar un hash para poder prevenir que el archivo se almacene en cache de los usuarios.

esto nos ayuda que si hacemos una actualizacion a nuestro proyecto el usuario tambien pueda ver esa actualizacion cuando salga a produccion ya que si no le colocamos el **hash** y hacemos una actualizacion el archivo que cargo primero se almacenara en la cache y cuando toque actualizar no lo hara asi que con este **hash** forzamos a que actualice. Asi que si el archivo no cambia de nombre no hubo cambios asi lo interpreta el navegador(browser), cache.

tambien al colocar el hash no nos procuparemos por enlazar el js al index.html
ya que lo hace por nosotros cada vez que que cagamos un archivo para produccion el **bundle**.

```js
  output: {
    filename: "main.[contenthash].js",
  },
```

Pero si ejecutamos el comando `npm run build` este nos correra el comando genera `webpack.config.js` esto los hace por default para que ejecute esta configuracion que acabamos de crear para produccion debemos de especificarselo. lo que podemos hacer es cambiar el script o podemos crear un nuevo script que es lo mejor, lo podemos hacer de esta manera en el archivo de package.json:

podemos dejar en el **build:dev** solo con webpack que es como viene por default y este tomara el archivo de configuracion de webpack por dafault que es el `webpack.config.js` pero tambien le podemos especificar como hicimos con el build de produccion.

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.prod.js",
    "build:dev": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --open"
  },
```

ya luego de hacer estas configuraciones que nos ayuda mucho en el desarrollo, pero tenemos un problema que es que nuestro codigo de **JS** posiblemente tenga caracteristicas nuevas que navegadores antiguos probablemente no sean compatibles con ellas pero si ya tenemos nuestro publico objetivo de que tu aplicacion es solo para los que tengan un navegador compatible pero lo ideal es que todos se conecten ya que es mas publico y si estas promocionando o vendiendo algo abarcaras mas. Asi que para solucionar eso usaremos Babel.

# Instalacion y Configuracion de Babel

Lo primero que tenemos que hacer es ir a la pagina oficial de babel, seleccionar setup y webpack, encontrando la forma de instalar la y configurarla. El comando para instalar babel con webpack es: `npm install --save-dev babel-loader @babel/core`.

Luego vamos a la configuracion de webpack para el de produccion que en este caso es el `webpack.prod.js` ya que la accion que hace **babel** de transformar nuestro codigo **JS** a un codigo **JS** estable para que funciones en la mayoria de navegadores se lo queremos aplicar para produccion.

Algo que tenemos que tener en cuenta es que como **babel** trabaja en base a **JS** solo va a tener en cuenta los archivosd de **JS**.

```js
{
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ];
  }
}
```

Luego de agregar a la configuracion de webpack como va a funcionar babel. tenemos que crear un archivo `.babelrc` en el directorio raiz en el cual le vamos a colocar unas configuraciones de los que hara babel, lo primero que tenemos que hacer es instalar el `minify` con el siguiente comando: `npm install babel-preset-minify --save-dev` este es para minificar el codigo de **JS** para produccion.

```js
{
  "presets": ["minify"]
}
```

Luego de esto necesitamos hacer que nuestro codigo de **JS** se convierta en un codigo compatible con todos los navegadores prosibles aunque utilicemos **JS moderno**. Para eso vamos a instalar el siguente paquete:

> Este era el plugin `npm install babel-minify-webpack-plugin --save-dev`. Pero ahora hay una nuevo que es: `npm install terser-webpack-plugin --save-dev` el anterior estas DEPRECATED(obsoleto).

Luego de instalarla, esta es la forma que se utiliza o configura:

```js
// webpack.config.js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

Pero si tenemos otros plugin en el minimizer lo podemos colocar de la siguiente manera.

```js
  optimization: {
    minimize: true,
    // Aqui colocamos las nuevas intancias en mi caso estoy utilizando css y JS minificado.
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
  }
```

ya para configurarlo y llevarlo hacia el estandar del ES5 que es el ,mas compatible con la mayoria de los navegadores. Haremos los siguiente instalaremos el siguiente paquete `npm install --save-dev @babel/preset-env`.

Luego colocamos **"@babel/preset-env"** en el archivo de configuracion de babel. de estas manera si es que tenemos otras lo podemos hacer asi:

```js
{
  "presets": ["@babel/preset-env", "minify"]
}
```

# Limpiar la carpeta dist

si nos damos cuenta que cada vez que hacemos el `npm run build` se crean diferentes archivos de **js** y tenenmos que eliminar el **dist** para volver a ejecutar el comando pero para no estas haciendo eso a cada rato podemos hacer lo siguiente:

> Anteriormente se tenia que instalar un paquete para realizar el limpiado del dist/ pero ahora solo vasta con colocar `clean: true,` el el output: donde colocamos el nombre de los archivos **JS**.

```js
 output: {
    filename: "main.[contenthash].js",
    // este es la forma actual de limpiar el dist/
    clean: true,
  },
```

# Tips git

```
    git checkout -- .
```

# Nota

Recuerden que para reconstruir los módulos de node deben de ejecutar este comando

```
npm install
```

Y para crear nuevamente el DIST

```
npm run build
```

Para inicar el server

```
npm start
```

### GitHub page - webpack - docs

!Si quieres subir tu pagina a github page solo tienes que hacer `npm run build` para que te contruya tu aplicacion para produccion y cambiarle el nombre de dist a docs he ir a la setting y colocar que el directorio sera **docs** que fue como le colocamos a la carpeta **dist** que es donde se encuentra la pagina ya para produccion y asi solo arrancara esa carpeta para hostiar la pagina en github page.
