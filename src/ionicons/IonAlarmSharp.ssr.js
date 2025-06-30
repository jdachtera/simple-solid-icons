import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M403.79,64.11l-3.27-.1H400c-14.73,0-28.55,5.91-40.52,15S344,96,344,96l88,86s11.25-5.71,17.61-13.85,14.28-18.08,14.32-37.11C464,95.55,437.6,66.15,403.79,64.11Z\"></path>",
  _tmpl$2 = "<path d=\"M108.21,64.11l3.27-.1H112c14.73,0,28.55,5.91,40.52,15S168,96,168,96L80,182s-11.25-5.71-17.61-13.85S48.11,150.07,48.07,131C48,95.55,74.4,66.15,108.21,64.11Z\"></path>",
  _tmpl$3 = "<path d=\"M391.3,384.6a.06.06,0,0,1,0-.08C425,344,441,288.24,427,229.23c-13.64-57.52-72.67-115.69-130.34-128.66C182,74.79,80.07,161.71,80.07,272a175.15,175.15,0,0,0,40.78,112.52.06.06,0,0,1,0,.08L73,432a.06.06,0,0,0,0,.08L96,454.59a.06.06,0,0,0,.08,0l47.43-47.37a.06.06,0,0,1,.08,0,175.64,175.64,0,0,0,225.05,0,0,0,0,0,1,.07,0L416,454.59a.06.06,0,0,0,.08,0L440,432ZM272.07,288h-112A0,0,0,0,1,160,288v-31.9a0,0,0,0,1,.05-.05h80a0,0,0,0,0,0-.05V144h32Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonAlarmSharp(props) {
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