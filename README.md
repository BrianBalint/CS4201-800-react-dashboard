# CS 4201 Week 5 React Portfolio Dashboard

A small React application that presents three earlier assignments from
CS 4201 Database Driven Web Apps as interactive cards.

## Open it in StackBlitz

https://stackblitz.com/github/BrianBalint/CS4201-800-react-dashboard

## What it does

Three project cards are generated from a `projects` array using `.map()`.
Each card is a `ProfileCard` component that receives one project through
props and holds its own `showDetails` state, so the cards open and close
independently of one another.

## Stack

Vite, React, plain CSS. No UI library.

## Run it locally

```
npm install
npm run dev
```

## Layout

- `src/App.jsx` - the projects array, the ProfileCard component, and App
- `src/App.css` - card layout, images, and button styling
- `public/images/` - screenshots of the Week 2, Week 3, and Week 4 assignments
