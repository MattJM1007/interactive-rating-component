# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/MattJM1007/interactive-rating-component)
- Live Site URL: [Click Me](https://mattjm1007.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

One new thing I applied here is fluid spacing and typography using clamp in CSS. This let me set response font and margins without media queries:

```css
--fs-heading: clamp(1.5rem, 1.325rem + 0.85vw, 1.75rem);
--fs-body: clamp(0.875rem, 0.75rem + 0.425vw, 1rem);

/* Space One-Step-Up pairs */
--space-md-lg: clamp(1.5rem, 1.325rem + 0.75vw, 2rem);
--space-lg-xl: clamp(2rem, 1.825rem + 1.125vw, 2.5rem);
```

For Accessibility, I found it better to render components using React state and toggling the hidden class. When I conditionally rendered just the component, I found the accessbility tree in my dev tools did not update. So I felt that this was the best way for accessibility.

The submitted variable is passed to the component as a prop.

```js
<form className={`wrapper card flow padding-md ${submitted ? "hidden" : ""}`} onSubmit={onSubmit}>
```

### Continued development

I want to keep paying attention to accessibility and how it works inside React to deliver the best experience for everyone.

## Author

- Frontend Mentor - [@MattJM1007](https://www.frontendmentor.io/profile/MattJM1007)
