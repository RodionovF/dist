"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RootContext = void 0;

var _react = require("react");

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
var identity = function identity(state) {
  return state;
}; // New Context API only supported after 16.3


var KeplerGlContext = (0, _react.createContext)({
  selector: identity,
  id: 'map'
});
var RootContext = (0, _react.createContext)(null);
exports.RootContext = RootContext;
var _default = KeplerGlContext;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbnRleHQuanMiXSwibmFtZXMiOlsiaWRlbnRpdHkiLCJzdGF0ZSIsIktlcGxlckdsQ29udGV4dCIsInNlbGVjdG9yIiwiaWQiLCJSb290Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW9CQTs7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSjtBQUFBLENBQXRCLEMsQ0FDQTs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDBCQUFjO0FBQ3BDQyxFQUFBQSxRQUFRLEVBQUVILFFBRDBCO0FBRXBDSSxFQUFBQSxFQUFFLEVBQUU7QUFGZ0MsQ0FBZCxDQUF4QjtBQUtPLElBQU1DLFdBQVcsR0FBRywwQkFBYyxJQUFkLENBQXBCOztlQUVRSCxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGlkZW50aXR5ID0gc3RhdGUgPT4gc3RhdGU7XG4vLyBOZXcgQ29udGV4dCBBUEkgb25seSBzdXBwb3J0ZWQgYWZ0ZXIgMTYuM1xuY29uc3QgS2VwbGVyR2xDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHNlbGVjdG9yOiBpZGVudGl0eSxcbiAgaWQ6ICdtYXAnXG59KTtcblxuZXhwb3J0IGNvbnN0IFJvb3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgS2VwbGVyR2xDb250ZXh0O1xuIl19