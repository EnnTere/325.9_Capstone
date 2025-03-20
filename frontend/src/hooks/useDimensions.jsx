//---------------------------------------------//
// Custom Hook: Parent & Child Container Fit  //
//-------------------------------------------//

// ~~~~~~~~~~~~ Axed: More proof to stick w/ DOM when you can in Pixi?? ~~~~~~~~~~~~~~~ //


// import { useState, useEffect } from "react";

// const useDimensions = (ref) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const updateDimensions = () => {
//       if (ref.current && typeof ref.current.getBounds === "function") {
//         const bounds = ref.current.getBounds().rectangle;
//         setDimensions({ width: bounds.width, height: bounds.height });
//         console.log("Updated dimensions:", bounds.width, bounds.height);
//       }
//     };
//     updateDimensions();

//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [ref]);

//   return dimensions;
// };

// export default useDimensions;
