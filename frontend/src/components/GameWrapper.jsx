// import { useRef } from "react";

import { useApplication, Application, extend } from "@pixi/react";
import { Container, Text } from "pixi.js";
// extend({ Container, Text });
// import useAppInit from "../hooks/useAppInit";
import Viewport from "@components/Viewport";
import Inventory from "@components/Inventory";
import TextBox from "@components/TextBox";
import Item from "@components/Item"

const GameWrapper = () => {
  const { app } = useApplication();
  // const { width, height } = useResponsiveCanvas();

  return (
    <>
      <Viewport>
        <Item 
          textureKey="background" 
          x={0} 
          y={0} 
          scale={0.8} 
        />
        <Item 
          x={300} 
          y={300} 
          onClick={() => console.log("Clicked")} 
        />
      </Viewport>
      <Inventory height={app.screen.height} />
      <TextBox width={app.screen.width} />
    </>
  );
};

export default GameWrapper;
