import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Stimulus</title>",
  _tmpl$2 = "<path d=\"M.704 0A.704.704 0 000 .704v2.824h5.648a3.064 3.064 0 011.312.36l3.232 1.9a.4.4 0 010 .712l-1.536.904a1.308 1.308 0 01-1.2 0l-1.2-.7a3.084 3.084 0 00-1.316-.36H0v4.236h4.94a3.028 3.028 0 001.316-.36l10.8-6.344a3.008 3.008 0 011.312-.36H24V.692A.704.704 0 0023.296 0zM19.06 6.352a3.084 3.084 0 00-1.316.36l-10.8 6.348a3.064 3.064 0 01-1.312.36H0v4.236h4.94a3.084 3.084 0 001.316-.36l10.8-6.348a3.064 3.064 0 011.312-.36H24V6.352h-3.376zm0 7.072a3.084 3.084 0 00-1.316.36l-10.8 6.344a3.008 3.008 0 01-1.312.36H0v2.824A.708.708 0 00.704 24h22.592a.708.708 0 00.704-.7v-2.824h-5.648a3.008 3.008 0 01-1.312-.36l-3.232-1.896a.4.4 0 010-.716l1.536-.9a1.308 1.308 0 011.2 0l1.2.696a3.028 3.028 0 001.316.36H24v-4.236h-3.376z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleStimulus(props) {
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