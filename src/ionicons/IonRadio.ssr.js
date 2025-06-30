import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"256\" cy=\"256\" r=\"36\"></circle>",
  _tmpl$2 = "<path d=\"M190.24,341.77a22,22,0,0,1-16.46-7.38,118,118,0,0,1,0-156.76,22,22,0,1,1,32.87,29.24,74,74,0,0,0,0,98.29,22,22,0,0,1-16.43,36.61Z\"></path>",
  _tmpl$3 = "<path d=\"M321.76,341.77a22,22,0,0,1-16.43-36.61,74,74,0,0,0,0-98.29,22,22,0,1,1,32.87-29.24,118,118,0,0,1,0,156.76A22,22,0,0,1,321.76,341.77Z\"></path>",
  _tmpl$4 = "<path d=\"M139.29,392.72a21.92,21.92,0,0,1-16.08-7,190,190,0,0,1,0-259.49,22,22,0,1,1,32.13,30.06,146,146,0,0,0,0,199.38,22,22,0,0,1-16.06,37Z\"></path>",
  _tmpl$5 = "<path d=\"M372.71,392.72a22,22,0,0,1-16.06-37,146,146,0,0,0,0-199.38,22,22,0,1,1,32.13-30.06,190,190,0,0,1,0,259.49A21.92,21.92,0,0,1,372.71,392.72Z\"></path>",
  _tmpl$6 = "<path d=\"M429,438a22,22,0,0,1-16.39-36.67,218.34,218.34,0,0,0,0-290.66,22,22,0,0,1,32.78-29.34,262.34,262.34,0,0,1,0,349.34A22,22,0,0,1,429,438Z\"></path>",
  _tmpl$7 = "<path d=\"M83,438a21.94,21.94,0,0,1-16.41-7.33,262.34,262.34,0,0,1,0-349.34,22,22,0,0,1,32.78,29.34,218.34,218.34,0,0,0,0,290.66A22,22,0,0,1,83,438Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonRadio(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}