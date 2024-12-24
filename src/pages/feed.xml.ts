import rss from '@astrojs/rss';
import {getCollection} from "astro:content";
import type {APIContext} from "astro";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context : APIContext) {
    const posts = await getCollection('posts')
    return rss({
        // `<title>` field in output xml
        title: 'Blog von Durus',
        // `<description>` field in output xml
        description: '',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site ?? "",
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: posts.map((post) => ({
        title: post.data["title"],
        pubDate: post.data["pubDate"],
        description: post.data["subtitle"],
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/posts/${post.slug}/`,
    })),
        // (optional) inject custom xml
        customData: `<language>de-de</language>`,
    });
}