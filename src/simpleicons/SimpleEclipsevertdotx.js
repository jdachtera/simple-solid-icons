import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Eclipse Vert.x</title><path d="M3.356.01C1.566.01.027 1.269 0 2.938v1.436h2.515l3.861 8.896 4.028-8.791h5.078l2.182 3.986 2.56-3.986H24V2.946C24 1.281 22.44.011 20.645.011zM24 5.668l-8.874 13.56H12.44c-.02-.629-.188-1.237-.503-1.74l3.609-5.708-2.744-4.36-3.829 8.42-.036-.002a3.443 3.443 0 0 0-3.434 3.433c0 .021.003.042.004.063h-.263L0 7.5v13.553c0 1.665 1.56 2.935 3.356 2.935h17.289c1.812 0 3.355-1.276 3.355-2.935v-1.826h-3.587l-1.594-2.874 2.224-3.378L24 17.638zm-15.066 11.5a2.102 2.102 0 0 1 2.109 2.103 2.106 2.106 0 1 1-4.212 0c0-1.16.937-2.1 2.103-2.103Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleEclipsevertdotx(props) {
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