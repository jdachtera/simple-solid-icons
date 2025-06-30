import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>reveal.js</title>",
  _tmpl$2 = "<path d=\"M4.271 1.352a.774.774 0 0 0-.787.775v19.761c0 .49.45.857.93.758l6.676-1.382-2.77-.614-3.675.762V2.607l3.101.686 2.777-.574-6.097-1.35a.774.774 0 0 0-.155-.017zm15.315.002L5.145 4.344v15.092l14.43 3.195a.774.774 0 0 0 .94-.758V2.111a.773.773 0 0 0-.93-.757zM2.984 4.79l-2.367.49A.774.774 0 0 0 0 6.04v11.639a.774.774 0 0 0 .607.754l2.377.525V4.791zm18.034.252V6.23l1.822.405v11.011l-1.822.377v1.186l2.365-.49A.774.774 0 0 0 24 17.96V6.322a.774.774 0 0 0-.607-.754l-2.375-.525z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRevealdotjs(props) {
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