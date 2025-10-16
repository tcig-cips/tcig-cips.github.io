import { defineCollection, z } from 'astro:content';

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
    status: z.enum(['pi','postdoc','phd','ms','ug','alum']).default('phd'),
    website: z.string().url().optional(),
    scholar: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});



const pubs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),     // full author list
    first_authors: z.array(z.string()).optional(),// NEW: co-first list
    venue: z.string().optional(),
    year: z.number(),
    month: z.union([z.string(), z.number()]).optional(),

    // media/links
    thumbnail: z.string().optional(),
    teaser: z.string().optional(),
    youtube: z.string().optional(),
    video: z.string().url().optional(),
    project: z.string().url().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    scholar: z.string().url().optional(),

    // content
    abstract: z.string().optional(),
    bibtex: z.string().optional(),

    featured: z.boolean().default(false),
  }).passthrough(),
});



const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.string(),
    slides: z.string().url().optional(),
    video: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    term: z.string(),
    number: z.string(),
    card: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const research_focus = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),          // path under /public, e.g. /images/foci/nsr.jpg
    kicker: z.string().optional(),
    blurb: z.string().optional(),  // short teaser for the tile
    order: z.number().default(999), // sort on the front page & research page
  }),
});

export const collections = { people, pubs, talks, courses, research_focus };
