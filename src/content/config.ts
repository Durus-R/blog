// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        pubDate: z.date(),
        image: z.string().optional()
    })
});
const metaCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'posts': postsCollection,
    'meta': metaCollection
};