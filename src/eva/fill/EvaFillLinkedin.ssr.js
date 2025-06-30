import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>linkedin</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"linkedin\"><g id=\"linkedin-2\" data-name=\"linkedin\"><path d=\"M15.15,8.4A5.83,5.83,0,0,0,9.3,14.22V20.1a.9.9,0,0,0,.9.9h2.1a.9.9,0,0,0,.9-.9V14.22a1.94,1.94,0,0,1,2.15-1.93,2,2,0,0,1,1.75,2V20.1a.9.9,0,0,0,.9.9h2.1a.9.9,0,0,0,.9-.9V14.22A5.83,5.83,0,0,0,15.15,8.4Z\"></path><rect x=\"3\" y=\"9.3\" width=\"4.5\" height=\"11.7\" rx=\"0.9\" ry=\"0.9\"></rect><circle cx=\"5.25\" cy=\"5.25\" r=\"2.25\"></circle></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillLinkedin(props) {
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