// import * as Puppeteer from 'puppeteer';

// export async function getMushroomContent() {
//   // if statement --> if data exists, don't fetch
//   const browser = await Puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://outforia.com/types-of-mushrooms/');
//   const titlesArray = await page.$$eval('article.post-47486 h4', (titles) =>
//     titles.map((title) => title.textContent),
//   );
//   const imagesArray = await page.$$eval(
//     'article.post-47486 h4 + figure picture img',
//     (images) => images.map((image) => image.src),
//   );

//   const articles = titlesArray.map((title, i) => {
//     return { title: title, image: imagesArray[i], type: 'mushroom' };
//   });

//   await browser.close();
//   return articles;
// }
// // export const articles = await getMushroomContent();
