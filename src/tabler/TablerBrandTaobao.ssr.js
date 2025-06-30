import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M2 5c.968 .555 1.335 1.104 2 2\"></path>",
  _tmpl$3 = "<path d=\"M2 10c5.007 3.674 2.85 6.544 0 10\"></path>",
  _tmpl$4 = "<path d=\"M10 4c-.137 4.137 -2.258 5.286 -3.709 6.684\"></path>",
  _tmpl$5 = "<path d=\"M10 6c2.194 -.8 3.736 -.852 6.056 -.993c4.206 -.158 5.523 2.264 5.803 5.153c.428 4.396 -.077 7.186 -2.117 9.298c-1.188 1.23 -3.238 2.62 -7.207 .259\"></path>",
  _tmpl$6 = "<path d=\"M11 10h6\"></path>",
  _tmpl$7 = "<path d=\"M13 10v6.493\"></path>",
  _tmpl$8 = "<path d=\"M8 13h10\"></path>",
  _tmpl$9 = "<path d=\"M16 15.512l.853 1.72\"></path>",
  _tmpl$0 = "<path d=\"M16.5 17c-1.145 .361 -7 3 -8.5 -.5\"></path>",
  _tmpl$1 = "<path d=\"M11.765 8.539l-1.765 2.461\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandTaobao(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1)], true);
}