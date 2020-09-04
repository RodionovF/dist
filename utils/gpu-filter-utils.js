"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFilterGpuMode = setFilterGpuMode;
exports.assignGpuChannels = assignGpuChannels;
exports.assignGpuChannel = assignGpuChannel;
exports.resetFilterGpuMode = resetFilterGpuMode;
exports.getGpuFilterProps = getGpuFilterProps;
exports.getDatasetFieldIndexForFilter = getDatasetFieldIndexForFilter;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("./utils");

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("./data-utils");

var _moment = _interopRequireDefault(require("moment"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Set gpu mode based on current number of gpu filters exists
 * @type {typeof import('./gpu-filter-utils').setFilterGpuMode}
 */
function setFilterGpuMode(filter, filters) {
  // filter can be apply to multiple dataset, hence gpu filter mode should also be
  // an array, however, to keep us sane, for now, we only check if there is available channel for every dataId,
  // if all of them has, we set gpu mode to true
  // TODO: refactor filter so we don't keep an array of everything
  filter.dataId.forEach(function (dataId, datasetIdx) {
    var gpuFilters = filters.filter(function (f) {
      return f.dataId.includes(dataId) && f.gpu;
    });

    if (filter.gpu && gpuFilters.length === _defaultSettings.MAX_GPU_FILTERS) {
      return (0, _utils.set)(['gpu'], false, filter);
    }
  });
  return filter;
}
/**
 * Scan though all filters and assign gpu chanel to gpu filter
 * @type {typeof import('./gpu-filter-utils').assignGpuChannels}
 */


function assignGpuChannels(allFilters) {
  return allFilters.reduce(function (accu, f, index) {
    var filters = accu; // if gpu is true assign and validate gpu Channel

    if (f.gpu) {
      f = assignGpuChannel(f, accu);
      filters = (0, _utils.set)([index], f, accu);
    }

    return filters;
  }, allFilters);
}
/**
 * Assign a new gpu filter a channel based on first availability
 * @type {typeof import('./gpu-filter-utils').assignGpuChannel}
 */


function assignGpuChannel(filter, filters) {
  // find first available channel
  if (!filter.gpu) {
    return filter;
  }

  var gpuChannel = filter.gpuChannel || [];
  filter.dataId.forEach(function (dataId, datasetIdx) {
    var findGpuChannel = function findGpuChannel(channel) {
      return function (f) {
        var dataIdx = (0, _utils.toArray)(f.dataId).indexOf(dataId);
        return f.id !== filter.id && dataIdx > -1 && f.gpu && (0, _utils.toArray)(f.gpuChannel)[dataIdx] === channel;
      };
    };

    if (Number.isFinite(gpuChannel[datasetIdx]) && !filters.find(findGpuChannel(gpuChannel[datasetIdx]))) {
      // if value is already assigned and valid
      return;
    }

    var i = 0;

    while (i < _defaultSettings.MAX_GPU_FILTERS) {
      if (!filters.find(findGpuChannel(i))) {
        gpuChannel[datasetIdx] = i;
        return;
      }

      i++;
    }
  }); // if cannot find channel for all dataid, set gpu back to false
  // TODO: refactor filter to handle same filter different gpu mode

  if (!gpuChannel.length || !gpuChannel.every(Number.isFinite)) {
    return _objectSpread({}, filter, {
      gpu: false
    });
  }

  return _objectSpread({}, filter, {
    gpuChannel: gpuChannel
  });
}
/**
 * Edit filter.gpu to ensure that only
 * X number of gpu filers can coexist.
 * @type {typeof import('./gpu-filter-utils').resetFilterGpuMode}
 */


function resetFilterGpuMode(filters) {
  var gpuPerDataset = {};
  return filters.map(function (f, i) {
    if (f.gpu) {
      var gpu = true;
      (0, _utils.toArray)(f.dataId).forEach(function (dataId) {
        var count = gpuPerDataset[dataId];

        if (count === _defaultSettings.MAX_GPU_FILTERS) {
          gpu = false;
        } else {
          gpuPerDataset[dataId] = count ? count + 1 : 1;
        }
      });

      if (!gpu) {
        return (0, _utils.set)(['gpu'], false, f);
      }
    }

    return f;
  });
}
/**
 * Initial filter uniform
 * @returns {Array<Array<Number>>}
 */


function getEmptyFilterRange() {
  return new Array(_defaultSettings.MAX_GPU_FILTERS).fill(0).map(function (d) {
    return [0, 0];
  });
} // By default filterValueAccessor expect each datum to be formated as {index, data}
// data is the row in allData, and index is its index in allData


var defaultGetIndex = function defaultGetIndex(d) {
  return d.index;
};

var defaultGetData = function defaultGetData(d) {
  return d.data;
};
/**
 *
 * @param {Array<Object>} channels
 * @return {Function} getFilterValue
 */


var getFilterValueAccessor = function getFilterValueAccessor(channels, dataId, fields) {
  return function () {
    var getIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetIndex;
    var getData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetData;
    return function (d) {
      return (// for empty channel, value is 0 and min max would be [0, 0]
        channels.map(function (filter) {
          if (!filter) {
            return 0;
          }

          var fieldIndex = getDatasetFieldIndexForFilter(dataId, filter);
          var field = fields[fieldIndex];
          var value = filter.type === _defaultSettings.FILTER_TYPES.timeRange ? field.filterProps && Array.isArray(field.filterProps.mappedValue) ? field.filterProps.mappedValue[getIndex(d)] : _moment["default"].utc(getData(d)[fieldIndex]).valueOf() : getData(d)[fieldIndex];
          return (0, _dataUtils.notNullorUndefined)(value) ? value - filter.domain[0] : Number.MIN_SAFE_INTEGER;
        })
      );
    };
  };
};
/**
 * Get filter properties for gpu filtering
 * @type {typeof import('./gpu-filter-utils').getGpuFilterProps}
 */


function getGpuFilterProps(filters, dataId, fields) {
  var filterRange = getEmptyFilterRange();
  var triggers = {}; // array of filter for each channel, undefined, if no filter is assigned to that channel

  var channels = [];

  var _loop = function _loop(i) {
    var filter = filters.find(function (f) {
      return f.gpu && f.dataId.includes(dataId) && f.gpuChannel && f.gpuChannel[f.dataId.indexOf(dataId)] === i;
    }); // @ts-ignore

    filterRange[i][0] = filter ? filter.value[0] - filter.domain[0] : 0; // @ts-ignore

    filterRange[i][1] = filter ? filter.value[1] - filter.domain[0] : 0;
    triggers["gpuFilter_".concat(i)] = filter ? filter.name[filter.dataId.indexOf(dataId)] : null;
    channels.push(filter);
  };

  for (var i = 0; i < _defaultSettings.MAX_GPU_FILTERS; i++) {
    _loop(i);
  }

  var filterValueAccessor = getFilterValueAccessor(channels, dataId, fields);
  return {
    filterRange: filterRange,
    filterValueUpdateTriggers: triggers,
    filterValueAccessor: filterValueAccessor
  };
}
/**
 * Return dataset field index from filter.fieldIdx
 * The index matches the same dataset index for filter.dataId
 * @type {typeof import('./gpu-filter-utils').getDatasetFieldIndexForFilter}
 */


function getDatasetFieldIndexForFilter(dataId, filter) {
  var datasetIndex = (0, _utils.toArray)(filter.dataId).indexOf(dataId);

  if (datasetIndex < 0) {
    return -1;
  }

  var fieldIndex = filter.fieldIdx[datasetIndex];
  return (0, _dataUtils.notNullorUndefined)(fieldIndex) ? fieldIndex : -1;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9ncHUtZmlsdGVyLXV0aWxzLmpzIl0sIm5hbWVzIjpbInNldEZpbHRlckdwdU1vZGUiLCJmaWx0ZXIiLCJmaWx0ZXJzIiwiZGF0YUlkIiwiZm9yRWFjaCIsImRhdGFzZXRJZHgiLCJncHVGaWx0ZXJzIiwiZiIsImluY2x1ZGVzIiwiZ3B1IiwibGVuZ3RoIiwiTUFYX0dQVV9GSUxURVJTIiwiYXNzaWduR3B1Q2hhbm5lbHMiLCJhbGxGaWx0ZXJzIiwicmVkdWNlIiwiYWNjdSIsImluZGV4IiwiYXNzaWduR3B1Q2hhbm5lbCIsImdwdUNoYW5uZWwiLCJmaW5kR3B1Q2hhbm5lbCIsImNoYW5uZWwiLCJkYXRhSWR4IiwiaW5kZXhPZiIsImlkIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJmaW5kIiwiaSIsImV2ZXJ5IiwicmVzZXRGaWx0ZXJHcHVNb2RlIiwiZ3B1UGVyRGF0YXNldCIsIm1hcCIsImNvdW50IiwiZ2V0RW1wdHlGaWx0ZXJSYW5nZSIsIkFycmF5IiwiZmlsbCIsImQiLCJkZWZhdWx0R2V0SW5kZXgiLCJkZWZhdWx0R2V0RGF0YSIsImRhdGEiLCJnZXRGaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiY2hhbm5lbHMiLCJmaWVsZHMiLCJnZXRJbmRleCIsImdldERhdGEiLCJmaWVsZEluZGV4IiwiZ2V0RGF0YXNldEZpZWxkSW5kZXhGb3JGaWx0ZXIiLCJmaWVsZCIsInZhbHVlIiwidHlwZSIsIkZJTFRFUl9UWVBFUyIsInRpbWVSYW5nZSIsImZpbHRlclByb3BzIiwiaXNBcnJheSIsIm1hcHBlZFZhbHVlIiwibW9tZW50IiwidXRjIiwidmFsdWVPZiIsImRvbWFpbiIsIk1JTl9TQUZFX0lOVEVHRVIiLCJnZXRHcHVGaWx0ZXJQcm9wcyIsImZpbHRlclJhbmdlIiwidHJpZ2dlcnMiLCJuYW1lIiwicHVzaCIsImZpbHRlclZhbHVlQWNjZXNzb3IiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGF0YXNldEluZGV4IiwiZmllbGRJZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7O0FBSU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxPQUFsQyxFQUEyQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUVBRCxFQUFBQSxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixVQUFDRCxNQUFELEVBQVNFLFVBQVQsRUFBd0I7QUFDNUMsUUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNELE1BQVIsQ0FBZSxVQUFBTSxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDSixNQUFGLENBQVNLLFFBQVQsQ0FBa0JMLE1BQWxCLEtBQTZCSSxDQUFDLENBQUNFLEdBQW5DO0FBQUEsS0FBaEIsQ0FBbkI7O0FBRUEsUUFBSVIsTUFBTSxDQUFDUSxHQUFQLElBQWNILFVBQVUsQ0FBQ0ksTUFBWCxLQUFzQkMsZ0NBQXhDLEVBQXlEO0FBQ3ZELGFBQU8sZ0JBQUksQ0FBQyxLQUFELENBQUosRUFBYSxLQUFiLEVBQW9CVixNQUFwQixDQUFQO0FBQ0Q7QUFDRixHQU5EO0FBUUEsU0FBT0EsTUFBUDtBQUNEO0FBRUQ7Ozs7OztBQUlPLFNBQVNXLGlCQUFULENBQTJCQyxVQUEzQixFQUF1QztBQUM1QyxTQUFPQSxVQUFVLENBQUNDLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPUixDQUFQLEVBQVVTLEtBQVYsRUFBb0I7QUFDM0MsUUFBSWQsT0FBTyxHQUFHYSxJQUFkLENBRDJDLENBRzNDOztBQUNBLFFBQUlSLENBQUMsQ0FBQ0UsR0FBTixFQUFXO0FBQ1RGLE1BQUFBLENBQUMsR0FBR1UsZ0JBQWdCLENBQUNWLENBQUQsRUFBSVEsSUFBSixDQUFwQjtBQUNBYixNQUFBQSxPQUFPLEdBQUcsZ0JBQUksQ0FBQ2MsS0FBRCxDQUFKLEVBQWFULENBQWIsRUFBZ0JRLElBQWhCLENBQVY7QUFDRDs7QUFFRCxXQUFPYixPQUFQO0FBQ0QsR0FWTSxFQVVKVyxVQVZJLENBQVA7QUFXRDtBQUNEOzs7Ozs7QUFJTyxTQUFTSSxnQkFBVCxDQUEwQmhCLE1BQTFCLEVBQWtDQyxPQUFsQyxFQUEyQztBQUNoRDtBQUNBLE1BQUksQ0FBQ0QsTUFBTSxDQUFDUSxHQUFaLEVBQWlCO0FBQ2YsV0FBT1IsTUFBUDtBQUNEOztBQUVELE1BQU1pQixVQUFVLEdBQUdqQixNQUFNLENBQUNpQixVQUFQLElBQXFCLEVBQXhDO0FBRUFqQixFQUFBQSxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixVQUFDRCxNQUFELEVBQVNFLFVBQVQsRUFBd0I7QUFDNUMsUUFBTWMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxPQUFPO0FBQUEsYUFBSSxVQUFBYixDQUFDLEVBQUk7QUFDckMsWUFBTWMsT0FBTyxHQUFHLG9CQUFRZCxDQUFDLENBQUNKLE1BQVYsRUFBa0JtQixPQUFsQixDQUEwQm5CLE1BQTFCLENBQWhCO0FBQ0EsZUFDRUksQ0FBQyxDQUFDZ0IsRUFBRixLQUFTdEIsTUFBTSxDQUFDc0IsRUFBaEIsSUFBc0JGLE9BQU8sR0FBRyxDQUFDLENBQWpDLElBQXNDZCxDQUFDLENBQUNFLEdBQXhDLElBQStDLG9CQUFRRixDQUFDLENBQUNXLFVBQVYsRUFBc0JHLE9BQXRCLE1BQW1DRCxPQURwRjtBQUdELE9BTDZCO0FBQUEsS0FBOUI7O0FBT0EsUUFDRUksTUFBTSxDQUFDQyxRQUFQLENBQWdCUCxVQUFVLENBQUNiLFVBQUQsQ0FBMUIsS0FDQSxDQUFDSCxPQUFPLENBQUN3QixJQUFSLENBQWFQLGNBQWMsQ0FBQ0QsVUFBVSxDQUFDYixVQUFELENBQVgsQ0FBM0IsQ0FGSCxFQUdFO0FBQ0E7QUFDQTtBQUNEOztBQUVELFFBQUlzQixDQUFDLEdBQUcsQ0FBUjs7QUFFQSxXQUFPQSxDQUFDLEdBQUdoQixnQ0FBWCxFQUE0QjtBQUMxQixVQUFJLENBQUNULE9BQU8sQ0FBQ3dCLElBQVIsQ0FBYVAsY0FBYyxDQUFDUSxDQUFELENBQTNCLENBQUwsRUFBc0M7QUFDcENULFFBQUFBLFVBQVUsQ0FBQ2IsVUFBRCxDQUFWLEdBQXlCc0IsQ0FBekI7QUFDQTtBQUNEOztBQUNEQSxNQUFBQSxDQUFDO0FBQ0Y7QUFDRixHQXpCRCxFQVJnRCxDQW1DaEQ7QUFDQTs7QUFDQSxNQUFJLENBQUNULFVBQVUsQ0FBQ1IsTUFBWixJQUFzQixDQUFDUSxVQUFVLENBQUNVLEtBQVgsQ0FBaUJKLE1BQU0sQ0FBQ0MsUUFBeEIsQ0FBM0IsRUFBOEQ7QUFDNUQsNkJBQ0t4QixNQURMO0FBRUVRLE1BQUFBLEdBQUcsRUFBRTtBQUZQO0FBSUQ7O0FBRUQsMkJBQ0tSLE1BREw7QUFFRWlCLElBQUFBLFVBQVUsRUFBVkE7QUFGRjtBQUlEO0FBQ0Q7Ozs7Ozs7QUFLTyxTQUFTVyxrQkFBVCxDQUE0QjNCLE9BQTVCLEVBQXFDO0FBQzFDLE1BQU00QixhQUFhLEdBQUcsRUFBdEI7QUFFQSxTQUFPNUIsT0FBTyxDQUFDNkIsR0FBUixDQUFZLFVBQUN4QixDQUFELEVBQUlvQixDQUFKLEVBQVU7QUFDM0IsUUFBSXBCLENBQUMsQ0FBQ0UsR0FBTixFQUFXO0FBQ1QsVUFBSUEsR0FBRyxHQUFHLElBQVY7QUFDQSwwQkFBUUYsQ0FBQyxDQUFDSixNQUFWLEVBQWtCQyxPQUFsQixDQUEwQixVQUFBRCxNQUFNLEVBQUk7QUFDbEMsWUFBTTZCLEtBQUssR0FBR0YsYUFBYSxDQUFDM0IsTUFBRCxDQUEzQjs7QUFFQSxZQUFJNkIsS0FBSyxLQUFLckIsZ0NBQWQsRUFBK0I7QUFDN0JGLFVBQUFBLEdBQUcsR0FBRyxLQUFOO0FBQ0QsU0FGRCxNQUVPO0FBQ0xxQixVQUFBQSxhQUFhLENBQUMzQixNQUFELENBQWIsR0FBd0I2QixLQUFLLEdBQUdBLEtBQUssR0FBRyxDQUFYLEdBQWUsQ0FBNUM7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsVUFBSSxDQUFDdkIsR0FBTCxFQUFVO0FBQ1IsZUFBTyxnQkFBSSxDQUFDLEtBQUQsQ0FBSixFQUFhLEtBQWIsRUFBb0JGLENBQXBCLENBQVA7QUFDRDtBQUNGOztBQUVELFdBQU9BLENBQVA7QUFDRCxHQW5CTSxDQUFQO0FBb0JEO0FBRUQ7Ozs7OztBQUlBLFNBQVMwQixtQkFBVCxHQUErQjtBQUM3QixTQUFPLElBQUlDLEtBQUosQ0FBVXZCLGdDQUFWLEVBQTJCd0IsSUFBM0IsQ0FBZ0MsQ0FBaEMsRUFBbUNKLEdBQW5DLENBQXVDLFVBQUFLLENBQUM7QUFBQSxXQUFJLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBSjtBQUFBLEdBQXhDLENBQVA7QUFDRCxDLENBRUQ7QUFDQTs7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDcEIsS0FBTjtBQUFBLENBQXpCOztBQUNBLElBQU1zQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFGLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNHLElBQU47QUFBQSxDQUF4QjtBQUVBOzs7Ozs7O0FBS0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxRQUFELEVBQVd0QyxNQUFYLEVBQW1CdUMsTUFBbkI7QUFBQSxTQUE4QjtBQUFBLFFBQzNEQyxRQUQyRCx1RUFDaEROLGVBRGdEO0FBQUEsUUFFM0RPLE9BRjJELHVFQUVqRE4sY0FGaUQ7QUFBQSxXQUd4RCxVQUFBRixDQUFDO0FBQUEsYUFDSjtBQUNBSyxRQUFBQSxRQUFRLENBQUNWLEdBQVQsQ0FBYSxVQUFBOUIsTUFBTSxFQUFJO0FBQ3JCLGNBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsbUJBQU8sQ0FBUDtBQUNEOztBQUNELGNBQU00QyxVQUFVLEdBQUdDLDZCQUE2QixDQUFDM0MsTUFBRCxFQUFTRixNQUFULENBQWhEO0FBQ0EsY0FBTThDLEtBQUssR0FBR0wsTUFBTSxDQUFDRyxVQUFELENBQXBCO0FBRUEsY0FBTUcsS0FBSyxHQUNUL0MsTUFBTSxDQUFDZ0QsSUFBUCxLQUFnQkMsOEJBQWFDLFNBQTdCLEdBQ0lKLEtBQUssQ0FBQ0ssV0FBTixJQUFxQmxCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY04sS0FBSyxDQUFDSyxXQUFOLENBQWtCRSxXQUFoQyxDQUFyQixHQUNFUCxLQUFLLENBQUNLLFdBQU4sQ0FBa0JFLFdBQWxCLENBQThCWCxRQUFRLENBQUNQLENBQUQsQ0FBdEMsQ0FERixHQUVFbUIsbUJBQU9DLEdBQVAsQ0FBV1osT0FBTyxDQUFDUixDQUFELENBQVAsQ0FBV1MsVUFBWCxDQUFYLEVBQW1DWSxPQUFuQyxFQUhOLEdBSUliLE9BQU8sQ0FBQ1IsQ0FBRCxDQUFQLENBQVdTLFVBQVgsQ0FMTjtBQU9BLGlCQUFPLG1DQUFtQkcsS0FBbkIsSUFBNEJBLEtBQUssR0FBRy9DLE1BQU0sQ0FBQ3lELE1BQVAsQ0FBYyxDQUFkLENBQXBDLEdBQXVEbEMsTUFBTSxDQUFDbUMsZ0JBQXJFO0FBQ0QsU0FmRDtBQUZJO0FBQUEsS0FIdUQ7QUFBQSxHQUE5QjtBQUFBLENBQS9CO0FBc0JBOzs7Ozs7QUFJTyxTQUFTQyxpQkFBVCxDQUEyQjFELE9BQTNCLEVBQW9DQyxNQUFwQyxFQUE0Q3VDLE1BQTVDLEVBQW9EO0FBQ3pELE1BQU1tQixXQUFXLEdBQUc1QixtQkFBbUIsRUFBdkM7QUFDQSxNQUFNNkIsUUFBUSxHQUFHLEVBQWpCLENBRnlELENBSXpEOztBQUNBLE1BQU1yQixRQUFRLEdBQUcsRUFBakI7O0FBTHlELDZCQU9oRGQsQ0FQZ0Q7QUFRdkQsUUFBTTFCLE1BQU0sR0FBR0MsT0FBTyxDQUFDd0IsSUFBUixDQUNiLFVBQUFuQixDQUFDO0FBQUEsYUFDQ0EsQ0FBQyxDQUFDRSxHQUFGLElBQ0FGLENBQUMsQ0FBQ0osTUFBRixDQUFTSyxRQUFULENBQWtCTCxNQUFsQixDQURBLElBRUFJLENBQUMsQ0FBQ1csVUFGRixJQUdBWCxDQUFDLENBQUNXLFVBQUYsQ0FBYVgsQ0FBQyxDQUFDSixNQUFGLENBQVNtQixPQUFULENBQWlCbkIsTUFBakIsQ0FBYixNQUEyQ3dCLENBSjVDO0FBQUEsS0FEWSxDQUFmLENBUnVELENBZ0J2RDs7QUFDQWtDLElBQUFBLFdBQVcsQ0FBQ2xDLENBQUQsQ0FBWCxDQUFlLENBQWYsSUFBb0IxQixNQUFNLEdBQUdBLE1BQU0sQ0FBQytDLEtBQVAsQ0FBYSxDQUFiLElBQWtCL0MsTUFBTSxDQUFDeUQsTUFBUCxDQUFjLENBQWQsQ0FBckIsR0FBd0MsQ0FBbEUsQ0FqQnVELENBa0J2RDs7QUFDQUcsSUFBQUEsV0FBVyxDQUFDbEMsQ0FBRCxDQUFYLENBQWUsQ0FBZixJQUFvQjFCLE1BQU0sR0FBR0EsTUFBTSxDQUFDK0MsS0FBUCxDQUFhLENBQWIsSUFBa0IvQyxNQUFNLENBQUN5RCxNQUFQLENBQWMsQ0FBZCxDQUFyQixHQUF3QyxDQUFsRTtBQUVBSSxJQUFBQSxRQUFRLHFCQUFjbkMsQ0FBZCxFQUFSLEdBQTZCMUIsTUFBTSxHQUFHQSxNQUFNLENBQUM4RCxJQUFQLENBQVk5RCxNQUFNLENBQUNFLE1BQVAsQ0FBY21CLE9BQWQsQ0FBc0JuQixNQUF0QixDQUFaLENBQUgsR0FBZ0QsSUFBbkY7QUFDQXNDLElBQUFBLFFBQVEsQ0FBQ3VCLElBQVQsQ0FBYy9ELE1BQWQ7QUF0QnVEOztBQU96RCxPQUFLLElBQUkwQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaEIsZ0NBQXBCLEVBQXFDZ0IsQ0FBQyxFQUF0QyxFQUEwQztBQUFBLFVBQWpDQSxDQUFpQztBQWdCekM7O0FBRUQsTUFBTXNDLG1CQUFtQixHQUFHekIsc0JBQXNCLENBQUNDLFFBQUQsRUFBV3RDLE1BQVgsRUFBbUJ1QyxNQUFuQixDQUFsRDtBQUVBLFNBQU87QUFDTG1CLElBQUFBLFdBQVcsRUFBWEEsV0FESztBQUVMSyxJQUFBQSx5QkFBeUIsRUFBRUosUUFGdEI7QUFHTEcsSUFBQUEsbUJBQW1CLEVBQW5CQTtBQUhLLEdBQVA7QUFLRDtBQUVEOzs7Ozs7O0FBS08sU0FBU25CLDZCQUFULENBQXVDM0MsTUFBdkMsRUFBK0NGLE1BQS9DLEVBQXVEO0FBQzVELE1BQU1rRSxZQUFZLEdBQUcsb0JBQVFsRSxNQUFNLENBQUNFLE1BQWYsRUFBdUJtQixPQUF2QixDQUErQm5CLE1BQS9CLENBQXJCOztBQUNBLE1BQUlnRSxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEIsV0FBTyxDQUFDLENBQVI7QUFDRDs7QUFFRCxNQUFNdEIsVUFBVSxHQUFHNUMsTUFBTSxDQUFDbUUsUUFBUCxDQUFnQkQsWUFBaEIsQ0FBbkI7QUFFQSxTQUFPLG1DQUFtQnRCLFVBQW5CLElBQWlDQSxVQUFqQyxHQUE4QyxDQUFDLENBQXREO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge3NldCwgdG9BcnJheX0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge01BWF9HUFVfRklMVEVSUywgRklMVEVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZH0gZnJvbSAnLi9kYXRhLXV0aWxzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLyoqXG4gKiBTZXQgZ3B1IG1vZGUgYmFzZWQgb24gY3VycmVudCBudW1iZXIgb2YgZ3B1IGZpbHRlcnMgZXhpc3RzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9ncHUtZmlsdGVyLXV0aWxzJykuc2V0RmlsdGVyR3B1TW9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckdwdU1vZGUoZmlsdGVyLCBmaWx0ZXJzKSB7XG4gIC8vIGZpbHRlciBjYW4gYmUgYXBwbHkgdG8gbXVsdGlwbGUgZGF0YXNldCwgaGVuY2UgZ3B1IGZpbHRlciBtb2RlIHNob3VsZCBhbHNvIGJlXG4gIC8vIGFuIGFycmF5LCBob3dldmVyLCB0byBrZWVwIHVzIHNhbmUsIGZvciBub3csIHdlIG9ubHkgY2hlY2sgaWYgdGhlcmUgaXMgYXZhaWxhYmxlIGNoYW5uZWwgZm9yIGV2ZXJ5IGRhdGFJZCxcbiAgLy8gaWYgYWxsIG9mIHRoZW0gaGFzLCB3ZSBzZXQgZ3B1IG1vZGUgdG8gdHJ1ZVxuICAvLyBUT0RPOiByZWZhY3RvciBmaWx0ZXIgc28gd2UgZG9uJ3Qga2VlcCBhbiBhcnJheSBvZiBldmVyeXRoaW5nXG5cbiAgZmlsdGVyLmRhdGFJZC5mb3JFYWNoKChkYXRhSWQsIGRhdGFzZXRJZHgpID0+IHtcbiAgICBjb25zdCBncHVGaWx0ZXJzID0gZmlsdGVycy5maWx0ZXIoZiA9PiBmLmRhdGFJZC5pbmNsdWRlcyhkYXRhSWQpICYmIGYuZ3B1KTtcblxuICAgIGlmIChmaWx0ZXIuZ3B1ICYmIGdwdUZpbHRlcnMubGVuZ3RoID09PSBNQVhfR1BVX0ZJTFRFUlMpIHtcbiAgICAgIHJldHVybiBzZXQoWydncHUnXSwgZmFsc2UsIGZpbHRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmlsdGVyO1xufVxuXG4vKipcbiAqIFNjYW4gdGhvdWdoIGFsbCBmaWx0ZXJzIGFuZCBhc3NpZ24gZ3B1IGNoYW5lbCB0byBncHUgZmlsdGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9ncHUtZmlsdGVyLXV0aWxzJykuYXNzaWduR3B1Q2hhbm5lbHN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25HcHVDaGFubmVscyhhbGxGaWx0ZXJzKSB7XG4gIHJldHVybiBhbGxGaWx0ZXJzLnJlZHVjZSgoYWNjdSwgZiwgaW5kZXgpID0+IHtcbiAgICBsZXQgZmlsdGVycyA9IGFjY3U7XG5cbiAgICAvLyBpZiBncHUgaXMgdHJ1ZSBhc3NpZ24gYW5kIHZhbGlkYXRlIGdwdSBDaGFubmVsXG4gICAgaWYgKGYuZ3B1KSB7XG4gICAgICBmID0gYXNzaWduR3B1Q2hhbm5lbChmLCBhY2N1KTtcbiAgICAgIGZpbHRlcnMgPSBzZXQoW2luZGV4XSwgZiwgYWNjdSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH0sIGFsbEZpbHRlcnMpO1xufVxuLyoqXG4gKiBBc3NpZ24gYSBuZXcgZ3B1IGZpbHRlciBhIGNoYW5uZWwgYmFzZWQgb24gZmlyc3QgYXZhaWxhYmlsaXR5XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9ncHUtZmlsdGVyLXV0aWxzJykuYXNzaWduR3B1Q2hhbm5lbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkdwdUNoYW5uZWwoZmlsdGVyLCBmaWx0ZXJzKSB7XG4gIC8vIGZpbmQgZmlyc3QgYXZhaWxhYmxlIGNoYW5uZWxcbiAgaWYgKCFmaWx0ZXIuZ3B1KSB7XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxuXG4gIGNvbnN0IGdwdUNoYW5uZWwgPSBmaWx0ZXIuZ3B1Q2hhbm5lbCB8fCBbXTtcblxuICBmaWx0ZXIuZGF0YUlkLmZvckVhY2goKGRhdGFJZCwgZGF0YXNldElkeCkgPT4ge1xuICAgIGNvbnN0IGZpbmRHcHVDaGFubmVsID0gY2hhbm5lbCA9PiBmID0+IHtcbiAgICAgIGNvbnN0IGRhdGFJZHggPSB0b0FycmF5KGYuZGF0YUlkKS5pbmRleE9mKGRhdGFJZCk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBmLmlkICE9PSBmaWx0ZXIuaWQgJiYgZGF0YUlkeCA+IC0xICYmIGYuZ3B1ICYmIHRvQXJyYXkoZi5ncHVDaGFubmVsKVtkYXRhSWR4XSA9PT0gY2hhbm5lbFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgaWYgKFxuICAgICAgTnVtYmVyLmlzRmluaXRlKGdwdUNoYW5uZWxbZGF0YXNldElkeF0pICYmXG4gICAgICAhZmlsdGVycy5maW5kKGZpbmRHcHVDaGFubmVsKGdwdUNoYW5uZWxbZGF0YXNldElkeF0pKVxuICAgICkge1xuICAgICAgLy8gaWYgdmFsdWUgaXMgYWxyZWFkeSBhc3NpZ25lZCBhbmQgdmFsaWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IE1BWF9HUFVfRklMVEVSUykge1xuICAgICAgaWYgKCFmaWx0ZXJzLmZpbmQoZmluZEdwdUNoYW5uZWwoaSkpKSB7XG4gICAgICAgIGdwdUNoYW5uZWxbZGF0YXNldElkeF0gPSBpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICB9KTtcblxuICAvLyBpZiBjYW5ub3QgZmluZCBjaGFubmVsIGZvciBhbGwgZGF0YWlkLCBzZXQgZ3B1IGJhY2sgdG8gZmFsc2VcbiAgLy8gVE9ETzogcmVmYWN0b3IgZmlsdGVyIHRvIGhhbmRsZSBzYW1lIGZpbHRlciBkaWZmZXJlbnQgZ3B1IG1vZGVcbiAgaWYgKCFncHVDaGFubmVsLmxlbmd0aCB8fCAhZ3B1Q2hhbm5lbC5ldmVyeShOdW1iZXIuaXNGaW5pdGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZpbHRlcixcbiAgICAgIGdwdTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5maWx0ZXIsXG4gICAgZ3B1Q2hhbm5lbFxuICB9O1xufVxuLyoqXG4gKiBFZGl0IGZpbHRlci5ncHUgdG8gZW5zdXJlIHRoYXQgb25seVxuICogWCBudW1iZXIgb2YgZ3B1IGZpbGVycyBjYW4gY29leGlzdC5cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2dwdS1maWx0ZXItdXRpbHMnKS5yZXNldEZpbHRlckdwdU1vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZpbHRlckdwdU1vZGUoZmlsdGVycykge1xuICBjb25zdCBncHVQZXJEYXRhc2V0ID0ge307XG5cbiAgcmV0dXJuIGZpbHRlcnMubWFwKChmLCBpKSA9PiB7XG4gICAgaWYgKGYuZ3B1KSB7XG4gICAgICBsZXQgZ3B1ID0gdHJ1ZTtcbiAgICAgIHRvQXJyYXkoZi5kYXRhSWQpLmZvckVhY2goZGF0YUlkID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSBncHVQZXJEYXRhc2V0W2RhdGFJZF07XG5cbiAgICAgICAgaWYgKGNvdW50ID09PSBNQVhfR1BVX0ZJTFRFUlMpIHtcbiAgICAgICAgICBncHUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncHVQZXJEYXRhc2V0W2RhdGFJZF0gPSBjb3VudCA/IGNvdW50ICsgMSA6IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWdwdSkge1xuICAgICAgICByZXR1cm4gc2V0KFsnZ3B1J10sIGZhbHNlLCBmKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZjtcbiAgfSk7XG59XG5cbi8qKlxuICogSW5pdGlhbCBmaWx0ZXIgdW5pZm9ybVxuICogQHJldHVybnMge0FycmF5PEFycmF5PE51bWJlcj4+fVxuICovXG5mdW5jdGlvbiBnZXRFbXB0eUZpbHRlclJhbmdlKCkge1xuICByZXR1cm4gbmV3IEFycmF5KE1BWF9HUFVfRklMVEVSUykuZmlsbCgwKS5tYXAoZCA9PiBbMCwgMF0pO1xufVxuXG4vLyBCeSBkZWZhdWx0IGZpbHRlclZhbHVlQWNjZXNzb3IgZXhwZWN0IGVhY2ggZGF0dW0gdG8gYmUgZm9ybWF0ZWQgYXMge2luZGV4LCBkYXRhfVxuLy8gZGF0YSBpcyB0aGUgcm93IGluIGFsbERhdGEsIGFuZCBpbmRleCBpcyBpdHMgaW5kZXggaW4gYWxsRGF0YVxuY29uc3QgZGVmYXVsdEdldEluZGV4ID0gZCA9PiBkLmluZGV4O1xuY29uc3QgZGVmYXVsdEdldERhdGEgPSBkID0+IGQuZGF0YTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBjaGFubmVsc1xuICogQHJldHVybiB7RnVuY3Rpb259IGdldEZpbHRlclZhbHVlXG4gKi9cbmNvbnN0IGdldEZpbHRlclZhbHVlQWNjZXNzb3IgPSAoY2hhbm5lbHMsIGRhdGFJZCwgZmllbGRzKSA9PiAoXG4gIGdldEluZGV4ID0gZGVmYXVsdEdldEluZGV4LFxuICBnZXREYXRhID0gZGVmYXVsdEdldERhdGFcbikgPT4gZCA9PlxuICAvLyBmb3IgZW1wdHkgY2hhbm5lbCwgdmFsdWUgaXMgMCBhbmQgbWluIG1heCB3b3VsZCBiZSBbMCwgMF1cbiAgY2hhbm5lbHMubWFwKGZpbHRlciA9PiB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBmaWVsZEluZGV4ID0gZ2V0RGF0YXNldEZpZWxkSW5kZXhGb3JGaWx0ZXIoZGF0YUlkLCBmaWx0ZXIpO1xuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2ZpZWxkSW5kZXhdO1xuXG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgZmlsdGVyLnR5cGUgPT09IEZJTFRFUl9UWVBFUy50aW1lUmFuZ2VcbiAgICAgICAgPyBmaWVsZC5maWx0ZXJQcm9wcyAmJiBBcnJheS5pc0FycmF5KGZpZWxkLmZpbHRlclByb3BzLm1hcHBlZFZhbHVlKVxuICAgICAgICAgID8gZmllbGQuZmlsdGVyUHJvcHMubWFwcGVkVmFsdWVbZ2V0SW5kZXgoZCldXG4gICAgICAgICAgOiBtb21lbnQudXRjKGdldERhdGEoZClbZmllbGRJbmRleF0pLnZhbHVlT2YoKVxuICAgICAgICA6IGdldERhdGEoZClbZmllbGRJbmRleF07XG5cbiAgICByZXR1cm4gbm90TnVsbG9yVW5kZWZpbmVkKHZhbHVlKSA/IHZhbHVlIC0gZmlsdGVyLmRvbWFpblswXSA6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuICB9KTtcblxuLyoqXG4gKiBHZXQgZmlsdGVyIHByb3BlcnRpZXMgZm9yIGdwdSBmaWx0ZXJpbmdcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2dwdS1maWx0ZXItdXRpbHMnKS5nZXRHcHVGaWx0ZXJQcm9wc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdwdUZpbHRlclByb3BzKGZpbHRlcnMsIGRhdGFJZCwgZmllbGRzKSB7XG4gIGNvbnN0IGZpbHRlclJhbmdlID0gZ2V0RW1wdHlGaWx0ZXJSYW5nZSgpO1xuICBjb25zdCB0cmlnZ2VycyA9IHt9O1xuXG4gIC8vIGFycmF5IG9mIGZpbHRlciBmb3IgZWFjaCBjaGFubmVsLCB1bmRlZmluZWQsIGlmIG5vIGZpbHRlciBpcyBhc3NpZ25lZCB0byB0aGF0IGNoYW5uZWxcbiAgY29uc3QgY2hhbm5lbHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWF9HUFVfRklMVEVSUzsgaSsrKSB7XG4gICAgY29uc3QgZmlsdGVyID0gZmlsdGVycy5maW5kKFxuICAgICAgZiA9PlxuICAgICAgICBmLmdwdSAmJlxuICAgICAgICBmLmRhdGFJZC5pbmNsdWRlcyhkYXRhSWQpICYmXG4gICAgICAgIGYuZ3B1Q2hhbm5lbCAmJlxuICAgICAgICBmLmdwdUNoYW5uZWxbZi5kYXRhSWQuaW5kZXhPZihkYXRhSWQpXSA9PT0gaVxuICAgICk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZmlsdGVyUmFuZ2VbaV1bMF0gPSBmaWx0ZXIgPyBmaWx0ZXIudmFsdWVbMF0gLSBmaWx0ZXIuZG9tYWluWzBdIDogMDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZmlsdGVyUmFuZ2VbaV1bMV0gPSBmaWx0ZXIgPyBmaWx0ZXIudmFsdWVbMV0gLSBmaWx0ZXIuZG9tYWluWzBdIDogMDtcblxuICAgIHRyaWdnZXJzW2BncHVGaWx0ZXJfJHtpfWBdID0gZmlsdGVyID8gZmlsdGVyLm5hbWVbZmlsdGVyLmRhdGFJZC5pbmRleE9mKGRhdGFJZCldIDogbnVsbDtcbiAgICBjaGFubmVscy5wdXNoKGZpbHRlcik7XG4gIH1cblxuICBjb25zdCBmaWx0ZXJWYWx1ZUFjY2Vzc29yID0gZ2V0RmlsdGVyVmFsdWVBY2Nlc3NvcihjaGFubmVscywgZGF0YUlkLCBmaWVsZHMpO1xuXG4gIHJldHVybiB7XG4gICAgZmlsdGVyUmFuZ2UsXG4gICAgZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VyczogdHJpZ2dlcnMsXG4gICAgZmlsdGVyVmFsdWVBY2Nlc3NvclxuICB9O1xufVxuXG4vKipcbiAqIFJldHVybiBkYXRhc2V0IGZpZWxkIGluZGV4IGZyb20gZmlsdGVyLmZpZWxkSWR4XG4gKiBUaGUgaW5kZXggbWF0Y2hlcyB0aGUgc2FtZSBkYXRhc2V0IGluZGV4IGZvciBmaWx0ZXIuZGF0YUlkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9ncHUtZmlsdGVyLXV0aWxzJykuZ2V0RGF0YXNldEZpZWxkSW5kZXhGb3JGaWx0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhc2V0RmllbGRJbmRleEZvckZpbHRlcihkYXRhSWQsIGZpbHRlcikge1xuICBjb25zdCBkYXRhc2V0SW5kZXggPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpLmluZGV4T2YoZGF0YUlkKTtcbiAgaWYgKGRhdGFzZXRJbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb25zdCBmaWVsZEluZGV4ID0gZmlsdGVyLmZpZWxkSWR4W2RhdGFzZXRJbmRleF07XG5cbiAgcmV0dXJuIG5vdE51bGxvclVuZGVmaW5lZChmaWVsZEluZGV4KSA/IGZpZWxkSW5kZXggOiAtMTtcbn1cbiJdfQ==