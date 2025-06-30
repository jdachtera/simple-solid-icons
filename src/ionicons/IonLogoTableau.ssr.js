import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M242.69,340.3h26.62V267.7h67V241.88h-67v-72.6H242.69v72.6H176.54V267.7h66.15Z\"></path>",
  _tmpl$2 = "<path d=\"M119.26,445.18h22.59V380.64h59.7V360.47h-59.7V295.13H119.26v65.34H59.56v20.17h59.7Z\"></path>",
  _tmpl$3 = "<path d=\"M370.15,212h22.59V147.5h60.5V128.13h-60.5V62.79H370.15v65.34h-59.7V147.5h59.7Z\"></path>",
  _tmpl$4 = "<path d=\"M246.72,496h19.36V450h41.15V433.08H266.08v-46H246.72v46H206.39V450h40.33Z\"></path>",
  _tmpl$5 = "<path d=\"M120.07,212h21V146.69h60.51V128.13H141V62.79h-21v65.34H59.56v18.56h60.51Z\"></path>",
  _tmpl$6 = "<path d=\"M435.72,308.84h19.36V263.66H496V245.92H455.08V200.74H435.72v45.18H395.39v17.74h40.33Z\"></path>",
  _tmpl$7 = "<path fill-rule=\"evenodd\" d=\"M370.15,445.18h22.59V380.64h60.5V360.47h-60.5V295.13H370.15v65.34h-59.7v20.17h59.7Z\"></path>",
  _tmpl$8 = "<path d=\"M307,74.08V60.37H266.66V16H252.14V60.37H211.81V74.08h40.33v44.37h14.52V74.08ZM56.11,305.61H70.63V261.24H111V247.53H70.63V204H56.11v43.56H16v14.52L56.11,262Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLogoTableau(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}