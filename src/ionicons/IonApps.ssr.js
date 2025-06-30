import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z\"></path>",
  _tmpl$2 = "<path d=\"M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z\"></path>",
  _tmpl$3 = "<path d=\"M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z\"></path>",
  _tmpl$4 = "<path d=\"M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z\"></path>",
  _tmpl$5 = "<path d=\"M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z\"></path>",
  _tmpl$6 = "<path d=\"M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z\"></path>",
  _tmpl$7 = "<path d=\"M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z\"></path>",
  _tmpl$8 = "<path d=\"M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z\"></path>",
  _tmpl$9 = "<path d=\"M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonApps(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}