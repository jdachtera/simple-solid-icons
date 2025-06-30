import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Redmine</title>",
  _tmpl$2 = "<path d=\"m1.092 15.088c.789.243 4.098 1.005 4.098 1.005.198.061.139.21.139.21-.228 1.798-.178 3.17-.178 3.644 0 .21-.153.18-.153.18h-4.83c-.209 0-.164-.19-.164-.19.04-.599.212-2.303.878-4.746 0 0 .033-.157.21-.103zm21.816 0c-.789.243-4.098 1.005-4.098 1.005-.198.061-.139.21-.139.21.228 1.798.178 3.17.178 3.644 0 .21.153.18.153.18h4.83c.21 0 .164-.19.164-.19-.04-.599-.212-2.303-.878-4.746 0 0-.034-.157-.21-.103zm-1.929-5.354-3.448 1.667c-.164.063-.082.212-.082.212.476 1.134.766 2.091.99 3.251.038.194.169.132.169.132l3.879-1.684s.116-.044.068-.193c-.172-.531-1.05-2.649-1.402-3.341 0 0-.062-.105-.174-.044zm-17.958 0 3.448 1.667c.164.063.082.212.082.212-.476 1.134-.766 2.091-.991 3.251-.037.194-.169.132-.169.132l-3.878-1.684s-.116-.044-.068-.193c.172-.531 1.05-2.649 1.402-3.341 0 0 .062-.105.174-.044zm4.085-4.368 2.302 2.681c.099.128-.032.222-.032.222-.923.498-1.59 1.25-2.161 2.111-.114.17-.236.046-.236.046l-2.917-2.184s-.126-.074-.016-.22c.854-1.134 1.63-1.934 2.871-2.689 0 0 .094-.089.189.033zm9.788 0-2.302 2.681c-.099.128.032.222.032.222.923.498 1.59 1.25 2.161 2.111.114.17.236.046.236.046l2.917-2.184s.126-.074.016-.22c-.854-1.134-1.63-1.934-2.871-2.689 0 0-.094-.089-.189.033zm-4.894 2.295c.388 0 1.105.037 1.444.093.177.03.221-.088.221-.088l1.449-3.028s.097-.114-.106-.188c-1.082-.396-1.657-.578-3.008-.578-1.335 0-1.926.182-3.008.578-.203.074-.106.188-.106.188l1.449 3.028s.044.118.221.088c.339-.056 1.056-.093 1.444-.093z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRedmine(props) {
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