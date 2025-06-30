import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M5.33053 15.9288C5.115 14.9914 5.00054 14.0103 5.00054 12.9999C5.00054 7.91198 7.90319 3.5636 12.0005 1.81799C16.0979 3.5636 19.0005 7.91198 19.0005 12.9999C19.0005 14.0103 18.8861 14.9914 18.6706 15.9288L20.6907 17.7245C20.8704 17.8842 20.9109 18.1493 20.7872 18.3555L18.33 22.4508C18.1879 22.6876 17.8808 22.7644 17.644 22.6223C17.609 22.6013 17.5766 22.576 17.5477 22.5471L15.2934 20.2928C15.1059 20.1053 14.8515 19.9999 14.5863 19.9999H9.41476C9.14954 19.9999 8.89519 20.1053 8.70765 20.2928L6.45337 22.5471C6.2581 22.7424 5.94152 22.7424 5.74626 22.5471C5.71735 22.5182 5.6921 22.4859 5.67107 22.4508L3.21385 18.3555C3.09014 18.1493 3.13071 17.8842 3.31042 17.7245L5.33053 15.9288ZM12.0005 12.9999C13.1051 12.9999 14.0005 12.1045 14.0005 10.9999C14.0005 9.89537 13.1051 8.99994 12.0005 8.99994C10.896 8.99994 10.0005 9.89537 10.0005 10.9999C10.0005 12.1045 10.896 12.9999 12.0005 12.9999Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixRocketFill(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, props);
  return (() => {
    var _el$ = _$getNextElement(_tmpl$);
    _$spread(_el$, _$mergeProps(merged, {
      get width() {
        return merged.width ?? merged.size;
      },
      get height() {
        return merged.height ?? merged.size;
      },
      get stroke() {
        return merged.stroke ?? merged.color;
      },
      get fill() {
        return merged.fill;
      }
    }), true, true);
    _$runHydrationEvents();
    return _el$;
  })();
}