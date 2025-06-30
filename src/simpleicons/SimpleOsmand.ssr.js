import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>OsmAnd</title>",
  _tmpl$2 = "<path d=\"M12 0C6.11 0 1.332 4.777 1.332 10.668a10.67 10.67 0 0 0 6.52 9.828c1.927.836 2.667 1.282 3.26 2.467q.085.172.152.326c.189.422.318.711.736.711s.546-.289.736-.71q.069-.155.153-.327c.593-1.186 1.28-1.63 3.26-2.467a10.67 10.67 0 0 0 6.519-9.828C22.668 4.777 17.89 0 12 0m-.443 4.758a5.926 5.926 0 0 1 6.369 5.91 5.926 5.926 0 0 1-11.852 0 5.926 5.926 0 0 1 5.483-5.91\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOsmand(props) {
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