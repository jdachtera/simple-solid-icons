import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M305.314,284.578H246.6V383.3h58.711q24.423,0,38.193-13.77t13.77-36.11q0-21.826-14.032-35.335T305.314,284.578ZM149.435,128.7H90.724v98.723h58.711q24.42,0,38.19-13.773t13.77-36.107q0-21.826-14.029-35.338T149.435,128.7ZM366.647,32H81.353A81.445,81.445,0,0,0,0,113.352V398.647A81.445,81.445,0,0,0,81.353,480H366.647A81.445,81.445,0,0,0,448,398.647V113.352A81.445,81.445,0,0,0,366.647,32Zm63.635,366.647a63.706,63.706,0,0,1-63.635,63.635H81.353a63.706,63.706,0,0,1-63.635-63.635V113.352A63.706,63.706,0,0,1,81.353,49.718H366.647a63.706,63.706,0,0,1,63.635,63.634ZM305.314,128.7H246.6v98.723h58.711q24.423,0,38.193-13.773t13.77-36.107q0-21.826-14.032-35.338T305.314,128.7Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsPerbyte(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
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