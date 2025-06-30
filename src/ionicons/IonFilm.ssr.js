import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M436,80H76a44.05,44.05,0,0,0-44,44V388a44.05,44.05,0,0,0,44,44H436a44.05,44.05,0,0,0,44-44V124A44.05,44.05,0,0,0,436,80ZM112,388a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V364a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V284a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V204a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V124a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12ZM353.68,272H158.32a16,16,0,0,1,0-32H353.68a16,16,0,1,1,0,32ZM448,388a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V364a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V284a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V204a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V124a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonFilm(props) {
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
  }), () => _$ssr(_tmpl$), true);
}