# chat.horse website

This is the source code for the chat.horse website. It is made using
[gatsby](https://gatsby.org), a static-site builder built on top of React.

The starter used for this website is
[gatsby-serif-theme](https://github.com/JugglerX/gatsby-serif-theme).

## Development

Install dependencies (and install [Yarn](https://yarnpkg.com) first if you haven't
already):

```
yarn
```

Start the development server:

```
gatsby develop
```

### Frequently Asked Questions

#### Structure

The FAQ page is sourced from a separate gatsby theme,
[gatsby-theme-faqs-prismic](https://github.com/littleplusbig/gatsby-theme-faqs-prismic).
It's a little weird in that the FAQ questions come from
[prismic.io](https://prismic.io) instead of from the repo. This makes editing
FAQ questions in a different deployment difficult.

The project uses
[gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)
as a datasource for the questions, which the theme simply reads from. The plan
is to eventually replace the prismic source with something that reads from the
local repository and produces the same datastructure.

#### Colors

The color-scheme of the FAQ page can be customized by editing the
[src/gatsby-plugin-theme-ui/index.js](src/gatsby-plugin-theme-ui/index.js)
file. This file overrides some of the colors in the [base colors
file](https://github.com/littleplusbig/gatsby-theme-faqs-prismic/blob/master/src/styles/theme.js).

Read more about how the colors of this page work 
[here](https://github.com/littleplusbig/gatsby-theme-faqs-prismic/#colors-and-styles).

## Deployment

Install dependencies:

```
yarn
```

Build the website files:

```
gatsby build
```

This will produce files in the `public` folder. Place these files behind a
webserver and you're done!
