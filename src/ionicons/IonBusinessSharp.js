import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M320,176V16H32V496H160V400h32v96H480V176ZM112,432H80V400h32Zm0-80H80V320h32Zm0-80H80V240h32Zm0-80H80V160h32Zm0-80H80V80h32ZM240,80h32v32H240ZM192,352H160V320h32Zm0-80H160V240h32Zm0-80H160V160h32Zm0-80H160V80h32Zm80,320H240V400h32Zm0-80H240V320h32Zm0-80H240V240h32Zm0-80H240V160h32v32ZM448,464H320V432h32V400H320V352h32V320H320V272h32V240H320V208H448Z></path><rect x=384 y=400 width=32 height=32></rect><rect x=384 y=320 width=32 height=32></rect><rect x=384 y=240 width=32 height=32>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBusinessSharp(props) {
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