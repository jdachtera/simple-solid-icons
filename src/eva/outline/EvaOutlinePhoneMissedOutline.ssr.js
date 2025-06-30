import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>phone-missed</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"phone-missed\"><g id=\"phone-missed-2\" data-name=\"phone-missed\"><path d=\"M21.94,16.64a4.34,4.34,0,0,0-.19-.73,1,1,0,0,0-.72-.65l-6-1.37a1,1,0,0,0-.92.26c-.14.13-.15.14-.8,1.38a10,10,0,0,1-4.88-4.89C9.71,10,9.72,10,9.85,9.85a1,1,0,0,0,.26-.92L8.74,3a1,1,0,0,0-.65-.72,3.79,3.79,0,0,0-.72-.18A3.94,3.94,0,0,0,6.6,2,4.6,4.6,0,0,0,2,6.6,15.42,15.42,0,0,0,17.4,22,4.6,4.6,0,0,0,22,17.4,4.77,4.77,0,0,0,21.94,16.64ZM17.4,20A13.41,13.41,0,0,1,4,6.6,2.61,2.61,0,0,1,6.6,4l.33,0L8,8.64l-.55.29c-.87.45-1.5.78-1.17,1.58a11.85,11.85,0,0,0,7.18,7.21c.84.34,1.17-.29,1.62-1.16l.29-.55L20,17.07c0,.11,0,.22,0,.33A2.61,2.61,0,0,1,17.4,20Z\"></path><path d=\"M15.8,8.7a1.05,1.05,0,0,0,1.47,0L18,8l.73.73A1,1,0,0,0,20.2,7.23l-.73-.73.73-.73A1,1,0,0,0,18.73,4.3L18,5l-.73-.73A1,1,0,0,0,15.8,5.77l.73.73-.73.73A1.05,1.05,0,0,0,15.8,8.7Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlinePhoneMissedOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}