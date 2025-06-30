import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14\"></path>",
  _tmpl$3 = "<path d=\"M8 4a1 1 0 0 1 1 1\"></path>",
  _tmpl$4 = "<path d=\"M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4\"></path>",
  _tmpl$5 = "<path d=\"M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10\"></path>",
  _tmpl$6 = "<path d=\"M5 8h3\"></path>",
  _tmpl$7 = "<path d=\"M9 16h4\"></path>",
  _tmpl$8 = "<path d=\"M14.254 10.244l-1.218 -4.424a1.02 1.02 0 0 1 .634 -1.219l.133 -.041l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.236 11.75\"></path>",
  _tmpl$9 = "<path d=\"M19.585 19.589l-1.572 .38c-.562 .136 -1.133 -.19 -1.282 -.731l-.952 -3.458\"></path>",
  _tmpl$0 = "<path d=\"M14 9l4 -1\"></path>",
  _tmpl$1 = "<path d=\"M19.207 15.199l.716 -.18\"></path>",
  _tmpl$10 = "<path d=\"M3 3l18 18\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBooksOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10)], true);
}