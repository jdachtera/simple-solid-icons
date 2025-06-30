import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>LastPass</title>",
  _tmpl$2 = "<path d=\"M22.629,6.857c0-0.379,0.304-0.686,0.686-0.686C23.693,6.171,24,6.483,24,6.857 v10.286c0,0.379-0.304,0.686-0.686,0.686c-0.379,0-0.686-0.312-0.686-0.686V6.857z M2.057,10.286c1.136,0,2.057,0.921,2.057,2.057 S3.193,14.4,2.057,14.4S0,13.479,0,12.343S0.921,10.286,2.057,10.286z M9.6,10.286c1.136,0,2.057,0.921,2.057,2.057 S10.736,14.4,9.6,14.4s-2.057-0.921-2.057-2.057S8.464,10.286,9.6,10.286z M17.143,10.286c1.136,0,2.057,0.921,2.057,2.057 S18.279,14.4,17.143,14.4s-2.057-0.921-2.057-2.057S16.007,10.286,17.143,10.286z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLastpass(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}