import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>IndiGo</title>",
  _tmpl$2 = "<path d=\"M22.99 0c-.25 0-.5.096-.691.287a.983.983 0 0 0 0 1.386.975.975 0 0 0 1.382 0 .983.983 0 0 0 0-1.386A.975.975 0 0 0 22.99 0Zm-2.444 1.959c-.25 0-.5.096-.691.287a.983.983 0 0 0 0 1.386.977.977 0 0 0 1.382 0 .981.981 0 0 0-.691-1.673ZM6.384 4.408a.98.98 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm2.928 0a.979.979 0 0 0 0 1.959.978.978 0 1 0 0-1.959Zm3.42 0a.979.979 0 0 0 0 1.959.98.98 0 0 0 0-1.959Zm2.931 0a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm2.931 0a.978.978 0 1 0-.001 1.961.978.978 0 0 0 .001-1.961Zm-2.931 2.939a.98.98 0 0 0 0 1.958.98.98 0 0 0 0-1.958Zm2.931 0a.98.98 0 0 0 0 1.959.977.977 0 0 0 .976-.979.978.978 0 0 0-.976-.98Zm-5.373 1.959a.97.97 0 0 0-.691.287.979.979 0 0 0 1.382 1.386.981.981 0 0 0-.691-1.673Zm5.373.98a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm-7.327 1.469a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm7.327 1.47a.98.98 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm-9.282.489a.981.981 0 0 0-.69 1.673.975.975 0 0 0 1.381 0 .981.981 0 0 0-.691-1.673Zm-8.303 2.45a.978.978 0 1 0 .004 1.956.978.978 0 0 0-.004-1.956Zm2.931 0a.978.978 0 1 0 .004 1.956.978.978 0 0 0-.004-1.956Zm2.931 0a.978.978 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm11.723.489a.98.98 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm-11.723 2.45a.978.978 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm0 2.938a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleIndigo(props) {
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