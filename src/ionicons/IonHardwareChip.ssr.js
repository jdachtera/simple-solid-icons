import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M352,128H160a32,32,0,0,0-32,32V352a32,32,0,0,0,32,32H352a32,32,0,0,0,32-32V160A32,32,0,0,0,352,128Zm0,216a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H344a8,8,0,0,1,8,8Z\" style=\"fill:none\"></path>",
  _tmpl$2 = "<rect x=\"160\" y=\"160\" width=\"192\" height=\"192\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$3 = "<path d=\"M464,192a16,16,0,0,0,0-32H448V128a64.07,64.07,0,0,0-64-64H352V48a16,16,0,0,0-32,0V64H272V48a16,16,0,0,0-32,0V64H192V48a16,16,0,0,0-32,0V64H128a64.07,64.07,0,0,0-64,64v32H48a16,16,0,0,0,0,32H64v48H48a16,16,0,0,0,0,32H64v48H48a16,16,0,0,0,0,32H64v32a64.07,64.07,0,0,0,64,64h32v16a16,16,0,0,0,32,0V448h48v16a16,16,0,0,0,32,0V448h48v16a16,16,0,0,0,32,0V448h32a64.07,64.07,0,0,0,64-64V352h16a16,16,0,0,0,0-32H448V272h16a16,16,0,0,0,0-32H448V192ZM384,352a32,32,0,0,1-32,32H160a32,32,0,0,1-32-32V160a32,32,0,0,1,32-32H352a32,32,0,0,1,32,32Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonHardwareChip(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}