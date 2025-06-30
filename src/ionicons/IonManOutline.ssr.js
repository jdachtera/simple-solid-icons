import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M208,208V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$2 = "<path d=\"M256,336V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V208\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$3 = "<path d=\"M208,192v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192a48,48,0,0,1,48-48h96a48,48,0,0,1,48,48v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$4 = "<circle cx=\"256\" cy=\"56\" r=\"40\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonManOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4)], true);
}