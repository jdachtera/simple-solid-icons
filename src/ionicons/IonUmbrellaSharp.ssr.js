import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M128.93,280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1Z\"></path>",
  _tmpl$2 = "<path d=\"M383.08,280l2.62-2.12c-.79.58-1.57,1.17-2.34,1.79Z\"></path>",
  _tmpl$3 = "<path d=\"M463.14,186.44A224.55,224.55,0,0,0,272,48.57V32H240V48.57A223.58,223.58,0,0,0,32,272v22.52l12.25-11.21a62.63,62.63,0,0,1,81.43-5.88l.22.17c.94.67,1.87,1.36,2.77,2.1q2.09,1.69,4,3.61L144,294.63l11.31-11.32a62.59,62.59,0,0,1,81.4-5.78L240,280V432a16,16,0,0,1-32,0V416H176v16a48,48,0,0,0,96,0V280l3.29-2.47a62.59,62.59,0,0,1,81.4,5.78L368,294.63l11.31-11.32q1.95-1.94,4.05-3.64c.77-.62,1.55-1.21,2.34-1.79l.26-.21c24.63-18.47,60-16.13,81.81,5.64L480,294.51V272A223.62,223.62,0,0,0,463.14,186.44Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonUmbrellaSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}