import { useState, useRef, useEffect } from "react";
import { extend, useApplication } from "@pixi/react";
import { Container, Text, Graphics } from "pixi.js";
extend({ Container, Text, Graphics });

import Item from "@components/Item";

const Viewport = () => {
  const { app } = useApplication();
  const parentRef = useRef(null);
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useResize((width, height) => {
  //   setDimensions({ width, height });
  // });

  // useEffect(() => {
  //   if (parentRef.current) {
  //     const bounds = parentRef.current.getBounds().rectangle;
  //     setDimensions({ width: bounds.width, height: bounds.height });
  //     console.log("Updated dimensions:", bounds.width, bounds.height);
  //   }
  // }, [app.renderer?.screen.width, app.renderer?.screen.height]);


  
  // Guard - Render Check
  // console.log("VP app:", app);
  // console.log("VP app.screen:", app?.screen);
  // console.log("VP app.renderer:", app?.renderer);

  // Guard: Only render once the app and renderer are ready
  if (!app || !app?.screen || !app.renderer) return null;

  // console.log("VP app:", app);
  // console.log("VP app.screen:", app?.screen);
  // console.log("VP app.renderer:", app?.renderer);

  return (
    <pixiContainer
      ref={parentRef}
      x={0}
      y={0}
    >
      {/* <pixiGraphics
          draw={(graphics) => {
            graphics
              .clear()
              .setFillStyle(0x007a33)
              // .rect(150, 300, 150, 50, 10)
              .rect(0, 0, dimensions.width, dimensions.height)
              .setStrokeStyle(3, 0x007a33)
              // .rect(0, 0, 150, 50, 10)
              .fill(0x9067c6);
          }}
        /> */}
      <pixiText
        text="Viewport"
        style={{
          fontSize: 40,
          fontFamily: "Arial",
          fill: "rgba(0, 30, 48, 0.62)",
          align: "center",
          stroke: { color: "#4a1850", width: 5, join: "round" },
        }}
        anchor={0.5}
        x={app.screen.width / 2}
        y={app.screen.height / 2}
      />
      <Item />
      <Item />
    </pixiContainer>
  );
};

export default Viewport;