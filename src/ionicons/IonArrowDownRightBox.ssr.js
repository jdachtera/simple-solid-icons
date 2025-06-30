import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M480 331.636L480 464C480 468.243 478.314 472.313 475.314 475.314C472.313 478.314 468.243 480 464 480H331.636C322.8 480 315.636 472.837 315.636 464C315.636 455.163 322.8 448 331.636 448H425.373L374.245 396.872C378.961 394.253 383.333 390.972 387.216 387.089C391.054 383.251 394.304 378.935 396.908 374.281L448 425.373L448 331.636C448 322.8 455.163 315.636 464 315.636C472.837 315.636 480 322.8 480 331.636ZM396.908 374.281C401.754 365.621 404.364 355.79 404.364 345.691V90.5455C404.364 75.0182 398.195 60.127 387.216 49.1476C376.237 38.1682 361.345 32 345.818 32L90.5454 32C75.0182 32 60.1269 38.1682 49.1475 49.1476C38.1681 60.127 31.9999 75.0182 31.9999 90.5455V345.818C31.9999 361.345 38.1681 376.237 49.1475 387.216C60.1269 398.195 75.0182 404.364 90.5454 404.364H345.818C346.626 404.364 347.42 404.304 348.196 404.188C357.394 403.815 366.307 401.28 374.245 396.872L204.686 227.314C198.438 221.065 198.438 210.935 204.686 204.686C210.935 198.438 221.065 198.438 227.314 204.686L396.908 374.281Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonArrowDownRightBox(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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