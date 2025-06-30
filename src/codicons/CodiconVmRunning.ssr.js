import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.5 2h13l.5.5v5.503a5.006 5.006 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10l.5-.5z\"></path>",
  _tmpl$2 = "<path d=\"M12 8c.367 0 .721.047 1.063.14.34.094.658.23.953.407.294.177.563.385.808.625.245.24.455.509.63.808a4.03 4.03 0 0 1 .405 3.082c-.093.342-.229.66-.406.954a4.382 4.382 0 0 1-.625.808c-.24.245-.509.455-.808.63a4.029 4.029 0 0 1-3.082.405 3.784 3.784 0 0 1-.954-.406 4.382 4.382 0 0 1-.808-.625 3.808 3.808 0 0 1-.63-.808 4.027 4.027 0 0 1-.405-3.082c.093-.342.229-.66.406-.954.177-.294.385-.563.625-.808.24-.245.509-.455.808-.63A4.028 4.028 0 0 1 12 8zm2 3.988L11 10v4l3-2.012z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconVmRunning(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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