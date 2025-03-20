//---------------------------------------------//
// Custom Hook: Responsive Renderer Resizing  //
//-------------------------------------------//

// ~~~~~~~~~~~~ Axed: Still too much of a pain to make work ~~~~~~~~~~~~~~~ //


//// Version 2 - Now more confused ////
// import { useEffect, useCallback, useState } from "react";
// import { useApplication } from "@pixi/react";

// const useResizeCanvas = () => {
//   const app = useApplication();
//   // Could trash useless dimensions hook ???
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   const handleResize = useCallback(
//     (width, height) => {
//       if (!app?.renderer) return;

//       // Move aspect ratio calculations here out of CSS ???
//       setDimensions({ width, height });

//       // Updates viewport - would need to check what else 
//       // might be touching component's sizing ATM
//       if (app?.screen) {
//         app.screen.resize(width, height);
//       }
//     },
//     [app]
//   );

//   useEffect(() => {
//     if (!app?.renderer) return;

//     // Is setting up initial dimensions overkill? 
//     // This whole thing feels like it's getting overly complicated
//     const initialWidth = app.renderer.width;
//     const initialHeight = app.renderer.height;
//     setDimensions({ width: initialWidth, height: initialHeight });

//     // Look into if I can build something simpler around
//     // Pixi's internal resize event listener
//     app.renderer.on("resize", handleResize);

//     // Set up a CSS-driven ResizeObserver on the parent element
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (const entry of entries) {
//         const { width, height } = entry.contentRect;
//         handleResize(width, height);
//       }
//     });

//     if (app.renderer.view?.parentElement) {
//       resizeObserver.observe(app.renderer.view.parentElement);
//     }

//     return () => {
//       app.renderer.off("resize", handleResize);
//       resizeObserver.disconnect();
//     };
//   }, [app, handleResize]);

//   return dimensions;
// };

// export default useResizeCanvas;



//// Tidbit from Version 1 - Was very confused ////
//     const resizeCallback = (width, height) => {
//       onResize(width, height);
//     };

//     app.renderer.on("resize", resizeCallback);

//     // Clean up on unmount
//     return () => {
//       app.renderer.off("resize", resizeCallback);
//     };
//   }, [app, onResize]);
// };
