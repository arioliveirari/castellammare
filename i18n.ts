import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Header: {
        company: "SANTA LUCIA TOUR",
        titleFrist: "SANTA LUCIA",
        titleSecond: "TOUR",
        home: "Home",
        about: "About Us",
        tour: "Tour",
        faq: "FAQ",
        contact: "Contact"
      },
      ButtonContact: {
        contact: "CONTACT"
      },
      OverTheFold: {
        city: "CASTELLAMMARE DEL GOLFO",
        titleFrist: "SANTA LUCIA",
        titleSecond: "TOUR",
        description: "Live a unique experience: boat fishing and discover paradise beaches"
      },
      Boats: {
        company: "SANTA LUCIA TOUR",
        title: "A unique experience",
        description: "Enjoy a unique experience aboard the Santa Lucia, a traditional fishing boat. We start our adventure at the port of Castellammare and visit the caves. Continue the journey along the coast, stopping at Cala Bianca, in the Zingaro Reserve and at Tonnara di Scopello to swim and enjoy the paradisiacal landscape. We offer fresh fruit, water, and snorkeling equipment to make your experience unforgettable.",
        signs: {
          fishing: "Fishing with nets in open sea",
          cueva: "Cave visit",
          playa: "Paradise beaches",
          snorkel: "Snorkeling"
        }
      },
      Services: {
        first: {
          title: "Flexible Schedules",
          description: "We go out every day. You can choose between two shifts, from 9:30 AM to 2:00 PM or from 2:30 PM to 7:00 PM. Check availability with us to book!"
        },
        second: {
          title: "Itinerary",
          description: `We depart from the port of Castellammare. Along the way, we will visit some beautiful caves, make 3 stops at stunning beaches along our coast, between the Scopello stacks and the Zingaro reserve. We return to the port to complete the 25 km journey along the coast. \n Total duration: 4h 30min`,
        }
        ,
        third: {
          title: "A boat for you and your friends",
          description: "Enjoy the best beaches of Castellammare del Golfo with your friends. We organize boat events on request, tours, and offer snorkeling masks, fresh fruit, and water for the entire group."
        }
      },
      FaqItem: {
        title: "Frequently Asked Questions",
        items: {
          first: {
            question: "How long is the excursion? And the stops?",
            answer: "The excursion lasts 4 and a half hours. It includes 3 stops of 40 minutes for swimming."
          }
          ,
          second: {
            question: "What are the tour times?",
            answer: "There are two time slots, from 9:30 AM to 2:00 PM and from 2:30 PM to 7:00 PM."
          },
          third: {
            question: "Can minors participate?",
            answer: "Yes, the activity is suitable for all ages."
          },
          fourth: {
            question: "How far in advance should I book?",
            answer: "There is no set time. It just depends on availability."
          },
          fifth: {
            question: "Can we bring food and/or drinks?",
            answer: "Of course! You can bring whatever you want to eat and drink!"
          }
        }
      },
      Footer: {
        form: {
          name: "Name",
          people: "Number of people",
          data: "Date",
          mail: "Email",
          message: "Message",
          lang: "Select your language",
          phone: "Phone number",
          errorMessage: "Name, email, and phone are required"
        }
      }
    }
  },
  es: {
    translation: {
      Header: {
        company: "SANTA LUCIA TOUR",
        titleFrist: "SANTA LUCIA",
        titleSecond: "TOUR",
        home: "Inicio",
        about: "Somos",
        tour: "Tour",
        faq: "Preguntas",
        contact: "Contacto"
      },
      ButtonContact: {
        contact: "CONTACTO"
      },
      OverTheFold: {
        city: "CASTELLAMMARE DEL GOLFO",
        titleFrist: "SANTA LUCIA",
        titleSecond: "TOUR",
        description: "Vive una experiencia única: pesca en barco y descubre playas paradisíacas"
      },
      Boats: {
        company: "SANTA LUCIA TOUR",
        title: "Una experiencia única",
        description: "Disfruta de una experiencia única a bordo del Santa Lucia, un barco de pesca tradicional. Comenzamos nuestra aventura en el puerto de Castellammare, visitamos las cuevas. Continuamos el viaje a lo largo de la costa, deteniéndonos en Cala Bianca, en la Reserva dello Zingaro y en Tonnara di Scopello para nadar y disfrutar del paisaje paradisíaco. Ofrecemos fruta fresca, agua y equipo de snorkel para hacer que tu experiencia sea inolvidable.",
        signs: {
          fishing: "Pesca con redes en mar abierto",
          cueva: "Visita a las cuevas",
          playa: "Playas paradisíacas",
          snorkel: "Snorkel"
        }
      },
      Services: {
        first: {
          title: "Horarios a tu elección",
          description: "Salimos todos los días. Puedes elegir entre dos turnos, de 9:30 a 14:00 o de 14:30 a 19:00. ¡Verifica la disponibilidad con nosotros para reservar!"
        },
        second: {
          title: "Itinerario",
          description: `Partimos del puerto de Castellammare. En el camino visitaremos algunas cuevas hermosas, haremos 3 paradas en playas impresionantes de nuestra costa, entre los farallones de Scopello y la reserva dello Zingaro. Regresamos al puerto para completar el recorrido de 25 km a lo largo de la costa. \n Duración total: 4h 30min`,
        }
        ,
        third: {
          title: "Un barco para ti y tus amigos",
          description: "Disfruta de las mejores playas de Castellammare del Golfo con tus amigos. Organizamos eventos en barco a pedido, hacemos paseos y ofrecemos máscaras de snorkel, fruta y agua fresca para todo el grupo."
        }
      },
      FaqItem: {
        title: "Preguntas Frecuentes",
        items: {
          first: {
            question: "¿Cuánto dura la excursión? ¿Y las paradas?",
            answer: "La excursión dura 4 horas y media. Incluye 3 paradas de 40 minutos para bañarse."
          }
          ,
          second: {
            question: "¿Cuáles son los horarios de los tours?",
            answer: "Hay dos franjas horarias, de 9:30 a 14:00 y de 14:30 a 19:00."
          },
          third: {
            question: "¿Pueden participar menores de edad?",
            answer: "Sí, la actividad es apta para todas las edades."
          },
          fourth: {
            question: "¿Con cuánto tiempo de antelación debo reservar?",
            answer: "No hay un tiempo establecido. Depende solo de la disponibilidad."
          },
          fifth: {
            question: "¿Podemos llevar comida y/o bebidas?",
            answer: "¡Claro! Puedes llevar lo que quieras para comer y beber."
          }
        }
      },
      Footer: {
        form: {
          name: "Nombre",
          people: "Número de personas",
          data: "Fecha",
          mail: "Correo electrónico",
          message: "Mensaje",
          lang: "Selecciona tu idioma",
          phone: "Número de teléfono",
          errorMessage: "Se requieren nombre, correo electrónico y teléfono"
        }
      }
    }
  },
  it: {
    translation: {
      Header: {
        company: "SANTA LUCIA TOUR",
        titleFrist: "SANTA LUCIA",
        titleSecond: "TOUR",
        home: "Home",
        about: "Chi Siamo",
        tour: "Tour",
        faq: "FAQ",
        contact: "Contatto"
      },
      ButtonContact: {
        contact: "CONTATTO"
      },
      OverTheFold: {
        city: "CASTELLAMMARE DEL GOLFO",
        titleFrist: "SANTA LUCIA",
        titleSecond: "TOUR",
        description: "Vivi un'esperienza unica: pesca in barca e scopri spiagge paradisiache"
      },
      Boats: {
        company: "SANTA LUCIA TOUR",
        title: "Un'esperienza unica",
        description: "Goditi un'esperienza unica a bordo del Santa Lucia, una tradizionale barca da pesca. Iniziamo la nostra avventura al porto di Castellammare, visitiamo le grotte. Continua il viaggio lungo la costa, fermandoti a Cala Bianca, nella Riserva dello Zingaro e a Tonnara di Scopello per nuotare e goderti il paesaggio paradisiaco. Offriamo frutta fresca, acqua ed equipaggiamento per lo snorkeling per rendere la tua esperienza indimenticabile.",
        signs: {
          fishing: "Pesca con reti in mare aperto",
          cueva: "Visita alle grotte",
          playa: "Spiagge paradisiache",
          snorkel: "Snorkeling"
        }
      },
      Services: {
        first: {
          title: "Orari a tua scelta",
          description: "Usciamo tutti i giorni. Puoi scegliere tra due turni dalle 9:30 alle 14:00 o dalle 14:30 alle 19:00. Controlla la disponibilità con noi per prenotare!"
        },
        second: {
          title: "Itinerario",
          description: `Partiamo dal porto di Castellammare. per strada visiteremo delle bellissme grotte, faremo 3 soste in splendide spiagge della nostra costatra i faraglioni di scopello e la riserva dello zingaro. Torniamo al porto per completare il percorso di 25 km lungo la costa. \n Durata totale: 4h 30min`,
        }
        ,
        third: {
          title: "Una barca per te e i tuoi amici",
          description: "Goditi le migliori spiagge di Castellammare del Golfo con i tuoi amici. Organizziamo eventi in barca su richiesta, facciamo passeggiate e offriamo maschere da snorkeling, frutta e acqua fresca per tutto il gruppo."
        }
      },
      FaqItem: {
        title: "Domande Frequenti",
        items: {
          first: {
            question: "Quanto dura l'escursione? E le fermate?",
            answer: "L'escursione dura 4 ore e mezza. Include 3 fermate di 40 minuti per fare il bagno."
          }
          ,
          second: {
            question: "Quali sono gli orari dei tour?",
            answer: "Ci sono due fasce orarie, dalle 9:30 alle 14:00 e dalle 14:30 alle 19:00."
          },
          third: {
            question: "I minorenni possono partecipare?",
            answer: "Sì, l'attività è adatta a tutte le età."
          },
          fourth: {
            question: "Con quanto anticipo devo prenotare?",
            answer: "Non c'è un tempo prestabilito. Dipende solo dalla disponibilità."
          },
          fifth: {
            question: "Possiamo portare cibo e/o bevande?",
            answer: "Certo! Puoi portare quello che vuoi da mangiare e bere!"
          }
        }
      },
      Footer: {
        form: {
          name: "Nome",
          people: "Numero di persone",
          data: "Data",
          mail: "Email",
          message: "Messaggio",
          lang: "Seleziona la tua lingua",
          phone: "Numero di telefono",
          errorMessage: "Sono richiesti nome, email e telefono"
        }
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
