import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M.038.309A.5.5 0 0 1 .5 0H14a2 2 0 0 1 2 2v5.959a1.041 1.041 0 0 1-2.069.17l-.849-5.094A.041.041 0 0 0 13 3.04V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.743a2.5 2.5 0 0 0-.732-1.768L.146.854A.5.5 0 0 1 .038.309M1.708 1l.267.268A3.5 3.5 0 0 1 3 3.743V14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3.041a1.041 1.041 0 0 1 2.069-.17l.849 5.094A.041.041 0 0 0 15 7.96V2a1 1 0 0 0-1-1zM4 3h3.5a.5.5 0 1 1 0 1H4zm0 2h1.5a.5.5 0 1 1 0 1H4zm0 2h3.5a.5.5 0 1 1 0 1H4zm0 2h1.5a.5.5 0 1 1 0 1H4zm0 2h3.5a.5.5 0 0 1 0 1H4zm0 2h1.5a.5.5 0 0 1 0 1H4z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: bootstrap | License: MIT (<https://github.com/twbs/icons/blob/main/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function BootstrapMeasuringCup(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 0.5,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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
  }), () => _$ssr(_tmpl$), true);
}