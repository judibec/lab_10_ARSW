### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?

Servicio de la nube disponible a peticion que proporciona toda la infraestructura y los recursos, que se actualizan continuamente necesarios para ejecutar las aplicaciones. Function proporciona proceso sin servidor para Azure 

* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?

Proporciona varias funcionalidades de integracion de datos en distintos entornos de red. Este ofrece 3 opciones:
  1. Tiempo de ejecucion de integracion de Azure
  2. Integracion Runtime autohospedado
  3. Azure-SQL Server Integration Services (SSIS) Integration Runtime

* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.

Hay 3 planes principales:
  1. Plan de Consumo: Escale de forma automática y pague los recursos de proceso solo cuando se ejecuten las funciones. En el plan de consumo, las instancias del host de Functions se agregan y quitan de forma dinámica según el número de eventos de entrada.
  2. Plan Premium: Escala automáticamente en función de la demanda mediante trabajos preparados previamente que ejecutan aplicaciones sin ningún retraso después de estar inactivas, ejecuta en instancias más eficaces y se conecta a redes virtuales.
  3. Plan Dedicado (App Service): Ejecute las funciones en un plan de App Service a los Precios de App Service normales.Mejor para escenarios de ejecución prolongada en los que no se puede usar Durable Functions

* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?

El proveedor de recursos de Azure App Service consta de varios tipos de roles que se pueden dividir entre los niveles de trabajo y de infraestructura. Los roles de infraestructura no se facturan ya que son necesarios para el funcionamiento básico del servicio. Los roles de infraestructura se pueden escalar horizontalmente según sea necesario para satisfacer las demandas de los inquilinos del operador de nube. Los roles de infraestructura son los siguientes:

  1. Controladores
  2. Roles de administración
  3. Publicadores
  4. Front-ends
  
Los niveles de trabajo constan de dos tipos principales: compartidos y dedicados. El uso del trabajo se factura a la suscripción del proveedor predeterminado del operador de nube según los siguientes criterios.

* Informe


![image](https://user-images.githubusercontent.com/90010904/201109975-a9f7d2e0-633b-4fd6-adfb-2d40b6ad106c.png)

![image](https://user-images.githubusercontent.com/90010904/201110016-89969667-c7a4-405f-b1c3-94fc88870042.png)

![image](https://user-images.githubusercontent.com/90010904/201110177-fea1663b-544b-48ca-9383-0b6fcbc33459.png)

![image](https://user-images.githubusercontent.com/90010904/201117873-06556203-0a72-4f94-83ac-1922d2ca8fc1.png)

![image](https://user-images.githubusercontent.com/90010884/201768628-89648f06-2ace-49f9-b89c-6ae0aac02fea.png)

![image](https://user-images.githubusercontent.com/90010904/201783547-3d581c77-b02a-49bf-8ed2-a32bbefbe6e6.png)





