# HUI

HUI is intended as a lightweight/minimal material design frontend framework. The initial idea was to build a visually appealing and an easy-to-use framework for developing apps supporting only modern browsers.

You can easily use only the components you want, so the final build should contain only the necessary bits. HUI builds upon PostCSS and CSSNext with a focus on cascading styles and classes properly, so there would be as little style overrides as possible.

## Cascading hierarchy

The main architectural idea is to build components based on custom property sets based on variables. While it´s nothing new (since we´ve been doing components based on mixins based on variables in Sass etc.), rooting the components to custom property sets actually makes the components look kinda nice. Basically it means that I chose to declare the main custom property set for each component in the start of the file, so each component would be as fast to read as possible. So only the global and component-independent property sets reside in the base/props.css -file. By embracing this hierarchy I am giving the developers using the framework the possibility to really build reusable components and themes with ease.
