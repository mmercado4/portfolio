export const languages = {
  en: 'English',
  es: 'Español'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'Hello!': 'Hello',
    "Hi! I'm Miguel": "Hi! I'm Miguel",
    '{years} years experienced Full Stack Developer': '{years} years experienced Full Stack Developer',
    'Addicted to software development and building new things.':
      'Addicted to software development and building new things.'
  },
  es: {
    'Hello!': 'Hola',
    "Hi! I'm Miguel": '¡Hola! Soy Miguel',
    '{years} years experienced Full Stack Developer':
      'Desarrollador Full Stack con {years} años de experiencia',
    'Addicted to software development and building new things.':
      'Adicto al desarrollo de software y a crear cosas nuevas.'
  }
} as const;
