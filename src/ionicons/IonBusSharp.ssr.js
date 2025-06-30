import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M400,64H112a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z\" style=\"fill:none\"></path>",
  _tmpl$2 = "<path d=\"M424,32H88A24,24,0,0,0,64,56V416a32,32,0,0,0,16,27.71V480h72V448H360v32h72V443.71A32,32,0,0,0,448,416V56A24,24,0,0,0,424,32ZM175.82,371.47a32,32,0,1,1-35.3-35.29A32.09,32.09,0,0,1,175.82,371.47ZM240,288H96V128H240ZM256,96H96.46L96,64H416l-.46,32H256Zm16,32H416V288H272Zm64.18,236.53a32,32,0,1,1,35.3,35.29A32.09,32.09,0,0,1,336.18,364.53Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBusSharp(props) {
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