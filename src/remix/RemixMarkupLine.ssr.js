import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M10 10.4967L11.0385 6.86202C11.1902 6.33099 11.7437 6.0235 12.2747 6.17522C12.6069 6.27014 12.8666 6.52981 12.9615 6.86202L14 10.4967V11.9967H14.7192C15.1781 11.9967 15.5781 12.309 15.6894 12.7542L17.051 18.2008C18.8507 16.7339 20 14.4995 20 11.9967C20 7.57841 16.4183 3.99669 12 3.99669C7.58172 3.99669 4 7.57841 4 11.9967C4 14.4995 5.14932 16.7339 6.94897 18.2008L8.31063 12.7542C8.42193 12.309 8.82191 11.9967 9.28078 11.9967H10V10.4967ZM12 19.9967C12.2415 19.9967 12.4813 19.986 12.7189 19.9649C13.6187 19.8847 14.4756 19.6556 15.2649 19.3023L13.9384 13.9967H10.0616L8.73514 19.3023C9.52438 19.6556 10.3813 19.8847 11.2811 19.9648C11.5187 19.986 11.7585 19.9967 12 19.9967ZM12 21.9967C6.47715 21.9967 2 17.5195 2 11.9967C2 6.47384 6.47715 1.99669 12 1.99669C17.5228 1.99669 22 6.47384 22 11.9967C22 17.5195 17.5228 21.9967 12 21.9967Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixMarkupLine(props) {
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
  }), () => _$ssr(_tmpl$), true);
}