import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
      Navbar:{
        home: 'Home',
        about: 'Acerca de Nosotros',
        how: 'Cómo Trabajamos',
        services: 'Servicios',
        our: 'Nuestro Trabajo',
        talk: "Conversemos",
      },
      Home: {
        button: "Conversemos"
      },
      About: {
        title: "Acerca de",
        description: 'Somos Minimalart, una empresa formada por un equipo de profesionales con más de  20 años de experiencia. Diseñamos y desarrollamos plataformas digitales utilizando las mejores herramientas y estrategias disponibles. ¡Nos emociona convertir problemas tecnológicos complejos en soluciones simples y elegantes! Tenemos experiencia y habilidades desarrollando aplicaciones web y móviles, diseñando excelentes experiencias de usuario, dando soporte a servicios de infraestructura en la nube, analizando, optimizando y controlando calidad de software. Nuestros proyectos ágiles generan la expansión de su negocio en internet.' ,
        numbers: 'Nuestros números',
        numbersTitles: {
          first: 'Proyectos realizados',
          second: 'Clientes',
          third: 'Profesionales',
          fourth: 'Paises'
        },
        button: 'Conversemos'
      },
      How: {
        title: "Cómo trabajamos",
        description: 'Combinamos nuestra experiencia técnica con un marcado enfoque empresarial. Así nos aseguramos de que los productos digitales que creamos sean eficientes, efectivos y siempre estén alineados con los objetivos comerciales de nuestros clientes. Nuestra prioridad es generar soluciones a medida que garanticen resultados para su negocio. Trabajamos considerando sus necesidades actuales y las posibilidades futuras.' ,
        button: 'Conversemos'
      },
      Services: {
        title: "Servicios",
        description: 'Agilidad, creatividad & soluciones a medida.',
        segments: {
          first: {
            title: 'Dev & Design',
            description: 'Diseño de websites, desarrollo de plataformas E-commerce, websites y aplicaciones móviles',
          },
          second: {
            title: 'Consultoría tecnológica',
            description: 'Evaluación y presupuesto de proyectos, Provisión y revisión tecnológica, Soporte en  Bidding Process',
          },
          third: {
            title: 'Project & Operational Management',
            description: 'Servicio de Project Management Outsourcing, Operativo,  Atención al cliente, entrenamiento y reporte',
          },
          fourth: {
            title: 'Infraestructura',
            description: 'Provisión de Cloud, Monitoreo de Performance y Uptime, Control de sistemas de seguridad, Implementación CI',
          },
          fifth: {
            title: 'Testing & QA',
            description: 'Test Design unitario y de punta a punta, Testing Manual, QA Automation, Pruebas de Stress',
          },
        },
        button: 'Conversemos'
      },
      OurWork: {
        title: "Nuestro trabajo",
        description: 'Nuestra misión es ayudar a otras compañías a explotar su potencial a través de soluciones tecnológicas efectivas y a medida.',
        projects: 'Proyectos recientes',
        button: 'Conversemos'
      },
      Talk: {
        title: "Conversemos",
        description: 'Escribinos y volveremos a la brevedad con vos para charlar sobre tu asombrosa idea.',
        form: {
          name: "Nombre completo",
          email: "Email",
          company: "Organización",
          website: "URL de Website",
          country: "País",
          budget: "Presupuesto",
          checkbox: {
            title: "¿En qué podemos ayudarte?",
            first: "eCommerce",
            second: "App",
            third: "Website",
            fourth: "No lo tengo claro",
          },
          tellUs: {
            title: "Contanos sobre tu proyecto",
            subtitle: "Incluí todos los detalles que creas necesarios",
          }
        },
        button: 'Enviar',
        messages: {
          success: {
            title: 'Gracias por contactarte!',
            subtitle: 'Recibimos tu correo y nos contactaremos en la brevedad.'
          },
          errors: {
            mandatory: 'Todos los campos son obligatorios',
            email: 'Por favor ingrese un email válido'
          }
        }
      },
      Footer: {
        linkedin: "Visitá nuestro LinkedIn: "
      }
    }
  },
  en: {
    translation: {
      Navbar:{
        home: 'Home',
        about: 'About Us',
        how: 'How We Work',
        services: 'Services',
        our: 'Our Work',
        talk: "Let's Talk",
      },
      Home: {
        button: "Let's talk!"
      },
      About: {
        title: "About us",
        description: 'Founded in 2015, Minimalart is a team of professionals with over 20 years of experience in internet projects. We design and develop digital platforms using the best available tools and strategies. Turning complex business and technological problems into simple and elegant solutions thrills us! We are experienced and skilled in web and mobile application development, design, cloud infrastructure services, analysis, optimization, and software quality control. Our agile projects allow companies to scale up their business on the internet' ,
        numbers: 'Our numbers',
        numbersTitles: {
          first: 'Projects Executed',
          second: 'Clients in Portfolio',
          third: 'Professionals',
          fourth: 'Countries'
        },
        button: "Let's talk!"
      },
      How: {
        title: "How we work",
        description: 'We combine our technical expertise with a strong business focus to ensure that digital platforms are developed efficiently and effectively and aligned with business and management goals. Our priority is to deliver tailored solutions that guarantee strong and prominent results for your business over your investment in technology. We work on your current needs while considering future possibilities.' ,
        button: "Let's talk!"
      },
      Services: {
        title: "Services",
        description: 'Agility, Creativity & Custom Solutions.',
        segments: {
          first: {
            title: 'Design & Development',
            description: 'Website Design, E-commerce Plaform Development, Web Development, Mobile Application Development',
          },
          second: {
            title: 'Business Technology Consulting',
            description: 'Project Assessment and Budgeting, Vendor and Technology Reviewing, Bidding Process Support',
          },
          third: {
            title: 'Project & Operational Management',
            description: 'Project Management Outsourcing, Operational Management, Customer Care Support, Training and Reporting',
          },
          fourth: {
            title: 'Infrastructure',
            description: 'Cloud Provisioning, Performance and Uptime Monitoring, Security Systems Management, CI Imprementation',
          },
          fifth: {
            title: 'Testing & QA',
            description: 'Unit and End-to-End Test Design, Manual Testing, QA Automation, Stress Tests',
          },
        },
        button: "Let's talk!"
      },
      OurWork: {
        title: "Our work",
        description: 'Our mission is to help every company unleash it’s unique potential through effective and customized tech solutions.',
        projects: 'Our Recent Projects',
        button: "Let's talk!"
      },
      Talk: {
        title: "LET'S TALK",
        description: 'Drop us a line and we get back to you asap to discuss your awesome idea.',
        form: {
          name: "Full Name",
          email: "Email",
          company: "Company",
          website: "Website URL",
          country: "Country",
          budget: "Budget",
          checkbox: {
            title: "What can we do for you?",
            first: "eCommerce",
            second: "App",
            third: "Website",
            fourth: "I'm not sure",
          },
          tellUs: {
            title: "Tell us about your proyect",
            subtitle: "Include as many detail’s as you want",
          }
        },
        button: "Submit",
        messages: {
          success: {
            title: 'Thank you for reaching out!',
            subtitle: 'We received your inquiry and we will respond to you in the few hours.'
          },
          errors: {
            mandatory: 'All fields are mandatory',
            email: 'Please enter a valid email address'
          }
        }
      },
      Footer: {
        linkedin: "Check our LinkedIn: "
      }
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //fallbackLng: ["es", "fr", "en", "en-US", "dev"],
    fallbackLng: ["es", "en", "dev"], // Agregar aca los lenguajes a medida que se necesiten, para que funcione correctamente el selector automatico lng
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
