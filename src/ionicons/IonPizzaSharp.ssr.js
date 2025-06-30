import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M442.3,67.82h0C383.92,44.72,317.78,32,256,32c-63.57,0-129.8,12.51-186.56,35.25C49.18,75.48,42,80,42,80l22,44,37.53-16.14C147.58,89.53,199.19,80,256.51,80,314,80,364.6,89.23,411.26,108.25h0L448,124l22-44S463,76,442.3,67.82Z\"></path>",
  _tmpl$2 = "<ellipse cx=\"320.48\" cy=\"207.99\" rx=\"31.97\" ry=\"32.03\" transform=\"translate(-53.23 287.42) rotate(-44.98)\" style=\"fill:none\"></ellipse>",
  _tmpl$3 = "<ellipse cx=\"192.48\" cy=\"191.99\" rx=\"31.97\" ry=\"32.03\" transform=\"translate(-79.38 192.25) rotate(-44.98)\" style=\"fill:none\"></ellipse>",
  _tmpl$4 = "<ellipse cx=\"256.48\" cy=\"319.99\" rx=\"31.97\" ry=\"32.03\" transform=\"translate(-151.13 274.96) rotate(-44.98)\" style=\"fill:none\"></ellipse>",
  _tmpl$5 = "<path d=\"M409.66,140.85C364.15,122.52,308.16,112,256,112A425,425,0,0,0,102.3,140.9c-.25.1-9.24,4.23-19,8.71,7.46,16.22,18,39.16,22.2,48.33L256,480,429.74,149.16l-19.92-8.24ZM224.41,194.07a32,32,0,1,1-34-34A32.12,32.12,0,0,1,224.41,194.07Zm64,128a32,32,0,1,1-34-34A32.12,32.12,0,0,1,288.41,322.07Zm64-112a32,32,0,1,1-34-34A32.12,32.12,0,0,1,352.41,210.07Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonPizzaSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5)], true);
}