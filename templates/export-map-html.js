"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportMapToHTML = void 0;

var _defaultSettings = require("../constants/default-settings");

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// @ts-nocheck

/**
 * This method is used to create an html file which will inlcude kepler and map data
 * @param {Object} options Object that collects all necessary data to  create the html file
 * @param {string} options.mapboxApiAccessToken Mapbox token used to fetch mapbox tiles
 * @param {Array<Object>} options.datasets Data to include in the map
 * @param {Object} options.config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @param {string} version which version of Kepler.gl to load.
 */
var exportMapToHTML = function exportMapToHTML(options) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSettings.KEPLER_GL_VERSION;
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"UTF-8\"/>\n        <title>Kepler.gl embedded map</title>\n\n        <!--Uber Font-->\n        <link rel=\"stylesheet\" href=\"https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/uber-fonts/4.0.0/superfine.css\">\n\n        <!--MapBox css-->\n        <link href=\"https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.css\" rel=\"stylesheet\">\n\n        <!-\u2014 facebook open graph tags -->\n        <meta property=\"og:url\" content=\"http://kepler.gl/\" />\n        <meta property=\"og:title\" content=\"Large-scale WebGL-powered Geospatial Data Visualization Tool\" />\n        <meta property=\"og:description\" content=\"Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets.\" />\n        <meta property=\"og:site_name\" content=\"kepler.gl\" />\n        <meta property=\"og:image\" content=\"https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/kepler.gl-meta-tag.png\" />\n        <meta property=\"og:image:type\" content=\"image/png\" />\n        <meta property=\"og:image:width\" content=\"800\" />\n        <meta property=\"og:image:height\" content=\"800\" />\n\n        <!-\u2014 twitter card tags -->\n        <meta name=\"twitter:card\" content=\"summary_large_image\">\n        <meta name=\"twitter:site\" content=\"@uber\">\n        <meta name=\"twitter:creator\" content=\"@uber\">\n        <meta name=\"twitter:title\" content=\"Large-scale WebGL-powered Geospatial Data Visualization Tool\">\n        <meta name=\"twitter:description\" content=\"Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets.\">\n        <meta name=\"twitter:image\" content=\"https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/kepler.gl-meta-tag.png\" />\n\n        <!-- Load React/Redux -->\n        <script src=\"https://unpkg.com/react@16.8.4/umd/react.production.min.js\" crossorigin></script>\n        <script src=\"https://unpkg.com/react-dom@16.8.4/umd/react-dom.production.min.js\" crossorigin></script>\n        <script src=\"https://unpkg.com/redux@3.7.2/dist/redux.js\" crossorigin></script>\n        <script src=\"https://unpkg.com/react-redux@7.1.3/dist/react-redux.min.js\" crossorigin></script>\n        <script src=\"https://unpkg.com/styled-components@4.1.3/dist/styled-components.min.js\" crossorigin></script>\n\n        <!-- Load Kepler.gl -->\n        <script src=\"https://unpkg.com/kepler.gl@".concat(version, "/umd/keplergl.min.js\" crossorigin></script>\n\n        <style type=\"text/css\">\n          body {margin: 0; padding: 0; overflow: hidden;}\n        </style>\n\n        <!--MapBox token-->\n        <script>\n          /**\n           * Provide your MapBox Token\n           **/\n          const MAPBOX_TOKEN = '").concat(options.mapboxApiAccessToken || 'PROVIDE_MAPBOX_TOKEN', "';\n          const WARNING_MESSAGE = 'Please Provide a Mapbox Token in order to use Kepler.gl. Edit this file and fill out MAPBOX_TOKEN with your access key';\n        </script>\n\n        <!-- GA: Delete this as you wish, However to pat ourselves on the back, we only track anonymous pageview to understand how many people are using kepler.gl. -->\n        <script>\n          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n          ga('create', 'UA-64694404-19', {\n            'storage': 'none',\n            'clientId': localStorage.getItem('ga:clientId')\n          });\n          ga(function(tracker) {\n              localStorage.setItem('ga:clientId', tracker.get('clientId'));\n          });\n          ga('set', 'checkProtocolTask', null); // Disable file protocol checking.\n          ga('set', 'checkStorageTask', null); // Disable cookie storage checking.\n          ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies).\n          ga('set', 'page', 'keplergl-html');\n          ga('send', 'pageview');\n        </script>\n      </head>\n      <body>\n        <!-- We will put our React component inside this div. -->\n        <div id=\"app\">\n          <!-- Kepler.gl map will be placed here-->\n        </div>\n\n        <!-- Load our React component. -->\n        <script>\n          /* Validate Mapbox Token */\n          if ((MAPBOX_TOKEN || '') === '' || MAPBOX_TOKEN === 'PROVIDE_MAPBOX_TOKEN') {\n            alert(WARNING_MESSAGE);\n          }\n\n          /** STORE **/\n          const reducers = (function createReducers(redux, keplerGl) {\n            return redux.combineReducers({\n              // mount keplerGl reducer\n              keplerGl: keplerGl.keplerGlReducer.initialState({\n                uiState: {\n                  readOnly: ").concat(options.mode === _defaultSettings.EXPORT_HTML_MAP_MODES.READ, ",\n                  currentModal: null\n                }\n              })\n            });\n          }(Redux, KeplerGl));\n\n          const middleWares = (function createMiddlewares(keplerGl) {\n            return keplerGl.enhanceReduxMiddleware([\n              // Add other middlewares here\n            ]);\n          }(KeplerGl));\n\n          const enhancers = (function craeteEnhancers(redux, middles) {\n            return redux.applyMiddleware(...middles);\n          }(Redux, middleWares));\n\n          const store = (function createStore(redux, enhancers) {\n            const initialState = {};\n\n            return redux.createStore(\n              reducers,\n              initialState,\n              redux.compose(enhancers)\n            );\n          }(Redux, enhancers));\n          /** END STORE **/\n\n          /** COMPONENTS **/\n          var KeplerElement = (function makeKeplerElement(react, keplerGl, mapboxToken) {\n            var LogoSvg = function LogoSvg() {\n              return react.createElement(\n                \"div\",\n                { className: \"logo-container\", style: {position: 'fixed', zIndex: 10000, padding: '4px'} },\n                  react.createElement(\n                    \"svg\",\n                    {\n                      className: \"kepler_gl__logo\",\n                      width: \"107px\",\n                      height: \"21px\",\n                      viewBox: \"0 0 124 24\"\n                    },\n                    react.createElement(\n                      \"g\",\n                      { transform: \"translate(13.500000, 13.500000) rotate(45.000000) translate(-13.500000, -13.500000) translate(4.000000, 4.000000)\" },\n                      react.createElement(\"rect\", { x: \"0\", y: \"6\", transform: \"matrix(2.535181e-06 1 -1 2.535181e-06 18.1107 6.0369)\", fill: \"#535C6C\", width: \"12.1\", height: \"12.1\" }),\n                      react.createElement(\"rect\", { x: \"6\", y: \"0\", transform: \"matrix(2.535182e-06 1 -1 2.535182e-06 18.1107 -6.0369)\", fill:\"#1FBAD6\", width: \"12.1\", height: \"12.1\" })\n                    ),\n                    react.createElement(\n                      \"g\",\n                      {},\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M39,8.7h2.2l-2.8,4.2l2.9,5.1H39l-2.4-4.2h-1.3V18h-2V5l2-0.1v7.3h1.3L39,8.7z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M42.4,13.3c0-1.5,0.4-2.7,1.1-3.5s1.8-1.2,3.1-1.2c1.3,0,2.2,0.4,2.8,1.1c0.6,0.7,0.9,1.8,0.9,3.3 c0,0.4,0,0.8,0,1.1h-5.8c0,1.6,0.8,2.4,2.4,2.4c1,0,2-0.2,2.9-0.6l0.2,1.7c-0.4,0.2-0.9,0.4-1.4,0.5s-1.1,0.2-1.7,0.2 c-1.5,0-2.6-0.4-3.3-1.2C42.8,16.1,42.4,14.9,42.4,13.3z M46.6,10.1c-0.7,0-1.2,0.2-1.5,0.5c-0.4,0.4-0.6,0.9-0.6,1.7h4 c0-0.8-0.2-1.4-0.5-1.7S47.2,10.1,46.6,10.1z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M57.1,18.2c-1,0-1.8-0.3-2.3-0.9l0,0l0,1.3v2.5h-2V8.7h1.5l0.3,0.9h0c0.3-0.3,0.7-0.6,1.2-0.7 c0.4-0.2,0.9-0.3,1.4-0.3c1.2,0,2.1,0.4,2.7,1.1c0.6,0.7,0.9,2,0.9,3.7c0,1.6-0.3,2.8-1,3.7C59.2,17.8,58.3,18.2,57.1,18.2z M56.7,10.3c-0.4,0-0.8,0.1-1.1,0.2c-0.3,0.2-0.6,0.4-0.8,0.7v4.3c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.7,0.3,1.1,0.3 c0.7,0,1.2-0.2,1.6-0.7c0.4-0.5,0.5-1.3,0.5-2.5c0-0.8-0.1-1.4-0.2-1.8s-0.4-0.7-0.7-0.9C57.6,10.4,57.2,10.3,56.7,10.3z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M63.2,16V5l2-0.1v10.8c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.6,0.2c0.3,0,0.6,0,0.9-0.1V18 c-0.4,0.1-1,0.2-1.6,0.2c-0.8,0-1.3-0.2-1.7-0.5S63.2,16.8,63.2,16z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M68.2,13.3c0-1.5,0.4-2.7,1.1-3.5c0.7-0.8,1.8-1.2,3.1-1.2c1.3,0,2.2,0.4,2.8,1.1c0.6,0.7,0.9,1.8,0.9,3.3 c0,0.4,0,0.8,0,1.1h-5.8c0,1.6,0.8,2.4,2.4,2.4c1,0,2-0.2,2.9-0.6l0.2,1.7c-0.4,0.2-0.9,0.4-1.4,0.5s-1.1,0.2-1.7,0.2 c-1.5,0-2.6-0.4-3.3-1.2C68.6,16.1,68.2,14.9,68.2,13.3z M72.4,10.1c-0.7,0-1.2,0.2-1.5,0.5c-0.4,0.4-0.6,0.9-0.6,1.7h4 c0-0.8-0.2-1.4-0.5-1.7S73,10.1,72.4,10.1z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M80.2,8.7l0.1,1.7h0c0.3-0.6,0.7-1.1,1.1-1.4c0.4-0.3,1-0.5,1.6-0.5c0.4,0,0.7,0,1,0.1l-0.1,2 c-0.3-0.1-0.7-0.2-1-0.2c-0.7,0-1.3,0.3-1.7,0.8c-0.4,0.5-0.7,1.2-0.7,2.1V18h-2V8.7H80.2z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M83.8,17c0-0.8,0.4-1.2,1.2-1.2c0.8,0,1.2,0.4,1.2,1.2c0,0.8-0.4,1.1-1.2,1.1C84.2,18.2,83.8,17.8,83.8,17z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M88.5,18.7c0-0.8,0.4-1.4,1.2-1.8c-0.6-0.3-0.9-0.8-0.9-1.5c0-0.7,0.4-1.2,1.1-1.6c-0.3-0.3-0.6-0.6-0.7-0.9 c-0.2-0.4-0.2-0.8-0.2-1.3c0-1,0.3-1.8,0.9-2.3c0.6-0.5,1.6-0.8,2.8-0.8c0.5,0,1,0,1.4,0.1c0.4,0.1,0.8,0.2,1.1,0.4l2.4-0.2v1.5 h-1.5c0.2,0.4,0.2,0.8,0.2,1.3c0,1-0.3,1.7-0.9,2.2s-1.5,0.8-2.7,0.8c-0.7,0-1.2-0.1-1.6-0.2c-0.1,0.1-0.2,0.2-0.3,0.3 c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.6,0.2l2.7,0.2c1,0.1,1.7,0.3,2.2,0.6c0.5,0.3,0.8,0.9,0.8,1.7 c0,0.6-0.2,1.1-0.5,1.5c-0.4,0.4-0.9,0.8-1.5,1c-0.7,0.2-1.5,0.4-2.4,0.4c-1.3,0-2.3-0.2-3-0.6C88.8,20.1,88.5,19.5,88.5,18.7z M95.1,18.4c0-0.3-0.1-0.5-0.3-0.7s-0.6-0.2-1.1-0.3l-2.7-0.3c-0.2,0.1-0.4,0.3-0.5,0.5c-0.1,0.2-0.2,0.4-0.2,0.6 c0,0.4,0.2,0.8,0.5,1c0.4,0.2,1,0.3,1.8,0.3C94.2,19.5,95.1,19.2,95.1,18.4z M94.3,11.5c0-0.6-0.1-1-0.4-1.2 c-0.3-0.2-0.7-0.3-1.3-0.3c-0.7,0-1.1,0.1-1.4,0.3c-0.3,0.2-0.4,0.6-0.4,1.2s0.1,1,0.4,1.2c0.3,0.2,0.7,0.3,1.4,0.3 c0.6,0,1.1-0.1,1.3-0.4S94.3,12,94.3,11.5z\" }),\n                      react.createElement(\"path\", { fill:\"#1FBAD6\", d: \"M99.4,16V5l2-0.1v10.8c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.6,0.2c0.3,0,0.6,0,0.9-0.1V18 c-0.4,0.1-1,0.2-1.6,0.2c-0.8,0-1.3-0.2-1.7-0.5S99.4,16.8,99.4,16z\" })\n                    )\n                  )\n                );\n              };\n\n            return function App() {\n              var rootElm = react.useRef(null);\n              var _useState = react.useState({\n                width: window.innerWidth,\n                height: window.innerHeight\n              });\n              var windowDimension = _useState[0];\n              var setDimension = _useState[1];\n              react.useEffect(function sideEffect(){\n                function handleResize() {\n                  setDimension({width: window.innerWidth, height: window.innerHeight});\n                };\n                window.addEventListener('resize', handleResize);\n                return function() {window.removeEventListener('resize', handleResize);};\n              }, []);\n              return react.createElement(\n                'div',\n                {style: {position: 'absolute', left: 0, width: '100vw', height: '100vh'}},\n                ").concat(options.mode === _defaultSettings.EXPORT_HTML_MAP_MODES.READ ? 'LogoSvg(),' : '', "\n                react.createElement(keplerGl.KeplerGl, {\n                  mapboxApiAccessToken: mapboxToken,\n                  id: \"map\",\n                  width: windowDimension.width,\n                  height: windowDimension.height\n                })\n              )\n            }\n          }(React, KeplerGl, MAPBOX_TOKEN));\n\n          const app = (function createReactReduxProvider(react, reactRedux, KeplerElement) {\n            return react.createElement(\n              reactRedux.Provider,\n              {store},\n              react.createElement(KeplerElement, null)\n            )\n          }(React, ReactRedux, KeplerElement));\n          /** END COMPONENTS **/\n\n          /** Render **/\n          (function render(react, reactDOM, app) {\n            reactDOM.render(app, document.getElementById('app'));\n          }(React, ReactDOM, app));\n        </script>\n        <!-- The next script will show how to interact directly with Kepler map store -->\n        <script>\n          /**\n           * Customize map.\n           * In the following section you can use the store object to dispatch Kepler.gl actions\n           * to add new data and customize behavior\n           */\n          (function customize(keplerGl, store) {\n            const datasets = ").concat(JSON.stringify(options.datasets), ";\n            const config = ").concat(JSON.stringify(options.config), ";\n\n            const loadedData = keplerGl.KeplerGlSchema.load(\n              datasets,\n              config\n            );\n\n            store.dispatch(keplerGl.addDataToMap({\n              datasets: loadedData.datasets,\n              config: loadedData.config,\n              options: {\n                centerMap: false\n              }\n            }));\n          }(KeplerGl, store))\n        </script>\n      </body>\n    </html>\n  ");
};

exports.exportMapToHTML = exportMapToHTML;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvZXhwb3J0LW1hcC1odG1sLmpzIl0sIm5hbWVzIjpbImV4cG9ydE1hcFRvSFRNTCIsIm9wdGlvbnMiLCJ2ZXJzaW9uIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1vZGUiLCJFWFBPUlRfSFRNTF9NQVBfTU9ERVMiLCJSRUFEIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFzZXRzIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBcUJBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBOzs7Ozs7OztBQVFPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUEwQztBQUFBLE1BQWhDQyxPQUFnQyx1RUFBdEJDLGtDQUFzQjtBQUN2RSwyaEZBdUNpREQsT0F2Q2pELHFVQWtEZ0NELE9BQU8sQ0FBQ0csb0JBQVIsSUFBZ0Msc0JBbERoRSw0bEVBNkY0QkgsT0FBTyxDQUFDSSxJQUFSLEtBQWlCQyx1Q0FBc0JDLElBN0ZuRSxpcE5BZ0xnQk4sT0FBTyxDQUFDSSxJQUFSLEtBQWlCQyx1Q0FBc0JDLElBQXZDLEdBQThDLFlBQTlDLEdBQTZELEVBaEw3RSw0eENBaU42QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLE9BQU8sQ0FBQ1MsUUFBdkIsQ0FqTjdCLDJDQWtOMkJGLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixPQUFPLENBQUNVLE1BQXZCLENBbE4zQjtBQXFPRCxDQXRPTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge0tFUExFUl9HTF9WRVJTSU9OLCBFWFBPUlRfSFRNTF9NQVBfTU9ERVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBodG1sIGZpbGUgd2hpY2ggd2lsbCBpbmxjdWRlIGtlcGxlciBhbmQgbWFwIGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9iamVjdCB0aGF0IGNvbGxlY3RzIGFsbCBuZWNlc3NhcnkgZGF0YSB0byAgY3JlYXRlIHRoZSBodG1sIGZpbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1hcGJveEFwaUFjY2Vzc1Rva2VuIE1hcGJveCB0b2tlbiB1c2VkIHRvIGZldGNoIG1hcGJveCB0aWxlc1xuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBvcHRpb25zLmRhdGFzZXRzIERhdGEgdG8gaW5jbHVkZSBpbiB0aGUgbWFwXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5jb25maWcgdGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBmdWxsIGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uIHttYXBTdGF0ZSwgbWFwU3R5bGUsIHZpc1N0YXRlfVxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gd2hpY2ggdmVyc2lvbiBvZiBLZXBsZXIuZ2wgdG8gbG9hZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4cG9ydE1hcFRvSFRNTCA9IChvcHRpb25zLCB2ZXJzaW9uID0gS0VQTEVSX0dMX1ZFUlNJT04pID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIi8+XG4gICAgICAgIDx0aXRsZT5LZXBsZXIuZ2wgZW1iZWRkZWQgbWFwPC90aXRsZT5cblxuICAgICAgICA8IS0tVWJlciBGb250LS0+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9kMWEzZjRzcGF6enJwNC5jbG91ZGZyb250Lm5ldC9rZXBsZXIuZ2wvdWJlci1mb250cy80LjAuMC9zdXBlcmZpbmUuY3NzXCI+XG5cbiAgICAgICAgPCEtLU1hcEJveCBjc3MtLT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YxLjEuMS9tYXBib3gtZ2wuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuXG4gICAgICAgIDwhLeKAlCBmYWNlYm9vayBvcGVuIGdyYXBoIHRhZ3MgLS0+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly9rZXBsZXIuZ2wvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJMYXJnZS1zY2FsZSBXZWJHTC1wb3dlcmVkIEdlb3NwYXRpYWwgRGF0YSBWaXN1YWxpemF0aW9uIFRvb2xcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIktlcGxlci5nbCBpcyBhIHBvd2VyZnVsIHdlYi1iYXNlZCBnZW9zcGF0aWFsIGRhdGEgYW5hbHlzaXMgdG9vbC4gQnVpbHQgb24gYSBoaWdoIHBlcmZvcm1hbmNlIHJlbmRlcmluZyBlbmdpbmUgYW5kIGRlc2lnbmVkIGZvciBsYXJnZS1zY2FsZSBkYXRhIHNldHMuXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwia2VwbGVyLmdsXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2QxYTNmNHNwYXp6cnA0LmNsb3VkZnJvbnQubmV0L2tlcGxlci5nbC9rZXBsZXIuZ2wtbWV0YS10YWcucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL3BuZ1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiODAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiODAwXCIgLz5cblxuICAgICAgICA8IS3igJQgdHdpdHRlciBjYXJkIHRhZ3MgLS0+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkB1YmVyXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHViZXJcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiTGFyZ2Utc2NhbGUgV2ViR0wtcG93ZXJlZCBHZW9zcGF0aWFsIERhdGEgVmlzdWFsaXphdGlvbiBUb29sXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIktlcGxlci5nbCBpcyBhIHBvd2VyZnVsIHdlYi1iYXNlZCBnZW9zcGF0aWFsIGRhdGEgYW5hbHlzaXMgdG9vbC4gQnVpbHQgb24gYSBoaWdoIHBlcmZvcm1hbmNlIHJlbmRlcmluZyBlbmdpbmUgYW5kIGRlc2lnbmVkIGZvciBsYXJnZS1zY2FsZSBkYXRhIHNldHMuXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZDFhM2Y0c3BhenpycDQuY2xvdWRmcm9udC5uZXQva2VwbGVyLmdsL2tlcGxlci5nbC1tZXRhLXRhZy5wbmdcIiAvPlxuXG4gICAgICAgIDwhLS0gTG9hZCBSZWFjdC9SZWR1eCAtLT5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxNi44LjQvdW1kL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzXCIgY3Jvc3NvcmlnaW4+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE2LjguNC91bWQvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCIgY3Jvc3NvcmlnaW4+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVkdXhAMy43LjIvZGlzdC9yZWR1eC5qc1wiIGNyb3Nzb3JpZ2luPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXJlZHV4QDcuMS4zL2Rpc3QvcmVhY3QtcmVkdXgubWluLmpzXCIgY3Jvc3NvcmlnaW4+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vc3R5bGVkLWNvbXBvbmVudHNANC4xLjMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5taW4uanNcIiBjcm9zc29yaWdpbj48L3NjcmlwdD5cblxuICAgICAgICA8IS0tIExvYWQgS2VwbGVyLmdsIC0tPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2tlcGxlci5nbEAke3ZlcnNpb259L3VtZC9rZXBsZXJnbC5taW4uanNcIiBjcm9zc29yaWdpbj48L3NjcmlwdD5cblxuICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgYm9keSB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBvdmVyZmxvdzogaGlkZGVuO31cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8IS0tTWFwQm94IHRva2VuLS0+XG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUHJvdmlkZSB5b3VyIE1hcEJveCBUb2tlblxuICAgICAgICAgICAqKi9cbiAgICAgICAgICBjb25zdCBNQVBCT1hfVE9LRU4gPSAnJHtvcHRpb25zLm1hcGJveEFwaUFjY2Vzc1Rva2VuIHx8ICdQUk9WSURFX01BUEJPWF9UT0tFTid9JztcbiAgICAgICAgICBjb25zdCBXQVJOSU5HX01FU1NBR0UgPSAnUGxlYXNlIFByb3ZpZGUgYSBNYXBib3ggVG9rZW4gaW4gb3JkZXIgdG8gdXNlIEtlcGxlci5nbC4gRWRpdCB0aGlzIGZpbGUgYW5kIGZpbGwgb3V0IE1BUEJPWF9UT0tFTiB3aXRoIHlvdXIgYWNjZXNzIGtleSc7XG4gICAgICAgIDwvc2NyaXB0PlxuXG4gICAgICAgIDwhLS0gR0E6IERlbGV0ZSB0aGlzIGFzIHlvdSB3aXNoLCBIb3dldmVyIHRvIHBhdCBvdXJzZWx2ZXMgb24gdGhlIGJhY2ssIHdlIG9ubHkgdHJhY2sgYW5vbnltb3VzIHBhZ2V2aWV3IHRvIHVuZGVyc3RhbmQgaG93IG1hbnkgcGVvcGxlIGFyZSB1c2luZyBrZXBsZXIuZ2wuIC0tPlxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbiAgICAgICAgICAoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcbiAgICAgICAgICBtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG4gICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xuICAgICAgICAgIGdhKCdjcmVhdGUnLCAnVUEtNjQ2OTQ0MDQtMTknLCB7XG4gICAgICAgICAgICAnc3RvcmFnZSc6ICdub25lJyxcbiAgICAgICAgICAgICdjbGllbnRJZCc6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYTpjbGllbnRJZCcpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ2EoZnVuY3Rpb24odHJhY2tlcikge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2E6Y2xpZW50SWQnLCB0cmFja2VyLmdldCgnY2xpZW50SWQnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ2EoJ3NldCcsICdjaGVja1Byb3RvY29sVGFzaycsIG51bGwpOyAvLyBEaXNhYmxlIGZpbGUgcHJvdG9jb2wgY2hlY2tpbmcuXG4gICAgICAgICAgZ2EoJ3NldCcsICdjaGVja1N0b3JhZ2VUYXNrJywgbnVsbCk7IC8vIERpc2FibGUgY29va2llIHN0b3JhZ2UgY2hlY2tpbmcuXG4gICAgICAgICAgZ2EoJ3NldCcsICdoaXN0b3J5SW1wb3J0VGFzaycsIG51bGwpOyAvLyBEaXNhYmxlIGhpc3RvcnkgY2hlY2tpbmcgKHJlcXVpcmVzIHJlYWRpbmcgZnJvbSBjb29raWVzKS5cbiAgICAgICAgICBnYSgnc2V0JywgJ3BhZ2UnLCAna2VwbGVyZ2wtaHRtbCcpO1xuICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDwhLS0gV2Ugd2lsbCBwdXQgb3VyIFJlYWN0IGNvbXBvbmVudCBpbnNpZGUgdGhpcyBkaXYuIC0tPlxuICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgICAgPCEtLSBLZXBsZXIuZ2wgbWFwIHdpbGwgYmUgcGxhY2VkIGhlcmUtLT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBMb2FkIG91ciBSZWFjdCBjb21wb25lbnQuIC0tPlxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIC8qIFZhbGlkYXRlIE1hcGJveCBUb2tlbiAqL1xuICAgICAgICAgIGlmICgoTUFQQk9YX1RPS0VOIHx8ICcnKSA9PT0gJycgfHwgTUFQQk9YX1RPS0VOID09PSAnUFJPVklERV9NQVBCT1hfVE9LRU4nKSB7XG4gICAgICAgICAgICBhbGVydChXQVJOSU5HX01FU1NBR0UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKiBTVE9SRSAqKi9cbiAgICAgICAgICBjb25zdCByZWR1Y2VycyA9IChmdW5jdGlvbiBjcmVhdGVSZWR1Y2VycyhyZWR1eCwga2VwbGVyR2wpIHtcbiAgICAgICAgICAgIHJldHVybiByZWR1eC5jb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICAgICAgICAvLyBtb3VudCBrZXBsZXJHbCByZWR1Y2VyXG4gICAgICAgICAgICAgIGtlcGxlckdsOiBrZXBsZXJHbC5rZXBsZXJHbFJlZHVjZXIuaW5pdGlhbFN0YXRlKHtcbiAgICAgICAgICAgICAgICB1aVN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICByZWFkT25seTogJHtvcHRpb25zLm1vZGUgPT09IEVYUE9SVF9IVE1MX01BUF9NT0RFUy5SRUFEfSxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb2RhbDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0oUmVkdXgsIEtlcGxlckdsKSk7XG5cbiAgICAgICAgICBjb25zdCBtaWRkbGVXYXJlcyA9IChmdW5jdGlvbiBjcmVhdGVNaWRkbGV3YXJlcyhrZXBsZXJHbCkge1xuICAgICAgICAgICAgcmV0dXJuIGtlcGxlckdsLmVuaGFuY2VSZWR1eE1pZGRsZXdhcmUoW1xuICAgICAgICAgICAgICAvLyBBZGQgb3RoZXIgbWlkZGxld2FyZXMgaGVyZVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfShLZXBsZXJHbCkpO1xuXG4gICAgICAgICAgY29uc3QgZW5oYW5jZXJzID0gKGZ1bmN0aW9uIGNyYWV0ZUVuaGFuY2VycyhyZWR1eCwgbWlkZGxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHJlZHV4LmFwcGx5TWlkZGxld2FyZSguLi5taWRkbGVzKTtcbiAgICAgICAgICB9KFJlZHV4LCBtaWRkbGVXYXJlcykpO1xuXG4gICAgICAgICAgY29uc3Qgc3RvcmUgPSAoZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdXgsIGVuaGFuY2Vycykge1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbiAgICAgICAgICAgIHJldHVybiByZWR1eC5jcmVhdGVTdG9yZShcbiAgICAgICAgICAgICAgcmVkdWNlcnMsXG4gICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgICAgcmVkdXguY29tcG9zZShlbmhhbmNlcnMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0oUmVkdXgsIGVuaGFuY2VycykpO1xuICAgICAgICAgIC8qKiBFTkQgU1RPUkUgKiovXG5cbiAgICAgICAgICAvKiogQ09NUE9ORU5UUyAqKi9cbiAgICAgICAgICB2YXIgS2VwbGVyRWxlbWVudCA9IChmdW5jdGlvbiBtYWtlS2VwbGVyRWxlbWVudChyZWFjdCwga2VwbGVyR2wsIG1hcGJveFRva2VuKSB7XG4gICAgICAgICAgICB2YXIgTG9nb1N2ZyA9IGZ1bmN0aW9uIExvZ29TdmcoKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwibG9nby1jb250YWluZXJcIiwgc3R5bGU6IHtwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiAxMDAwMCwgcGFkZGluZzogJzRweCd9IH0sXG4gICAgICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImtlcGxlcl9nbF9fbG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgIFwiZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41MDAwMDAsIDEzLjUwMDAwMCkgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMy41MDAwMDAsIC0xMy41MDAwMDApIHRyYW5zbGF0ZSg0LjAwMDAwMCwgNC4wMDAwMDApXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IFwiMFwiLCB5OiBcIjZcIiwgdHJhbnNmb3JtOiBcIm1hdHJpeCgyLjUzNTE4MWUtMDYgMSAtMSAyLjUzNTE4MWUtMDYgMTguMTEwNyA2LjAzNjkpXCIsIGZpbGw6IFwiIzUzNUM2Q1wiLCB3aWR0aDogXCIxMi4xXCIsIGhlaWdodDogXCIxMi4xXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgcmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjZcIiwgeTogXCIwXCIsIHRyYW5zZm9ybTogXCJtYXRyaXgoMi41MzUxODJlLTA2IDEgLTEgMi41MzUxODJlLTA2IDE4LjExMDcgLTYuMDM2OSlcIiwgZmlsbDpcIiMxRkJBRDZcIiwgd2lkdGg6IFwiMTIuMVwiLCBoZWlnaHQ6IFwiMTIuMVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgcmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBmaWxsOlwiIzFGQkFENlwiLCBkOiBcIk0zOSw4LjdoMi4ybC0yLjgsNC4ybDIuOSw1LjFIMzlsLTIuNC00LjJoLTEuM1YxOGgtMlY1bDItMC4xdjcuM2gxLjNMMzksOC43elwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZmlsbDpcIiMxRkJBRDZcIiwgZDogXCJNNDIuNCwxMy4zYzAtMS41LDAuNC0yLjcsMS4xLTMuNXMxLjgtMS4yLDMuMS0xLjJjMS4zLDAsMi4yLDAuNCwyLjgsMS4xYzAuNiwwLjcsMC45LDEuOCwwLjksMy4zIGMwLDAuNCwwLDAuOCwwLDEuMWgtNS44YzAsMS42LDAuOCwyLjQsMi40LDIuNGMxLDAsMi0wLjIsMi45LTAuNmwwLjIsMS43Yy0wLjQsMC4yLTAuOSwwLjQtMS40LDAuNXMtMS4xLDAuMi0xLjcsMC4yIGMtMS41LDAtMi42LTAuNC0zLjMtMS4yQzQyLjgsMTYuMSw0Mi40LDE0LjksNDIuNCwxMy4zeiBNNDYuNiwxMC4xYy0wLjcsMC0xLjIsMC4yLTEuNSwwLjVjLTAuNCwwLjQtMC42LDAuOS0wLjYsMS43aDQgYzAtMC44LTAuMi0xLjQtMC41LTEuN1M0Ny4yLDEwLjEsNDYuNiwxMC4xelwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZmlsbDpcIiMxRkJBRDZcIiwgZDogXCJNNTcuMSwxOC4yYy0xLDAtMS44LTAuMy0yLjMtMC45bDAsMGwwLDEuM3YyLjVoLTJWOC43aDEuNWwwLjMsMC45aDBjMC4zLTAuMywwLjctMC42LDEuMi0wLjcgYzAuNC0wLjIsMC45LTAuMywxLjQtMC4zYzEuMiwwLDIuMSwwLjQsMi43LDEuMWMwLjYsMC43LDAuOSwyLDAuOSwzLjdjMCwxLjYtMC4zLDIuOC0xLDMuN0M1OS4yLDE3LjgsNTguMywxOC4yLDU3LjEsMTguMnogTTU2LjcsMTAuM2MtMC40LDAtMC44LDAuMS0xLjEsMC4yYy0wLjMsMC4yLTAuNiwwLjQtMC44LDAuN3Y0LjNjMC4yLDAuMywwLjQsMC41LDAuNywwLjdjMC4zLDAuMiwwLjcsMC4zLDEuMSwwLjMgYzAuNywwLDEuMi0wLjIsMS42LTAuN2MwLjQtMC41LDAuNS0xLjMsMC41LTIuNWMwLTAuOC0wLjEtMS40LTAuMi0xLjhzLTAuNC0wLjctMC43LTAuOUM1Ny42LDEwLjQsNTcuMiwxMC4zLDU2LjcsMTAuM3pcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGZpbGw6XCIjMUZCQUQ2XCIsIGQ6IFwiTTYzLjIsMTZWNWwyLTAuMXYxMC44YzAsMC4zLDAuMSwwLjUsMC4yLDAuNmMwLjEsMC4xLDAuMywwLjIsMC42LDAuMmMwLjMsMCwwLjYsMCwwLjktMC4xVjE4IGMtMC40LDAuMS0xLDAuMi0xLjYsMC4yYy0wLjgsMC0xLjMtMC4yLTEuNy0wLjVTNjMuMiwxNi44LDYzLjIsMTZ6XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgcmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBmaWxsOlwiIzFGQkFENlwiLCBkOiBcIk02OC4yLDEzLjNjMC0xLjUsMC40LTIuNywxLjEtMy41YzAuNy0wLjgsMS44LTEuMiwzLjEtMS4yYzEuMywwLDIuMiwwLjQsMi44LDEuMWMwLjYsMC43LDAuOSwxLjgsMC45LDMuMyBjMCwwLjQsMCwwLjgsMCwxLjFoLTUuOGMwLDEuNiwwLjgsMi40LDIuNCwyLjRjMSwwLDItMC4yLDIuOS0wLjZsMC4yLDEuN2MtMC40LDAuMi0wLjksMC40LTEuNCwwLjVzLTEuMSwwLjItMS43LDAuMiBjLTEuNSwwLTIuNi0wLjQtMy4zLTEuMkM2OC42LDE2LjEsNjguMiwxNC45LDY4LjIsMTMuM3ogTTcyLjQsMTAuMWMtMC43LDAtMS4yLDAuMi0xLjUsMC41Yy0wLjQsMC40LTAuNiwwLjktMC42LDEuN2g0IGMwLTAuOC0wLjItMS40LTAuNS0xLjdTNzMsMTAuMSw3Mi40LDEwLjF6XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgcmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBmaWxsOlwiIzFGQkFENlwiLCBkOiBcIk04MC4yLDguN2wwLjEsMS43aDBjMC4zLTAuNiwwLjctMS4xLDEuMS0xLjRjMC40LTAuMywxLTAuNSwxLjYtMC41YzAuNCwwLDAuNywwLDEsMC4xbC0wLjEsMiBjLTAuMy0wLjEtMC43LTAuMi0xLTAuMmMtMC43LDAtMS4zLDAuMy0xLjcsMC44Yy0wLjQsMC41LTAuNywxLjItMC43LDIuMVYxOGgtMlY4LjdIODAuMnpcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGZpbGw6XCIjMUZCQUQ2XCIsIGQ6IFwiTTgzLjgsMTdjMC0wLjgsMC40LTEuMiwxLjItMS4yYzAuOCwwLDEuMiwwLjQsMS4yLDEuMmMwLDAuOC0wLjQsMS4xLTEuMiwxLjFDODQuMiwxOC4yLDgzLjgsMTcuOCw4My44LDE3elwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZmlsbDpcIiMxRkJBRDZcIiwgZDogXCJNODguNSwxOC43YzAtMC44LDAuNC0xLjQsMS4yLTEuOGMtMC42LTAuMy0wLjktMC44LTAuOS0xLjVjMC0wLjcsMC40LTEuMiwxLjEtMS42Yy0wLjMtMC4zLTAuNi0wLjYtMC43LTAuOSBjLTAuMi0wLjQtMC4yLTAuOC0wLjItMS4zYzAtMSwwLjMtMS44LDAuOS0yLjNjMC42LTAuNSwxLjYtMC44LDIuOC0wLjhjMC41LDAsMSwwLDEuNCwwLjFjMC40LDAuMSwwLjgsMC4yLDEuMSwwLjRsMi40LTAuMnYxLjUgaC0xLjVjMC4yLDAuNCwwLjIsMC44LDAuMiwxLjNjMCwxLTAuMywxLjctMC45LDIuMnMtMS41LDAuOC0yLjcsMC44Yy0wLjcsMC0xLjItMC4xLTEuNi0wLjJjLTAuMSwwLjEtMC4yLDAuMi0wLjMsMC4zIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjRjMCwwLjIsMC4xLDAuMywwLjIsMC40YzAuMSwwLjEsMC4zLDAuMiwwLjYsMC4ybDIuNywwLjJjMSwwLjEsMS43LDAuMywyLjIsMC42YzAuNSwwLjMsMC44LDAuOSwwLjgsMS43IGMwLDAuNi0wLjIsMS4xLTAuNSwxLjVjLTAuNCwwLjQtMC45LDAuOC0xLjUsMWMtMC43LDAuMi0xLjUsMC40LTIuNCwwLjRjLTEuMywwLTIuMy0wLjItMy0wLjZDODguOCwyMC4xLDg4LjUsMTkuNSw4OC41LDE4Ljd6IE05NS4xLDE4LjRjMC0wLjMtMC4xLTAuNS0wLjMtMC43cy0wLjYtMC4yLTEuMS0wLjNsLTIuNy0wLjNjLTAuMiwwLjEtMC40LDAuMy0wLjUsMC41Yy0wLjEsMC4yLTAuMiwwLjQtMC4yLDAuNiBjMCwwLjQsMC4yLDAuOCwwLjUsMWMwLjQsMC4yLDEsMC4zLDEuOCwwLjNDOTQuMiwxOS41LDk1LjEsMTkuMiw5NS4xLDE4LjR6IE05NC4zLDExLjVjMC0wLjYtMC4xLTEtMC40LTEuMiBjLTAuMy0wLjItMC43LTAuMy0xLjMtMC4zYy0wLjcsMC0xLjEsMC4xLTEuNCwwLjNjLTAuMywwLjItMC40LDAuNi0wLjQsMS4yczAuMSwxLDAuNCwxLjJjMC4zLDAuMiwwLjcsMC4zLDEuNCwwLjMgYzAuNiwwLDEuMS0wLjEsMS4zLTAuNFM5NC4zLDEyLDk0LjMsMTEuNXpcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGZpbGw6XCIjMUZCQUQ2XCIsIGQ6IFwiTTk5LjQsMTZWNWwyLTAuMXYxMC44YzAsMC4zLDAuMSwwLjUsMC4yLDAuNmMwLjEsMC4xLDAuMywwLjIsMC42LDAuMmMwLjMsMCwwLjYsMCwwLjktMC4xVjE4IGMtMC40LDAuMS0xLDAuMi0xLjYsMC4yYy0wLjgsMC0xLjMtMC4yLTEuNy0wLjVTOTkuNCwxNi44LDk5LjQsMTZ6XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBBcHAoKSB7XG4gICAgICAgICAgICAgIHZhciByb290RWxtID0gcmVhY3QudXNlUmVmKG51bGwpO1xuICAgICAgICAgICAgICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdmFyIHdpbmRvd0RpbWVuc2lvbiA9IF91c2VTdGF0ZVswXTtcbiAgICAgICAgICAgICAgdmFyIHNldERpbWVuc2lvbiA9IF91c2VTdGF0ZVsxXTtcbiAgICAgICAgICAgICAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uIHNpZGVFZmZlY3QoKXtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgICBzZXREaW1lbnNpb24oe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTt9O1xuICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHtzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX0sXG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLm1vZGUgPT09IEVYUE9SVF9IVE1MX01BUF9NT0RFUy5SRUFEID8gJ0xvZ29TdmcoKSwnIDogJyd9XG4gICAgICAgICAgICAgICAgcmVhY3QuY3JlYXRlRWxlbWVudChrZXBsZXJHbC5LZXBsZXJHbCwge1xuICAgICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IG1hcGJveFRva2VuLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwibWFwXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93RGltZW5zaW9uLndpZHRoLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3dEaW1lbnNpb24uaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0oUmVhY3QsIEtlcGxlckdsLCBNQVBCT1hfVE9LRU4pKTtcblxuICAgICAgICAgIGNvbnN0IGFwcCA9IChmdW5jdGlvbiBjcmVhdGVSZWFjdFJlZHV4UHJvdmlkZXIocmVhY3QsIHJlYWN0UmVkdXgsIEtlcGxlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICByZWFjdFJlZHV4LlByb3ZpZGVyLFxuICAgICAgICAgICAgICB7c3RvcmV9LFxuICAgICAgICAgICAgICByZWFjdC5jcmVhdGVFbGVtZW50KEtlcGxlckVsZW1lbnQsIG51bGwpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfShSZWFjdCwgUmVhY3RSZWR1eCwgS2VwbGVyRWxlbWVudCkpO1xuICAgICAgICAgIC8qKiBFTkQgQ09NUE9ORU5UUyAqKi9cblxuICAgICAgICAgIC8qKiBSZW5kZXIgKiovXG4gICAgICAgICAgKGZ1bmN0aW9uIHJlbmRlcihyZWFjdCwgcmVhY3RET00sIGFwcCkge1xuICAgICAgICAgICAgcmVhY3RET00ucmVuZGVyKGFwcCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiAgICAgICAgICB9KFJlYWN0LCBSZWFjdERPTSwgYXBwKSk7XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8IS0tIFRoZSBuZXh0IHNjcmlwdCB3aWxsIHNob3cgaG93IHRvIGludGVyYWN0IGRpcmVjdGx5IHdpdGggS2VwbGVyIG1hcCBzdG9yZSAtLT5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDdXN0b21pemUgbWFwLlxuICAgICAgICAgICAqIEluIHRoZSBmb2xsb3dpbmcgc2VjdGlvbiB5b3UgY2FuIHVzZSB0aGUgc3RvcmUgb2JqZWN0IHRvIGRpc3BhdGNoIEtlcGxlci5nbCBhY3Rpb25zXG4gICAgICAgICAgICogdG8gYWRkIG5ldyBkYXRhIGFuZCBjdXN0b21pemUgYmVoYXZpb3JcbiAgICAgICAgICAgKi9cbiAgICAgICAgICAoZnVuY3Rpb24gY3VzdG9taXplKGtlcGxlckdsLCBzdG9yZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YXNldHMgPSAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuZGF0YXNldHMpfTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5jb25maWcpfTtcblxuICAgICAgICAgICAgY29uc3QgbG9hZGVkRGF0YSA9IGtlcGxlckdsLktlcGxlckdsU2NoZW1hLmxvYWQoXG4gICAgICAgICAgICAgIGRhdGFzZXRzLFxuICAgICAgICAgICAgICBjb25maWdcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGtlcGxlckdsLmFkZERhdGFUb01hcCh7XG4gICAgICAgICAgICAgIGRhdGFzZXRzOiBsb2FkZWREYXRhLmRhdGFzZXRzLFxuICAgICAgICAgICAgICBjb25maWc6IGxvYWRlZERhdGEuY29uZmlnLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyTWFwOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfShLZXBsZXJHbCwgc3RvcmUpKVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIGA7XG59O1xuIl19