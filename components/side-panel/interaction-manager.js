"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _interactionPanel = _interopRequireDefault(require("./interaction-panel/interaction-panel"));

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
InteractionManagerFactory.deps = [_interactionPanel["default"]];

function InteractionManagerFactory(InteractionPanel) {
  var InteractionManager = function InteractionManager(_ref) {
    var interactionConfig = _ref.interactionConfig,
        datasets = _ref.datasets,
        onConfigChange = _ref.onConfigChange;
    return _react["default"].createElement("div", {
      className: "interaction-manager"
    }, Object.keys(interactionConfig).map(function (key) {
      return _react["default"].createElement(InteractionPanel, {
        datasets: datasets,
        config: interactionConfig[key],
        key: key,
        onConfigChange: onConfigChange
      });
    }));
  };

  return InteractionManager;
}

var _default = InteractionManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IiwiZGVwcyIsIkludGVyYWN0aW9uUGFuZWxGYWN0b3J5IiwiSW50ZXJhY3Rpb25QYW5lbCIsIkludGVyYWN0aW9uTWFuYWdlciIsImludGVyYWN0aW9uQ29uZmlnIiwiZGF0YXNldHMiLCJvbkNvbmZpZ0NoYW5nZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQUEseUJBQXlCLENBQUNDLElBQTFCLEdBQWlDLENBQUNDLDRCQUFELENBQWpDOztBQUVBLFNBQVNGLHlCQUFULENBQW1DRyxnQkFBbkMsRUFBcUQ7QUFDbkQsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFFBQUVDLGlCQUFGLFFBQUVBLGlCQUFGO0FBQUEsUUFBcUJDLFFBQXJCLFFBQXFCQSxRQUFyQjtBQUFBLFFBQStCQyxjQUEvQixRQUErQkEsY0FBL0I7QUFBQSxXQUN6QjtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLGlCQUFaLEVBQStCSyxHQUEvQixDQUFtQyxVQUFBQyxHQUFHO0FBQUEsYUFDckMsZ0NBQUMsZ0JBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBRUwsUUFEWjtBQUVFLFFBQUEsTUFBTSxFQUFFRCxpQkFBaUIsQ0FBQ00sR0FBRCxDQUYzQjtBQUdFLFFBQUEsR0FBRyxFQUFFQSxHQUhQO0FBSUUsUUFBQSxjQUFjLEVBQUVKO0FBSmxCLFFBRHFDO0FBQUEsS0FBdEMsQ0FESCxDQUR5QjtBQUFBLEdBQTNCOztBQWFBLFNBQU9ILGtCQUFQO0FBQ0Q7O2VBRWNKLHlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnRlcmFjdGlvblBhbmVsRmFjdG9yeSBmcm9tICcuL2ludGVyYWN0aW9uLXBhbmVsL2ludGVyYWN0aW9uLXBhbmVsJztcblxuSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeS5kZXBzID0gW0ludGVyYWN0aW9uUGFuZWxGYWN0b3J5XTtcblxuZnVuY3Rpb24gSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeShJbnRlcmFjdGlvblBhbmVsKSB7XG4gIGNvbnN0IEludGVyYWN0aW9uTWFuYWdlciA9ICh7aW50ZXJhY3Rpb25Db25maWcsIGRhdGFzZXRzLCBvbkNvbmZpZ0NoYW5nZX0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLW1hbmFnZXJcIj5cbiAgICAgIHtPYmplY3Qua2V5cyhpbnRlcmFjdGlvbkNvbmZpZykubWFwKGtleSA9PiAoXG4gICAgICAgIDxJbnRlcmFjdGlvblBhbmVsXG4gICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgIGNvbmZpZz17aW50ZXJhY3Rpb25Db25maWdba2V5XX1cbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICBvbkNvbmZpZ0NoYW5nZT17b25Db25maWdDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gSW50ZXJhY3Rpb25NYW5hZ2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5O1xuIl19