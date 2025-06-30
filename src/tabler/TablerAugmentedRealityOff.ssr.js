import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M4 8v-2c0 -.557 .228 -1.061 .595 -1.424\"></path>",
  _tmpl$3 = "<path d=\"M4 16v2a2 2 0 0 0 2 2h2\"></path>",
  _tmpl$4 = "<path d=\"M16 4h2a2 2 0 0 1 2 2v2\"></path>",
  _tmpl$5 = "<path d=\"M16 20h2c.558 0 1.062 -.228 1.425 -.596\"></path>",
  _tmpl$6 = "<path d=\"M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769\"></path>",
  _tmpl$7 = "<path d=\"M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189\"></path>",
  _tmpl$8 = "<path d=\"M8 10v4.5l4 2.5\"></path>",
  _tmpl$9 = "<path d=\"M3 3l18 18\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerAugmentedRealityOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}