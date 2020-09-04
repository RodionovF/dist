"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div.attrs({
  className: 'toolbar-item'
})(_templateObject(), function (props) {
  return props.active ? props.theme.titleTextColor : props.theme.textColor;
});

var ToolbarItem = _react["default"].memo(function (props) {
  return _react["default"].createElement(StyledDiv, {
    id: props.id,
    className: props.className,
    active: props.active,
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();

      if (typeof props.onClose === 'function') {
        props.onClose();
      }

      props.onClick(e);
    }
  }, props.icon && _react["default"].createElement(props.icon, null), _react["default"].createElement("div", {
    className: "toolbar-item__title"
  }, _react["default"].createElement(_reactIntl.FormattedMessage, {
    id: props.label
  })));
});

ToolbarItem.displayName = 'ToolbarItem';
var _default = ToolbarItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0uanMiXSwibmFtZXMiOlsiU3R5bGVkRGl2Iiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwidGl0bGVUZXh0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJUb29sYmFySXRlbSIsIlJlYWN0IiwibWVtbyIsImlkIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZSIsIm9uQ2xpY2siLCJpY29uIiwibGFiZWwiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNqQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHNCLENBQWpCLENBQUgsb0JBR0osVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixHQUFlRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsY0FBM0IsR0FBNENILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxTQUE3RDtBQUFBLENBSEQsQ0FBZjs7QUFNQSxJQUFNQyxXQUFXLEdBQUdDLGtCQUFNQyxJQUFOLENBQVcsVUFBQVAsS0FBSztBQUFBLFNBQ2xDLGdDQUFDLFNBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBRUEsS0FBSyxDQUFDUSxFQURaO0FBRUUsSUFBQSxTQUFTLEVBQUVSLEtBQUssQ0FBQ0QsU0FGbkI7QUFHRSxJQUFBLE1BQU0sRUFBRUMsS0FBSyxDQUFDQyxNQUhoQjtBQUlFLElBQUEsT0FBTyxFQUFFLGlCQUFBUSxDQUFDLEVBQUk7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0FELE1BQUFBLENBQUMsQ0FBQ0UsY0FBRjs7QUFDQSxVQUFJLE9BQU9YLEtBQUssQ0FBQ1ksT0FBYixLQUF5QixVQUE3QixFQUF5QztBQUN2Q1osUUFBQUEsS0FBSyxDQUFDWSxPQUFOO0FBQ0Q7O0FBQ0RaLE1BQUFBLEtBQUssQ0FBQ2EsT0FBTixDQUFjSixDQUFkO0FBQ0Q7QUFYSCxLQWFHVCxLQUFLLENBQUNjLElBQU4sSUFBYyxnQ0FBQyxLQUFELENBQU8sSUFBUCxPQWJqQixFQWNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLGdDQUFDLDJCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFFZCxLQUFLLENBQUNlO0FBQTVCLElBREYsQ0FkRixDQURrQztBQUFBLENBQWhCLENBQXBCOztBQXFCQVYsV0FBVyxDQUFDVyxXQUFaLEdBQTBCLGFBQTFCO2VBRWVYLFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jb25zdCBTdHlsZWREaXYgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAndG9vbGJhci1pdGVtJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvciA6IHByb3BzLnRoZW1lLnRleHRDb2xvcil9O1xuYDtcblxuY29uc3QgVG9vbGJhckl0ZW0gPSBSZWFjdC5tZW1vKHByb3BzID0+IChcbiAgPFN0eWxlZERpdlxuICAgIGlkPXtwcm9wcy5pZH1cbiAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICBhY3RpdmU9e3Byb3BzLmFjdGl2ZX1cbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgICAgcHJvcHMub25DbGljayhlKTtcbiAgICB9fVxuICA+XG4gICAge3Byb3BzLmljb24gJiYgPHByb3BzLmljb24gLz59XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWl0ZW1fX3RpdGxlXCI+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17cHJvcHMubGFiZWx9IC8+XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkRGl2PlxuKSk7XG5cblRvb2xiYXJJdGVtLmRpc3BsYXlOYW1lID0gJ1Rvb2xiYXJJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhckl0ZW07XG4iXX0=