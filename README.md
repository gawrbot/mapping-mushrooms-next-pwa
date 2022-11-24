# Mapping Mushrooms ... and Crows

**This application is my final project for the Full Stack Web Development Bootcamp by @upleveled. It is an platform for mushroom and crow enthusiasts, including a map with an upload function. It is a PWA (progressive web app), that you can download to your smartphone in Google Chrome or use as a browser application.**

## Walkthrough

When you register or log in, you can navigate in a map and/or find your location by clicking on a button in the map. Then you can upload images of crows or mushrooms, you found, to the spot, you chose. You can add an upload note and an associated article from the lexicon to your image.

The saved images will be loaded with markers in the map, when you revisit the map.

In your private profile, you can see all your uploaded images and delete them individually. When you click on an individual image, you will be redirected to your public profile, where all the upload information, you gave, is displayed. From your private profile, you can also navigate to other users' public profiles to see, what they have uploaded.

In the included lexicon you can choose an article on a mushroom or a crow, that you are interested in.

You can always log out from the (dropdown) menu in the header.

## Features

- Authentication
- Authorisation
- Responsiveness & PWA support
- Map (Open Street Map, implemented with Leaflet) with
  - a location finder
  - a search bar to type in coordinates or addresses
  - markers with saved images in the spots, they were uploaded in
- Lexicon with 43 mushrooms and 6 crows (common in Austria, where I live) and intros to both creatures
- A private and a public profile, including the option to find other users and see their uploads
- An image gallery and a delete option for each image individually

The data is stored in a postgres database and the project includes migrations to work from other machines.

### Technologies and Services

- Typescript, SQL (with Postgres), JSX, CSS
- Frontend: Browsers
- Backend: node.js
- Selection of Libraries and Services
- Next.js/React
- Tailwind CSS
  js-cookies
- PostgreSQL, psql
- ley (for database migrations to different machines)
- Cloudinary
- Leaflet
- DrawSQL
- Prettier
- ESLint
- Yarn (package manager)
- Playwright, Jest
- Fly, flyctl
- Docker
- Git, Github
- Figma
- Notion
- DrawSQL

## Planned Features

- More accurate location finding
- Authentication via a valid email address or third party authorisation via Google
- Refining the marker setting
- Update option for article and notes in the images
- Comment section for each uploaded image
- 'See in Map' button in the image page, leading to the spot in the map and centering there
- All images shown below their associated article

#### Workaround/Node Module Patching for Leaflet Type Error `Property '_getIconUrl' does not exist on type 'Default'.`:

Add `_getIconUrl?: (name: string) => string;` in the `class Default` of the `namespace Icon` after Line 2466 in: node_modules\@types\leaflet\index.d.ts --> not sustainable though
