import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M30.71,229.47l188.87-113a30.54,30.54,0,0,1,31.09-.39,33.74,33.74,0,0,1,16.76,29.47V224.6L448.15,116.44a30.54,30.54,0,0,1,31.09-.39A33.74,33.74,0,0,1,496,145.52v221A33.73,33.73,0,0,1,479.24,396a30.54,30.54,0,0,1-31.09-.39L267.43,287.4v79.08A33.73,33.73,0,0,1,250.67,396a30.54,30.54,0,0,1-31.09-.39l-188.87-113a31.27,31.27,0,0,1,0-53Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonPlayBack(props) {
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