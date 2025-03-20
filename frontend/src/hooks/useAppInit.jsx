// //------------------------------------------//
// // Custom Hook: App & Asset Initialization //
// //----------------------------------------//

// /////// Version 2 - Separates Asset preloading & App init ///////

// import { useState, useEffect, useCallback } from "react";
// import { preloadAssets } from "../helpers/preloadAssets";

// const useAppInit = () => {
//   const [appState, setAppState] = useState({
//     assetsReady: false,
//     appReady: false,
//   });

//   useEffect(() => {
//     const initialize = async () => {
//       const assetsLoaded = await preloadAssets();
//       setAppState((prev) => ({ ...prev, assetsReady: assetsLoaded }));
//     };

//     initialize();
//   }, []);

//   const handleAppInit = useCallback(async (app) => {
//     try {
//       if (app && typeof app.init === 'function') {
// ( ͡° ͜ʖ ͡°)_/¯   await app.init();
//         setAppState((prev) => ({ ...prev, appReady: true }));
//       } else {
//         throw new Error("App initialization failed: 'app' is not defined or 'init' is not a function.");
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   }, []);

//   return {
//     ...appState,
//     handleAppInit,
//   };
// };

// export default useAppInit;

// /////// Version 1 - Mixing App initialization w/ preloading Assets ///////

// // import { useState, useEffect } from "react";
// // import { preloadAssets } from "../helpers/preloadAssets";

// // export function useAppInit() {
// //   const [isReady, setIsReady] = useState(false);

// //   useEffect(() => {
// //     const initializeApp = async () => {
// //       const success = await preloadAssets();
// //       if (success) {
// //         setIsReady(true);
// //       }
// //     };

// //     initializeApp();
// //   }, []);

// //   return isReady;
// // };
