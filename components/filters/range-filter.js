"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeFilterFactory;

var _react = _interopRequireDefault(require("react"));

var _rangeSlider = _interopRequireDefault(require("../common/range-slider"));

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
RangeFilterFactory.deps = [_rangeSlider["default"]];

function RangeFilterFactory(RangeSlider) {
  var RangeFilter = function RangeFilter(_ref) {
    var filter = _ref.filter,
        setFilter = _ref.setFilter;
    return _react["default"].createElement("div", null, _react["default"].createElement(RangeSlider, {
      range: filter.domain,
      value0: filter.value[0],
      value1: filter.value[1],
      step: filter.step,
      histogram: filter.histogram,
      isEnlarged: filter.isEnlarged,
      onChange: setFilter,
      inputTheme: "secondary"
    }));
  };

  return RangeFilter;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2UtZmlsdGVyLmpzIl0sIm5hbWVzIjpbIlJhbmdlRmlsdGVyRmFjdG9yeSIsImRlcHMiLCJSYW5nZVNsaWRlckZhY3RvcnkiLCJSYW5nZVNsaWRlciIsIlJhbmdlRmlsdGVyIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZG9tYWluIiwidmFsdWUiLCJzdGVwIiwiaGlzdG9ncmFtIiwiaXNFbmxhcmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBQSxrQkFBa0IsQ0FBQ0MsSUFBbkIsR0FBMEIsQ0FBQ0MsdUJBQUQsQ0FBMUI7O0FBRWUsU0FBU0Ysa0JBQVQsQ0FBNEJHLFdBQTVCLEVBQXlDO0FBQ3RELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsU0FBVixRQUFVQSxTQUFWO0FBQUEsV0FDbEIsNkNBQ0UsZ0NBQUMsV0FBRDtBQUNFLE1BQUEsS0FBSyxFQUFFRCxNQUFNLENBQUNFLE1BRGhCO0FBRUUsTUFBQSxNQUFNLEVBQUVGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLENBQWIsQ0FGVjtBQUdFLE1BQUEsTUFBTSxFQUFFSCxNQUFNLENBQUNHLEtBQVAsQ0FBYSxDQUFiLENBSFY7QUFJRSxNQUFBLElBQUksRUFBRUgsTUFBTSxDQUFDSSxJQUpmO0FBS0UsTUFBQSxTQUFTLEVBQUVKLE1BQU0sQ0FBQ0ssU0FMcEI7QUFNRSxNQUFBLFVBQVUsRUFBRUwsTUFBTSxDQUFDTSxVQU5yQjtBQU9FLE1BQUEsUUFBUSxFQUFFTCxTQVBaO0FBUUUsTUFBQSxVQUFVLEVBQUM7QUFSYixNQURGLENBRGtCO0FBQUEsR0FBcEI7O0FBZUEsU0FBT0YsV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcblxuUmFuZ2VGaWx0ZXJGYWN0b3J5LmRlcHMgPSBbUmFuZ2VTbGlkZXJGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VGaWx0ZXJGYWN0b3J5KFJhbmdlU2xpZGVyKSB7XG4gIGNvbnN0IFJhbmdlRmlsdGVyID0gKHtmaWx0ZXIsIHNldEZpbHRlcn0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgPFJhbmdlU2xpZGVyXG4gICAgICAgIHJhbmdlPXtmaWx0ZXIuZG9tYWlufVxuICAgICAgICB2YWx1ZTA9e2ZpbHRlci52YWx1ZVswXX1cbiAgICAgICAgdmFsdWUxPXtmaWx0ZXIudmFsdWVbMV19XG4gICAgICAgIHN0ZXA9e2ZpbHRlci5zdGVwfVxuICAgICAgICBoaXN0b2dyYW09e2ZpbHRlci5oaXN0b2dyYW19XG4gICAgICAgIGlzRW5sYXJnZWQ9e2ZpbHRlci5pc0VubGFyZ2VkfVxuICAgICAgICBvbkNoYW5nZT17c2V0RmlsdGVyfVxuICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIFJhbmdlRmlsdGVyO1xufVxuIl19