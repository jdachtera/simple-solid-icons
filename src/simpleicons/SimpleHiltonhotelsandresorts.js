import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Hilton Hotels &amp; Resorts</title><path d="M11.1968 3.6956C4.749 3.6956 0 7.8018 0 12.1897c0 2.2672 1.2753 4.1769 2.8798 5.5006l.122-.083C1.7288 16.5531.5798 14.9.5798 12.6365.9163 7.836 6.8255 5.1298 12.0763 5.1298c3.7177 0 10.3932.8607 10.3932 7.0862 0 3.2484-3.4645 7.4727-10.7367 7.4727-3.7243 0-6.618-1.9984-6.618-4.87 0-2.4873 1.943-4.2578 4.8414-4.2578.7985 0 1.5469.1868 2.1176.3423-1.2086-.218-3.085.093-4.0559.8572v4.2045h3.5612v-4.7796a4.3988 4.3988 0 0 1 1.5513.5977v4.182h.9277c-.7295.8196-2.0877 1.3186-3.2642 1.135v.176c3.3839.2666 4.8157-1.341 4.8157-3.1501 0-2.1283-1.9933-3.3782-4.0305-3.634V7.3488H8.0178v3.1805c-2.3045.465-4.5605 1.8371-4.5605 4.1097 0 3.4981 4.88 5.6654 9.1253 5.6654C19.035 20.3044 24 17.1786 24 12.7934c0-5.3088-7.1681-9.0978-12.8032-9.0978m4.9079 10.5528c0-1.5458-1.0548-2.7842-2.9744-3.3821V7.3488h3.5568v8.6161H15.575c.391-.552.5297-1.1783.5297-1.7165">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHiltonhotelsandresorts(props) {
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