# Eleventy Filter Coffee Starter

A simple eleventy starter kit as a base for easily setting up new projects.

## Features

- Gulp integration for fonts and sass
- Asset hashing
- Image optimization using `imagemin`
- HTML Minification
- Critical CSS

## Getting Started

To install the necessary packages, run this command in the root folder of the site:

```sh
npm install
```

### Commands

- Run `npm start` for a development server and live reloading
- Run `npm run production` to generate a production build

## CSS

- Styling works with Sass. New css can be added in `src/scss` folder.
- Page level styling can be set by adding the following at the top of the page,

```
{% set pageCriticalStyles = ['css/<example.css>'] %}
```

## Credits

- [Andy Bell](https://twitter.com/hankchizljaw) for creating the wonderful course, [Learn Eleventy From Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/). Almost all of this starter comes from the lessons I learnt from the course.
- [Max Boch](https://twitter.com/mxbck) lovely [Eleventastic](https://github.com/maxboeck/eleventastic)
