import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z\"></path>",
  _tmpl$2 = "<polyline fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" points=\"69 153.99 256 263.99 443 153.99\"></polyline>",
  _tmpl$3 = "<line fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" x1=\"256\" y1=\"463.99\" x2=\"256\" y2=\"263.99\"></line>",
  _tmpl$4 = "<ellipse cx=\"256\" cy=\"152\" rx=\"24\" ry=\"16\"></ellipse>",
  _tmpl$5 = "<ellipse cx=\"208\" cy=\"296\" rx=\"16\" ry=\"24\"></ellipse>",
  _tmpl$6 = "<ellipse cx=\"112\" cy=\"328\" rx=\"16\" ry=\"24\"></ellipse>",
  _tmpl$7 = "<ellipse cx=\"304\" cy=\"296\" rx=\"16\" ry=\"24\"></ellipse>",
  _tmpl$8 = "<ellipse cx=\"400\" cy=\"240\" rx=\"16\" ry=\"24\"></ellipse>",
  _tmpl$9 = "<ellipse cx=\"304\" cy=\"384\" rx=\"16\" ry=\"24\"></ellipse>",
  _tmpl$0 = "<ellipse cx=\"400\" cy=\"328\" rx=\"16\" ry=\"24\"></ellipse>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonDiceOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}