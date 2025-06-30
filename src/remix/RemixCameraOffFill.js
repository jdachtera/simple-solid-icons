import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M19.5859 21H3.00016C2.44787 21 2.00016 20.5523 2.00016 20V6.00003C2.00016 5.44775 2.44787 5.00003 3.00016 5.00003H3.58594L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L19.5859 21ZM7.55544 8.96953C6.58902 10.0346 6.00016 11.4486 6.00016 13C6.00016 16.3137 8.68645 19 12.0002 19C13.5516 19 14.9656 18.4112 16.0307 17.4448L14.6139 16.028C13.9129 16.6337 12.9993 17 12.0002 17C9.79102 17 8.00016 15.2092 8.00016 13C8.00016 12.0009 8.36649 11.0873 8.97217 10.3863L7.55544 8.96953ZM22.0002 17.7858L17.9549 13.7406C17.9848 13.4979 18.0002 13.2508 18.0002 13C18.0002 9.68633 15.3139 7.00003 12.0002 7.00003C11.7494 7.00003 11.5023 7.01541 11.2596 7.04528L8.10726 3.89293L9.00016 3.00003H15.0002L17.0002 5.00003H21.0002C21.5524 5.00003 22.0002 5.44775 22.0002 6.00003V17.7858ZM13.5085 9.29418C14.5045 9.69999 15.3002 10.4957 15.706 11.4917L13.5085 9.29418Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCameraOffFill(props) {
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