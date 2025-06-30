import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Linux Professional Institute</title><path d="M12-.0002c-6.6273 0-12 5.3728-12 11.9997 0 6.627 5.3727 12.0007 12 12.0007s12-5.3728 12-12.0007S18.627-.0002 12-.0002Zm0 20.987c-4.9632 0-8.987-4.0231-8.987-8.9866 0-4.9635 4.0238-8.9867 8.987-8.9867 4.9632 0 8.987 4.0235 8.987 8.9867 0 4.9631-4.0238 8.9867-8.987 8.9867zm5.1043-3.0031.7995-2.9975h-7.1631L13.5062 4.495h-2.9978L6.9118 17.9837Zm.2896-10.4938c0 .8225-.6697 1.4938-1.4938 1.4938s-1.4897-.6716-1.4897-1.4938c0-.8223.6675-1.4907 1.4897-1.4907s1.4938.6688 1.4938 1.4907">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLinuxprofessionalinstitute(props) {
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