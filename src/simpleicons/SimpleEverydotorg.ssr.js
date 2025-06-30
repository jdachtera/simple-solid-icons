import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Every.org</title>",
  _tmpl$2 = "<path d=\"M18.151 9.36c0-4.467-3.728-7.855-8.517-7.855C4.278 1.505 0 6.028 0 11.63c0 6.038 4.808 10.864 11.28 10.864 6.474 0 12.266-5.13 12.72-11.848h-2.953c-.549 5.034-4.807 8.896-9.766 8.896-4.77 0-8.31-3.502-8.31-7.912 0-3.975 2.953-7.174 6.663-7.174 3.104 0 5.546 2.12 5.546 4.903 0 2.309-1.666 4.24-3.88 4.24v2.952c3.918 0 6.851-3.274 6.851-7.192\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleEverydotorg(props) {
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