"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultInteraction = getDefaultInteraction;
exports.findFieldsToShow = findFieldsToShow;
exports.getTooltipDisplayDeltaValue = getTooltipDisplayDeltaValue;
exports.getTooltipDisplayValue = getTooltipDisplayValue;
exports.BRUSH_CONFIG = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("./data-utils");

var _icons = require("../components/common/icons");

var _tooltip = require("../constants/tooltip");

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

/**
 * @type {typeof import('./interaction-utils').getDefaultInteraction}
 */
function getDefaultInteraction() {
  return {
    tooltip: {
      id: 'tooltip',
      label: 'interactions.tooltip',
      enabled: true,
      iconComponent: _icons.Messages,
      config: {
        fieldsToShow: {},
        compareMode: false,
        compareType: _tooltip.COMPARE_TYPES.ABSOLUTE
      }
    },
    geocoder: {
      id: 'geocoder',
      label: 'interactions.geocoder',
      enabled: false,
      iconComponent: _icons.Pin,
      position: null
    },
    brush: {
      id: 'brush',
      label: 'interactions.brush',
      enabled: false,
      iconComponent: _icons.Crosshairs,
      config: {
        // size is in km
        size: 0.5
      }
    },
    coordinate: {
      id: 'coordinate',
      label: 'interactions.coordinate',
      enabled: false,
      iconComponent: _icons.CursorClick,
      position: null
    }
  };
}

var BRUSH_CONFIG = {
  range: [0, 50]
};
/**
 * @type {typeof import('./interaction-utils').findFieldsToShow}
 */

exports.BRUSH_CONFIG = BRUSH_CONFIG;

function findFieldsToShow(_ref) {
  var fields = _ref.fields,
      id = _ref.id;

  // first find default tooltip fields for trips
  var fieldsToShow = _defaultSettings.DEFAULT_TOOLTIP_FIELDS.reduce(function (prev, curr) {
    if (fields.find(function (_ref2) {
      var name = _ref2.name;
      return curr.name === name;
    })) {
      prev.push(curr);
    }

    return prev;
  }, []);

  return (0, _defineProperty2["default"])({}, id, fieldsToShow.length ? fieldsToShow : autoFindTooltipFields(fields));
}

function autoFindTooltipFields(fields) {
  var ptFields = _mergeFieldPairs(_defaultSettings.TRIP_POINT_FIELDS); // filter out the default fields that contains lat and lng and any geometry


  var fieldsToShow = fields.filter(function (_ref4) {
    var name = _ref4.name,
        type = _ref4.type;
    return name.replace(/[_,.]+/g, ' ').trim().split(' ').every(function (seg) {
      return !ptFields.includes(seg);
    }) && type !== _defaultSettings.ALL_FIELD_TYPES.geojson && type !== 'object';
  });
  return fieldsToShow.slice(0, _defaultSettings.MAX_DEFAULT_TOOLTIPS).map(function (_ref5) {
    var name = _ref5.name;
    return {
      name: name,
      format: null
    };
  });
}

function _mergeFieldPairs(pairs) {
  return pairs.reduce(function (prev, pair) {
    return [].concat((0, _toConsumableArray2["default"])(prev), (0, _toConsumableArray2["default"])(pair));
  }, []);
}
/**
 * @type {typeof import('./interaction-utils').getTooltipDisplayDeltaValue}
 */


function getTooltipDisplayDeltaValue(_ref6) {
  var primaryData = _ref6.primaryData,
      field = _ref6.field,
      compareType = _ref6.compareType,
      data = _ref6.data,
      fieldIdx = _ref6.fieldIdx,
      item = _ref6.item;
  var displayDeltaValue = null;

  if (primaryData && ( // comparison mode only works for numeric field
  field.type === _defaultSettings.ALL_FIELD_TYPES.integer || field.type === _defaultSettings.ALL_FIELD_TYPES.real)) {
    var baseDp = primaryData[fieldIdx];
    var dp = data[fieldIdx];

    if ((0, _dataUtils.isNumber)(baseDp) && (0, _dataUtils.isNumber)(dp)) {
      var deltaValue = compareType === _tooltip.COMPARE_TYPES.RELATIVE ? dp / baseDp - 1 : dp - baseDp;
      var deltaFormat = compareType === _tooltip.COMPARE_TYPES.RELATIVE ? _tooltip.TOOLTIP_FORMATS.DECIMAL_PERCENT_FULL_2[_tooltip.TOOLTIP_KEY] : item.format || _tooltip.TOOLTIP_FORMATS.DECIMAL_DECIMAL_FIXED_3[_tooltip.TOOLTIP_KEY];
      displayDeltaValue = (0, _dataUtils.getFormatter)(deltaFormat)(deltaValue); // safely cast string

      displayDeltaValue = (0, _dataUtils.defaultFormatter)(displayDeltaValue);
      var deltaFirstChar = displayDeltaValue.charAt(0);

      if (deltaFirstChar !== '+' && deltaFirstChar !== '-') {
        displayDeltaValue = "+".concat(displayDeltaValue);
      }
    } else {
      displayDeltaValue = '-';
    }
  }

  return displayDeltaValue;
}
/**
 * @type {typeof import('./interaction-utils').getTooltipDisplayValue}
 */


function getTooltipDisplayValue(_ref7) {
  var item = _ref7.item,
      field = _ref7.field,
      data = _ref7.data,
      fieldIdx = _ref7.fieldIdx;

  if (!(0, _dataUtils.notNullorUndefined)(data[fieldIdx])) {
    return '';
  }

  return item.format ? (0, _dataUtils.getFormatter)(item.format, field)(data[fieldIdx]) : (0, _dataUtils.parseFieldValue)(data[fieldIdx], field.type);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbnRlcmFjdGlvbi11dGlscy5qcyJdLCJuYW1lcyI6WyJnZXREZWZhdWx0SW50ZXJhY3Rpb24iLCJ0b29sdGlwIiwiaWQiLCJsYWJlbCIsImVuYWJsZWQiLCJpY29uQ29tcG9uZW50IiwiTWVzc2FnZXMiLCJjb25maWciLCJmaWVsZHNUb1Nob3ciLCJjb21wYXJlTW9kZSIsImNvbXBhcmVUeXBlIiwiQ09NUEFSRV9UWVBFUyIsIkFCU09MVVRFIiwiZ2VvY29kZXIiLCJQaW4iLCJwb3NpdGlvbiIsImJydXNoIiwiQ3Jvc3NoYWlycyIsInNpemUiLCJjb29yZGluYXRlIiwiQ3Vyc29yQ2xpY2siLCJCUlVTSF9DT05GSUciLCJyYW5nZSIsImZpbmRGaWVsZHNUb1Nob3ciLCJmaWVsZHMiLCJERUZBVUxUX1RPT0xUSVBfRklFTERTIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJmaW5kIiwibmFtZSIsInB1c2giLCJsZW5ndGgiLCJhdXRvRmluZFRvb2x0aXBGaWVsZHMiLCJwdEZpZWxkcyIsIl9tZXJnZUZpZWxkUGFpcnMiLCJUUklQX1BPSU5UX0ZJRUxEUyIsImZpbHRlciIsInR5cGUiLCJyZXBsYWNlIiwidHJpbSIsInNwbGl0IiwiZXZlcnkiLCJzZWciLCJpbmNsdWRlcyIsIkFMTF9GSUVMRF9UWVBFUyIsImdlb2pzb24iLCJzbGljZSIsIk1BWF9ERUZBVUxUX1RPT0xUSVBTIiwibWFwIiwiZm9ybWF0IiwicGFpcnMiLCJwYWlyIiwiZ2V0VG9vbHRpcERpc3BsYXlEZWx0YVZhbHVlIiwicHJpbWFyeURhdGEiLCJmaWVsZCIsImRhdGEiLCJmaWVsZElkeCIsIml0ZW0iLCJkaXNwbGF5RGVsdGFWYWx1ZSIsImludGVnZXIiLCJyZWFsIiwiYmFzZURwIiwiZHAiLCJkZWx0YVZhbHVlIiwiUkVMQVRJVkUiLCJkZWx0YUZvcm1hdCIsIlRPT0xUSVBfRk9STUFUUyIsIkRFQ0lNQUxfUEVSQ0VOVF9GVUxMXzIiLCJUT09MVElQX0tFWSIsIkRFQ0lNQUxfREVDSU1BTF9GSVhFRF8zIiwiZGVsdGFGaXJzdENoYXIiLCJjaGFyQXQiLCJnZXRUb29sdGlwRGlzcGxheVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFNQTs7QUFPQTs7QUFDQTs7QUFsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0JBOzs7QUFHTyxTQUFTQSxxQkFBVCxHQUFpQztBQUN0QyxTQUFPO0FBQ0xDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxFQUFFLEVBQUUsU0FERztBQUVQQyxNQUFBQSxLQUFLLEVBQUUsc0JBRkE7QUFHUEMsTUFBQUEsT0FBTyxFQUFFLElBSEY7QUFJUEMsTUFBQUEsYUFBYSxFQUFFQyxlQUpSO0FBS1BDLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxZQUFZLEVBQUUsRUFEUjtBQUVOQyxRQUFBQSxXQUFXLEVBQUUsS0FGUDtBQUdOQyxRQUFBQSxXQUFXLEVBQUVDLHVCQUFjQztBQUhyQjtBQUxELEtBREo7QUFZTEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JYLE1BQUFBLEVBQUUsRUFBRSxVQURJO0FBRVJDLE1BQUFBLEtBQUssRUFBRSx1QkFGQztBQUdSQyxNQUFBQSxPQUFPLEVBQUUsS0FIRDtBQUlSQyxNQUFBQSxhQUFhLEVBQUVTLFVBSlA7QUFLUkMsTUFBQUEsUUFBUSxFQUFFO0FBTEYsS0FaTDtBQW1CTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xkLE1BQUFBLEVBQUUsRUFBRSxPQURDO0FBRUxDLE1BQUFBLEtBQUssRUFBRSxvQkFGRjtBQUdMQyxNQUFBQSxPQUFPLEVBQUUsS0FISjtBQUlMQyxNQUFBQSxhQUFhLEVBQUVZLGlCQUpWO0FBS0xWLE1BQUFBLE1BQU0sRUFBRTtBQUNOO0FBQ0FXLFFBQUFBLElBQUksRUFBRTtBQUZBO0FBTEgsS0FuQkY7QUE2QkxDLElBQUFB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QUF3QjtBQUFBLE1BQWpCQyxJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxRQUFXLFNBQVhBLFFBQVc7O0FBQ3BFLE1BQUksQ0FBQyxtQ0FBbUJELElBQUksQ0FBQ0MsUUFBRCxDQUF2QixDQUFMLEVBQXlDO0FBQ3ZDLFdBQU8sRUFBUDtBQUNEOztBQUVELFNBQU9DLElBQUksQ0FBQ1IsTUFBTCxHQUNILDZCQUFhUSxJQUFJLENBQUNSLE1BQWxCLEVBQTBCSyxLQUExQixFQUFpQ0MsSUFBSSxDQUFDQyxRQUFELENBQXJDLENBREcsR0FFSCxnQ0FBZ0JELElBQUksQ0FBQ0MsUUFBRCxDQUFwQixFQUFnQ0YsS0FBSyxDQUFDakIsSUFBdEMsQ0FGSjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtcbiAgREVGQVVMVF9UT09MVElQX0ZJRUxEUyxcbiAgTUFYX0RFRkFVTFRfVE9PTFRJUFMsXG4gIEFMTF9GSUVMRF9UWVBFUyxcbiAgVFJJUF9QT0lOVF9GSUVMRFNcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtcbiAgcGFyc2VGaWVsZFZhbHVlLFxuICBnZXRGb3JtYXR0ZXIsXG4gIGlzTnVtYmVyLFxuICBkZWZhdWx0Rm9ybWF0dGVyLFxuICBub3ROdWxsb3JVbmRlZmluZWRcbn0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge01lc3NhZ2VzLCBDcm9zc2hhaXJzLCBDdXJzb3JDbGljaywgUGlufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucy9pbmRleCc7XG5pbXBvcnQge1RPT0xUSVBfRk9STUFUUywgVE9PTFRJUF9LRVksIENPTVBBUkVfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy90b29sdGlwJztcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9pbnRlcmFjdGlvbi11dGlscycpLmdldERlZmF1bHRJbnRlcmFjdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRJbnRlcmFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0b29sdGlwOiB7XG4gICAgICBpZDogJ3Rvb2x0aXAnLFxuICAgICAgbGFiZWw6ICdpbnRlcmFjdGlvbnMudG9vbHRpcCcsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgaWNvbkNvbXBvbmVudDogTWVzc2FnZXMsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZmllbGRzVG9TaG93OiB7fSxcbiAgICAgICAgY29tcGFyZU1vZGU6IGZhbHNlLFxuICAgICAgICBjb21wYXJlVHlwZTogQ09NUEFSRV9UWVBFUy5BQlNPTFVURVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VvY29kZXI6IHtcbiAgICAgIGlkOiAnZ2VvY29kZXInLFxuICAgICAgbGFiZWw6ICdpbnRlcmFjdGlvbnMuZ2VvY29kZXInLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBpY29uQ29tcG9uZW50OiBQaW4sXG4gICAgICBwb3NpdGlvbjogbnVsbFxuICAgIH0sXG4gICAgYnJ1c2g6IHtcbiAgICAgIGlkOiAnYnJ1c2gnLFxuICAgICAgbGFiZWw6ICdpbnRlcmFjdGlvbnMuYnJ1c2gnLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBpY29uQ29tcG9uZW50OiBDcm9zc2hhaXJzLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC8vIHNpemUgaXMgaW4ga21cbiAgICAgICAgc2l6ZTogMC41XG4gICAgICB9XG4gICAgfSxcbiAgICBjb29yZGluYXRlOiB7XG4gICAgICBpZDogJ2Nvb3JkaW5hdGUnLFxuICAgICAgbGFiZWw6ICdpbnRlcmFjdGlvbnMuY29vcmRpbmF0ZScsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGljb25Db21wb25lbnQ6IEN1cnNvckNsaWNrLFxuICAgICAgcG9zaXRpb246IG51bGxcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBCUlVTSF9DT05GSUcgPSB7XG4gIHJhbmdlOiBbMCwgNTBdXG59O1xuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ludGVyYWN0aW9uLXV0aWxzJykuZmluZEZpZWxkc1RvU2hvd31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaWVsZHNUb1Nob3coe2ZpZWxkcywgaWR9KSB7XG4gIC8vIGZpcnN0IGZpbmQgZGVmYXVsdCB0b29sdGlwIGZpZWxkcyBmb3IgdHJpcHNcbiAgY29uc3QgZmllbGRzVG9TaG93ID0gREVGQVVMVF9UT09MVElQX0ZJRUxEUy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICBpZiAoZmllbGRzLmZpbmQoKHtuYW1lfSkgPT4gY3Vyci5uYW1lID09PSBuYW1lKSkge1xuICAgICAgcHJldi5wdXNoKGN1cnIpO1xuICAgIH1cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgW2lkXTogZmllbGRzVG9TaG93Lmxlbmd0aCA/IGZpZWxkc1RvU2hvdyA6IGF1dG9GaW5kVG9vbHRpcEZpZWxkcyhmaWVsZHMpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGF1dG9GaW5kVG9vbHRpcEZpZWxkcyhmaWVsZHMpIHtcbiAgY29uc3QgcHRGaWVsZHMgPSBfbWVyZ2VGaWVsZFBhaXJzKFRSSVBfUE9JTlRfRklFTERTKTtcbiAgLy8gZmlsdGVyIG91dCB0aGUgZGVmYXVsdCBmaWVsZHMgdGhhdCBjb250YWlucyBsYXQgYW5kIGxuZyBhbmQgYW55IGdlb21ldHJ5XG4gIGNvbnN0IGZpZWxkc1RvU2hvdyA9IGZpZWxkcy5maWx0ZXIoXG4gICAgKHtuYW1lLCB0eXBlfSkgPT5cbiAgICAgIG5hbWVcbiAgICAgICAgLnJlcGxhY2UoL1tfLC5dKy9nLCAnICcpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLmV2ZXJ5KHNlZyA9PiAhcHRGaWVsZHMuaW5jbHVkZXMoc2VnKSkgJiZcbiAgICAgIHR5cGUgIT09IEFMTF9GSUVMRF9UWVBFUy5nZW9qc29uICYmXG4gICAgICB0eXBlICE9PSAnb2JqZWN0J1xuICApO1xuXG4gIHJldHVybiBmaWVsZHNUb1Nob3cuc2xpY2UoMCwgTUFYX0RFRkFVTFRfVE9PTFRJUFMpLm1hcCgoe25hbWV9KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBmb3JtYXQ6IG51bGxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX21lcmdlRmllbGRQYWlycyhwYWlycykge1xuICByZXR1cm4gcGFpcnMucmVkdWNlKChwcmV2LCBwYWlyKSA9PiBbLi4ucHJldiwgLi4ucGFpcl0sIFtdKTtcbn1cblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9pbnRlcmFjdGlvbi11dGlscycpLmdldFRvb2x0aXBEaXNwbGF5RGVsdGFWYWx1ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvb2x0aXBEaXNwbGF5RGVsdGFWYWx1ZSh7XG4gIHByaW1hcnlEYXRhLFxuICBmaWVsZCxcbiAgY29tcGFyZVR5cGUsXG4gIGRhdGEsXG4gIGZpZWxkSWR4LFxuICBpdGVtXG59KSB7XG4gIGxldCBkaXNwbGF5RGVsdGFWYWx1ZSA9IG51bGw7XG5cbiAgaWYgKFxuICAgIHByaW1hcnlEYXRhICYmXG4gICAgLy8gY29tcGFyaXNvbiBtb2RlIG9ubHkgd29ya3MgZm9yIG51bWVyaWMgZmllbGRcbiAgICAoZmllbGQudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLmludGVnZXIgfHwgZmllbGQudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnJlYWwpXG4gICkge1xuICAgIGNvbnN0IGJhc2VEcCA9IHByaW1hcnlEYXRhW2ZpZWxkSWR4XTtcbiAgICBjb25zdCBkcCA9IGRhdGFbZmllbGRJZHhdO1xuICAgIGlmIChpc051bWJlcihiYXNlRHApICYmIGlzTnVtYmVyKGRwKSkge1xuICAgICAgY29uc3QgZGVsdGFWYWx1ZSA9IGNvbXBhcmVUeXBlID09PSBDT01QQVJFX1RZUEVTLlJFTEFUSVZFID8gZHAgLyBiYXNlRHAgLSAxIDogZHAgLSBiYXNlRHA7XG4gICAgICBjb25zdCBkZWx0YUZvcm1hdCA9XG4gICAgICAgIGNvbXBhcmVUeXBlID09PSBDT01QQVJFX1RZUEVTLlJFTEFUSVZFXG4gICAgICAgICAgPyBUT09MVElQX0ZPUk1BVFMuREVDSU1BTF9QRVJDRU5UX0ZVTExfMltUT09MVElQX0tFWV1cbiAgICAgICAgICA6IChpdGVtLmZvcm1hdCB8fCBUT09MVElQX0ZPUk1BVFMuREVDSU1BTF9ERUNJTUFMX0ZJWEVEXzNbVE9PTFRJUF9LRVldKTtcblxuICAgICAgZGlzcGxheURlbHRhVmFsdWUgPSBnZXRGb3JtYXR0ZXIoZGVsdGFGb3JtYXQpKGRlbHRhVmFsdWUpO1xuXG4gICAgICAvLyBzYWZlbHkgY2FzdCBzdHJpbmdcbiAgICAgIGRpc3BsYXlEZWx0YVZhbHVlID0gZGVmYXVsdEZvcm1hdHRlcihkaXNwbGF5RGVsdGFWYWx1ZSk7XG4gICAgICBjb25zdCBkZWx0YUZpcnN0Q2hhciA9IGRpc3BsYXlEZWx0YVZhbHVlLmNoYXJBdCgwKTtcbiAgICAgIGlmIChkZWx0YUZpcnN0Q2hhciAhPT0gJysnICYmIGRlbHRhRmlyc3RDaGFyICE9PSAnLScpIHtcbiAgICAgICAgZGlzcGxheURlbHRhVmFsdWUgPSBgKyR7ZGlzcGxheURlbHRhVmFsdWV9YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheURlbHRhVmFsdWUgPSAnLSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BsYXlEZWx0YVZhbHVlO1xufVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ludGVyYWN0aW9uLXV0aWxzJykuZ2V0VG9vbHRpcERpc3BsYXlWYWx1ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvb2x0aXBEaXNwbGF5VmFsdWUoe2l0ZW0sIGZpZWxkLCBkYXRhLCBmaWVsZElkeH0pIHtcbiAgaWYgKCFub3ROdWxsb3JVbmRlZmluZWQoZGF0YVtmaWVsZElkeF0pKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW0uZm9ybWF0XG4gICAgPyBnZXRGb3JtYXR0ZXIoaXRlbS5mb3JtYXQsIGZpZWxkKShkYXRhW2ZpZWxkSWR4XSlcbiAgICA6IHBhcnNlRmllbGRWYWx1ZShkYXRhW2ZpZWxkSWR4XSwgZmllbGQudHlwZSk7XG59XG4iXX0=