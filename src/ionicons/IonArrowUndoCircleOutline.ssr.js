import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M245.09,327.74V290.42c57.07,0,84.51,13.47,108.58,38.68,5.4,5.65,15,1.32,14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09V168.26a8.32,8.32,0,0,0-14.05-6L146.58,242a8.2,8.2,0,0,0,0,11.94L231,333.71A8.32,8.32,0,0,0,245.09,327.74Z\"></path>",
  _tmpl$2 = "<path d=\"M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonArrowUndoCircleOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}