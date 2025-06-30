import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M440.9,136.3a4,4,0,0,0,0-6.91L288.16,40.65a64.14,64.14,0,0,0-64.33,0L71.12,129.39a4,4,0,0,0,0,6.91L254,243.88a4,4,0,0,0,4.06,0Z\"></path>",
  _tmpl$2 = "<path d=\"M54,163.51A4,4,0,0,0,48,167V340.89a48,48,0,0,0,23.84,41.39L234,479.51a4,4,0,0,0,6-3.46V274.3a4,4,0,0,0-2-3.46Z\"></path>",
  _tmpl$3 = "<path d=\"M272,275v201a4,4,0,0,0,6,3.46l162.15-97.23A48,48,0,0,0,464,340.89V167a4,4,0,0,0-6-3.45l-184,108A4,4,0,0,0,272,275Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCube(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}