"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledLayerName = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dataUtils = require("../../utils/data-utils");

var _interactionUtils = require("../../utils/interaction-utils");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  & .row__delta-value {\n    text-align: right;\n\n    &.positive {\n      color: ", ";\n    }\n\n    &.negative {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n  padding: 0 14px;\n  margin-top: 12px;\n\n  svg {\n    margin-right: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerName = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject(), function (props) {
  return props.theme.textColorHl;
});
exports.StyledLayerName = StyledLayerName;

var StyledTable = _styledComponents["default"].table(_templateObject2(), function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.negativeBtnActBgd;
});

var Row = function Row(_ref) {
  var name = _ref.name,
      value = _ref.value,
      deltaValue = _ref.deltaValue,
      url = _ref.url;

  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  var asImg = /<img>/.test(name);
  return _react["default"].createElement("tr", {
    className: "row",
    key: name
  }, _react["default"].createElement("td", {
    className: "row__name"
  }, name), _react["default"].createElement("td", {
    className: "row__value"
  }, asImg ? _react["default"].createElement("img", {
    src: value
  }) : url ? _react["default"].createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: url
  }, value) : value), (0, _dataUtils.notNullorUndefined)(deltaValue) && _react["default"].createElement("td", {
    className: "row__delta-value ".concat(deltaValue.toString().charAt(0) === '+' ? 'positive' : 'negative')
  }, deltaValue));
};

var EntryInfo = function EntryInfo(_ref2) {
  var fieldsToShow = _ref2.fieldsToShow,
      fields = _ref2.fields,
      data = _ref2.data,
      primaryData = _ref2.primaryData,
      compareType = _ref2.compareType;
  return _react["default"].createElement("tbody", null, fieldsToShow.map(function (item) {
    return _react["default"].createElement(EntryInfoRow, {
      key: item.name,
      item: item,
      fields: fields,
      data: data,
      primaryData: primaryData,
      compareType: compareType
    });
  }));
};

var CellInfo = function CellInfo(_ref4) {
  var data = _ref4.data,
      layer = _ref4.layer,
      fields = _ref4.fields,
      primaryData = _ref4.primaryData,
      compareType = _ref4.compareType,
      fieldsToShow = _ref4.fieldsToShow;
  var one_data = data.points[0].data;
  var _layer$config = layer.config,
      colorField = _layer$config.colorField,
      sizeField = _layer$config.sizeField;
  return _react["default"].createElement(
    "tbody", null, _react["default"].createElement(Row, {
    name: 'Количество домов',
    key: "count",
    value: data.points && data.points.length
  }), fieldsToShow.map(function (item) {
    return _react["default"].createElement(EntryInfoRow, {
      key: item.name,
      item: item,
      fields: fields,
      data: one_data,
      primaryData: primaryData,
      compareType: compareType
    });
  }));
};

var EntryInfoRow = function EntryInfoRow(_ref3) {
  var item = _ref3.item,
      fields = _ref3.fields,
      data = _ref3.data,
      primaryData = _ref3.primaryData,
      compareType = _ref3.compareType;
  var fieldIdx = fields.findIndex(function (f) {
    return f.name === item.name;
  });

  if (fieldIdx < 0) {
    return null;
  }

  var field = fields[fieldIdx];
  var displayValue = (0, _interactionUtils.getTooltipDisplayValue)({
    item: item,
    field: field,
    data: data,
    fieldIdx: fieldIdx
  });
  var displayDeltaValue = (0, _interactionUtils.getTooltipDisplayDeltaValue)({
    item: item,
    field: field,
    data: data,
    fieldIdx: fieldIdx,
    primaryData: primaryData,
    compareType: compareType
  });
  return _react["default"].createElement(Row, {
    name: item.name,
    value: displayValue,
    deltaValue: displayDeltaValue
  });
}; // TODO: supporting comparative value for aggregated cells as well

var LayerHoverInfoFactory = function LayerHoverInfoFactory() {
  var LayerHoverInfo = function LayerHoverInfo(props) {
    var data = props.data,
        layer = props.layer;

    if (!data || !layer) {
      return null;
    }

    return _react["default"].createElement("div", {
      className: "map-popover__layer-info"
    }, _react["default"].createElement(StyledLayerName, {
      className: "map-popover__layer-name"
    }, _react["default"].createElement(_icons.Layers, {
      height: "12px"
    }), props.layer.config.label), _react["default"].createElement(StyledTable, null, props.layer.isAggregated ? _react["default"].createElement(CellInfo, props) : _react["default"].createElement(EntryInfo, props)));
  };

  LayerHoverInfo.propTypes = {
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any),
    fieldsToShow: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layer: _propTypes["default"].object,
    data: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object])
  };
  return LayerHoverInfo;
};

var _default = LayerHoverInfoFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9sYXllci1ob3Zlci1pbmZvLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyTmFtZSIsIkNlbnRlckZsZXhib3giLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9ySGwiLCJTdHlsZWRUYWJsZSIsInN0eWxlZCIsInRhYmxlIiwicHJpbWFyeUJ0bkJnZCIsIm5lZ2F0aXZlQnRuQWN0QmdkIiwiUm93IiwibmFtZSIsInZhbHVlIiwiZGVsdGFWYWx1ZSIsInVybCIsIm1hdGNoIiwiYXNJbWciLCJ0ZXN0IiwidG9TdHJpbmciLCJjaGFyQXQiLCJFbnRyeUluZm8iLCJmaWVsZHNUb1Nob3ciLCJmaWVsZHMiLCJkYXRhIiwicHJpbWFyeURhdGEiLCJjb21wYXJlVHlwZSIsIm1hcCIsIml0ZW0iLCJFbnRyeUluZm9Sb3ciLCJmaWVsZElkeCIsImZpbmRJbmRleCIsImYiLCJmaWVsZCIsImRpc3BsYXlWYWx1ZSIsImRpc3BsYXlEZWx0YVZhbHVlIiwiQ2VsbEluZm8iLCJsYXllciIsImNvbmZpZyIsImNvbG9yRmllbGQiLCJzaXplRmllbGQiLCJwb2ludHMiLCJsZW5ndGgiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uIiwibWVhc3VyZSIsImNvbG9yVmFsdWUiLCJzaXplIiwiZWxldmF0aW9uVmFsdWUiLCJMYXllckhvdmVySW5mb0ZhY3RvcnkiLCJMYXllckhvdmVySW5mbyIsImxhYmVsIiwiaXNBZ2dyZWdhdGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsIm9iamVjdCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxlQUFlLEdBQUcsa0NBQU9DLGdDQUFQLENBQUgsb0JBQ2pCLFVB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T0FDRSxnQ0FBQyxhQUFEO0FBQVEsTUFBQSxNQUFNLEVBQUM7QUFBZixNQURGLEVBRUdsQyxLQUFLLENBQUNrQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJjLEtBRnRCLENBREYsRUFLRSxnQ0FBQyxXQUFELFFBQ0dqRCxLQUFLLENBQUNrQyxLQUFOLENBQVlnQixZQUFaLEdBQTJCLGdDQUFDLFFBQUQsRUFBY2xELEtBQWQsQ0FBM0IsR0FBcUQsZ0NBQUMsU0FBRCxFQUFlQSxLQUFmLENBRHhELENBTEYsQ0FERjtBQVdELEdBbEJEOztBQW9CQWdELEVBQUFBLGNBQWMsQ0FBQ0csU0FBZixHQUEyQjtBQUN6Qi9CLElBQUFBLE1BQU0sRUFBRWdDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FEaUI7QUFFekJuQyxJQUFBQSxZQUFZLEVBQUVpQyxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLEdBQTVCLENBRlc7QUFHekJwQixJQUFBQSxLQUFLLEVBQUVrQixzQkFBVUcsTUFIUTtBQUl6QmxDLElBQUFBLElBQUksRUFBRStCLHNCQUFVSSxTQUFWLENBQW9CLENBQUNKLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FBRCxFQUFtQ0Ysc0JBQVVHLE1BQTdDLENBQXBCO0FBSm1CLEdBQTNCO0FBTUEsU0FBT1AsY0FBUDtBQUNELENBNUJEOztlQThCZUQscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0NlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TGF5ZXJzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHtnZXRUb29sdGlwRGlzcGxheVZhbHVlLCBnZXRUb29sdGlwRGlzcGxheURlbHRhVmFsdWV9IGZyb20gJ3V0aWxzL2ludGVyYWN0aW9uLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyTmFtZSA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjQzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkVGFibGUgPSBzdHlsZWQudGFibGVgXG4gICYgLnJvd19fZGVsdGEtdmFsdWUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgJi5wb3NpdGl2ZSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgICB9XG5cbiAgICAmLm5lZ2F0aXZlIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQWN0QmdkfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFJvdyA9ICh7bmFtZSwgdmFsdWUsIGRlbHRhVmFsdWUsIHVybH0pID0+IHtcbiAgLy8gU2V0ICd1cmwnIHRvICd2YWx1ZScgaWYgaXQgbG9va3MgbGlrZSBhIHVybFxuICBpZiAoIXVybCAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eaHR0cC8pKSB7XG4gICAgdXJsID0gdmFsdWU7XG4gIH1cblxuICBjb25zdCBhc0ltZyA9IC88aW1nPi8udGVzdChuYW1lKTtcbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwicm93XCIga2V5PXtuYW1lfT5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJyb3dfX25hbWVcIj57bmFtZX08L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInJvd19fdmFsdWVcIj5cbiAgICAgICAge2FzSW1nID8gKFxuICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz5cbiAgICAgICAgKSA6IHVybCA/IChcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17dXJsfT5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKX1cbiAgICAgIDwvdGQ+XG4gICAgICB7bm90TnVsbG9yVW5kZWZpbmVkKGRlbHRhVmFsdWUpICYmIChcbiAgICAgICAgPHRkXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm93X19kZWx0YS12YWx1ZSAke1xuICAgICAgICAgICAgZGVsdGFWYWx1ZS50b1N0cmluZygpLmNoYXJBdCgwKSA9PT0gJysnID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZWx0YVZhbHVlfVxuICAgICAgICA8L3RkPlxuICAgICAgKX1cbiAgICA8L3RyPlxuICApO1xufTtcblxuY29uc3QgRW50cnlJbmZvID0gKHtmaWVsZHNUb1Nob3csIGZpZWxkcywgZGF0YSwgcHJpbWFyeURhdGEsIGNvbXBhcmVUeXBlfSkgPT4gKFxuICA8dGJvZHk+XG4gICAge2ZpZWxkc1RvU2hvdy5tYXAoaXRlbSA9PiAoXG4gICAgICA8RW50cnlJbmZvUm93XG4gICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgcHJpbWFyeURhdGE9e3ByaW1hcnlEYXRhfVxuICAgICAgICBjb21wYXJlVHlwZT17Y29tcGFyZVR5cGV9XG4gICAgICAvPlxuICAgICkpfVxuICA8L3Rib2R5PlxuKTtcblxuY29uc3QgRW50cnlJbmZvUm93ID0gKHtpdGVtLCBmaWVsZHMsIGRhdGEsIHByaW1hcnlEYXRhLCBjb21wYXJlVHlwZX0pID0+IHtcbiAgY29uc3QgZmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSBpdGVtLm5hbWUpO1xuICBpZiAoZmllbGRJZHggPCAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZmllbGQgPSBmaWVsZHNbZmllbGRJZHhdO1xuICBjb25zdCBkaXNwbGF5VmFsdWUgPSBnZXRUb29sdGlwRGlzcGxheVZhbHVlKHtpdGVtLCBmaWVsZCwgZGF0YSwgZmllbGRJZHh9KTtcblxuICBjb25zdCBkaXNwbGF5RGVsdGFWYWx1ZSA9IGdldFRvb2x0aXBEaXNwbGF5RGVsdGFWYWx1ZSh7XG4gICAgaXRlbSxcbiAgICBmaWVsZCxcbiAgICBkYXRhLFxuICAgIGZpZWxkSWR4LFxuICAgIHByaW1hcnlEYXRhLFxuICAgIGNvbXBhcmVUeXBlXG4gIH0pO1xuXG4gIHJldHVybiA8Um93IG5hbWU9e2l0ZW0ubmFtZX0gdmFsdWU9e2Rpc3BsYXlWYWx1ZX0gZGVsdGFWYWx1ZT17ZGlzcGxheURlbHRhVmFsdWV9IC8+O1xufTtcblxuLy8gVE9ETzogc3VwcG9ydGluZyBjb21wYXJhdGl2ZSB2YWx1ZSBmb3IgYWdncmVnYXRlZCBjZWxscyBhcyB3ZWxsXG5jb25zdCBDZWxsSW5mbyA9ICh7ZGF0YSwgbGF5ZXJ9KSA9PiB7XG4gIGNvbnN0IHtjb2xvckZpZWxkLCBzaXplRmllbGR9ID0gbGF5ZXIuY29uZmlnO1xuXG4gIHJldHVybiAoXG4gICAgPHRib2R5PlxuICAgICAgPFJvdyBuYW1lPXsndG90YWwgcG9pbnRzJ30ga2V5PVwiY291bnRcIiB2YWx1ZT17ZGF0YS5wb2ludHMgJiYgZGF0YS5wb2ludHMubGVuZ3RofSAvPlxuICAgICAge2NvbG9yRmllbGQgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3IgPyAoXG4gICAgICAgIDxSb3dcbiAgICAgICAgICBuYW1lPXtsYXllci5nZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oJ2NvbG9yJykubWVhc3VyZX1cbiAgICAgICAgICBrZXk9XCJjb2xvclwiXG4gICAgICAgICAgdmFsdWU9e2RhdGEuY29sb3JWYWx1ZSB8fCAnTi9BJ31cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3NpemVGaWVsZCAmJiBsYXllci52aXN1YWxDaGFubmVscy5zaXplID8gKFxuICAgICAgICA8Um93XG4gICAgICAgICAgbmFtZT17bGF5ZXIuZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKCdzaXplJykubWVhc3VyZX1cbiAgICAgICAgICBrZXk9XCJzaXplXCJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5lbGV2YXRpb25WYWx1ZSB8fCAnTi9BJ31cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvdGJvZHk+XG4gICk7XG59O1xuXG5jb25zdCBMYXllckhvdmVySW5mb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IExheWVySG92ZXJJbmZvID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtkYXRhLCBsYXllcn0gPSBwcm9wcztcblxuICAgIGlmICghZGF0YSB8fCAhbGF5ZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1pbmZvXCI+XG4gICAgICAgIDxTdHlsZWRMYXllck5hbWUgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJfX2xheWVyLW5hbWVcIj5cbiAgICAgICAgICA8TGF5ZXJzIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgIHtwcm9wcy5sYXllci5jb25maWcubGFiZWx9XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJOYW1lPlxuICAgICAgICA8U3R5bGVkVGFibGU+XG4gICAgICAgICAge3Byb3BzLmxheWVyLmlzQWdncmVnYXRlZCA/IDxDZWxsSW5mbyB7Li4ucHJvcHN9IC8+IDogPEVudHJ5SW5mbyB7Li4ucHJvcHN9IC8+fVxuICAgICAgICA8L1N0eWxlZFRhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBMYXllckhvdmVySW5mby5wcm9wVHlwZXMgPSB7XG4gICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBmaWVsZHNUb1Nob3c6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLCBQcm9wVHlwZXMub2JqZWN0XSlcbiAgfTtcbiAgcmV0dXJuIExheWVySG92ZXJJbmZvO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJIb3ZlckluZm9GYWN0b3J5O1xuIl19