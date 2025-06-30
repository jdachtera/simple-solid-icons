import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M307.94,248,216,154.52V242a6,6,0,0,0,6,6Z\"></path>",
  _tmpl$2 = "<path d=\"M184,268V144H60a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H308a12,12,0,0,0,12-12V280H196A12,12,0,0,1,184,268Z\"></path>",
  _tmpl$3 = "<path d=\"M366,120h85.94L360,26.52V114A6,6,0,0,0,366,120Z\"></path>",
  _tmpl$4 = "<path d=\"M340,152a12,12,0,0,1-12-12V16H172a12,12,0,0,0-12,12v84h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400H452a12,12,0,0,0,12-12V152Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonDocumentsSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4)], true);
}