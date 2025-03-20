  //-------------------------------//
  // For Example Only: Buttonyyy  //
  //-----------------------------//

import { useCallback } from "react";
import { Container, Graphics, Text } from "pixi.js";
import { useExtend } from "@pixi/react";

// Alternative: label={label}
export function Button(props) {
  const { children, onClick } = props;

  useExtend({ Container, Graphics, Text });

  if (typeof children !== "string") {
    throw new Error("Button must have a string child");
  }

  const draw = useCallback(() => {
    // Draw button
  }, []);

  return (
    <pixiContainer>
      <pixiGraphics draw={draw} />
      <pixiText text={children} />
    </pixiContainer>
  );
}

// Button Implementation
{
  /* <Button>Click Me</Button> */
}

// Draw button graphic example
// const draw = useCallback((graphics) => {
//   // Clear previous drawings
//   graphics.clear();

//   // Set button color (e.g., blue with rounded corners)
//   graphics.beginFill(0x3498db); // Hex color for blue
//   graphics.drawRoundedRect(0, 0, 150, 50, 10); // x, y, width, height, radius
//   graphics.endFill();

//   // Add a border around the button
//   graphics.lineStyle(2, 0x2980b9); // Border thickness, color
//   graphics.drawRoundedRect(0, 0, 150, 50, 10); // Same size as the button
// }, []);
