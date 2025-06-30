import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"256\" cy=\"352\" r=\"32\"></circle>",
  _tmpl$2 = "<path d=\"M99.78,32A48,48,0,0,0,56.84,58.53l-31,62A48.26,48.26,0,0,0,24.28,160h278.2a4,4,0,0,0,3.39-1.87l75.5-120A4,4,0,0,0,378,32Z\"></path>",
  _tmpl$3 = "<path d=\"M486.17,120.56l-31-62a47.7,47.7,0,0,0-32.79-25.46L342.5,160h0L298,231.08a128,128,0,0,0-84,0l-23.32-37.2a4,4,0,0,0-3.39-1.88H51.14a4,4,0,0,0-3.36,6.16l82.7,128.73a128,128,0,1,0,251,0L483.62,168A48.22,48.22,0,0,0,486.17,120.56Zm-226,295.31a64,64,0,1,1,59.69-59.69A64.08,64.08,0,0,1,260.18,415.87Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMedal(props) {
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
  return _$ssrElement("svg", _$mergeProps(merged, {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}