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
        home: "Inicio",
        about: "Nosotros",
        tour: "Excursión",
        faq: "Preguntas",
        contact: "Contacto"
      },
      ButtonContact: {
        contact: "CONTACTO"
      },
      OverTheFold: {
        city: "CASTELLAMMARE DEL GOLFO",
        titleFrist: 'SANTA LUCIA',
        titleSecond: 'TOUR',
        description: "Vive una experiencia única: pesca en bote y descubre playas paradisíacas"
      },
      Boats: {
        company: "SANTA LUCIA TOUR",
        title: "Una experiencia única",
        description: "Disfruta una experiencia única a bordo del Santa Lucia, un tradicional bote peschereccio. Comenzamos nuestra aventura en el puerto de Castellammare, visitamos cuevas y luego pescamos con red en alta mar. Continúa el viaje recorriendo la costa, con paradas en Cala Bianca, la Reserva dello Zingaro y Tonnara di Scopello para nadar y disfrutar del paisaje paradisíaco. Te ofrecemos fruta fresca, agua y equipo de snorkel para que tu experiencia sea inolvidable.",
        signs: {
          fishing: "Pesca con red en altamar",
          cueva: "Visita a cuevas",
          playa: "Paradas en playas paradisíacas",
          snorkel: "Nado con snorkel"
        }
      },
      Services: {
        first: {
          title: "Horarios a tu gusto",
          description: "Salimos todos los días. Podés elegir entre dos turnos de 9:30 a 14 o de 14:30 a 19 ¡Consultanos disponibilidad para reservar!",
        },
        second: {
          title: "Una experiencia inolvidable",
          description: "Partimos del puerto de Castellammare, visitamos las cuevas y nos adentramos a 3km de la costa para pescar durante 40min. Luego recorremos la costa en bote parando para nadar y relajarnos en las playas de Cala Bianca, Riserva dello Zingaro y Tornare di Scopello, durante 40min en cada una. Volvemos al puerto para terminar el recorrido de 25km por la costa.",
        },
        third: {
          title: "Un barco para vos y tus amigos",
          description: "Todos nuestros paseos son privados y ofrecemos máscara snorkel, fruta y agua fresca para todo el grupo.",
        },
      },
      FaqItem: {
        title: "Preguntas frecuentes",
        items: {
          first: {
            question: "¿Los niños tienen descuento?",
            answer: "Si, ofrecemos descuento para niños."
          },
          second: {
            question: "¿En qué horarios son los paseos?",
            answer: "Hay dos horarios, de 9.30 a 14 y de 14.30 a 19."
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
            answer: "¡Claro que si!, pueden traer lo que quieran para comer, beber!"
          },
        },
      },
      Footer: {
        form: {
          name: "Nombre",
          people: "Cantidad de gente",
          data: "Fecha",
          mail: "Email",
          message: "Mensaje"
        }
      },
    }
  },
  en: {
    translation: {
        Header: {
            company: "SANTA LUCIA TOUR",
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
            description: "Enjoy a unique experience aboard the Santa Lucia, a traditional fishing boat. We start our adventure at the port of Castellammare, visit caves, and then fish with nets in the open sea. Continue the journey along the coast, stopping at Cala Bianca, the Zingaro Reserve, and Tonnara di Scopello to swim and enjoy the paradisiacal scenery. We offer fresh fruit, water, and snorkel equipment to make your experience unforgettable.",
            signs: {
                fishing: "Open sea net fishing",
                cueva: "Cave visits",
                playa: "Stops at paradise beaches",
                snorkel: "Snorkeling"
            }
        },
        Services: {
            first: {
                title: "Schedules at your convenience",
                description: "We go out every day. You can choose between two shifts from 9:30 to 14:00 or from 14:30 to 19:00. Check availability with us to book!"
            },
            second: {
                title: "An unforgettable experience",
                description: "We depart from the port of Castellammare, visit the caves, and venture 3km from the coast to fish for 40 minutes. Then we cruise along the coast, stopping to swim and relax on the beaches of Cala Bianca, Riserva dello Zingaro, and Tonnara di Scopello, for 40 minutes each. We return to the port to complete the 25km coastal journey."
            },
            third: {
                title: "A boat for you and your friends",
                description: "All our tours are private, and we offer snorkel masks, fruit, and fresh water for the entire group."
            }
        },
        FaqItem: {
            title: "Frequently Asked Questions",
            items: {
                first: {
                    question: "Do children get a discount?",
                    answer: "Yes, we offer a discount for children."
                },
                second: {
                    question: "What are the tour times?",
                    answer: "There are two time slots, from 9:30 to 14:00 and from 14:30 to 19:00."
                },
                third: {
                    question: "Can minors go?",
                    answer: "The activity is only for those over 18 years old."
                },
                fourth: {
                    question: "How far in advance should I book?",
                    answer: "There is no stipulated advance time. It only depends on availability."
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
                message: "Message"
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
            description: "Goditi un'esperienza unica a bordo del Santa Lucia, una tradizionale barca da pesca. Iniziamo la nostra avventura al porto di Castellammare, visitiamo le grotte e poi peschiamo con le reti in mare aperto. Continua il viaggio lungo la costa, fermandoti a Cala Bianca, nella Riserva dello Zingaro e a Tonnara di Scopello per nuotare e goderti il paesaggio paradisiaco. Offriamo frutta fresca, acqua ed equipaggiamento per lo snorkeling per rendere la tua esperienza indimenticabile.",
            signs: {
                fishing: "Pesca con reti in mare aperto",
                cueva: "Visita alle grotte",
                playa: "Fermate nelle spiagge paradisiache",
                snorkel: "Snorkeling"
            }
        },
        Services: {
            first: {
                title: "Orari a tua scelta",
                description: "Usciamo tutti i giorni. Puoi scegliere tra due turni dalle 9:30 alle 14:00 o dalle 14:30 alle 19:00. Controlla la disponibilità con noi per prenotare!"
            },
            second: {
                title: "Un'esperienza indimenticabile",
                description: "Partiamo dal porto di Castellammare, visitiamo le grotte e ci avventuriamo a 3 km dalla costa per pescare per 40 minuti. Poi navighiamo lungo la costa, fermandoci per nuotare e rilassarci sulle spiagge di Cala Bianca, Riserva dello Zingaro e Tonnara di Scopello, per 40 minuti ciascuna. Torniamo al porto per completare il viaggio costiero di 25 km."
            },
            third: {
                title: "Una barca per te e i tuoi amici",
                description: "Tutti i nostri tour sono privati e offriamo maschere per lo snorkeling, frutta e acqua fresca per tutto il gruppo."
            }
        },
        FaqItem: {
            title: "Domande Frequenti",
            items: {
                first: {
                    question: "I bambini hanno uno sconto?",
                    answer: "Sì, offriamo uno sconto per i bambini."
                },
                second: {
                    question: "Quali sono gli orari dei tour?",
                    answer: "Ci sono due fasce orarie, dalle 9:30 alle 14:00 e dalle 14:30 alle 19:00."
                },
                third: {
                    question: "I minorenni possono partecipare?",
                    answer: "L'attività è riservata ai maggiori di 18 anni."
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
                message: "Messaggio"
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
