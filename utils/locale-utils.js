"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenMessages = void 0;

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
// Flat messages since react-intl does not seem to support nested structures
// Adapted from https://medium.com/siren-apparel-press/internationalization-and-localization-of-sirenapparel-eu-sirenapparel-us-and-sirenapparel-asia-ddee266066a2
var flattenMessages = function flattenMessages(nestedMessages) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Object.keys(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? "".concat(prefix, ".").concat(key) : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

exports.flattenMessages = flattenMessages;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2NhbGUtdXRpbHMuanMiXSwibmFtZXMiOlsiZmxhdHRlbk1lc3NhZ2VzIiwibmVzdGVkTWVzc2FnZXMiLCJwcmVmaXgiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwibWVzc2FnZXMiLCJrZXkiLCJ2YWx1ZSIsInByZWZpeGVkS2V5IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ08sSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxjQUFELEVBQWlDO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEVBQU87QUFDOUQsU0FBT0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILGNBQVosRUFBNEJJLE1BQTVCLENBQW1DLFVBQUNDLFFBQUQsRUFBV0MsR0FBWCxFQUFtQjtBQUMzRCxRQUFNQyxLQUFLLEdBQUdQLGNBQWMsQ0FBQ00sR0FBRCxDQUE1QjtBQUNBLFFBQU1FLFdBQVcsR0FBR1AsTUFBTSxhQUFNQSxNQUFOLGNBQWdCSyxHQUFoQixJQUF3QkEsR0FBbEQ7O0FBQ0EsUUFBSSxPQUFPQyxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCRixNQUFBQSxRQUFRLENBQUNHLFdBQUQsQ0FBUixHQUF3QkQsS0FBeEI7QUFDRCxLQUZELE1BRU87QUFDTEwsTUFBQUEsTUFBTSxDQUFDTyxNQUFQLENBQWNKLFFBQWQsRUFBd0JOLGVBQWUsQ0FBQ1EsS0FBRCxFQUFRQyxXQUFSLENBQXZDO0FBQ0Q7O0FBQ0QsV0FBT0gsUUFBUDtBQUNELEdBVE0sRUFTSixFQVRJLENBQVA7QUFVRCxDQVhNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gRmxhdCBtZXNzYWdlcyBzaW5jZSByZWFjdC1pbnRsIGRvZXMgbm90IHNlZW0gdG8gc3VwcG9ydCBuZXN0ZWQgc3RydWN0dXJlc1xuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vbWVkaXVtLmNvbS9zaXJlbi1hcHBhcmVsLXByZXNzL2ludGVybmF0aW9uYWxpemF0aW9uLWFuZC1sb2NhbGl6YXRpb24tb2Ytc2lyZW5hcHBhcmVsLWV1LXNpcmVuYXBwYXJlbC11cy1hbmQtc2lyZW5hcHBhcmVsLWFzaWEtZGRlZTI2NjA2NmEyXG5leHBvcnQgY29uc3QgZmxhdHRlbk1lc3NhZ2VzID0gKG5lc3RlZE1lc3NhZ2VzLCBwcmVmaXggPSAnJykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobmVzdGVkTWVzc2FnZXMpLnJlZHVjZSgobWVzc2FnZXMsIGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gbmVzdGVkTWVzc2FnZXNba2V5XTtcbiAgICBjb25zdCBwcmVmaXhlZEtleSA9IHByZWZpeCA/IGAke3ByZWZpeH0uJHtrZXl9YCA6IGtleTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbWVzc2FnZXNbcHJlZml4ZWRLZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24obWVzc2FnZXMsIGZsYXR0ZW5NZXNzYWdlcyh2YWx1ZSwgcHJlZml4ZWRLZXkpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9LCB7fSk7XG59O1xuIl19