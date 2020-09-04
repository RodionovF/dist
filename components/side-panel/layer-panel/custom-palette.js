"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _portaled = _interopRequireDefault(require("../../common/portaled"));

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPicker = _interopRequireDefault(require("./custom-picker"));

var _dataUtils = require("../../../utils/data-utils");

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  input {\n    color: ", ";\n    font-size: 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 11px;\n  display: flex;\n  direction: rtl;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 32px;\n  height: 18px;\n  display: inline-block;\n  :hover {\n    box-shadow: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 16px);\n  height: 1px;\n  background-color: ", ";\n  margin-top: 8px;\n  margin-left: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  svg {\n    :hover {\n      color: ", ";\n    }\n  }\n  height: 12px;\n  margin-left: auto;\n  margin-right: 12px;\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  z-index: ", ";\n\n  :not(.sorting) {\n    :hover {\n      background-color: ", ";\n      ", "\n    }\n  }\n\n  &.sorting-colors {\n    background-color: ", ";\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__drag-handle {\n    color: ", ";\n    opacity: 1;\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dragHandleActive = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.theme.textColorHl;
});

var StyledSortableItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive);

var StyledDragHandle = _styledComponents["default"].div(_templateObject3());

var StyledTrash = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.subtextColorActive;
});

var StyledLine = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.labelColor;
});

var StyledSwatch = _styledComponents["default"].div.attrs({
  className: 'custom-palette__swatch'
})(_templateObject6(), function (props) {
  return props.color;
}, function (props) {
  return props.theme.boxShadow;
});

var StyledColorRange = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.panelBackgroundHover;
});

var StyledButtonContainer = _styledComponents["default"].div(_templateObject8());

var StyledInlineInput = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.theme.textColorHl;
});

var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref) {
  var children = _ref.children,
      isSorting = _ref.isSorting;
  return _react["default"].createElement(StyledSortableItem, {
    className: (0, _classnames["default"])('custom-palette__sortable-items', {
      sorting: isSorting
    })
  }, children);
});
var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref2) {
  var children = _ref2.children;
  return _react["default"].createElement("div", null, children);
});
var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  return _react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});

var CustomPalette =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(CustomPalette, _Component);

  function CustomPalette() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CustomPalette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CustomPalette)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isSorting: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onPickerUpdate", function (color) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[_this.props.showSketcher] = color.hex;

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorDelete", function (index) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);

      if (newColors.length > 1) {
        newColors.splice(index, 1);
      }

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorAdd", function () {
      var colors = _this.props.customPalette.colors; // add the last color

      var newColors = [].concat((0, _toConsumableArray2["default"])(colors), [colors[colors.length - 1]]);

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClick", function (index) {
      _this.props.onToggleSketcher(index);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClose", function () {
      _this.props.onToggleSketcher(false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onApply", function (event) {
      event.stopPropagation();
      event.preventDefault();

      _this.props.onCancel();

      _this.props.onApply(_this.props.customPalette, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortEnd", function (_ref4) {
      var oldIndex = _ref4.oldIndex,
          newIndex = _ref4.newIndex;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _dataUtils.arrayMove)(colors, oldIndex, newIndex);

      _this._setColorPaletteUI(newColors);

      _this.setState({
        isSorting: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
      _this.setState({
        isSorting: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_inputColorHex", function (index, _ref5) {
      var value = _ref5.target.value;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[index] = value.toUpperCase();

      _this._setColorPaletteUI(newColors);
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPalette, [{
    key: "_setColorPaletteUI",
    value: function _setColorPaletteUI(colors) {
      this.props.setCustomPalette({
        colors: colors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var colors = this.props.customPalette.colors;
      return _react["default"].createElement("div", {
        className: "custom-palette-panel",
        ref: this.root
      }, _react["default"].createElement(StyledColorRange, null, _react["default"].createElement(_colorPalette["default"], {
        colors: colors
      })), _react["default"].createElement(SortableContainer, {
        className: "custom-palette-container",
        onSortEnd: this._onSortEnd,
        onSortStart: this._onSortStart,
        lockAxis: "y",
        helperClass: "sorting-colors",
        useDragHandle: true
      }, colors.map(function (color, index) {
        return _react["default"].createElement(SortableItem, {
          key: index,
          index: index,
          isSorting: _this2.state.isSorting
        }, _react["default"].createElement(DragHandle, {
          className: "layer__drag-handle"
        }, _react["default"].createElement(_icons.VertDots, {
          height: "20px"
        })), _react["default"].createElement(StyledSwatch, {
          color: color,
          onClick: function onClick(e) {
            return _this2._onSwatchClick(index, e);
          }
        }), _react["default"].createElement(StyledInlineInput, null, _react["default"].createElement(_styledComponents2.InlineInput, {
          type: "text",
          className: "custom-palette-hex__input",
          value: color.toUpperCase(),
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          onChange: function onChange(e) {
            return _this2._inputColorHex(index, e);
          },
          id: "input-layer-label"
        })), _react["default"].createElement(StyledTrash, {
          onClick: function onClick() {
            return _this2._onColorDelete(index);
          }
        }, _react["default"].createElement(_icons.Trash, {
          className: "trashbin"
        })));
      })), _react["default"].createElement(_styledComponents2.Button, {
        className: "add-step__button",
        link: true,
        onClick: this._onColorAdd
      }, "+ Add Step"), _react["default"].createElement(StyledLine, null), _react["default"].createElement(StyledButtonContainer, null, _react["default"].createElement(_styledComponents2.Button, {
        className: "confirm-apply__button",
        link: true,
        onClick: this._onApply
      }, "Confirm"), _react["default"].createElement(_styledComponents2.Button, {
        link: true,
        onClick: this.props.onCancel
      }, "Cancel")), _react["default"].createElement(_portaled["default"], {
        isOpened: this.props.showSketcher !== false,
        left: 280,
        top: -300
      }, _react["default"].createElement(_customPicker["default"], {
        color: colors[this.props.showSketcher],
        onChange: this._onPickerUpdate,
        onSwatchClose: this._onSwatchClose
      })));
    }
  }]);
  return CustomPalette;
}(_react.Component);

(0, _defineProperty2["default"])(CustomPalette, "propTypes", {
  customPalette: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    type: _propTypes["default"].string,
    category: _propTypes["default"].string,
    colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }),
  setCustomPalette: _propTypes["default"].func,
  showSketcher: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number])
});
var _default = CustomPalette;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY3VzdG9tLXBhbGV0dGUuanMiXSwibmFtZXMiOlsiZHJhZ0hhbmRsZUFjdGl2ZSIsImNzcyIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFNvcnRhYmxlSXRlbSIsInN0eWxlZCIsImRpdiIsImRyb3Bkb3duV3JhcHBlcloiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIlN0eWxlZERyYWdIYW5kbGUiLCJTdHlsZWRUcmFzaCIsInRleHRDb2xvciIsInN1YnRleHRDb2xvckFjdGl2ZSIsIlN0eWxlZExpbmUiLCJsYWJlbENvbG9yIiwiU3R5bGVkU3dhdGNoIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJjb2xvciIsImJveFNoYWRvdyIsIlN0eWxlZENvbG9yUmFuZ2UiLCJTdHlsZWRCdXR0b25Db250YWluZXIiLCJTdHlsZWRJbmxpbmVJbnB1dCIsIlNvcnRhYmxlSXRlbSIsImNoaWxkcmVuIiwiaXNTb3J0aW5nIiwic29ydGluZyIsIlNvcnRhYmxlQ29udGFpbmVyIiwiRHJhZ0hhbmRsZSIsIkN1c3RvbVBhbGV0dGUiLCJjb2xvcnMiLCJjdXN0b21QYWxldHRlIiwibmV3Q29sb3JzIiwic2hvd1NrZXRjaGVyIiwiaGV4IiwiX3NldENvbG9yUGFsZXR0ZVVJIiwiaW5kZXgiLCJsZW5ndGgiLCJzcGxpY2UiLCJvblRvZ2dsZVNrZXRjaGVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2FuY2VsIiwib25BcHBseSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwidG9VcHBlckNhc2UiLCJzZXRDdXN0b21QYWxldHRlIiwicm9vdCIsIl9vblNvcnRFbmQiLCJfb25Tb3J0U3RhcnQiLCJtYXAiLCJzdGF0ZSIsImUiLCJfb25Td2F0Y2hDbGljayIsIl9pbnB1dENvbG9ySGV4IiwiX29uQ29sb3JEZWxldGUiLCJfb25Db2xvckFkZCIsIl9vbkFwcGx5IiwiX29uUGlja2VyVXBkYXRlIiwiX29uU3dhdGNoQ2xvc2UiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm5hbWUiLCJzdHJpbmciLCJ0eXBlIiwiY2F0ZWdvcnkiLCJhcnJheU9mIiwiZnVuYyIsIm9uZU9mVHlwZSIsImJvb2wiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixPQUFHQyxxQkFBSCxxQkFFVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FGSSxDQUF0Qjs7QUFRQSxJQUFNQyxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVYscUJBS1gsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxnQkFBWixHQUErQixDQUFuQztBQUFBLENBTE0sRUFTRSxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLG9CQUFoQjtBQUFBLENBVFAsRUFVaEJULGdCQVZnQixFQWVBLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sb0JBQWhCO0FBQUEsQ0FmTCxFQWdCbEJULGdCQWhCa0IsQ0FBeEI7O0FBb0JBLElBQU1VLGdCQUFnQixHQUFHSiw2QkFBT0MsR0FBVixvQkFBdEI7O0FBTUEsSUFBTUksV0FBVyxHQUFHTCw2QkFBT0MsR0FBVixxQkFDTixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENB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MDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7c29ydGFibGVDb250YWluZXIsIHNvcnRhYmxlRWxlbWVudCwgc29ydGFibGVIYW5kbGV9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgUG9ydGFsZWQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcG9ydGFsZWQnO1xuXG5pbXBvcnQge0J1dHRvbiwgSW5saW5lSW5wdXR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VmVydERvdHMsIFRyYXNofSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gJy4vY29sb3ItcGFsZXR0ZSc7XG5pbXBvcnQgQ3VzdG9tUGlja2VyIGZyb20gJy4vY3VzdG9tLXBpY2tlcic7XG5pbXBvcnQge2FycmF5TW92ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmNvbnN0IGRyYWdIYW5kbGVBY3RpdmUgPSBjc3NgXG4gIC5sYXllcl9fZHJhZy1oYW5kbGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkU29ydGFibGVJdGVtID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldyYXBwZXJaICsgMX07XG5cbiAgOm5vdCguc29ydGluZykge1xuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICAgICR7ZHJhZ0hhbmRsZUFjdGl2ZX1cbiAgICB9XG4gIH1cblxuICAmLnNvcnRpbmctY29sb3JzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICAke2RyYWdIYW5kbGVBY3RpdmV9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZERyYWdIYW5kbGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuYDtcblxuY29uc3QgU3R5bGVkVHJhc2ggPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBzdmcge1xuICAgIDpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmV9O1xuICAgIH1cbiAgfVxuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuYDtcblxuY29uc3QgU3R5bGVkU3dhdGNoID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2N1c3RvbS1wYWxldHRlX19zd2F0Y2gnXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRDb2xvclJhbmdlID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMCA4cHg7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3Zlcn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXJlY3Rpb246IHJ0bDtcbmA7XG5cbmNvbnN0IFN0eWxlZElubGluZUlucHV0ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGlucHV0IHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBzb3J0YWJsZUVsZW1lbnQoKHtjaGlsZHJlbiwgaXNTb3J0aW5nfSkgPT4gKFxuICA8U3R5bGVkU29ydGFibGVJdGVtXG4gICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjdXN0b20tcGFsZXR0ZV9fc29ydGFibGUtaXRlbXMnLCB7c29ydGluZzogaXNTb3J0aW5nfSl9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkU29ydGFibGVJdGVtPlxuKSk7XG5cbmNvbnN0IFNvcnRhYmxlQ29udGFpbmVyID0gc29ydGFibGVDb250YWluZXIoKHtjaGlsZHJlbn0pID0+IDxkaXY+e2NoaWxkcmVufTwvZGl2Pik7XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBzb3J0YWJsZUhhbmRsZSgoe2NsYXNzTmFtZSwgY2hpbGRyZW59KSA9PiAoXG4gIDxTdHlsZWREcmFnSGFuZGxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9TdHlsZWREcmFnSGFuZGxlPlxuKSk7XG5cbmNsYXNzIEN1c3RvbVBhbGV0dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1c3RvbVBhbGV0dGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxuICAgIH0pLFxuICAgIHNldEN1c3RvbVBhbGV0dGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dTa2V0Y2hlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXJdKVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGlzU29ydGluZzogZmFsc2VcbiAgfTtcblxuICByb290ID0gY3JlYXRlUmVmKCk7XG5cbiAgX3NldENvbG9yUGFsZXR0ZVVJKGNvbG9ycykge1xuICAgIHRoaXMucHJvcHMuc2V0Q3VzdG9tUGFsZXR0ZSh7XG4gICAgICBjb2xvcnNcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBpY2tlclVwZGF0ZSA9IGNvbG9yID0+IHtcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzXTtcbiAgICBuZXdDb2xvcnNbdGhpcy5wcm9wcy5zaG93U2tldGNoZXJdID0gY29sb3IuaGV4O1xuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XG4gIH07XG5cbiAgX29uQ29sb3JEZWxldGUgPSBpbmRleCA9PiB7XG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XG4gICAgY29uc3QgbmV3Q29sb3JzID0gWy4uLmNvbG9yc107XG4gICAgaWYgKG5ld0NvbG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICBuZXdDb2xvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0Q29sb3JQYWxldHRlVUkobmV3Q29sb3JzKTtcbiAgfTtcblxuICBfb25Db2xvckFkZCA9ICgpID0+IHtcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcbiAgICAvLyBhZGQgdGhlIGxhc3QgY29sb3JcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzLCBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIDFdXTtcbiAgICB0aGlzLl9zZXRDb2xvclBhbGV0dGVVSShuZXdDb2xvcnMpO1xuICB9O1xuXG4gIF9vblN3YXRjaENsaWNrID0gaW5kZXggPT4ge1xuICAgIHRoaXMucHJvcHMub25Ub2dnbGVTa2V0Y2hlcihpbmRleCk7XG4gIH07XG5cbiAgX29uU3dhdGNoQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVNrZXRjaGVyKGZhbHNlKTtcbiAgfTtcblxuICBfb25BcHBseSA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICB0aGlzLnByb3BzLm9uQXBwbHkodGhpcy5wcm9wcy5jdXN0b21QYWxldHRlLCBldmVudCk7XG4gIH07XG5cbiAgX29uU29ydEVuZCA9ICh7b2xkSW5kZXgsIG5ld0luZGV4fSkgPT4ge1xuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xuICAgIGNvbnN0IG5ld0NvbG9ycyA9IGFycmF5TW92ZShjb2xvcnMsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgdGhpcy5fc2V0Q29sb3JQYWxldHRlVUkobmV3Q29sb3JzKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc1NvcnRpbmc6IGZhbHNlfSk7XG4gIH07XG5cbiAgX29uU29ydFN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogdHJ1ZX0pO1xuICB9O1xuXG4gIF9pbnB1dENvbG9ySGV4ID0gKGluZGV4LCB7dGFyZ2V0OiB7dmFsdWV9fSkgPT4ge1xuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xuICAgIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xuICAgIG5ld0NvbG9yc1tpbmRleF0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtcGFuZWxcIiByZWY9e3RoaXMucm9vdH0+XG4gICAgICAgIDxTdHlsZWRDb2xvclJhbmdlPlxuICAgICAgICAgIDxDb2xvclBhbGV0dGUgY29sb3JzPXtjb2xvcnN9IC8+XG4gICAgICAgIDwvU3R5bGVkQ29sb3JSYW5nZT5cbiAgICAgICAgPFNvcnRhYmxlQ29udGFpbmVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtY29udGFpbmVyXCJcbiAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMuX29uU29ydEVuZH1cbiAgICAgICAgICBvblNvcnRTdGFydD17dGhpcy5fb25Tb3J0U3RhcnR9XG4gICAgICAgICAgbG9ja0F4aXM9XCJ5XCJcbiAgICAgICAgICBoZWxwZXJDbGFzcz1cInNvcnRpbmctY29sb3JzXCJcbiAgICAgICAgICB1c2VEcmFnSGFuZGxlXG4gICAgICAgID5cbiAgICAgICAgICB7Y29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U29ydGFibGVJdGVtIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gaXNTb3J0aW5nPXt0aGlzLnN0YXRlLmlzU29ydGluZ30+XG4gICAgICAgICAgICAgIDxEcmFnSGFuZGxlIGNsYXNzTmFtZT1cImxheWVyX19kcmFnLWhhbmRsZVwiPlxuICAgICAgICAgICAgICAgIDxWZXJ0RG90cyBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgICAgPC9EcmFnSGFuZGxlPlxuICAgICAgICAgICAgICA8U3R5bGVkU3dhdGNoIGNvbG9yPXtjb2xvcn0gb25DbGljaz17ZSA9PiB0aGlzLl9vblN3YXRjaENsaWNrKGluZGV4LCBlKX0gLz5cbiAgICAgICAgICAgICAgPFN0eWxlZElubGluZUlucHV0PlxuICAgICAgICAgICAgICAgIDxJbmxpbmVJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtaGV4X19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sb3IudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuX2lucHV0Q29sb3JIZXgoaW5kZXgsIGUpfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC1sYXllci1sYWJlbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmxpbmVJbnB1dD5cbiAgICAgICAgICAgICAgPFN0eWxlZFRyYXNoIG9uQ2xpY2s9eygpID0+IHRoaXMuX29uQ29sb3JEZWxldGUoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICA8VHJhc2ggY2xhc3NOYW1lPVwidHJhc2hiaW5cIiAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZFRyYXNoPlxuICAgICAgICAgICAgPC9Tb3J0YWJsZUl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU29ydGFibGVDb250YWluZXI+XG4gICAgICAgIHsvKiBBZGQgU3RlcCBCdXR0b24gKi99XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWRkLXN0ZXBfX2J1dHRvblwiIGxpbmsgb25DbGljaz17dGhpcy5fb25Db2xvckFkZH0+XG4gICAgICAgICAgKyBBZGQgU3RlcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPFN0eWxlZExpbmUgLz5cbiAgICAgICAgey8qIENhbmNlbCBvciBDb25maXJtIEJ1dHRvbnMgKi99XG4gICAgICAgIDxTdHlsZWRCdXR0b25Db250YWluZXI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb25maXJtLWFwcGx5X19idXR0b25cIiBsaW5rIG9uQ2xpY2s9e3RoaXMuX29uQXBwbHl9PlxuICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gbGluayBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2FuY2VsfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0eWxlZEJ1dHRvbkNvbnRhaW5lcj5cblxuICAgICAgICA8UG9ydGFsZWQgaXNPcGVuZWQ9e3RoaXMucHJvcHMuc2hvd1NrZXRjaGVyICE9PSBmYWxzZX0gbGVmdD17MjgwfSB0b3A9ey0zMDB9PlxuICAgICAgICAgIDxDdXN0b21QaWNrZXJcbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcnNbdGhpcy5wcm9wcy5zaG93U2tldGNoZXJdfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uUGlja2VyVXBkYXRlfVxuICAgICAgICAgICAgb25Td2F0Y2hDbG9zZT17dGhpcy5fb25Td2F0Y2hDbG9zZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbGVkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWxldHRlO1xuIl19