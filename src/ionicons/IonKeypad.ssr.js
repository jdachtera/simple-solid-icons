import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$2 = "<path d=\"M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$3 = "<path d=\"M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$4 = "<path d=\"M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$5 = "<path d=\"M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$6 = "<path d=\"M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$7 = "<path d=\"M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$8 = "<path d=\"M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$9 = "<path d=\"M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>",
  _tmpl$0 = "<path d=\"M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonKeypad(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}