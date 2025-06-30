import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Deluge</title>",
  _tmpl$2 = "<path d=\"M18.766 10.341 12.006 0l-6.77 10.342c-1.945 2.97-2.191 6.432-.66 9.264C6.04 22.316 8.885 24 12.001 24c3.113 0 5.957-1.681 7.421-4.388 1.532-2.832 1.287-6.297-.657-9.27zm-10.082 6.9c1.433 2.554 3.608 3.045 6.585 2.102-1.7 1.848-5.188 2.337-7.557-.302-1.63-1.817-1.773-4.351-.642-6.468 1.132-2.117 3.388-2.706 5.012-1.551-3.723.09-4.43 4.38-3.398 6.218zm8.72-6.009c.723 1.107 1.152 2.267 1.314 3.418-3.354 5.763-7.862 4.879-9.062 1.377-.554-1.618 1.19-5.08 4.514-3.725-1.296-2.838-4.238-4.017-6.911-1.809a5.099 5.099 0 0 0-.609.66l5.355-8.179 5.398 8.258z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleDeluge(props) {
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