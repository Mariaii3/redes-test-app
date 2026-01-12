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
  }
];
