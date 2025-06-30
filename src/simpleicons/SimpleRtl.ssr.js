import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>RTL</title>",
  _tmpl$2 = "<path d=\"M0 9.889v4.222h7.498V9.89H0zm8.25 0v4.222h7.5V9.89h-7.5zm8.252 0v4.222H24V9.89h-7.498zm-14.365.966H4.12c.61 0 .945.275.945.733 0 .397-.254.662-.691.723l.977.824h-.754l-.926-.795H2.656v.795h-.52v-2.28zm8.281 0h3.164v.448H12.26v1.832h-.52v-1.832h-1.322v-.448zm8.414 0h.518v1.832h2.32v.448h-2.838v-2.28zm-16.176.428v.631H4.06c.325 0 .478-.103.478-.316 0-.214-.153-.315-.478-.315H2.656z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRtl(props) {
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