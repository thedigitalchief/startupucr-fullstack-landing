

Pofology – is a personal portfolio template build with Typescript, NextJS and Tailwindcss. This template is designed for building beautiful personal portfolio website. It has a great customisable option. Fully responsive and looks great on any devices. This template contains custom made pages for your portfolios & blog posts. It’s suitable for designers, developers or freelancers who want to show their projects and services, share their thoughts and knowledge with their own platform. Finally it’s a clean & minimal design.

## Features

- Built on Typescript, NextJS and Tailwindcss
- Light & Dark theme support
- Responsive in Any Device
- Floating Menu on Mobile Devices
- Integrated with React Icons
- Easily Customizable
- Reusable Components


## Project Structure

There are two main folders `public` & `src` and some other configuration related file in project root.

- public
  - fonts → Application fonts
  - images → Application Images
- src
  - components → Reusable react components
    - form → Form related components
    - icons → Custom icons components
    - partials → Components which are the part of a big layout but not repeatedly used
    - shared → Repeatedly used components
  - data → Static data for the application
  - hooks → Reusable custom react hooks
  - layouts → Contains the app base layout
  - pages → Here goes available pages for the application
    - blog
      - [id].tsx
      - index.tsx
    - works
      - [id].tsx
      - index.tsx
    - \_app.tsx
    - contact.tsx
    - index.tsx
  - styles → Contains application .`scss` files
    - modules → Style modules which are directly used in react components
    - partials → SCSS partial files
    - app.scss → The main SCSS file which is loaded by the application
  - types → Type definations for the application



- yarn install
- yarn dev

_**NB: If you are using npm, then remove the `yarn.lock` file**_