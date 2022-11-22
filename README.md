# Mapping Mushrooms ... and Crows

**This application is my final project for the Full Stack Web Development Bootcamp by @upleveled. It is a PWA (progressive web app), that you can download to your smartphone in Google Chrome or use as a browser application.**

When you register or log in, you can navigate in a map and/or find your location by clicking on a button in the map. Then you can upload images of crows or mushrooms, you found, to the spot, you chose. You can add an upload note and an associated article from the lexicon to your image.

The saved images will be loaded with markers in the map, when you revisit the map.

In your private profile, you can see all your uploaded images and delete them individually. When you click on an individual image you will be redirected to your public profile, where all the upload information, you gave, is displayed.

In the included lexicon you can choose an article on a mushroom or a crow, that you are interested in.

#### Workaround/Node Module Patching for Leaflet Type Error `Property '_getIconUrl' does not exist on type 'Default'.`:

Add `_getIconUrl?: (name: string) => string;` in the `class Default` of the `namespace Icon` after Line 2466 in: node_modules\@types\leaflet\index.d.ts --> not sustainable though
