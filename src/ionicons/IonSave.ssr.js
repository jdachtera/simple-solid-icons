import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M465.94,119.76l-73.7-73.7h0A47.68,47.68,0,0,0,358.3,32H96A64,64,0,0,0,32,96V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V153.7A47.68,47.68,0,0,0,465.94,119.76ZM120,112H296a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V120A8,8,0,0,1,120,112ZM259.75,431.91a80,80,0,1,1,76.16-76.16A80.06,80.06,0,0,1,259.75,431.91Z\"></path>",
  _tmpl$2 = "<circle cx=\"256\" cy=\"352\" r=\"48\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSave(props) {
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