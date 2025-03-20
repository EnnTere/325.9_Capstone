<!-- ////// Responsive UI //////


Resizing Game Canvas
// auto-size to div
// set correct resolution & auto density
// add listener for renderer resize
// scale a root container to match the new dimensions 

Scaling so things look the same on all screen sizes
// Scale the root container so it fits inside whatever screen size the renderer is 
// (see screenshot for example code & more in-depth explanation)


Pin UI element even when resizing
// Listen to resize event
// Reposition elements whenever that happens
-->


## Biggest Challenges
- Keeping in mind all of the following
-- Rendering order in PixiJS + thinking in terms of Scene Trees
-- Rendering in React + ticks & rerenders in PixiJS
-- Disparate, inconsistent, and sparse documentation
---- There were some examples provided in the documentation from previous versions of PixiJS React, but they typically lacked an explanation of *why* a particular approach was used over others
( -- Potentially image storage & retrieval with MongoDB) 

## Workarounds
- PixiJS Discord where the developers directly answered questions themselves & regularly helped people debug
- Studying other projects from previous versions of PixiJS React that provided examples of project structures and different approaches to problems 

## Reflection
- Made the silly mistake of not paying attention to the rendering order and trying to access to render child components before the React wrapper (`<Application />`) fully initialized.

- Made the custom hook to try as a solution, but screen and renderer were still being returned as undefined.

## Slowdowns
- Refactoring to bring code more in line with v8
- Small refactors after that when I realized certain hooks could simplify things (useMemo, useCallback, etc)