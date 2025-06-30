import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M426,266a54.07,54.07,0,0,0-49.3,32H351.86l-27-81a22,22,0,0,0-42,.92L245.66,348.12l-48-281.74a22,22,0,0,0-43-1.72L94.82,298H32v44h80a22,22,0,0,0,21.34-16.66L171.69,172,218.3,445.62A22,22,0,0,0,238.76,464c.42,0,.82,0,1.24,0a22,22,0,0,0,21.15-16l44.47-149.62L315.13,327A22,22,0,0,0,336,342h40.7A54,54,0,1,0,426,266Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonPulseSharp(props) {
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