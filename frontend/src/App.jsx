//-------------------------//
// Dependencies Imports   //
//-----------------------//

// External
import { useRef } from "react";

// Pixi
import { Application } from "@pixi/react";

// Style
import "./App.css";

// Internal (larger project)
// import useAppInit from "@hooks/useAppInit";

// Local (same folder)
import GameWrapper from "./components/GameWrapper";

//-------------------------//
// Application Component  //
//-----------------------//

const App = () => {
  const parentRef = useRef(null);
  // const { assetsReady, appReady, handleAppInit } = useAppInit();

  // Guard - Render Check
  // if (!assetsReady) return <div className="loading">Loading...Loading</div>;

  return (
    <div id="gameStage" ref={parentRef}>
      <Application
      resizeTo={parentRef}
        // onInit={handleAppInit}
        autoDensity={true}
        autoStart
      >
        <GameWrapper />
      </Application>
    </div>
  );
};

export default App;



// Version 1 - Example of previous verbosity

// const [isInitialized, setIsInitialized] = useState(false);
// const isAssetReady = useAppInit();

// if (!isAssetReady) return <div>Assets Loading...</div>;

// const handleAppInit = useCallback(() => {
//   setIsInitialized(true);
// }, []);

// const handleAppInit = useCallback(async (app) => {
//   await app.init(); // may be an issue with v8
//   setIsInitialized(true);
// }, []);
