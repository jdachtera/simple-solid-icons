import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M18.7134 8.12811L18.4668 8.69379C18.2864 9.10792 17.7136 9.10792 17.5331 8.69379L17.2866 8.12811C16.8471 7.11947 16.0555 6.31641 15.0677 5.87708L14.308 5.53922C13.8973 5.35653 13.8973 4.75881 14.308 4.57612L15.0252 4.25714C16.0384 3.80651 16.8442 2.97373 17.2761 1.93083L17.5293 1.31953C17.7058 0.893489 18.2942 0.893489 18.4706 1.31953L18.7238 1.93083C19.1558 2.97373 19.9616 3.80651 20.9748 4.25714L21.6919 4.57612C22.1027 4.75881 22.1027 5.35653 21.6919 5.53922L20.9323 5.87708C19.9445 6.31641 19.1529 7.11947 18.7134 8.12811ZM7 3H12V6H9V17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C5.72857 13 6.41165 13.1948 7 13.5351V3ZM18 13.5351V11H20V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13C16.7286 13 17.4117 13.1948 18 13.5351Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixMusicAiFill(props) {
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