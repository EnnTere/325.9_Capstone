import { useEffect, useState, useRef } from "react";
import { useApplication, extend } from "@pixi/react";
import { Container, Text, Graphics } from "pixi.js";
extend({ Container, Text, Graphics });

const Inventory = ({ height }) => {
  const { app } = useApplication();
  const parentRef = useRef(null);


  //-----------------------------------------------//
  // For Example Only: Sad Sizing & Initializing  //
  //---------------------------------------------//

  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   if (parentRef.current) {
  //     // For a sprite with anchor (1, 0.5), setting x to app.screen.width will align its right edge with the parent's right edge.
  //     setPosition({ x: app.screen.width, y: app.screen.height / 2 });
  //   }
  // }, [app, app?.screen.width, app?.screen.height]);

  // useResize((width, height) => {
  //   setDimensions({ width, height });
  // });


////// Initialization Bug Hunting 	ԅ(≖‿≖ԅ) //////

  // Guard - Render Check
  // console.log("I app:", app);
  // console.log("I app.screen:", app?.screen);
  // console.log("I app.renderer:", app?.renderer);

  // // Waits for app to initialize
  if (!app || !app?.screen || !app.renderer) return null;

  // console.log("I app:", app);
  // console.log("I app.screen:", app?.screen);
  // console.log("I app.renderer:", app?.renderer);

  
  return (
      <pixiContainer
        ref={parentRef}
        x={0}
        y={height - 100} // 100px tall bar
      >
        {/* <pixiGraphics
          // x={position.x}
          // y={position.y}
          draw={(graphics) => {
            graphics
              .clear()
              // .setFillStyle("red")
              .rect(0, 50, dimensions.width * 2, dimensions.height / 5)
              // .setStrokeStyle(1, "blue")
              // .rect(0, 0, 150, 50, 10)
              .fill("orange");
          }}
        /> */}
        <pixiText
          text="Inventory"
          style={{
            fontSize: 40,
            fontFamily: "Arial",
            fill: "rgba(0, 30, 48, 0.62)",
            align: "center",
            stroke: { color: "#4a1850", width: 5, join: "round" },
          }}
          anchor={0.5}
          x={app.screen.width / 2}
          y={app.screen.height - 20}
        />
      </pixiContainer>

  );
};
export default Inventory;
