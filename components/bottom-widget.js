"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BottomWidgetFactory;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _timeWidget = _interopRequireDefault(require("./filters/time-widget"));

var _animationControl = _interopRequireDefault(require("./common/animation-control/animation-control"));

var _defaultSettings = require("../constants/default-settings");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  width: ", "px;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  filters: _propTypes["default"].arrayOf(_propTypes["default"].object),
  datasets: _propTypes["default"].object,
  uiState: _propTypes["default"].object,
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
  animationConfig: _propTypes["default"].object,
  visStateActions: _propTypes["default"].object,
  sidePanelWidth: _propTypes["default"].number,
  containerW: _propTypes["default"].number
};
var maxWidth = 1080;
BottomWidgetFactory.deps = [_timeWidget["default"], _animationControl["default"]];

var BottomWidgetContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.bottomWidgetPaddingTop;
}, function (props) {
  return props.theme.bottomWidgetPaddingRight;
}, function (props) {
  return props.theme.bottomWidgetPaddingBottom;
}, function (props) {
  return props.theme.bottomWidgetPaddingLeft;
}, function (props) {
  return props.width;
});

function BottomWidgetFactory(TimeWidget, AnimationControl) {
  var BottomWidget = function BottomWidget(props) {
    var datasets = props.datasets,
        filters = props.filters,
        animationConfig = props.animationConfig,
        visStateActions = props.visStateActions,
        containerW = props.containerW,
        uiState = props.uiState,
        sidePanelWidth = props.sidePanelWidth,
        layers = props.layers;
    var activeSidePanel = uiState.activeSidePanel,
        readOnly = uiState.readOnly;
    var isOpen = Boolean(activeSidePanel);
    var enlargedFilterIdx = filters.findIndex(function (f) {
      return f.enlarged && f.type === _defaultSettings.FILTER_TYPES.timeRange;
    });
    var isAnyFilterAnimating = filters.some(function (f) {
      return f.isAnimating;
    });
    var enlargedFilterWidth = isOpen ? containerW - sidePanelWidth : containerW; // show playback control if layers contain trip layer & at least one trip layer is visible

    var animatedLayer = layers.filter(function (l) {
      return l.config.animation && l.config.animation.enabled && l.config.isVisible;
    });
    var readToAnimation = Array.isArray(animationConfig.domain) && animationConfig.currentTime; // if animation control is showing, hide time display in time slider

    var showFloatingTimeDisplay = !animatedLayer.length;
    var showAnimationControl = animatedLayer.length && readToAnimation;
    var showTimeWidget = enlargedFilterIdx > -1 && Object.keys(datasets).length > 0; // The bottom widget can hide clickable elements so do not render it if not needed

    if (!showAnimationControl && !showTimeWidget) {
      return null;
    }

    return _react["default"].createElement(BottomWidgetContainer, {
      width: Math.min(maxWidth, enlargedFilterWidth),
      className: "bottom-widget--container"
    }, showAnimationControl ? _react["default"].createElement(AnimationControl, {
      animationConfig: animationConfig,
      updateAnimationTime: visStateActions.updateAnimationTime,
      updateAnimationSpeed: visStateActions.updateLayerAnimationSpeed
    }) : null, showTimeWidget ? _react["default"].createElement(TimeWidget, {
      filter: filters[enlargedFilterIdx],
      index: enlargedFilterIdx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      datasets: datasets,
      readOnly: readOnly,
      showTimeDisplay: showFloatingTimeDisplay,
      setFilterPlot: visStateActions.setFilterPlot,
      setFilter: visStateActions.setFilter,
      toggleAnimation: visStateActions.toggleFilterAnimation,
      updateAnimationSpeed: visStateActions.updateFilterAnimationSpeed,
      enlargeFilter: visStateActions.enlargeFilter
    }) : null);
  };

  BottomWidget.propTypes = propTypes;
  return BottomWidget;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2JvdHRvbS13aWRnZXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiZmlsdGVycyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJkYXRhc2V0cyIsInVpU3RhdGUiLCJsYXllcnMiLCJhbmltYXRpb25Db25maWciLCJ2aXNTdGF0ZUFjdGlvbnMiLCJzaWRlUGFuZWxXaWR0aCIsIm51bWJlciIsImNvbnRhaW5lclciLCJtYXhXaWR0aCIsIkJvdHRvbVdpZGdldEZhY3RvcnkiLCJkZXBzIiwiVGltZVdpZGdldEZhY3RvcnkiLCJBbmltYXRpb25Db250cm9sRmFjdG9yeSIsIkJvdHRvbVdpZGdldENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJib3R0b21XaWRnZXRQYWRkaW5nVG9wIiwiYm90dG9tV2lkZ2V0UGFkZGluZ1JpZ2h0IiwiYm90dG9tV2lkZ2V0UGFkZGluZ0JvdHRvbSIsImJvdHRvbVdpZGdldFBhZGRpbmdMZWZ0Iiwid2lkdGgiLCJUaW1lV2lkZ2V0IiwiQW5pbWF0aW9uQ29udHJvbCIsIkJvdHRvbVdpZGdldCIsImFjdGl2ZVNpZGVQYW5lbCIsInJlYWRPbmx5IiwiaXNPcGVuIiwiQm9vbGVhbiIsImVubGFyZ2VkRmlsdGVySWR4IiwiZmluZEluZGV4IiwiZiIsImVubGFyZ2VkIiwidHlwZSIsIkZJTFRFUl9UWVBFUyIsInRpbWVSYW5nZSIsImlzQW55RmlsdGVyQW5pbWF0aW5nIiwic29tZSIsImlzQW5pbWF0aW5nIiwiZW5sYXJnZWRGaWx0ZXJXaWR0aCIsImFuaW1hdGVkTGF5ZXIiLCJmaWx0ZXIiLCJsIiwiY29uZmlnIiwiYW5pbWF0aW9uIiwiZW5hYmxlZCIsImlzVmlzaWJsZSIsInJlYWRUb0FuaW1hdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsImRvbWFpbiIsImN1cnJlbnRUaW1lIiwic2hvd0Zsb2F0aW5nVGltZURpc3BsYXkiLCJsZW5ndGgiLCJzaG93QW5pbWF0aW9uQ29udHJvbCIsInNob3dUaW1lV2lkZ2V0IiwiT2JqZWN0Iiwia2V5cyIsIk1hdGgiLCJtaW4iLCJ1cGRhdGVBbmltYXRpb25UaW1lIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZCIsInNldEZpbHRlclBsb3QiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZCIsImVubGFyZ2VGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QixDQURPO0FBRWhCQyxFQUFBQSxRQUFRLEVBQUVILHNCQUFVRSxNQUZKO0FBR2hCRSxFQUFBQSxPQUFPLEVBQUVKLHNCQUFVRSxNQUhIO0FBSWhCRyxFQUFBQSxNQUFNLEVBQUVMLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FKUTtBQUtoQkksRUFBQUEsZUFBZSxFQUFFTixzQkFBVUUsTUFMWDtBQU1oQkssRUFBQUEsZUFBZSxFQUFFUCxzQkFBVUUsTUFOWDtBQU9oQk0sRUFBQUEsY0FBYyxFQUFFUixzQkFBVVMsTUFQVjtBQVFoQkMsRUFBQUEsVUFBVSxFQUFFVixzQkFBVVM7QUFSTixDQUFsQjtBQVdBLElBQU1FLFFBQVEsR0FBRyxJQUFqQjtBQUVBQyxtQkFBbUIsQ0FBQ0MsSUFBcEIsR0FBMkIsQ0FBQ0Msc0JBQUQsRUFBb0JDLDRCQUFwQixDQUEzQjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBSVYsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxzQkFBaEI7QUFBQSxDQUpLLEVBS1IsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSx3QkFBaEI7QUFB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QSxTQUFTLEVBQUM7QUFGWixPQUlHZSxvQkFBb0IsR0FDbkIsZ0NBQUMsZ0JBQUQ7QUFDRSxNQUFBLGVBQWUsRUFBRXBELGVBRG5CO0FBRUUsTUFBQSxtQkFBbUIsRUFBRUMsZUFBZSxDQUFDeUQsbUJBRnZDO0FBR0UsTUFBQSxvQkFBb0IsRUFBRXpELGVBQWUsQ0FBQzBEO0FBSHhDLE1BRG1CLEdBTWpCLElBVk4sRUFXR04sY0FBYyxHQUNiLGdDQUFDLFVBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRTVELE9BQU8sQ0FBQ2tDLGlCQUFELENBRGpCO0FBRUUsTUFBQSxLQUFLLEVBQUVBLGlCQUZUO0FBR0UsTUFBQSxvQkFBb0IsRUFBRU8sb0JBSHhCO0FBSUUsTUFBQSxRQUFRLEVBQUVyQyxRQUpaO0FBS0UsTUFBQSxRQUFRLEVBQUUyQixRQUxaO0FBTUUsTUFBQSxlQUFlLEVBQUUwQix1QkFObkI7QUFPRSxNQUFBLGFBQWEsRUFBRWpELGVBQWUsQ0FBQzJELGFBUGpDO0FBUUUsTUFBQSxTQUFTLEVBQUUzRCxlQUFlLENBQUM0RCxTQVI3QjtBQVNFLE1BQUEsZUFBZSxFQUFFNUQsZUFBZSxDQUFDNkQscUJBVG5DO0FBVUUsTUFBQSxvQkFBb0IsRUFBRTdELGVBQWUsQ0FBQzhELDBCQVZ4QztBQVdFLE1BQUEsYUFBYSxFQUFFOUQsZUFBZSxDQUFDK0Q7QUFYakMsTUFEYSxHQWNYLElBekJOLENBREY7QUE2QkQsR0FoRUQ7O0FBa0VBMUMsRUFBQUEsWUFBWSxDQUFDOUIsU0FBYixHQUF5QkEsU0FBekI7QUFFQSxTQUFPOEIsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUaW1lV2lkZ2V0RmFjdG9yeSBmcm9tICcuL2ZpbHRlcnMvdGltZS13aWRnZXQnO1xuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xGYWN0b3J5IGZyb20gJy4vY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL2FuaW1hdGlvbi1jb250cm9sJztcbmltcG9ydCB7RklMVEVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1aVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBhbmltYXRpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2lkZVBhbmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbnRhaW5lclc6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbmNvbnN0IG1heFdpZHRoID0gMTA4MDtcblxuQm90dG9tV2lkZ2V0RmFjdG9yeS5kZXBzID0gW1RpbWVXaWRnZXRGYWN0b3J5LCBBbmltYXRpb25Db250cm9sRmFjdG9yeV07XG5cbmNvbnN0IEJvdHRvbVdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm90dG9tV2lkZ2V0UGFkZGluZ1RvcH1weDtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3R0b21XaWRnZXRQYWRkaW5nUmlnaHR9cHg7XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvdHRvbVdpZGdldFBhZGRpbmdCb3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3R0b21XaWRnZXRQYWRkaW5nTGVmdH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3R0b21XaWRnZXRGYWN0b3J5KFRpbWVXaWRnZXQsIEFuaW1hdGlvbkNvbnRyb2wpIHtcbiAgY29uc3QgQm90dG9tV2lkZ2V0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFzZXRzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIGFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgIGNvbnRhaW5lclcsXG4gICAgICB1aVN0YXRlLFxuICAgICAgc2lkZVBhbmVsV2lkdGgsXG4gICAgICBsYXllcnNcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCB7YWN0aXZlU2lkZVBhbmVsLCByZWFkT25seX0gPSB1aVN0YXRlO1xuICAgIGNvbnN0IGlzT3BlbiA9IEJvb2xlYW4oYWN0aXZlU2lkZVBhbmVsKTtcblxuICAgIGNvbnN0IGVubGFyZ2VkRmlsdGVySWR4ID0gZmlsdGVycy5maW5kSW5kZXgoXG4gICAgICBmID0+IGYuZW5sYXJnZWQgJiYgZi50eXBlID09PSBGSUxURVJfVFlQRVMudGltZVJhbmdlXG4gICAgKTtcbiAgICBjb25zdCBpc0FueUZpbHRlckFuaW1hdGluZyA9IGZpbHRlcnMuc29tZShmID0+IGYuaXNBbmltYXRpbmcpO1xuICAgIGNvbnN0IGVubGFyZ2VkRmlsdGVyV2lkdGggPSBpc09wZW4gPyBjb250YWluZXJXIC0gc2lkZVBhbmVsV2lkdGggOiBjb250YWluZXJXO1xuXG4gICAgLy8gc2hvdyBwbGF5YmFjayBjb250cm9sIGlmIGxheWVycyBjb250YWluIHRyaXAgbGF5ZXIgJiBhdCBsZWFzdCBvbmUgdHJpcCBsYXllciBpcyB2aXNpYmxlXG4gICAgY29uc3QgYW5pbWF0ZWRMYXllciA9IGxheWVycy5maWx0ZXIoXG4gICAgICBsID0+IGwuY29uZmlnLmFuaW1hdGlvbiAmJiBsLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCAmJiBsLmNvbmZpZy5pc1Zpc2libGVcbiAgICApO1xuXG4gICAgY29uc3QgcmVhZFRvQW5pbWF0aW9uID0gQXJyYXkuaXNBcnJheShhbmltYXRpb25Db25maWcuZG9tYWluKSAmJiBhbmltYXRpb25Db25maWcuY3VycmVudFRpbWU7XG4gICAgLy8gaWYgYW5pbWF0aW9uIGNvbnRyb2wgaXMgc2hvd2luZywgaGlkZSB0aW1lIGRpc3BsYXkgaW4gdGltZSBzbGlkZXJcbiAgICBjb25zdCBzaG93RmxvYXRpbmdUaW1lRGlzcGxheSA9ICFhbmltYXRlZExheWVyLmxlbmd0aDtcbiAgICBjb25zdCBzaG93QW5pbWF0aW9uQ29udHJvbCA9IGFuaW1hdGVkTGF5ZXIubGVuZ3RoICYmIHJlYWRUb0FuaW1hdGlvbjtcbiAgICBjb25zdCBzaG93VGltZVdpZGdldCA9IGVubGFyZ2VkRmlsdGVySWR4ID4gLTEgJiYgT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCA+IDA7XG4gICAgLy8gVGhlIGJvdHRvbSB3aWRnZXQgY2FuIGhpZGUgY2xpY2thYmxlIGVsZW1lbnRzIHNvIGRvIG5vdCByZW5kZXIgaXQgaWYgbm90IG5lZWRlZFxuICAgIGlmICghc2hvd0FuaW1hdGlvbkNvbnRyb2wgJiYgIXNob3dUaW1lV2lkZ2V0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3R0b21XaWRnZXRDb250YWluZXJcbiAgICAgICAgd2lkdGg9e01hdGgubWluKG1heFdpZHRoLCBlbmxhcmdlZEZpbHRlcldpZHRoKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldC0tY29udGFpbmVyXCJcbiAgICAgID5cbiAgICAgICAge3Nob3dBbmltYXRpb25Db250cm9sID8gKFxuICAgICAgICAgIDxBbmltYXRpb25Db250cm9sXG4gICAgICAgICAgICBhbmltYXRpb25Db25maWc9e2FuaW1hdGlvbkNvbmZpZ31cbiAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblRpbWU9e3Zpc1N0YXRlQWN0aW9ucy51cGRhdGVBbmltYXRpb25UaW1lfVxuICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9e3Zpc1N0YXRlQWN0aW9ucy51cGRhdGVMYXllckFuaW1hdGlvblNwZWVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7c2hvd1RpbWVXaWRnZXQgPyAoXG4gICAgICAgICAgPFRpbWVXaWRnZXRcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyc1tlbmxhcmdlZEZpbHRlcklkeF19XG4gICAgICAgICAgICBpbmRleD17ZW5sYXJnZWRGaWx0ZXJJZHh9XG4gICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBzaG93VGltZURpc3BsYXk9e3Nob3dGbG9hdGluZ1RpbWVEaXNwbGF5fVxuICAgICAgICAgICAgc2V0RmlsdGVyUGxvdD17dmlzU3RhdGVBY3Rpb25zLnNldEZpbHRlclBsb3R9XG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXJ9XG4gICAgICAgICAgICB0b2dnbGVBbmltYXRpb249e3Zpc1N0YXRlQWN0aW9ucy50b2dnbGVGaWx0ZXJBbmltYXRpb259XG4gICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dmlzU3RhdGVBY3Rpb25zLnVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkfVxuICAgICAgICAgICAgZW5sYXJnZUZpbHRlcj17dmlzU3RhdGVBY3Rpb25zLmVubGFyZ2VGaWx0ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0JvdHRvbVdpZGdldENvbnRhaW5lcj5cbiAgICApO1xuICB9O1xuXG4gIEJvdHRvbVdpZGdldC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbiAgcmV0dXJuIEJvdHRvbVdpZGdldDtcbn1cbiJdfQ==