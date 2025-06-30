import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M9.44618 8.02867L12 10.5825L18.7279 3.85457C19.509 3.07352 20.7753 3.07352 21.5563 3.85457L9.44618 15.9647C9.79807 16.5603 10 17.2549 10 17.9967C10 20.2058 8.20914 21.9967 6 21.9967C3.79086 21.9967 2 20.2058 2 17.9967C2 15.7876 3.79086 13.9967 6 13.9967C6.74181 13.9967 7.43645 14.1986 8.03197 14.5505L10.5858 11.9967L8.03197 9.44289C7.43645 9.79478 6.74181 9.9967 6 9.9967C3.79086 9.9967 2 8.20584 2 5.9967C2 3.78756 3.79086 1.9967 6 1.9967C8.20914 1.9967 10 3.78756 10 5.9967C10 6.73851 9.79807 7.43316 9.44618 8.02867ZM14.8255 13.408L21.5563 20.1388C20.7753 20.9199 19.509 20.9199 18.7279 20.1388L13.4113 14.8222L14.8255 13.408ZM7.41421 16.5825C7.05228 16.2206 6.55228 15.9967 6 15.9967C4.89543 15.9967 4 16.8921 4 17.9967C4 19.1013 4.89543 19.9967 6 19.9967C7.10457 19.9967 8 19.1013 8 17.9967C8 17.4444 7.77614 16.9444 7.41421 16.5825ZM7.41421 7.41092C7.77614 7.04899 8 6.54899 8 5.9967C8 4.89213 7.10457 3.9967 6 3.9967C4.89543 3.9967 4 4.89213 4 5.9967C4 7.10127 4.89543 7.9967 6 7.9967C6.55228 7.9967 7.05228 7.77285 7.41421 7.41092Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixScissorsLine(props) {
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