import { z } from 'zod';

const TranslationSchema = z.object({
  title: z.string(),
  description: z.string(),
  bullets: z.array(z.string()),
});

const ExperienceSchema = z.object({
  company: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  current: z.boolean(),
  translations: z.object({
    en: TranslationSchema,
    es: TranslationSchema,
  }),
});

export type Experience = z.infer<typeof ExperienceSchema>;

export const experience = z.array(ExperienceSchema).parse([
  {
    company: 'Grupo Salinas',
    startDate: '2024-05-20',
    endDate: '2026-03-12',
    current: false,
    translations: {
      en: {
        title: 'Frontend Developer',
        description: 'Development of web applications with microfrontend architecture, focused on performance metrics and data visualization.',
        bullets: [
          'Microfrontend architecture with Webpack Module Federation for an ecosystem of 4+ independent applications.',
          'Real-time GPS tracking platform with interactive maps using AWS Location Services.',
          'Training of external teams on microfrontends and cloud architecture definition with AWS.',
          'Component system design following Atomic Design with TypeScript and React.',
        ],
      },
      es: {
        title: 'Frontend Developer',
        description: 'Desarrollo de aplicaciones web con arquitectura de microfrontends, enfocadas en métricas de rendimiento y visualización de datos.',
        bullets: [
          'Arquitectura de microfrontends con Webpack Module Federation para un ecosistema de 4+ aplicaciones independientes.',
          'Plataforma de rastreo GPS en tiempo real con mapas interactivos usando AWS Location Services.',
          'Capacitación de equipos externos en microfrontends y definición de arquitectura cloud con AWS.',
          'Diseño de sistemas de componentes siguiendo Atomic Design con TypeScript y React.',
        ],
      },
    },
  },
  {
    company: 'Infosys',
    startDate: '2022-06-10',
    endDate: '2024-05-05',
    current: false,
    translations: {
      en: {
        title: 'Systems Engineer',
        description: 'Monitoring of PaaS systems, pipelines, and automation workflows; tracking and resolution of client incidents.',
        bullets: [
          'Management and resolution of technical incidents on the ServiceNow platform for corporate clients.',
          'Analysis of system issues and coordination with technical teams for incident resolution.',
        ],
      },
      es: {
        title: 'Ingeniero en sistemas',
        description: 'Monitoreo de sistemas PaaS, pipelines y flujos de automatizacion, seguimiento y resolucion de incidencias para clientes.',
        bullets: [
          'Gestión y resolución de incidentes técnicos en la plataforma ServiceNow para clientes corporativos.',
          'Análisis de problemas de sistema y coordinación con equipos técnicos para la resolución de incidentes.',
        ],
      },
    },
  },
  {
    company: 'TrackCenter',
    startDate: '2022-02-02',
    endDate: '2022-06-08',
    current: false,
    translations: {
      en: {
        title: 'Frontend Developer',
        description: 'Development of an MVC CRUD platform for user registration.',
        bullets: [
          'Design and implementation of data capture interfaces focused on user experience.',
          'Integration with databases for management and insertion of information.'
        ]
      },
      es: {
        title: 'Desarrollador Frontend',
        description: 'Desarrollo de plataforma CRUD MVC para registro de usuarios.',
        bullets: [
          'Diseño e implementación de interfaces de captura de datos enfocadas en experiencia de usuario.',
          'Integración con bases de datos para gestión e inserción de información.'
        ]
      }
    }
  }
]);
