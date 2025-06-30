import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M4 6h16\"></path>",
  _tmpl$3 = "<path d=\"M6 12h10.5\"></path>",
  _tmpl$4 = "<path d=\"M9 18h5\"></path>",
  _tmpl$5 = "<path d=\"M19 22v.01\"></path>",
  _tmpl$6 = "<path d=\"M19 19c.448 -.001 .883 -.153 1.235 -.431c.352 -.278 .6 -.666 .706 -1.101c.105 -.436 .061 -.894 -.125 -1.302c-.186 -.408 -.504 -.742 -.902 -.948c-.398 -.204 -.853 -.267 -1.291 -.179c-.438 .088 -.834 .321 -1.123 .662\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerFilter2Question(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}