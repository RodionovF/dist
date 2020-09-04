"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _timeRangeSlider = _interopRequireDefault(require("../common/time-range-slider"));

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

/*
 * TimeRangeFilter -> TimeRangeSlider -> RangeSlider
 */
TimeRangeFilterFactory.deps = [_timeRangeSlider["default"]];

function TimeRangeFilterFactory(TimeRangeSlider) {
  var TimeRangeFilter = function TimeRangeFilter(_ref) {
    var filter = _ref.filter,
        setFilter = _ref.setFilter,
        isAnimatable = _ref.isAnimatable,
        toggleAnimation = _ref.toggleAnimation,
        hideTimeTitle = _ref.hideTimeTitle;
    return _react["default"].createElement(TimeRangeSlider, {
      id: filter.id,
      domain: filter.domain,
      value: filter.value,
      plotType: filter.plotType,
      lineChart: filter.lineChart,
      step: filter.step,
      speed: filter.speed,
      histogram: filter.enlarged ? filter.enlargedHistogram : filter.histogram,
      onChange: setFilter,
      toggleAnimation: toggleAnimation,
      isAnimatable: isAnimatable,
      isEnlarged: filter.enlarged,
      hideTimeTitle: hideTimeTitle
    });
  };

  return TimeRangeFilter;
}

var _default = TimeRangeFilterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS1yYW5nZS1maWx0ZXIuanMiXSwibmFtZXMiOlsiVGltZVJhbmdlRmlsdGVyRmFjdG9yeSIsImRlcHMiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiVGltZVJhbmdlU2xpZGVyIiwiVGltZVJhbmdlRmlsdGVyIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiaXNBbmltYXRhYmxlIiwidG9nZ2xlQW5pbWF0aW9uIiwiaGlkZVRpbWVUaXRsZSIsImlkIiwiZG9tYWluIiwidmFsdWUiLCJwbG90VHlwZSIsImxpbmVDaGFydCIsInN0ZXAiLCJzcGVlZCIsImVubGFyZ2VkIiwiZW5sYXJnZWRIaXN0b2dyYW0iLCJoaXN0b2dyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7OztBQUlBQSxzQkFBc0IsQ0FBQ0MsSUFBdkIsR0FBOEIsQ0FBQ0MsMkJBQUQsQ0FBOUI7O0FBRUEsU0FBU0Ysc0JBQVQsQ0FBZ0NHLGVBQWhDLEVBQWlEO0FBQy9DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxRQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVQyxTQUFWLFFBQVVBLFNBQVY7QUFBQSxRQUFxQkMsWUFBckIsUUFBcUJBLFlBQXJCO0FBQUEsUUFBbUNDLGVBQW5DLFFBQW1DQSxlQUFuQztBQUFBLFFBQW9EQyxhQUFwRCxRQUFvREEsYUFBcEQ7QUFBQSxXQUN0QixnQ0FBQyxlQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssRUFEYjtBQUVFLE1BQUEsTUFBTSxFQUFFTCxNQUFNLENBQUNNLE1BRmpCO0FBR0UsTUFBQSxLQUFLLEVBQUVOLE1BQU0sQ0FBQ08sS0FIaEI7QUFJRSxNQUFBLFFBQVEsRUFBRVAsTUFBTSxDQUFDUSxRQUpuQjtBQUtFLE1BQUEsU0FBUyxFQUFFUixNQUFNLENBQUNTLFNBTHBCO0FBTUUsTUFBQSxJQUFJLEVBQUVULE1BQU0sQ0FBQ1UsSUFOZjtBQU9FLE1BQUEsS0FBSyxFQUFFVixNQUFNLENBQUNXLEtBUGhCO0FBUUUsTUFBQSxTQUFTLEVBQUVYLE1BQU0sQ0FBQ1ksUUFBUCxHQUFrQlosTUFBTSxDQUFDYSxpQkFBekIsR0FBNkNiLE1BQU0sQ0FBQ2MsU0FSakU7QUFTRSxNQUFBLFFBQVEsRUFBRWIsU0FUWjtBQVVFLE1BQUEsZUFBZSxFQUFFRSxlQVZuQjtBQVdFLE1BQUEsWUFBWSxFQUFFRCxZQVhoQjtBQVlFLE1BQUEsVUFBVSxFQUFFRixNQUFNLENBQUNZLFFBWnJCO0FBYUUsTUFBQSxhQUFhLEVBQUVSO0FBYmpCLE1BRHNCO0FBQUEsR0FBeEI7O0FBa0JBLFNBQU9MLGVBQVA7QUFDRDs7ZUFFY0osc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdGltZS1yYW5nZS1zbGlkZXInO1xuXG4vKlxuICogVGltZVJhbmdlRmlsdGVyIC0+IFRpbWVSYW5nZVNsaWRlciAtPiBSYW5nZVNsaWRlclxuICovXG5cblRpbWVSYW5nZUZpbHRlckZhY3RvcnkuZGVwcyA9IFtUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5XTtcblxuZnVuY3Rpb24gVGltZVJhbmdlRmlsdGVyRmFjdG9yeShUaW1lUmFuZ2VTbGlkZXIpIHtcbiAgY29uc3QgVGltZVJhbmdlRmlsdGVyID0gKHtmaWx0ZXIsIHNldEZpbHRlciwgaXNBbmltYXRhYmxlLCB0b2dnbGVBbmltYXRpb24sIGhpZGVUaW1lVGl0bGV9KSA9PiAoXG4gICAgPFRpbWVSYW5nZVNsaWRlclxuICAgICAgaWQ9e2ZpbHRlci5pZH1cbiAgICAgIGRvbWFpbj17ZmlsdGVyLmRvbWFpbn1cbiAgICAgIHZhbHVlPXtmaWx0ZXIudmFsdWV9XG4gICAgICBwbG90VHlwZT17ZmlsdGVyLnBsb3RUeXBlfVxuICAgICAgbGluZUNoYXJ0PXtmaWx0ZXIubGluZUNoYXJ0fVxuICAgICAgc3RlcD17ZmlsdGVyLnN0ZXB9XG4gICAgICBzcGVlZD17ZmlsdGVyLnNwZWVkfVxuICAgICAgaGlzdG9ncmFtPXtmaWx0ZXIuZW5sYXJnZWQgPyBmaWx0ZXIuZW5sYXJnZWRIaXN0b2dyYW0gOiBmaWx0ZXIuaGlzdG9ncmFtfVxuICAgICAgb25DaGFuZ2U9e3NldEZpbHRlcn1cbiAgICAgIHRvZ2dsZUFuaW1hdGlvbj17dG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgaXNBbmltYXRhYmxlPXtpc0FuaW1hdGFibGV9XG4gICAgICBpc0VubGFyZ2VkPXtmaWx0ZXIuZW5sYXJnZWR9XG4gICAgICBoaWRlVGltZVRpdGxlPXtoaWRlVGltZVRpdGxlfVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIFRpbWVSYW5nZUZpbHRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVJhbmdlRmlsdGVyRmFjdG9yeTtcbiJdfQ==