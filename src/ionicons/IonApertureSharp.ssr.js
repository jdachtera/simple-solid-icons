import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<polygon points=\"216 48 345.49 176.18 345.49 48 216 48\"></polygon>",
  _tmpl$2 = "<polygon points=\"181.47 58.38 80 134 256 134 181.47 58.38\"></polygon>",
  _tmpl$3 = "<polygon points=\"336 344 464 344 464 216 336 344\"></polygon>",
  _tmpl$4 = "<polygon points=\"454 182 378 80 378 256 454 182\"></polygon>",
  _tmpl$5 = "<polygon points=\"48 166 48 294 176 166 48 166\"></polygon>",
  _tmpl$6 = "<polygon points=\"330 454 432 378 256 378 330 454\"></polygon>",
  _tmpl$7 = "<polygon points=\"58 330 134 432 134 256 58 330\"></polygon>",
  _tmpl$8 = "<path d=\"M345.49,222.12l-55.55-55.46H222.06l-55.55,55.46v67.76l55.62,55.52c.44,0,.88-.06,1.33-.06h66.48l55.55-55.46Z\"></path>",
  _tmpl$9 = "<polygon points=\"165.98 336.09 166 464 294 464 165.98 336.09\"></polygon>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonApertureSharp(props) {
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