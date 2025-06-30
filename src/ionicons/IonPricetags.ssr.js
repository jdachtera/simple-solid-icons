import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M448,183.8v-123A44.66,44.66,0,0,0,403.29,16H280.36a30.62,30.62,0,0,0-21.51,8.89L13.09,270.58a44.86,44.86,0,0,0,0,63.34l117,117a44.84,44.84,0,0,0,63.33,0L439.11,205.31A30.6,30.6,0,0,0,448,183.8ZM352,144a32,32,0,1,1,32-32A32,32,0,0,1,352,144Z\"></path>",
  _tmpl$2 = "<path d=\"M496,64a16,16,0,0,0-16,16V207.37L218.69,468.69a16,16,0,1,0,22.62,22.62l262-262A29.84,29.84,0,0,0,512,208V80A16,16,0,0,0,496,64Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonPricetags(props) {
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