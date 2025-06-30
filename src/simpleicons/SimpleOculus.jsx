import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Oculus</title><path d="M18.135 13.949c-.319.221-.675.355-1.057.416s-.761.049-1.142.049H8.063c-.382 0-.762.014-1.145-.049-.381-.063-.734-.195-1.057-.416-.643-.451-1.027-1.17-1.027-1.951 0-.796.387-1.515 1.029-1.95.314-.225.674-.359 1.049-.42s.75-.061 1.141-.061h7.875c.375 0 .765-.014 1.14.046s.735.194 1.051.405c.645.434 1.02 1.17 1.02 1.949 0 .78-.391 1.5-1.035 1.95l.031.032zm3.174-7.555c-.845-.678-1.812-1.146-2.865-1.398-.6-.146-1.203-.211-1.822-.23-.449-.015-.899-.01-1.364-.01H8.76c-.457 0-.915-.005-1.372.01-.618.021-1.222.083-1.825.23-1.051.254-2.025.723-2.865 1.4C.99 7.761 0 9.82 0 12c0 2.182.99 4.241 2.689 5.606.846.678 1.815 1.146 2.865 1.4.603.146 1.206.211 1.823.229.45.016.9.012 1.365.012h6.496c.449 0 .914.004 1.364-.012.615-.018 1.215-.082 1.814-.229 1.05-.256 2.011-.723 2.866-1.402C23.01 16.24 24 14.18 24 12c0-2.181-.99-4.241-2.691-5.606z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOculus(props) {
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