////// PixiJS Browser Devtools for Scene Graph //////
import { initDevtools } from "@pixi/devtools";
import { useApplication } from "@pixi/react";

export default function PixiDevTools() {
  const { app } = useApplication();
  initDevtools({ 
    app 
  });
  window.__PIXI_DEVTOOLS__ = app;
  // console.log(app);
  return null;
};
