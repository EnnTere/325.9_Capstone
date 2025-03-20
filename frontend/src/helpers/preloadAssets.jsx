//----------------------------------------//
// Global Asset Preloader w/ Validation   //
//----------------------------------------//


//// Version 1 - Before Database ////

import { Assets } from "pixi.js";

const assetManifest = {
  bunny: "https://pixijs.com/assets/bunny.png",
  background: "https://pixijs.com/assets/bg_grass.jpg",
  uiElement1: "https://pixijs.com/assets/flowerTop.png",
  uiElement2: "https://pixijs.com/assets/star.png",
};

export const preloadAssets = async () => {
  try {
    // Add assets to loader only if they're not already added
    Object.entries(assetManifest).forEach(([key, url]) => {
      if (!Assets.cache.has(key)) {
        Assets.add({ alias: key, src: url });
      }
    });

    // Load all assets at once
    await Assets.load(Object.keys(assetManifest));
    console.log("All assets preloaded");
    return true;
  } catch (error) {
    console.error("Asset preloading failed:", error);
    return false;
  }
};


//// Version 1 - Mixing Local & API/DB Assets ////

// In preloadAssets.js
// export const preloadAssets = async (apiAssets = []) => {
//   const manifest = {
//     ...localManifest,
//     ...Object.fromEntries(apiAssets.map(asset => [asset.id, asset.url]))
//   };
//   await Assets.load(manifest);
// };

// // Usage: Fetch API assets first
// const apiAssets = await fetch('/api/assets').then(res => res.json());
// await preloadAssets(apiAssets);
