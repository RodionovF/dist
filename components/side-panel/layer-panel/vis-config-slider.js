"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VisConfigSliderFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _reactIntl = require("react-intl");

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
var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  property: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].func]),
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  step: _propTypes["default"].number,
  isRanged: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].bool
};
VisConfigSliderFactory.deps = [_rangeSlider["default"]];

function VisConfigSliderFactory(RangeSlider) {
  var VisConfigSlider = function VisConfigSlider(_ref) {
    var config = _ref.layer.config,
        property = _ref.property,
        label = _ref.label,
        range = _ref.range,
        step = _ref.step,
        isRanged = _ref.isRanged,
        disabled = _ref.disabled,
        _onChange2 = _ref.onChange,
        inputTheme = _ref.inputTheme;
    return _react["default"].createElement(_styledComponents.SidePanelSection, {
      disabled: Boolean(disabled)
    }, label ? _react["default"].createElement(_styledComponents.PanelLabel, null, typeof label === 'string' ? _react["default"].createElement(_reactIntl.FormattedMessage, {
      id: label
    }) : typeof label === 'function' ? _react["default"].createElement(_reactIntl.FormattedMessage, {
      id: label(config)
    }) : _react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "property.".concat(property)
    })) : null, _react["default"].createElement(RangeSlider, {
      range: range,
      value0: isRanged ? config.visConfig[property][0] : range[0],
      value1: isRanged ? config.visConfig[property][1] : config.visConfig[property],
      step: step,
      isRanged: Boolean(isRanged),
      onChange: function onChange(value) {
        return _onChange2((0, _defineProperty2["default"])({}, property, isRanged ? value : value[1]));
      },
      inputTheme: inputTheme,
      showInput: true
    }));
  };

  VisConfigSlider.propTypes = propTypes;
  return VisConfigSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdmlzLWNvbmZpZy1zbGlkZXIuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGF5ZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicHJvcGVydHkiLCJzdHJpbmciLCJvbkNoYW5nZSIsImZ1bmMiLCJsYWJlbCIsIm9uZU9mVHlwZSIsImJvb2wiLCJyYW5nZSIsImFycmF5T2YiLCJudW1iZXIiLCJzdGVwIiwiaXNSYW5nZWQiLCJkaXNhYmxlZCIsImlucHV0VGhlbWUiLCJWaXNDb25maWdTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlJhbmdlU2xpZGVyRmFjdG9yeSIsIlJhbmdlU2xpZGVyIiwiVmlzQ29uZmlnU2xpZGVyIiwiY29uZmlnIiwiQm9vbGVhbiIsInZpc0NvbmZpZyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVJLE1BQVYsQ0FBaUJGLFVBRlg7QUFHaEJHLEVBQUFBLFFBQVEsRUFBRUwsc0JBQVVNLElBQVYsQ0FBZUosVUFIVDtBQUloQkssRUFBQUEsS0FBSyxFQUFFUCxzQkFBVVEsU0FBVixDQUFvQixDQUFDUixzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVTLElBQTdCLEVBQW1DVCxzQkFBVU0sSUFBN0MsQ0FBcEIsQ0FKUztBQUtoQkksRUFBQUEsS0FBSyxFQUFFVixzQkFBVVcsT0FBVixDQUFrQlgsc0JBQVVZLE1BQTVCLEVBQW9DVixVQUwzQjtBQU1oQlcsRUFBQUEsSUFBSSxFQUFFYixzQkFBVVksTUFOQTtBQU9oQkUsRUFBQUEsUUFBUSxFQUFFZCxzQkFBVVMsSUFQSjtBQVFoQk0sRUFBQUEsUUFBUSxFQUFFZixzQkFBVVMsSUFSSjtBQVNoQk8sRUFBQUEsVUFBVSxFQUFFaEIsc0JBQVVTO0FBVE4sQ0FBbEI7QUFZQVEsc0JBQXNCLENBQUNDLElBQXZCLEdBQThCLENBQUNDLHVCQUFELENBQTlCOztBQUVlLFNBQVNGLHNCQUFULENBQWdDRyxXQUFoQyxFQUE2QztBQUMxRCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsUUFDZEMsTUFEYyxRQUN0QnZCLEtBRHNCLENBQ2R1QixNQURjO0FBQUEsUUFFdEJuQixRQUZzQixRQUV0QkEsUUFGc0I7QUFBQSxRQUd0QkksS0FIc0IsUUFHdEJBLEtBSHNCO0FBQUEsUUFJdEJHLEtBSnNCLFFBSXRCQSxLQUpzQjtBQUFBLFFBS3RCRyxJQUxzQixRQUt0QkEsSUFMc0I7QUFBQSxRQU10QkMsUUFOc0IsUUFNdEJBLFFBTnNCO0FBQUEsUUFPdEJDLFFBUHNCLFFBT3RCQSxRQVBzQjtBQUFBLFFBUXRCVixVQVJzQixRQVF0QkEsUUFSc0I7QUFBQSxRQVN0QlcsVUFUc0IsUUFTdEJBLFVBVHNCO0FBQUEsV0FXdEIsZ0NBQUMsa0NBQUQ7QUFBa0IsTUFBQSxRQUFRLEVBQUVPLE9BQU8sQ0FBQ1IsUUFBRDtBQUFuQyxPQUNHUixLQUFLLEdBQ0osZ0NBQUMsNEJBQUQsUUFDRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLEdBQ0MsZ0NBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVBO0FBQXRCLE1BREQsR0FFRyxPQUFPQSxLQUFQLEtBQWlCLFVBQWpCLEdBQ0YsZ0NBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVBLEtBQUssQ0FBQ2UsTUFBRDtBQUEzQixNQURFLEdBR0YsZ0NBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLHFCQUFjbkIsUUFBZDtBQUFwQixNQU5KLENBREksR0FVRixJQVhOLEVBWUUsZ0NBQUMsV0FBRDtBQUNFLE1BQUEsS0FBSyxFQUFFTyxLQURUO0FBRUUsTUFBQSxNQUFNLEVBQUVJLFFBQVEsR0FBR1EsTUFBTSxDQUFDRSxTQUFQLENBQWlCckIsUUFBakIsRUFBMkIsQ0FBM0IsQ0FBSCxHQUFtQ08sS0FBSyxDQUFDLENBQUQsQ0FGMUQ7QUFHRSxNQUFBLE1BQU0sRUFBRUksUUFBUSxHQUFHUSxNQUFNLENBQUNFLFNBQVAsQ0FBaUJyQixRQUFqQixFQUEyQixDQUEzQixDQUFILEdBQW1DbUIsTUFBTSxDQUFDRSxTQUFQLENBQWlCckIsUUFBakIsQ0FIckQ7QUFJRSxNQUFBLElBQUksRUFBRVUsSUFKUjtBQUtFLE1BQUEsUUFBUSxFQUFFVSxPQUFPLENBQUNULFFBQUQsQ0FMbkI7QUFNRSxNQUFBLFFBQVEsRUFBRSxrQkFBQVcsS0FBSztBQUFBLGVBQUlwQixVQUFRLHNDQUFHRixRQUFILEVBQWNXLFFBQVEsR0FBR1csS0FBSCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUF0QyxFQUFaO0FBQUEsT0FOakI7QUFPRSxNQUFBLFVBQVUsRUFBRVQsVUFQZDtBQVFFLE1BQUEsU0FBUztBQVJYLE1BWkYsQ0FYc0I7QUFBQSxHQUF4Qjs7QUFvQ0FLLEVBQUFBLGVBQWUsQ0FBQ3ZCLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUVBLFNBQU91QixlQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7UGFuZWxMYWJlbCwgU2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgUmFuZ2VTbGlkZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3JhbmdlLXNsaWRlcic7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHByb3BlcnR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gIHJhbmdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBpc1JhbmdlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cblZpc0NvbmZpZ1NsaWRlckZhY3RvcnkuZGVwcyA9IFtSYW5nZVNsaWRlckZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXNDb25maWdTbGlkZXJGYWN0b3J5KFJhbmdlU2xpZGVyKSB7XG4gIGNvbnN0IFZpc0NvbmZpZ1NsaWRlciA9ICh7XG4gICAgbGF5ZXI6IHtjb25maWd9LFxuICAgIHByb3BlcnR5LFxuICAgIGxhYmVsLFxuICAgIHJhbmdlLFxuICAgIHN0ZXAsXG4gICAgaXNSYW5nZWQsXG4gICAgZGlzYWJsZWQsXG4gICAgb25DaGFuZ2UsXG4gICAgaW5wdXRUaGVtZVxuICB9KSA9PiAoXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24gZGlzYWJsZWQ9e0Jvb2xlYW4oZGlzYWJsZWQpfT5cbiAgICAgIHtsYWJlbCA/IChcbiAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAge3R5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bGFiZWx9IC8+XG4gICAgICAgICAgKSA6IHR5cGVvZiBsYWJlbCA9PT0gJ2Z1bmN0aW9uJyA/IChcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtsYWJlbChjb25maWcpfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YHByb3BlcnR5LiR7cHJvcGVydHl9YH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICByYW5nZT17cmFuZ2V9XG4gICAgICAgIHZhbHVlMD17aXNSYW5nZWQgPyBjb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XVswXSA6IHJhbmdlWzBdfVxuICAgICAgICB2YWx1ZTE9e2lzUmFuZ2VkID8gY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV1bMV0gOiBjb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX1cbiAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgaXNSYW5nZWQ9e0Jvb2xlYW4oaXNSYW5nZWQpfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IGlzUmFuZ2VkID8gdmFsdWUgOiB2YWx1ZVsxXX0pfVxuICAgICAgICBpbnB1dFRoZW1lPXtpbnB1dFRoZW1lfVxuICAgICAgICBzaG93SW5wdXRcbiAgICAgIC8+XG4gICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICApO1xuXG4gIFZpc0NvbmZpZ1NsaWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFZpc0NvbmZpZ1NsaWRlcjtcbn1cbiJdfQ==