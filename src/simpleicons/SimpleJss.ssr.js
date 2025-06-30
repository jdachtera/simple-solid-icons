import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>JSS</title>",
  _tmpl$2 = "<path d=\"M0 2.5v19h19.2v-1.95c.506.263 1.124.42 1.857.42 1.687 0 2.943-.877 2.943-2.475 0-1.483-.852-2.143-2.36-2.79l-.444-.19c-.762-.33-1.092-.546-1.092-1.078 0-.431.33-.761.85-.761.51 0 .838.215 1.142.76l1.383-.887c-.585-1.029-1.396-1.422-2.525-1.422-.715 0-1.312.207-1.754.555V2.5zm.36.359h18.48v9.182a2.266 2.266 0 00-.487 1.432c0 .654.176 1.152.486 1.552v2.537l-1.018.592c.232.456.57.864 1.018 1.177v1.81H.361zm14.188 8.268c-1.586 0-2.6 1.014-2.6 2.346 0 1.445.85 2.13 2.132 2.675l.443.19c.81.355 1.293.57 1.293 1.18 0 .508-.47.875-1.205.875-.876 0-1.371-.457-1.752-1.078l-1.443.839c.521 1.03 1.587 1.816 3.236 1.816 1.687 0 2.943-.876 2.943-2.475 0-1.483-.852-2.143-2.361-2.79l-.444-.19c-.762-.33-1.092-.546-1.092-1.078 0-.431.33-.761.85-.761.51 0 .838.215 1.143.76l1.382-.887c-.584-1.029-1.396-1.422-2.525-1.422zm-5.868.101v6.038c0 .888-.368 1.116-.951 1.116-.61 0-.864-.418-1.143-.913l-1.446.875c.419.886 1.242 1.622 2.664 1.622 1.574 0 2.652-.837 2.652-2.676v-6.062zm10.52 4.173c.345.295.781.532 1.286.747l.443.19c.81.355 1.293.57 1.293 1.18 0 .508-.47.875-1.206.875-.876 0-1.37-.457-1.752-1.078l-.064.037z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleJss(props) {
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