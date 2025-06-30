import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M20.9701 17.1716 19.5559 18.5858 16.0214 15.0513 15.9476 15.1251 15.2405 18.6606 13.8263 20.0748 9.58369 15.8322 4.63394 20.7819 3.21973 19.3677 8.16947 14.418 3.92683 10.1753 5.34105 8.7611 8.87658 8.05399 8.95029 7.98028 5.41373 4.44371 6.82794 3.0295 20.9701 17.1716ZM10.3645 9.39449 9.86261 9.8964 7.04072 10.4608 13.5409 16.9609 14.1052 14.139 14.6071 13.6371 10.3645 9.39449ZM18.7761 9.46821 17.4356 10.8087 18.8498 12.2229 20.1903 10.8824 20.8974 11.5895 22.3116 10.1753 13.8263 1.69003 12.4121 3.10425 13.1192 3.81135 11.7787 5.15185 13.1929 6.56607 14.5334 5.22557 18.7761 9.46821Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixUnpinLine(props) {
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