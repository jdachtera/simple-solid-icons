import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 2a10 10 0 0 1 7.38 16.75\"></path>",
  _tmpl$2 = "<path d=\"m16 12-4-4-4 4\"></path>",
  _tmpl$3 = "<path d=\"M12 16V8\"></path>",
  _tmpl$4 = "<path d=\"M2.5 8.875a10 10 0 0 0-.5 3\"></path>",
  _tmpl$5 = "<path d=\"M2.83 16a10 10 0 0 0 2.43 3.4\"></path>",
  _tmpl$6 = "<path d=\"M4.636 5.235a10 10 0 0 1 .891-.857\"></path>",
  _tmpl$7 = "<path d=\"M8.644 21.42a10 10 0 0 0 7.631-.38\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCircleFadingArrowUp(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}