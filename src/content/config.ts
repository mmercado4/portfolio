// 1. Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define tu colección(es)
const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.number(),
    company: z.string(),
    jobPosition: z.string(),
    period: z.string(),
    logo: z.string(),
    stack: z.string(),
    url: z.string()
  })
});

const educationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.number(),
    center: z.string(),
    degree: z.string(),
    period: z.string(),
    logo: z.string(),
    url: z.string()
  })
});
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
  experience: experienceCollection,
  education: educationCollection
};
