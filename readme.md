# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Click a button to recieve a random piece of advice
- View optimal layout on both mobile and desktop views

### Screenshot

![](https://i.imgur.com/t3Pn9Nh.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Jclong98/Frontend-Mentor-Advice-App)
<!-- - Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

1. Use the vite cli to scaffold a new react/typescript project with `npm create vite@latest`
1. Transfer the design files and provided images into the vite project.
1. Install [UnoCSS](https://github.com/unocss/unocss), [UnoCSS Reset](https://github.com/unocss/unocss/tree/main/packages/reset), [UnoCSS WebFonts](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts), and [The UnoCSS Preset](https://github.com/unocss/unocss/tree/main/packages/preset-uno)
1. Configure all of these in `vite.config.ts` to get the required font. Come back for this later while styling if new rules need to be added like font size and icon size
1. Do all of the markup/styling in App.tsx. This project is limited enough in scope that the entire application can be contained in this file.
1. Add the simplest form of fetch request to the api to populate the markup.
1. Add a loading state to the button
1. Add a way to search for specific advice slips
1. handle errors for invalid inputs
1. upload to github
1. deploy on netlify

### Built with

- Semantic HTML5 markup
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/) - JS library
- [UnoCSS](https://github.com/unocss/unocss) - Atomic CSS
- [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### What I learned

As I get more comfortable with React, I tried branching out and using a CSS library. [Last time I tried react](https://github.com/jclong98/todo-react), I used vanilla CSS to style the project. Vanilla CSS in react is a bit cumbersome because the files are completely separated, which in some respects can make it more organized, but in others makes it slower to read and write. UnoCSS is an atomic CSS framework based on WindiCSS, which is based on TailwindCSS. It can make writing your styles much easier by abstracting away the underlying CSS into helpful utility classes. It is very new though, without much online about it, so if you run into a problem there might not be many examples of people running into the same problems.

### Continued development

Continuing development, I'd like to learn more about how UnoCSS works. To create a rule, you need to write a regex expression, and I've never quite seen the syntax that UnoCSS uses to create their rules.

### Useful resources

- [UnoCSS Docs](https://github.com/unocss/unocss)

## Author

- Github - [Jacob Long](https://github.com/jclong98)
- Frontend Mentor - [@jclong98](https://www.frontendmentor.io/profile/jclong98)
