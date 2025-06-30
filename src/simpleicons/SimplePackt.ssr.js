import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Packt</title>",
  _tmpl$2 = "<path d=\"M12.965 4.898c-.707 0-1.344.152-1.908.452a3.901 3.901 0 0 0-.891.642v-.937H7.488v14.047h2.657V14.1c.26.249.559.463.898.638.572.294 1.213.44 1.92.44.914 0 1.73-.224 2.453-.674 1.237-.77 2.328-2.27 2.328-4.453 0-2.206-1.09-3.704-2.328-4.477-.721-.45-1.537-.676-2.451-.676zM3.8 5.055 0 9.79l3.822 5.133H7.09L3.012 9.79l3.875-4.736Zm13.312 0 3.875 4.736-4.078 5.133h3.268L24 9.79l-3.8-4.736Zm-4.619 2.318c1.007 0 1.788.493 2.2 1.275.452.86.395 2.034 0 2.78-.221.419-.84 1.277-2.2 1.277-.49 0-.925-.11-1.299-.336a2.338 2.338 0 0 1-.879-.941c-.211-.403-.316-.869-.316-1.399s.105-.978.316-1.38c.393-.748 1.156-1.276 2.178-1.276z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePackt(props) {
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