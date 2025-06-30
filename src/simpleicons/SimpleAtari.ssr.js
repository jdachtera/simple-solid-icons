import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Atari</title>",
  _tmpl$2 = "<path d=\"M0 21.653s3.154-.355 5.612-2.384c2.339-1.93 3.185-3.592 3.77-5.476.584-1.885.671-6.419.671-7.764V2.346H8.598v1.365c-.024 2.041-.2 5.918-1.135 8.444C5.203 18.242 0 18.775 0 18.775zm24 0s-3.154-.355-5.61-2.384c-2.342-1.93-3.187-3.592-3.772-5.476-.583-1.885-.671-6.419-.671-7.764V2.346H15.4l.001 1.365c.024 2.041.202 5.918 1.138 8.444 2.258 6.087 7.46 6.62 7.46 6.62zM10.659 2.348h2.685v19.306H10.66Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAtari(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}