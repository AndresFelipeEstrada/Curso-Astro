import rss,{pagesGlobToRssItems} from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'Alumno de astro | Blog',
        description: 'Aprendiendo Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    })
}