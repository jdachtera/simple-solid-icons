import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>San Francisco Municipal Railway</title><path d="M16.62 15.698v-4.847s0-.232-.237-.232c-.225 0-.225.232-.225.232v6.678h-.924V9.925s-.022-1.154 1.15-1.154c1.153 0 1.153 1.153 1.153 1.153v4.156s0 1.618 1.616 1.618c1.615 0 1.615-1.618 1.615-1.618V6.448h.924v9.25s0 2.073-2.54 2.073c-2.532 0-2.532-2.073-2.532-2.073m-5.542-1.607V6.448h.925v6.71s-.023.233.23.233c.254 0 .23-.232.23-.232v-6.71h.923v7.631s.095 1.157-1.153 1.157c-1.247 0-1.155-1.146-1.155-1.146m-8.306 1.146L2.77 10.85s0-.232-.23-.232c-.232 0-.232.232-.232.232v6.678h-.922V9.925s0-1.154 1.154-1.154 1.154 1.153 1.154 1.153v4.156s0 1.618 1.613 1.618c1.618 0 1.618-1.618 1.618-1.618V9.925s-.02-1.154 1.15-1.154c1.158 0 1.158 1.153 1.158 1.153v7.605H8.31v-6.678s0-.232-.237-.232c-.225 0-.225.232-.225.232v4.386s-.03 2.534-2.542 2.534c-2.513 0-2.535-2.534-2.535-2.534m19.385-8.789H24V17.53h-1.843zM9.695 15.237V9.924s0-1.61-1.62-1.61c-1.612 0-1.612 1.61-1.612 1.61v4.156s0 1.157-1.156 1.157c-1.154 0-1.154-1.157-1.154-1.157V9.925s0-1.611-1.613-1.611c-1.616 0-1.616 1.61-1.616 1.61v7.605H0V8.771s0-2.543 2.54-2.543 2.54 2.543 2.54 2.543l.01 4.42s-.01.2.217.2c.242 0 .235-.232.235-.232V8.77s0-2.543 2.532-2.543c2.545 0 2.54 2.543 2.54 2.543l.005 5.31s-.075 1.617 1.613 1.617c1.69 0 1.614-1.618 1.614-1.618l.002-5.31s0-2.541 2.535-2.541c2.537 0 2.537 2.542 2.537 2.542l.008 4.388s-.008.232.225.232c.23 0 .23-.232.23-.232v-6.71h.924v7.631s0 1.157-1.154 1.157c-1.157 0-1.157-1.157-1.157-1.157V9.925s0-1.611-1.613-1.611c-1.611 0-1.611 1.61-1.611 1.61v5.313s0 2.534-2.54 2.534c-2.537 0-2.537-2.534-2.537-2.534Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSanfranciscomunicipalrailway(props) {
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
  return (() => {
    var _el$ = _$getNextElement(_tmpl$);
    _$spread(_el$, _$mergeProps(merged, {
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
    }), true, true);
    _$runHydrationEvents();
    return _el$;
  })();
}