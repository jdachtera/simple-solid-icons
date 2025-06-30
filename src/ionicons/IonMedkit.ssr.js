import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M336,64H176a16,16,0,0,0-16,16V96H352V80A16,16,0,0,0,336,64Z\" style=\"fill:none\"></path>",
  _tmpl$2 = "<path d=\"M432,96H384V80a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48V96H80a64.07,64.07,0,0,0-64,64V416a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V160A64.07,64.07,0,0,0,432,96ZM336,304H272v64a16,16,0,0,1-32,0V304H176a16,16,0,0,1,0-32h64V208a16,16,0,0,1,32,0v64h64a16,16,0,0,1,0,32ZM352,96H160V80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMedkit(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}