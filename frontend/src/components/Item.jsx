import { useEffect, useState, useCallback, useRef } from "react";
import { Assets, Texture, Sprite } from "pixi.js";
import { extend, useApplication } from "@pixi/react";
extend({ Sprite, Assets, Texture });
// import { fetchItemData } from "../api";

const Item = (
  {
    // textureKey = "bunny",
    // x = 400,
    // y = 150,
    // scale = 2,
    // anchor = 0.5,
    // onClick,
    // interactive = true,
  }
) => {
  // const texture = useMemo(() => Assets.get(textureKey), [textureKey]);

  //-------------------------------------------------//
  // For Example Only: Bits & Pieces of Version 1  //
  //---------------------------------------------//

  //// Component specific sprite preloader for testing ////
  const app = useApplication();
  const spriteRef = useRef(null);

  const [texture, setTexture] = useState(Texture.EMPTY);
  const [isHovered, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadTexture = async () => {
      if (texture === Texture.EMPTY) {
        const result = await Assets.load("https://pixijs.com/assets/bunny.png");
        if (isMounted) {
          setTexture(result);
          texture.source.scaleMode = "nearest"; // Preserve pixelation
        }
      }
    };
    loadTexture();
    return () => {
      isMounted = false;
    };
  }, [texture]);

  const handleClick = useCallback(() => setIsActive(!isActive), [isActive]);
  // const handlePointerOver = useCallback(() => setIsHover(false), []);
  // const handlePointerOut = useCallback(() => setIsHover(false), [isActive]);

  // After test, refactored to be reusable
  return (
    <pixiContainer>
      {/* <pixiSprite
        texture={texture}
        x={x}
        y={y}
        anchor={anchor}
        scale={scale}
        eventMode={interactive ? "static" : "none"}
        cursor={interactive ? "pointer" : "default"}
        onclick={onClick}
      /> */}
      <pixiSprite
        ref={spriteRef}
        anchor={0.5}
        eventMode={"static"}
        onClick={(event) => setIsActive(!isActive)}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        scale={isActive ? 4 : 2.5}
        texture={texture}
        x={200}
        y={300}
      />

      <pixiSprite
        ref={spriteRef}
        anchor={0.5}
        eventMode={"static"}
        onClick={(event) => setIsActive(!isActive)}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        scale={isActive ? 5 : 3.5}
        texture={texture}
        x={450}
        y={300}
      />

      <pixiSprite
        ref={spriteRef}
        anchor={0.5}
        eventMode={"static"}
        onClick={(event) => setIsActive(!isActive)}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        scale={isActive ? 4 : 2.5}
        texture={texture}
        x={700}
        y={300}
      />
      <pixiSprite
        ref={spriteRef}
        anchor={0.5}
        eventMode={"static"}
        onClick={(event) => setIsActive(!isActive)}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        scale={isActive ? 4 : 2.5}
        texture={texture}
        x={300}
        y={600}
      />
      <pixiSprite
        ref={spriteRef}
        anchor={0.5}
        eventMode={"static"}
        onClick={(event) => setIsActive(!isActive)}
        onPointerOver={(event) => setIsHover(true)}
        onPointerOut={(event) => setIsHover(false)}
        scale={isActive ? 4 : 2.5}
        texture={texture}
        x={600}
        y={600}
      />
    </pixiContainer>
  );
};

export default Item;

// API
// const handleClick = useCallback(async() => {
//   const newData = await fetchItemData();
//   setPosition({ x: newData.x, y: newData.y });
// }, []);
