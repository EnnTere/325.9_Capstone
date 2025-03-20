import { useState } from "react";
import { useApplication, extend } from "@pixi/react";
import { Text, Container } from "pixi.js";
extend({ Text, Container });

const TextBox = ({ width }) => {
  const { app } = useApplication();
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useResize((width, height) => {
  //   setDimensions({ width, height });
  // });

  // Guard - Render Check
  // console.log("T app:", app);
  // console.log("T app.screen:", app?.screen);
  // console.log("T app.renderer:", app?.renderer);

  // Guard: Only render once the app and renderer are ready
  if (!app || !app?.screen || !app.renderer) return null;

  // console.log("T app:", app);
  // console.log("T app.screen:", app?.screen);
  // console.log("T app.renderer:", app?.renderer);

  // const handleClick = () => {
  //   const newMessage = console.log("Button Clicked. Message Text State:", text);
  //   setText(newMessage);
  //   onUpdateText(newMessage);
  // };

  return (
      <pixiContainer
      x={width - 300} // 300px wide panel
      y={0}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "20%",
          height: "100%",
          backgroundColor: "rgba(0, 132, 214, 0.5)",
          zIndex: 1,
        }}
      >
        <pixiText
          text="TextBox"
          style={{
            fontSize: 20,
            fontFamily: "Arial",
            fill: "rgba(0, 15, 24, 0.5)",
            align: "center",
          }}
          anchor={0.5}
          x={app.screen.width - 50}
          y={app.screen.height / 2}
          // x={dimensions.width - 50}
          // y={dimensions.height / 2}
        />
      </pixiContainer>
  );
};
export default TextBox;
