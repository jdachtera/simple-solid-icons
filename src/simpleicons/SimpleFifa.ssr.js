import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>FIFA</title>",
  _tmpl$2 = "<path d=\"M0 8.064v7.872h2.486v-2.843h1.728l.671-1.72H2.486V9.775h2.92l.637-1.711zm6.804 0L6.8 15.936h2.457V8.064zm4.15 0v7.872h2.484v-2.843h1.726l.677-1.72h-2.403V9.775h2.922L17 8.064zm7.658 0l-2.83 7.872h2.375l.306-1.058h2.769l.32 1.058H24l-2.837-7.872zm1.235 2.023l.981 3.277h-1.927z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFifa(props) {
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