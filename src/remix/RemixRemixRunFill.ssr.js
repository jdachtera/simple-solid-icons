import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M19.1155 20C19.1155 18.9358 19.1155 17.9609 18.9536 15.8812C18.7532 13.7919 17.6654 12.7329 15.8047 12.3608C18.0089 12.0746 19.6406 10.3574 19.6406 7.72423C19.6406 4.20384 17.3219 2 12.6558 2H4V5.66888H11.797C13.8581 5.66888 14.8887 6.55343 14.8887 8.0131C14.8887 9.67314 13.8581 10.3001 11.797 10.3001H4V14.0495H11.568C13.1997 14.0495 14.0871 14.5074 14.2302 16.5682C14.3385 17.9756 14.325 18.6726 14.3119 19.341L14.3119 19.3438C14.3077 19.5579 14.3036 19.7692 14.3036 20L19.1155 20ZM4 17.2046V19.9996H10.1222V18.2108C10.1222 17.8349 9.93768 17.2046 9.08783 17.2046H4Z\" fill=\"currentColor\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixRemixRunFill(props) {
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