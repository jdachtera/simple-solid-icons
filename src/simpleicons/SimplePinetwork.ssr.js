import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Pi Network</title>",
  _tmpl$2 = "<path d=\"M12 .002c-6.628 0-12 5.371-12 12 0 6.628 5.372 11.996 12 11.996s12-5.371 12-12C24 5.37 18.624.002 12 .002zm0 1.719c5.679 0 10.281 4.602 10.281 10.281S17.68 22.283 12 22.283 1.719 17.681 1.719 12.002 6.32 1.721 12 1.721zM9.102 5.943c-.123 0-.227.1-.227.227v1.139c0 .122.1.226.227.226h1.56a.225.225 0 0 0 .227-.226v-1.14c0-.121-.1-.226-.227-.226h-1.56zm3.685 0c-.122 0-.226.1-.226.227v1.139c0 .122.1.226.226.226h1.559a.228.228 0 0 0 .226-.226v-1.14c0-.121-.1-.226-.226-.226h-1.559zm3.219 1.407v1.19H7.352c-1.895.026-1.975 2.042-1.975 2.042v1.461H7.43l.008-1.447h1.398v7.574c-.005.457.451.285.451.285l1.461-.516c.23-.099.186-.308.186-.308v-7.022h1.591v7.641c.014.357.366.213.366.213l1.591-.565c.14-.076.118-.195.118-.195l-.022-7.062 1.527-.04c1.909-.027 1.963-2.103 1.963-2.103V7.35h-2.062\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePinetwork(props) {
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