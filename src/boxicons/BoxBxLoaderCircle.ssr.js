import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"20\" r=\"2\"></circle>",
  _tmpl$2 = "<circle cx=\"12\" cy=\"4\" r=\"2\"></circle>",
  _tmpl$3 = "<circle cx=\"6.343\" cy=\"17.657\" r=\"2\"></circle>",
  _tmpl$4 = "<circle cx=\"17.657\" cy=\"6.343\" r=\"2\"></circle>",
  _tmpl$5 = "<circle cx=\"4\" cy=\"12\" r=\"2.001\"></circle>",
  _tmpl$6 = "<circle cx=\"20\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$7 = "<circle cx=\"6.343\" cy=\"6.344\" r=\"2\"></circle>",
  _tmpl$8 = "<circle cx=\"17.657\" cy=\"17.658\" r=\"2\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxLoaderCircle(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}