import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M10 4l2 1l2 -1\"></path>",
  _tmpl$3 = "<path d=\"M12 2v6m1.196 1.186l1.804 1.034\"></path>",
  _tmpl$4 = "<path d=\"M17.928 6.268l.134 2.232l1.866 1.232\"></path>",
  _tmpl$5 = "<path d=\"M20.66 7l-5.629 3.25l-.031 .75\"></path>",
  _tmpl$6 = "<path d=\"M19.928 14.268l-1.015 .67\"></path>",
  _tmpl$7 = "<path d=\"M14.212 14.226l-2.171 1.262\"></path>",
  _tmpl$8 = "<path d=\"M14 20l-2 -1l-2 1\"></path>",
  _tmpl$9 = "<path d=\"M12 22v-6.5l-3 -1.72\"></path>",
  _tmpl$0 = "<path d=\"M6.072 17.732l-.134 -2.232l-1.866 -1.232\"></path>",
  _tmpl$1 = "<path d=\"M3.34 17l5.629 -3.25l-.01 -3.458\"></path>",
  _tmpl$10 = "<path d=\"M4.072 9.732l1.866 -1.232l.134 -2.232\"></path>",
  _tmpl$11 = "<path d=\"M3.34 7l5.629 3.25l.802 -.466\"></path>",
  _tmpl$12 = "<path d=\"M3 3l18 18\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerSnowflakeOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10), _$ssr(_tmpl$11), _$ssr(_tmpl$12)], true);
}