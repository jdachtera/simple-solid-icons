import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Sparkasse</title><path d="M7.0602 12.3061v1.8455h14.175v6.7773c.0296 1.6615-1.4064 3.1066-3.0705 3.0705H5.8352c-1.6582.0306-3.1011-1.4121-3.0705-3.0705v-1.225H16.908v-1.8455H2.7648v-6.7773c-.0307-1.6579 1.4123-3.1012 3.0704-3.0704h12.3295c1.6641-.0363 3.1 1.4095 3.0705 3.0705v1.225H7.0602zm4.9241-6.1486c1.7003 0 3.0787-1.3784 3.0787-3.0787S13.6847 0 11.9843 0 8.9055 1.3784 8.9055 3.0788s1.3785 3.0787 3.0788 3.0787z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSparkasse(props) {
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