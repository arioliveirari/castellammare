import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
      Header: {
        company: 'SANTA LUCIA TOUR',
        titleFrist: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        description: "Coneasdctate con el Río de la Plata de la manera más linda: Navegando a vela.",
        buyService: 'Comprá la experiencia',
        contactUsText: "contactanos para consultar disponibilidad"
      },
      OverTheFold: {
        city: "CASTELLAMMARE DEL GOLFO",
        titleFrist: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        description: "Vive una experiencia única: pesca en bote y descubre playas paradisíacas"
        
      },
      Form: {
        buy: "Comprá",
        description: "Regalá una experiencia inolvidable",
        placeholder: "Ingreśa tu mail",
        emailError: "Este campo es obligatorio"
      },
      Services: {
        title: "Nuestros paseos",
        first: {
          title: "Una experiencia inolvidable",
          description: "bla bla bla 1",
          photo: "service3"
        },
        second: {
          title: "Una experiencia inolvidable2",
          description: "bla bla bla 2",
          photo: "service2"
        },
        third: {
          title: "Una experiencia inolvidable3",
          description: "bla bla bla 3",
          photo: "service1"
        },
      },
      Boats: {
        title: "Una experiencia única",
        first: {
          name: "Kiwi",
          width: "Manga",
          widthNumber: "2,07",
          length: "Eslora",
          lengthNumber: "5,47",
          model: "Modelo Phantom 19",
          description: "Velero de 19 pies diseñado por Domato y construido en astillero Marco. Cómodo, acogedor, ideal para salidas en pareja."
        },
        second: {
          name: "Mango",
          width: "Manga",
          widthNumber: "2,58",
          length: "Eslora",
          lengthNumber: "7,47",
          model: "Modelo D´angelo 24",
          description: "Diseño del gran German Frers. Un 24 pies amplio, ágil, rápido y muy divertido para salir con amigos y amigas."
        },
      },
      FaqItem: {
        title: "Preguntas frecuentes",
        description: 'Agilidad, creatividad & soluciones a medida.',
        items: {
          first: {
            question: "¿Tienen menú vegetariano? ¿Y vegano?",
            answer: "Si, ofrecemos opciones de comida vegetariana y vegana."
          },
          second: {
            question: "¿En qué horarios son los paseos?",
            answer: "Salimos en todos los horarios, podés elegir el que quieras. Si está disponible, reservamos."
          },
          third: {
            question: "¿Pueden ir menores?",
            answer: "La actividad es solo para mayores de 18 años."
          },
          fourth: {
            question: "¿Con cuanta anticipacion debo reservar?",
            answer: "No hay un tiempo estipulado de anticipacion. Depende solamente de la disponibilidad."
          },
          fifth: {
            question: "¿Podemos llevar comida y/o bebida?",
            answer: "¡Claro que si!, pueden traer lo que quieran para comer, beber o lo que sea."
          },
        },
        button: 'Conversemos'
      },
      Footer: {
        getExperience: "Comprá",
        copyrigth: '© Copyright 2024 by Nino',
      },
      Voucher: {
        title: "Felicitaciones!",
        description: "Tenes a disposición un paseo en velero por el río de la plata!",
        descriptionIg: "Coordiná la salida a través de nuestro instagram",
        ig: "@Nino",
        descriptionWtsp: "O por whatsapp al ",
        wtsp: " 1121863402",
        
      }
    }
  },
  en: {
    translation: {
      Header: {
        titleFrist: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        description: "Coneasdctate con el Río de la Plata de la manera más linda: Navegando a vela.",
        buyService: 'Comprá la experiencia',
        contactUsText: "contactanos para consultar disponibilidad"
      },
      OverTheFold: {
        titleFirst: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        first: "Conectate con el Río de la Plata de la manera más linda:",
        second: "Navegando a vela",
        third: "Con nuestros Gift Vouchers regalá un paseo en velero por el Río de la Plata para dos, tres o cuatro personas con comida y bebida a bordo.",
        fourth: " Son con fecha abierta y el agasajado tiene un año para coordinar el paseo.",

      },
      Form: {
        buy: "Comprá",
        description: "Regalá una experiencia inolvidable",
        placeholder: "Ingreśa tu mail",
        emailError: "Este campo es obligatorio"
      },
      Services: {
        title: "Nuestros paseos",
        first: {
          title: "Una experiencia inolvidable",
          description: "bla bla bla 1",
          photo: "service3"
        },
        second: {
          title: "Una experiencia inolvidable2",
          description: "bla bla bla 2",
          photo: "service2"
        },
        third: {
          title: "Una experiencia inolvidable3",
          description: "bla bla bla 3",
          photo: "service1"
        },
      },
      Boats: {
        title: "Nuestros veleros",
        first: {
          name: "Kiwi",
          width: "Manga",
          widthNumber: "2,07",
          length: "Eslora",
          lengthNumber: "5,47",
          model: "Modelo Phantom 19",
          description: "Velero de 19 pies diseñado por Domato y construido en astillero Marco. Cómodo, acogedor, ideal para salidas en pareja."
        },
        second: {
          name: "Mango",
          width: "Manga",
          widthNumber: "2,58",
          length: "Eslora",
          lengthNumber: "7,47",
          model: "Modelo D´angelo 24",
          description: "Diseño del gran German Frers. Un 24 pies amplio, ágil, rápido y muy divertido para salir con amigos y amigas."
        },
      },
      FaqItem: {
        title: "Preguntas frecuentes",
        description: 'Agilidad, creatividad & soluciones a medida.',
        items: {
          first: {
            question: "¿Tienen menú vegetariano? ¿Y vegano?",
            answer: "Si, ofrecemos opciones de comida vegetariana y vegana."
          },
          second: {
            question: "¿En qué horarios son los paseos?",
            answer: "Salimos en todos los horarios, podés elegir el que quieras. Si está disponible, reservamos."
          },
          third: {
            question: "¿Pueden ir menores?",
            answer: "La actividad es solo para mayores de 18 años."
          },
          fourth: {
            question: "¿Con cuanta anticipacion debo reservar?",
            answer: "No hay un tiempo estipulado de anticipacion. Depende solamente de la disponibilidad."
          },
          fifth: {
            question: "¿Podemos llevar comida y/o bebida?",
            answer: "¡Claro que si!, pueden traer lo que quieran para comer, beber o lo que sea."
          },
        },
        button: 'Conversemos'
      },
      Footer: {
        getExperience: "Comprá",
        copyrigth: '© Copyright 2024 by Nino',
      },
      Voucher: {
        title: "Felicitaciones!",
        description: "Tenes a disposición un paseo en velero por el río de la plata!",
        descriptionIg: "Coordiná la salida a través de nuestro instagram",
        ig: "@Nino",
        descriptionWtsp: "O por whatsapp al ",
        wtsp: " 1121863402",
        
      }
    }
  },
  it: {
    translation: {
      Header: {
        titleFrist: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        description: "Coneasdctate con el Río de la Plata de la manera más linda: Navegando a vela.",
        buyService: 'Comprá la experiencia',
        contactUsText: "contactanos para consultar disponibilidad"
      },
      OverTheFold: {
        titleFirst: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        first: "Conectate con el Río de la Plata de la manera más linda:",
        second: "Navegando a vela",
        third: "Con nuestros Gift Vouchers regalá un paseo en velero por el Río de la Plata para dos, tres o cuatro personas con comida y bebida a bordo.",
        fourth: " Son con fecha abierta y el agasajado tiene un año para coordinar el paseo.",

      },
      Form: {
        buy: "Comprá",
        description: "Regalá una experiencia inolvidable",
        placeholder: "Ingreśa tu mail",
        emailError: "Este campo es obligatorio"
      },
      Services: {
        title: "Nuestros paseos",
        first: {
          title: "Una experiencia inolvidable",
          description: "bla bla bla 1",
          photo: "service3"
        },
        second: {
          title: "Una experiencia inolvidable2",
          description: "bla bla bla 2",
          photo: "service2"
        },
        third: {
          title: "Una experiencia inolvidable3",
          description: "bla bla bla 3",
          photo: "service1"
        },
      },
      Boats: {
        title: "Nuestros veleros",
        first: {
          name: "Kiwi",
          width: "Manga",
          widthNumber: "2,07",
          length: "Eslora",
          lengthNumber: "5,47",
          model: "Modelo Phantom 19",
          description: "Velero de 19 pies diseñado por Domato y construido en astillero Marco. Cómodo, acogedor, ideal para salidas en pareja."
        },
        second: {
          name: "Mango",
          width: "Manga",
          widthNumber: "2,58",
          length: "Eslora",
          lengthNumber: "7,47",
          model: "Modelo D´angelo 24",
          description: "Diseño del gran German Frers. Un 24 pies amplio, ágil, rápido y muy divertido para salir con amigos y amigas."
        },
      },
      FaqItem: {
        title: "Preguntas frecuentes",
        description: 'Agilidad, creatividad & soluciones a medida.',
        items: {
          first: {
            question: "¿Tienen menú vegetariano? ¿Y vegano?",
            answer: "Si, ofrecemos opciones de comida vegetariana y vegana."
          },
          second: {
            question: "¿En qué horarios son los paseos?",
            answer: "Salimos en todos los horarios, podés elegir el que quieras. Si está disponible, reservamos."
          },
          third: {
            question: "¿Pueden ir menores?",
            answer: "La actividad es solo para mayores de 18 años."
          },
          fourth: {
            question: "¿Con cuanta anticipacion debo reservar?",
            answer: "No hay un tiempo estipulado de anticipacion. Depende solamente de la disponibilidad."
          },
          fifth: {
            question: "¿Podemos llevar comida y/o bebida?",
            answer: "¡Claro que si!, pueden traer lo que quieran para comer, beber o lo que sea."
          },
        },
        button: 'Conversemos'
      },
      Footer: {
        getExperience: "Comprá",
        copyrigth: '© Copyright 2024 by Nino',
      },
      Voucher: {
        title: "Felicitaciones!",
        description: "Tenes a disposición un paseo en velero por el río de la plata!",
        descriptionIg: "Coordiná la salida a través de nuestro instagram",
        ig: "@Nino",
        descriptionWtsp: "O por whatsapp al ",
        wtsp: " 1121863402",
        
      }
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //fallbackLng: ["es", "fr", "en", "en-US", "dev"],
    fallbackLng: ["es", "en", "it"], // Agregar aca los lenguajes a medida que se necesiten, para que funcione correctamente el selector automatico lng
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
