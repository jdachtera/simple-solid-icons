import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Code::Blocks</title>",
  _tmpl$2 = "<path d=\"M.011 0v8.406H8.61V0zm15.39 0v8.406H24V0zM8.972.658l.012 7.869 2.54 2.43.007-5.564zm6.066 0-2.555 4.735.004 5.564 2.54-2.43zM.332 8.768l5.52 2.677 5.655-.006-2.773-2.67zm14.944 0L12.53 11.49l5.655-.09 5.498-2.631zm-9.323 3.855L.318 15.232h8.405l2.748-2.722zm6.565-.113 2.747 2.722h8.402l-5.586-2.609zm-1.006.533-2.54 2.43-.011 7.873 2.555-4.74zm.964 0-.008 5.564 2.559 4.74-.011-7.874zM0 15.598V24h8.598v-8.402zm15.39 0V24h8.598v-8.402z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCodeblocks(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}