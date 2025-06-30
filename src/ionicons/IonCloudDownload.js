import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M472.7,189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16,16,0,0,1,412,159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15,46.45,296.21,32,256,32c-35.35,0-68,11.08-94.37,32a150.13,150.13,0,0,0-41.95,52.83A16.05,16.05,0,0,1,108,125.8c-27.13,4.9-50.53,14.68-68.41,28.7C13.7,174.83,0,203.56,0,237.6,0,305,55.93,352,136,352H240V224.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,224V352H396c72.64,0,116-34.24,116-91.6C512,230.35,498.41,205.83,472.7,189.5Z></path><path d=M240,425.42l-36.7-36.64a16,16,0,0,0-22.6,22.65l64,63.89a16,16,0,0,0,22.6,0l64-63.89a16,16,0,0,0-22.6-22.65L272,425.42V352H240Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCloudDownload(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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