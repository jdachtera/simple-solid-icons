import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M224,304a16,16,0,0,1-11.31-27.31L370.63,118.75A55.7,55.7,0,0,0,344,112H104a56.06,56.06,0,0,0-56,56V408a56.06,56.06,0,0,0,56,56H344a56.06,56.06,0,0,0,56-56V168a55.7,55.7,0,0,0-6.75-26.63L235.31,299.31A15.92,15.92,0,0,1,224,304Z\"></path>",
  _tmpl$2 = "<path d=\"M448,48H336a16,16,0,0,0,0,32h73.37l-38.74,38.75a56.35,56.35,0,0,1,22.62,22.62L432,102.63V176a16,16,0,0,0,32,0V64A16,16,0,0,0,448,48Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonOpen(props) {
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