import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Oh Dear</title>",
  _tmpl$2 = "<path d=\"m10.811 9.3333c2.5345 0 4.5966 1.9939 4.5966 4.4444 0 2.4506-2.0621 4.4444-4.5966 4.4444-2.2139 0-4.0673-1.5215-4.5007-3.5397h-6.3101v-1.7972h6.3072c0.42873-2.0242 2.285-3.5519 4.5036-3.5519zm7.3308-3.5556v3.8766c0.60102-0.38439 1.3334-0.586 2.1395-0.586 1.7157 0 3.7189 1.1521 3.7189 4.3993v4.4583h-1.8453v-4.4583c0-1.0234-0.25022-1.7562-0.74385-2.1787-0.38875-0.33283-0.84479-0.40252-1.1591-0.40252-0.96256 0-2.1102 0.44768-2.1102 2.5812v4.4583h-1.8453v-12.148zm-7.3308 5.3741c-1.4978 0-2.7159 1.178-2.7159 2.6259s1.218 2.6259 2.7159 2.6259c1.4975 0 2.7155-1.178 2.7155-2.6259s-1.218-2.6259-2.7155-2.6259z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOhdear(props) {
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