import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M9.82726 21.7633L14.3094 14L17.8413 20.1175C16.198 21.3021 14.1805 22 12 22C11.2538 22 10.5268 21.9183 9.82726 21.7633ZM7.88985 21.119C5.3115 19.955 3.31516 17.7297 2.4578 15H11.4226L7.88985 21.119ZM2.04938 13C2.01672 12.6711 2 12.3375 2 12C2 9.39284 2.99773 7.0187 4.6322 5.23859L9.11325 13H2.04938ZM6.15866 3.88251C7.80198 2.6979 9.81949 2 12 2C12.7462 2 13.4732 2.08172 14.1727 2.2367L9.6906 10L6.15866 3.88251ZM16.1101 2.88101C18.6885 4.04495 20.6848 6.27028 21.5422 9H12.5774L16.1101 2.88101ZM21.9506 11C21.9833 11.3289 22 11.6625 22 12C22 14.6072 21.0023 16.9813 19.3678 18.7614L14.8868 11H21.9506Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCameraLensFill(props) {
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
  }), () => _$ssr(_tmpl$), true);
}