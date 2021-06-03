### CLUSTER-NODE

Proyecto de pruebas de rendimiento con Node.js y JMeter. Compara el rendimiento de un endpoint multi-procesador con uno mono-procesador (server-cluster.js y server-normal.js).

#### Prueba

En el archivo jMeterTest.jmx se encuentra la prueba que consiste en 8 hilos con 100000 ejecuciones cada uno.

#### Ejecución de pruebas

- Instalar el proyecto: npm install
- Instalar Java
- Instalar JMeter
- Eliminar .gitkeep de carpetas jmeter-results-normal y jmeter-results-cluster ya que deben estar vacías para exportar los resultados
- Modificar package.json dependiendo del servidor que se quiera ejecutar:  
    "start": "npx kill-port 5000 && nodemon server-normal.js",  
    "start": "npx kill-port 5000 && nodemon server-cluster.js",
- Correr servidor: npm start
- Ir a carpeta bin de JMeter y dependiendo del test correr uno de los siguientes comandos (modificando la ruta de la carpeta donde se ejecute el proyecto):  
    ./jmeter -n -t ~/proyectos/cluster-node/jMeterTest.jmx -l ~/proyectos/cluster-node/jmeter-results-normal/result.jtl -e -o ~/proyectos/cluster-node/jmeter-results-normal/  
    ./jmeter -n -t ~/proyectos/cluster-node/jMeterTest.jmx -l ~/proyectos/cluster-node/jmeter-results-cluster/result.jtl -e -o ~/proyectos/cluster-node/jmeter-results-cluster/
- Los resultados estarán disponibles en el archivo index.html de cada carpeta