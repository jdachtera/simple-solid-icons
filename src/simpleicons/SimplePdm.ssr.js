import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>PDM</title>",
  _tmpl$2 = "<path d=\"M10.44.418a3.12 3.12 0 0 1 3.12 0l7.69 4.44a3.12 3.12 0 0 1 1.56 2.702v8.88a3.12 3.12 0 0 1-1.56 2.702l-7.69 4.44a3.12 3.12 0 0 1-3.12 0l-7.69-4.44a3.12 3.12 0 0 1-1.56-2.702V7.56a3.12 3.12 0 0 1 1.56-2.702Zm3.87 3.315L12.311 2.58a.624.624 0 0 0-.624 0l-7.69 4.44a.624.624 0 0 0-.312.54v3.774l10.623-6.133Zm2.496 13.643 1.255.725 1.941-1.12a.624.624 0 0 0 .312-.541V7.56a.624.624 0 0 0-.312-.54l-3.196-1.845Zm-2.497-1.441V8.083l-6.8 3.926ZM3.686 14.217v2.223c0 .223.119.429.312.54l7.69 4.44a.624.624 0 0 0 .624 0l3.252-1.878-10.55-6.091Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePdm(props) {
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