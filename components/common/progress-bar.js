"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  /* transition: width 200ms; */\n  display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./progress-bar').ProgressBarProps} ProgressBarProps */
var StyledBar = _styledComponents["default"].span.attrs({
  className: 'progress-bar__bar'
})(_templateObject(), function (props) {
  return props.barColor || props.theme.progressBarColor;
});

var StyledTrack = _styledComponents["default"].div.attrs({
  className: 'progress-bar'
})(_templateObject2(), function (props) {
  return props.trackColor || props.theme.progressBarTrackColor;
});
/** @type {React.FunctionComponent<ProgressBarProps>} */


var ProgressBar = function ProgressBar(_ref) {
  var percent = _ref.percent,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 4 : _ref$height,
      isLoading = _ref.isLoading,
      barColor = _ref.barColor,
      trackColor = _ref.trackColor,
      theme = _ref.theme;
  return _react["default"].createElement(StyledTrack, {
    trackColor: trackColor,
    theme: theme
  }, _react["default"].createElement(StyledBar, {
    barColor: barColor,
    style: {
      width: percent,
      height: "".concat(height, "px"),
      opacity: isLoading ? 1 : 0
    }
  }));
};

var _default = ProgressBar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wcm9ncmVzcy1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkQmFyIiwic3R5bGVkIiwic3BhbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJiYXJDb2xvciIsInRoZW1lIiwicHJvZ3Jlc3NCYXJDb2xvciIsIlN0eWxlZFRyYWNrIiwiZGl2IiwidHJhY2tDb2xvciIsInByb2dyZXNzQmFyVHJhY2tDb2xvciIsIlByb2dyZXNzQmFyIiwicGVyY2VudCIsImhlaWdodCIsImlzTG9hZGluZyIsIndpZHRoIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLElBQVAsQ0FBWUMsS0FBWixDQUFrQjtBQUNsQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHVCLENBQWxCLENBQUgsb0JBR08sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQkQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGdCQUFsQztBQUFBLENBSFosQ0FBZjs7QUFPQSxJQUFNQyxXQUFXLEdBQUdSLDZCQUFPUyxHQUFQLENBQVdQLEtBQVgsQ0FBaUI7QUFDbkNDLEVBQUFBLFNBQVMsRUFBRTtBQUR3QixDQUFqQixDQUFILHFCQUdLLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLFVBQU4sSUFBb0JOLEtBQUssQ0FBQ0UsS0FBTixDQUFZSyxxQkFBcEM7QUFBQSxDQUhWLENBQWpCO0FBTUE7OztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEseUJBQVdDLE1BQVg7QUFBQSxNQUFXQSxNQUFYLDRCQUFvQixDQUFwQjtBQUFBLE1BQXVCQyxTQUF2QixRQUF1QkEsU0FBdkI7QUFBQSxNQUFrQ1YsUUFBbEMsUUFBa0NBLFFBQWxDO0FBQUEsTUFBNENLLFVBQTVDLFFBQTRDQSxVQUE1QztBQUFBLE1BQXdESixLQUF4RCxRQUF3REEsS0FBeEQ7QUFBQSxTQUNsQixnQ0FBQyxXQUFEO0FBQWEsSUFBQSxVQUFVLEVBQUVJLFVBQXpCO0FBQXFDLElBQUEsS0FBSyxFQUFFSjtBQUE1QyxLQUNFLGdDQUFDLFNBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRUQsUUFEWjtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQUNXLE1BQUFBLEtBQUssRUFBRUgsT0FBUjtBQUFpQkMsTUFBQUEsTUFBTSxZQUFLQSxNQUFMLE9BQXZCO0FBQXdDRyxNQUFBQSxPQUFPLEVBQUVGLFNBQVMsR0FBRyxDQUFILEdBQU87QUFBakU7QUFGVCxJQURGLENBRGtCO0FBQUEsQ0FBcEI7O2VBU2VILFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Byb2dyZXNzLWJhcicpLlByb2dyZXNzQmFyUHJvcHN9IFByb2dyZXNzQmFyUHJvcHMgKi9cblxuY29uc3QgU3R5bGVkQmFyID0gc3R5bGVkLnNwYW4uYXR0cnMoe1xuICBjbGFzc05hbWU6ICdwcm9ncmVzcy1iYXJfX2Jhcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJhckNvbG9yIHx8IHByb3BzLnRoZW1lLnByb2dyZXNzQmFyQ29sb3J9O1xuICAvKiB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtczsgKi9cbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuY29uc3QgU3R5bGVkVHJhY2sgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAncHJvZ3Jlc3MtYmFyJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudHJhY2tDb2xvciB8fCBwcm9wcy50aGVtZS5wcm9ncmVzc0JhclRyYWNrQ29sb3J9O1xuYDtcblxuLyoqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9ncmVzc0JhclByb3BzPn0gKi9cbmNvbnN0IFByb2dyZXNzQmFyID0gKHtwZXJjZW50LCBoZWlnaHQgPSA0LCBpc0xvYWRpbmcsIGJhckNvbG9yLCB0cmFja0NvbG9yLCB0aGVtZX0pID0+IChcbiAgPFN0eWxlZFRyYWNrIHRyYWNrQ29sb3I9e3RyYWNrQ29sb3J9IHRoZW1lPXt0aGVtZX0+XG4gICAgPFN0eWxlZEJhclxuICAgICAgYmFyQ29sb3I9e2JhckNvbG9yfVxuICAgICAgc3R5bGU9e3t3aWR0aDogcGVyY2VudCwgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLCBvcGFjaXR5OiBpc0xvYWRpbmcgPyAxIDogMH19XG4gICAgLz5cbiAgPC9TdHlsZWRUcmFjaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19