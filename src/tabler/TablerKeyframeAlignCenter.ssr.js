import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M12 20v2\"></path>",
  _tmpl$3 = "<path d=\"M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z\"></path>",
  _tmpl$4 = "<path d=\"M12 2v2\"></path>",
  _tmpl$5 = "<path d=\"M3 12h2\"></path>",
  _tmpl$6 = "<path d=\"M19 12h2\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerKeyframeAlignCenter(props) {
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