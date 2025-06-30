import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"255.75\" cy=\"56\" r=\"56\"></circle>",
  _tmpl$2 = "<path d=\"M310.28,191.4h.05l7.66-2.3,36.79,122.6,46-13.8-16.21-54.16c0-.12,0-.24-.07-.36l-16.84-56.12-4.71-15.74h0l-.9-3H362l-2.51-8.45a44.84,44.84,0,0,0-43-32.08H195.24a44.84,44.84,0,0,0-43,32.08l-2.51,8.45h-.06l-.9,3h0l-4.71,15.74-16.84,56.12c0,.12,0,.24-.07.36L110.94,297.9l46,13.8L193.7,189.1l7.54,2.26L148.25,368h51.5V512h52V368h8V512h52V368h51.51Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonWomanSharp(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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