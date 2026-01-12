const preguntas = [
  {
    enunciado: "¿Qué define a un computador como autónomo en el contexto de redes?",
    opciones: [
      "Que puede conectarse a un mainframe sin depender de él",
      "Que puede transmitir información sin necesidad de un medio de comunicación",
      "Que puede procesar datos y comunicarse sin depender de otros sistemas centrales",
      "Que opera únicamente bajo sistemas maestro-esclavo"
    ],
    correcta: 2,
    justificacion: "Un computador autónomo es aquel capaz de procesar información y comunicarse con otros sin depender de un sistema central, a diferencia de los terminales 'tontos' en sistemas maestro-esclavo."
  },
  {
    enunciado: "¿Cuál fue la primera aplicación práctica de la transmisión de información a distancia?",
    opciones: [
      "Teléfono",
      "Telégrafo",
      "Fax",
      "Correo electrónico"
    ],
    correcta: 1,
    justificacion: "El telégrafo, inventado a mediados del siglo XIX, fue el primer sistema que permitió la transmisión de información a distancia."
  },
  {
    enunciado: "¿Qué característica distingue a las redes de difusión de las redes punto a punto?",
    opciones: [
      "Existen múltiples rutas entre cada par de máquinas",
      "El mensaje se envía a todas las máquinas usando un único canal compartido",
      "El costo económico es mayor debido al cableado",
      "No permiten multidifusión"
    ],
    correcta: 1,
    justificacion: "En las redes de difusión, todas las máquinas comparten un único canal y cada mensaje enviado puede ser recibido por todas, a diferencia de las redes punto a punto."
  },
  {
    enunciado: "En una red de difusión, ¿qué indica un bit especial en el campo de dirección de un mensaje?",
    opciones: [
      "Que el mensaje es urgente",
      "Que se debe reenviar por múltiples rutas",
      "Que el mensaje es para un grupo de máquinas (multidifusión)",
      "Que el mensaje se dirige a un nodo específico"
    ],
    correcta: 2,
    justificacion: "Un bit reservado indica que el mensaje es de tipo multidifusión, destinado a un subconjunto de máquinas de la red."
  },
  {
    enunciado: "¿Qué red fue diseñada para resistir un ataque nuclear mediante múltiples caminos entre origen y destino?",
    opciones: [
      "Transpac",
      "ARPANET",
      "R.E.T.D.",
      "X.21"
    ],
    correcta: 1,
    justificacion: "ARPANET, patrocinada por el DoD en la Guerra Fría, tenía una arquitectura redundante con múltiples rutas para garantizar la comunicación incluso ante interrupciones severas."
  },
  {
    enunciado: "¿Cuál fue el objetivo de la creación del subcomité ISO/TC 97/SC16 en 1977?",
    opciones: [
      "Desarrollar protocolos para Internet",
      "Crear un modelo estandarizado para la interconexión de sistemas abiertos (OSI)",
      "Implementar redes digitales integradas RDSI",
      "Definir la topología Token Ring"
    ],
    correcta: 1,
    justificacion: "El subcomité ISO/TC 97/SC16 se creó para modelizar arquitecturas normalizadas en la comunicación entre computadores, dando lugar al Modelo OSI."
  },
  {
    enunciado: "¿Qué característica distingue a una red LAN?",
    opciones: [
      "Se encuentra en un único edificio o campus y tiene velocidades de 10 a 100 Mbps",
      "Cubre varias ciudades y permite velocidades de cientos de Mbps",
      "Opera con conmutación de paquetes X.25 exclusivamente",
      "Permite únicamente conexiones punto a punto"
    ],
    correcta: 0,
    justificacion: "Las LAN son redes de área local que se sitúan en un edificio o campus y ofrecen velocidades típicas de 10 a 100 Mbps."
  },
  {
    enunciado: "¿Cuál de estas topologías es característica de una LAN tipo Token Ring?",
    opciones: [
      "Bus compartido",
      "Estrella",
      "Anillo",
      "Malla"
    ],
    correcta: 2,
    justificacion: "Token Ring utiliza la topología en anillo, donde las máquinas están conectadas en serie formando un círculo."
  },
  {
    enunciado: "¿Por qué los sistemas de conmutación de circuitos eran menos eficientes que las redes de difusión?",
    opciones: [
      "Porque siempre requieren múltiples rutas alternativas",
      "Porque no permiten comunicación punto a punto",
      "Porque las redes de difusión usan un canal compartido, reduciendo el costo económico",
      "Porque no pueden transmitir voz"
    ],
    correcta: 2,
    justificacion: "Las redes de difusión utilizan un único canal compartido para todas las máquinas, reduciendo el costo en comparación con las redes punto a punto o de conmutación de circuitos."
  },
  {
    enunciado: "¿Qué tecnología surge a principios de los noventa en EEUU y se difunde rápidamente en Europa, superando parcialmente a OSI?",
    opciones: [
      "RDSI",
      "Internet basada en TCP/IP",
      "Red Token Ring",
      "ARPANET"
    ],
    correcta: 1,
    justificacion: "Internet, basada en TCP/IP, surgió a principios de los noventa y se extendió rápidamente, proporcionando aplicaciones útiles y mayor flexibilidad frente al modelo OSI completo."
  },
    {
    enunciado: "¿Cuál es la principal diferencia entre una red LAN y una MAN?",
    opciones: [
      "Las MAN solo transmiten datos y no voz",
      "Las MAN emplean tecnologías distintas a las LAN",
      "Las MAN son una extensión geográfica de las LAN y pueden cubrir una ciudad",
      "Las MAN utilizan exclusivamente conmutación de circuitos"
    ],
    correcta: 2,
    justificacion: "Las MAN son una versión ampliada de las LAN en cuanto a extensión geográfica, pudiendo abarcar una ciudad y usando tecnologías similares."
  },
  {
    enunciado: "¿Qué estándar IEEE define la arquitectura DQDB para redes MAN?",
    opciones: [
      "IEEE 802.3",
      "IEEE 802.5",
      "IEEE 802.6",
      "IEEE 802.11"
    ],
    correcta: 2,
    justificacion: "El bus dual de cola distribuida (DQDB) está normalizado por la IEEE en el estándar 802.6."
  },
  {
    enunciado: "¿Cómo está formada la arquitectura DQDB?",
    opciones: [
      "Un único bus bidireccional compartido",
      "Dos buses unidireccionales independientes",
      "Una topología en anillo con paso de testigo",
      "Una red punto a punto entre todos los nodos"
    ],
    correcta: 1,
    justificacion: "DQDB se basa en dos buses unidireccionales a los que se conectan todas las computadoras."
  },
  {
    enunciado: "¿Qué función cumple el head-end en una red DQDB?",
    opciones: [
      "Controlar el encaminamiento de paquetes",
      "Gestionar la congestión de la red",
      "Iniciar la actividad de transmisión en cada bus",
      "Asignar direcciones IP a los nodos"
    ],
    correcta: 2,
    justificacion: "Cada bus DQDB tiene un head-end que inicia la actividad de transmisión."
  },
  {
    enunciado: "En una red DQDB, ¿qué bus se utiliza para enviar tráfico hacia una estación situada a la izquierda del emisor?",
    opciones: [
      "Bus superior",
      "Bus A",
      "Bus inferior",
      "Cualquiera indistintamente"
    ],
    correcta: 2,
    justificacion: "El tráfico hacia la izquierda del emisor utiliza el bus inferior."
  },
  {
    enunciado: "¿Cuál es la arquitectura básica de una red WAN?",
    opciones: [
      "Un único canal compartido por todos los hosts",
      "Hosts conectados mediante buses duales",
      "Hosts interconectados mediante routers unidos por líneas punto a punto",
      "Topología en anillo con paso de testigo"
    ],
    correcta: 2,
    justificacion: "Las WAN se basan en hosts remotos interconectados mediante routers unidos por enlaces punto a punto."
  },
  {
    enunciado: "¿Qué función principal realizan los routers en una red WAN?",
    opciones: [
      "Convertir señales analógicas en digitales",
      "Encaminar la información entre host origen y destino",
      "Gestionar el control de errores extremo a extremo",
      "Establecer circuitos físicos dedicados"
    ],
    correcta: 1,
    justificacion: "Los routers se encargan de encaminar la información entre hosts en una WAN."
  },
  {
    enunciado: "¿Por qué las velocidades en las redes WAN suelen ser inferiores a las de las LAN?",
    opciones: [
      "Porque usan tecnologías obsoletas",
      "Porque las comunicaciones remotas son más susceptibles a errores",
      "Porque emplean conmutación de circuitos",
      "Porque no permiten topologías complejas"
    ],
    correcta: 1,
    justificacion: "Las comunicaciones a larga distancia son más propensas a errores, lo que reduce las velocidades de transmisión."
  },
  {
    enunciado: "¿Cuál de las siguientes es una red pública de datos?",
    opciones: [
      "SNA de IBM",
      "DNA de Digital",
      "RTC",
      "Red privada corporativa"
    ],
    correcta: 2,
    justificacion: "La RTC es una red pública de datos gestionada por una entidad pública o de acceso general."
  },
  {
    enunciado: "¿Qué caracteriza a una red privada de datos?",
    opciones: [
      "Su uso está abierto al público general",
      "Está gestionada por una entidad corporativa para uso propio",
      "Utiliza exclusivamente conmutación de paquetes",
      "Carece de control de acceso"
    ],
    correcta: 1,
    justificacion: "Las redes privadas de datos están gestionadas por entidades corporativas para su propio uso."
  },
  {
    enunciado: "¿Qué define a una red de conmutación de circuitos?",
    opciones: [
      "Los paquetes pueden seguir caminos distintos",
      "Existe un camino fijo y dedicado durante toda la comunicación",
      "El medio físico se comparte entre múltiples comunicaciones",
      "No requiere establecimiento previo de conexión"
    ],
    correcta: 1,
    justificacion: "En la conmutación de circuitos se establece un camino físico dedicado durante toda la comunicación."
  },
  {
    enunciado: "¿Por qué es necesario un módem para transmitir datos digitales por la RTC?",
    opciones: [
      "Porque la RTC solo transmite señales digitales",
      "Porque convierte información analógica en analógica",
      "Porque adapta la información digital a una señal analógica",
      "Porque controla los errores de transmisión"
    ],
    correcta: 2,
    justificacion: "El módem modula y demodula la información digital para que pueda transmitirse por líneas analógicas."
  },
  {
    enunciado: "¿Cuál es una desventaja de la conmutación de circuitos?",
    opciones: [
      "Bajo aprovechamiento del canal",
      "Alta tasa de errores",
      "Imposibilidad de transmitir voz",
      "Excesiva fragmentación de la información"
    ],
    correcta: 0,
    justificacion: "El canal queda dedicado a una sola comunicación, lo que reduce el aprovechamiento del ancho de banda."
  },
  {
    enunciado: "¿Qué es un paquete en una red de conmutación de paquetes?",
    opciones: [
      "Un canal físico dedicado",
      "Una unidad de información con cabecera y datos",
      "Un circuito virtual permanente",
      "Un nodo de encaminamiento"
    ],
    correcta: 1,
    justificacion: "La información se fragmenta en paquetes que incluyen cabecera y datos."
  },
  {
    enunciado: "¿Qué característica distingue a los circuitos virtuales?",
    opciones: [
      "Cada paquete sigue una ruta diferente",
      "No existe información de destino en los paquetes",
      "Todos los paquetes siguen el mismo camino durante la comunicación",
      "No requieren establecimiento previo"
    ],
    correcta: 2,
    justificacion: "En los circuitos virtuales se establece un camino lógico que siguen todos los paquetes."
  },
  {
    enunciado: "¿Por qué la conmutación de paquetes puede introducir más retardo que la de circuitos?",
    opciones: [
      "Porque los routers son dispositivos electrónicos simples",
      "Porque los nodos requieren procesamiento software y pueden congestionarse",
      "Porque el ancho de banda es menor",
      "Porque los paquetes no tienen cabecera"
    ],
    correcta: 1,
    justificacion: "Los nodos de conmutación de paquetes realizan procesamiento software y pueden sufrir congestión."
  },
  {
    enunciado: "¿Qué ventaja presentan los circuitos virtuales frente a la conmutación de circuitos?",
    opciones: [
      "Menor retardo",
      "Uso exclusivo del canal",
      "Mejor aprovechamiento del ancho de banda",
      "Ausencia de control de errores"
    ],
    correcta: 2,
    justificacion: "El medio físico se comparte entre varias comunicaciones, aprovechando mejor el ancho de banda."
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre circuitos virtuales y datagramas?",
    opciones: [
      "Los datagramas requieren camino fijo",
      "Los circuitos virtuales no tienen cabecera",
      "En los datagramas cada paquete puede seguir rutas distintas",
      "Los datagramas son más fiables"
    ],
    correcta: 2,
    justificacion: "En el esquema de datagramas cada paquete puede seguir rutas diferentes y llegar desordenado o perderse."
  }
];
