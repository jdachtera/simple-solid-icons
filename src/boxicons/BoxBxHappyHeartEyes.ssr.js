import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 18c4 0 5-4 5-4H7s1 4 5 4z\"></path>",
  _tmpl$2 = "<path d=\"M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z\"></path>",
  _tmpl$3 = "<path d=\"m8.535 12.634 2.05-2.083a1.485 1.485 0 0 0-.018-2.118 1.49 1.49 0 0 0-2.065-.034 1.488 1.488 0 0 0-2.067.068c-.586.6-.579 1.53.019 2.117l2.081 2.05zm7 0 2.05-2.083a1.485 1.485 0 0 0-.018-2.118 1.49 1.49 0 0 0-2.065-.034 1.488 1.488 0 0 0-2.068.067c-.586.6-.579 1.53.019 2.117l2.082 2.051z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxHappyHeartEyes(props) {
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