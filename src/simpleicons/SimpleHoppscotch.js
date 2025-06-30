import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Hoppscotch</title><path d="M15.632 4.746a8.894 8.894 0 0 1 5.29 7.938c1.867 1.47 3.723 3.527 2.86 5.465-.968 2.174-4.415 2.085-8.334.985A7.113 7.113 0 0 1 5.063 14.51C1.623 12.334-.75 9.832.218 7.658c.863-1.939 3.634-1.936 5.975-1.532a8.894 8.894 0 0 1 9.439-1.38ZM1.862 8.39c-.47 1.056 2.056 4.054 8.972 7.133 6.916 3.08 10.834 2.95 11.304 1.894.39-.874-1.212-2.554-3.046-3.856-1.426-1.02-3.38-2.143-5.929-3.278-.694-.309-.964-1.133-.673-1.788.292-.655.933-1.093 2.282-1.156.635-.002.718-.178.747-.329.036-.233-.287-.47-.62-.618-2.647-1.179-5.888-.685-8.134 1.68-2.195-.491-4.514-.556-4.903.318Zm11.083 5.666c-.24.54-.98.735-1.651.436s-1.02-.979-.78-1.518c.24-.54.979-.735 1.65-.436.671.299 1.021.979.78 1.518zm4.02 2.327c.703.202 1.404-.093 1.566-.658.162-.564-.276-1.186-.98-1.387-.702-.202-1.403.093-1.565.658-.162.564.276 1.186.98 1.387zM7.218 9.737c.62.388.87 1.106.559 1.604-.311.498-1.066.588-1.686.2-.62-.387-.87-1.105-.56-1.604.312-.498 1.067-.588 1.687-.2Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHoppscotch(props) {
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