import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M3 3L11.7348 11.7348M11.7348 11.7348C11.8027 11.667 11.8964 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12C12.375 12.1036 12.333 12.1973 12.2652 12.2652M11.7348 11.7348L12.2652 12.2652M12.2652 12.2652L21 21M14.6517 9.34835C16.1161 10.8128 16.1161 13.1872 14.6517 14.6516M16.773 7.22703C19.409 9.86307 19.409 14.1369 16.773 16.773M18.8943 5.10571C22.7019 8.91332 22.7019 15.0867 18.8943 18.8943M9.34835 14.6516C8.75129 14.0546 8.39765 13.3063 8.28743 12.5301M7.22703 16.773C5.35299 14.8989 4.81126 12.1971 5.60184 9.84448M5.10571 18.8943C2.03824 15.8268 1.44197 11.2239 3.3169 7.55955M12 12H12.0075V12.0075H12V12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroSignalSlash(props) {
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
  }), () => _$ssr(_tmpl$), true);
}