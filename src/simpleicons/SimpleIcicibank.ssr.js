import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>ICICI Bank</title>",
  _tmpl$2 = "<path d=\"M21.9258 2.0961C19.279-1.6476 12.698-.2426 7.2138 5.2416c-5.484 5.475-7.7865 12.9625-5.1397 16.7062.8728 1.2386 2.1837 1.902 3.7386 2.0522 1.0516.0078 1.9129-1.1846 2.6158-2.7774.7252-1.6678 1.1694-3.218 1.5138-4.6592.5077-2.2934.544-3.934.29-4.2786-.435-.5801-1.4321-.435-2.5561.2176-.544.2991-1.26.0997-.408-.9336.8612-1.0425 4.2605-3.5625 5.4933-3.9523 1.3415-.3898 2.8734.136 2.3568 1.6226-.3706 1.0847-5.0473 13.486-1.596 12.2719 1.1049-.747 2.205-1.6497 3.2639-2.7086 5.4841-5.475 7.7865-12.9625 5.1396-16.7063zm-5.3662 3.209c-1.0969 1.0968-2.52 1.4865-3.1364.852-.6617-.6345-.272-2.0577.8249-3.1726 1.1058-1.115 2.529-1.4594 3.1454-.834.6345.6436.2448 2.0487-.834 3.1545z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleIcicibank(props) {
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