var fs = require('fs')

var allProp = [
  'align-content',
  'align-items',
  'align-self',
  'alt',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'animation-trigger',
  'appearance',
  'aspect-ratio',
  'backdrop-filter',
  'backface-visibility',
  'background-clip',
  'background-composite',
  'background-origin',
  'background-size',
  'border-after',
  'border-after-color',
  'border-after-style',
  'border-after-width',
  'border-before',
  'border-before-color',
  'border-before-style',
  'border-before-width',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-end',
  'border-end-color',
  'border-end-style',
  'border-end-width',
  'border-fit',
  'border-horizontal-spacing',
  'border-image',
  'border-radius',
  'border-start',
  'border-start-color',
  'border-start-style',
  'border-start-width',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-vertical-spacing',
  'box-align',
  'box-decoration-break',
  'box-direction',
  'box-flex',
  'box-flex-group',
  'box-lines',
  'box-ordinal-group',
  'box-orient',
  'box-pack',
  'box-reflect',
  'box-shadow',
  'box-sizing',
  'clip-path',
  'color-correction',
  'column-axis',
  'column-break-after',
  'column-break-before',
  'column-break-inside',
  'column-count',
  'column-fill',
  'column-gap',
  'column-progression',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'cursor-visibility',
  'dashboard-region',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'flow-from',
  'flow-into',
  'font-feature-settings',
  'font-kerning',
  'font-size-delta',
  'font-smoothing',
  'font-variant-ligatures',
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-start',
  'grid-row',
  'grid-row-end',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'hyphenate-character',
  'hyphenate-limit-after',
  'hyphenate-limit-before',
  'hyphenate-limit-lines',
  'hyphens',
  'initial-letter',
  'justify-content',
  'justify-items',
  'justify-self',
  'line-align',
  'line-box-contain',
  'line-break',
  'line-clamp',
  'line-grid',
  'line-snap',
  'locale',
  'logical-height',
  'logical-width',
  'margin-after',
  'margin-after-collapse',
  'margin-before',
  'margin-before-collapse',
  'margin-bottom-collapse',
  'margin-collapse',
  'margin-end',
  'margin-start',
  'margin-top-collapse',
  'marquee',
  'marquee-direction',
  'marquee-increment',
  'marquee-repetition',
  'marquee-speed',
  'marquee-style',
  'mask',
  'mask-box-image',
  'mask-box-image-outset',
  'mask-box-image-repeat',
  'mask-box-image-slice',
  'mask-box-image-source',
  'mask-box-image-width',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-origin',
  'mask-position',
  'mask-position-x',
  'mask-position-y',
  'mask-repeat',
  'mask-repeat-x',
  'mask-repeat-y',
  'mask-size',
  'mask-source-type',
  'max-logical-height',
  'max-logical-width',
  'min-logical-height',
  'min-logical-width',
  'nbsp-mode',
  'opacity',
  'order',
  'overflow-scrolling',
  'padding-after',
  'padding-before',
  'padding-end',
  'padding-start',
  'perspective',
  'perspective-origin',
  'perspective-origin-x',
  'perspective-origin-y',
  'print-color-adjust',
  'region-break-after',
  'region-break-before',
  'region-break-inside',
  'region-fragment',
  'rtl-ordering',
  'ruby-position',
  'scroll-snap-coordinate',
  'scroll-snap-destination',
  'scroll-snap-points-x',
  'scroll-snap-points-y',
  'scroll-snap-type',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'svg-shadow',
  'tap-highlight-color',
  'text-align-last',
  'text-combine',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-skip',
  'text-decoration-style',
  'text-decorations-in-effect',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-fill-color',
  'text-justify',
  'text-orientation',
  'text-security',
  'text-size-adjust',
  'text-stroke',
  'text-stroke-color',
  'text-stroke-width',
  'text-underline-position',
  'touch-callout',
  'transform',
  'transform-origin',
  'transform-origin-x',
  'transform-origin-y',
  'transform-origin-z',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'user-drag',
  'user-modify',
  'user-select',
  'writing-mode',


  'align-content',
  'align-items',
  'align-self',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'app-region',
  'appearance',
  'aspect-ratio',
  'backface-visibility',
  'background-clip',
  'background-composite',
  'background-origin',
  'background-size',
  'border-after',
  'border-after-color',
  'border-after-style',
  'border-after-width',
  'border-before',
  'border-before-color',
  'border-before-style',
  'border-before-width',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-end',
  'border-end-color',
  'border-end-style',
  'border-end-width',
  'border-fit',
  'border-horizontal-spacing',
  'border-image',
  'border-radius',
  'border-start',
  'border-start-color',
  'border-start-style',
  'border-start-width',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-vertical-spacing',
  'box-align',
  'box-decoration-break',
  'box-direction',
  'box-flex',
  'box-flex-group',
  'box-lines',
  'box-ordinal-group',
  'box-orient',
  'box-pack',
  'box-reflect',
  'box-shadow',
  'box-sizing',
  'clip-path',
  'column-break-after',
  'column-break-before',
  'column-break-inside',
  'column-count',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'font-feature-settings',
  'font-size-delta',
  'font-smoothing',
  'highlight',
  'hyphenate-character',
  'justify-content',
  'line-box-contain',
  'line-break',
  'line-clamp',
  'locale',
  'logical-height',
  'logical-width',
  'margin-after',
  'margin-after-collapse',
  'margin-before',
  'margin-before-collapse',
  'margin-bottom-collapse',
  'margin-collapse',
  'margin-end',
  'margin-start',
  'margin-top-collapse',
  'mask',
  'mask-box-image',
  'mask-box-image-outset',
  'mask-box-image-repeat',
  'mask-box-image-slice',
  'mask-box-image-source',
  'mask-box-image-width',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-origin',
  'mask-position',
  'mask-position-x',
  'mask-position-y',
  'mask-repeat',
  'mask-repeat-x',
  'mask-repeat-y',
  'mask-size',
  'max-logical-height',
  'max-logical-width',
  'min-logical-height',
  'min-logical-width',
  'opacity',
  'order',
  'padding-after',
  'padding-before',
  'padding-end',
  'padding-start',
  'perspective',
  'perspective-origin',
  'perspective-origin-x',
  'perspective-origin-y',
  'print-color-adjust',
  'rtl-ordering',
  'ruby-position',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'tap-highlight-color',
  'text-combine',
  'text-decorations-in-effect',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-fill-color',
  'text-orientation',
  'text-security',
  'text-stroke',
  'text-stroke-color',
  'text-stroke-width',
  'transform',
  'transform-origin',
  'transform-origin-x',
  'transform-origin-y',
  'transform-origin-z',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'user-drag',
  'user-modify',
  'user-select',
  'writing-mode',

  'appearance',
  'binding',
  'border-bottom-colors',
  'border-end',
  'border-end-color',
  'border-end-style',
  'border-end-width',
  'border-left-colors',
  'border-right-colors',
  'border-start',
  'border-start-color',
  'border-start-style',
  'border-start-width',
  'border-top-colors',
  'box-align',
  'box-direction',
  'box-flex',
  'box-ordinal-group',
  'box-orient',
  'box-pack',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-width',
  'columns',
  'control-character-visibility',
  'float-edge',
  'force-broken-image-icon',
  'hyphens',
  'image-region',
  'margin-end',
  'margin-start',
  'math-display',
  'math-variant',
  'orient',
  'osx-font-smoothing',
  'outline-radius',
  'outline-radius-bottomleft',
  'outline-radius-bottomright',
  'outline-radius-topleft',
  'outline-radius-topright',
  'padding-end',
  'padding-start',
  'script-level',
  'script-min-size',
  'script-size-multiplier',
  'stack-sizing',
  'tab-size',
  'text-align-last',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-size-adjust',
  'transform',
  'user-focus',
  'user-input',
  'user-modify',
  'user-select',
  'window-dragging',
  'window-shadow',

  'accelerator',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'backface-visibility',
  'background-position-x',
  'background-position-y',
  'behavior',
  'block-progression',
  'content-zoom-chaining',
  'content-zoom-limit',
  'content-zoom-limit-max',
  'content-zoom-limit-min',
  'content-zoom-snap',
  'content-zoom-snap-points',
  'content-zoom-snap-type',
  'content-zooming',
  'filter',
  'flex',
  'flex-align',
  'flex-direction',
  'flex-flow',
  'flex-item-align',
  'flex-line-pack',
  'flex-negative',
  'flex-order',
  'flex-pack',
  'flex-positive',
  'flex-preferred-size',
  'flex-wrap',
  'flow-from',
  'flow-into',
  'font-feature-settings',
  'grid-column',
  'grid-column-align',
  'grid-column-span',
  'grid-columns',
  'grid-row',
  'grid-row-align',
  'grid-row-span',
  'grid-rows',
  'high-contrast-adjust',
  'hyphenate-limit-chars',
  'hyphenate-limit-lines',
  'hyphenate-limit-zone',
  'hyphens',
  'ime-align',
  'ime-mode',
  'interpolation-mode',
  'layout-flow',
  'layout-grid',
  'layout-grid-char',
  'layout-grid-line',
  'layout-grid-mode',
  'layout-grid-type',
  'line-break',
  'overflow-style',
  'overflow-x',
  'overflow-y',
  'perspective',
  'perspective-origin',
  'perspective-origin-x',
  'perspective-origin-y',
  'scroll-chaining',
  'scroll-limit',
  'scroll-limit-x-max',
  'scroll-limit-x-min',
  'scroll-limit-y-max',
  'scroll-limit-y-min',
  'scroll-rails',
  'scroll-snap-points-x',
  'scroll-snap-points-y',
  'scroll-snap-type',
  'scroll-snap-x',
  'scroll-snap-y',
  'scroll-translation',
  'scrollbar-3dlight-color',
  'scrollbar-arrow-color',
  'scrollbar-base-color',
  'scrollbar-darkshadow-color',
  'scrollbar-face-color',
  'scrollbar-highlight-color',
  'scrollbar-shadow-color',
  'scrollbar-track-color',
  'text-align-last',
  'text-autospace',
  'text-combine-horizontal',
  'text-justify',
  'text-kashida-space',
  'text-overflow',
  'text-size-adjust',
  'text-underline-position',
  'touch-action',
  'touch-select',
  'transform',
  'transform-origin',
  'transform-origin-x',
  'transform-origin-y',
  'transform-origin-z',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'user-select',
  'word-break',
  'word-wrap',
  'wrap-flow',
  'wrap-margin',
  'wrap-through',
  'writing-mode',
  'zoom',


  "align-content",
  "align-items",
  "align-self",
  "alignment-adjust",
  "alignment-baseline",
  "all",
  "anchor-point",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "appearance",
  "azimuth",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "binding",
  "bleed",
  "bookmark-label",
  "bookmark-level",
  "bookmark-state",
  "bookmark-target",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "chains",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation-filters",
  "color-profile",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "content",
  "counter-increment",
  "counter-reset",
  "crop",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "direction",
  "display",
  "dominant-baseline",
  "drop-initial-after-adjust",
  "drop-initial-after-align",
  "drop-initial-before-adjust",
  "drop-initial-before-align",
  "drop-initial-size",
  "drop-initial-value",
  "elevation",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "float-offset",
  "flood-color",
  "flood-opacity",
  "flow-from",
  "flow-into",
  "font",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-weight",
  "font-smoothing",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-position",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-resolution",
  "ime-mode",
  "inline-box-align",
  "justify-content",
  "justify-items",
  "justify-self",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-stacking",
  "line-stacking-ruby",
  "line-stacking-shift",
  "line-stacking-strategy",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "marker-offset",
  "marks",
  "mask",
  "mask-box",
  "mask-box-outset",
  "mask-box-repeat",
  "mask-box-slice",
  "mask-box-source",
  "mask-box-width",
  "mask-clip",
  "mask-image",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-source-type",
  "mask-type",
  "max-height",
  "max-lines",
  "max-width",
  "min-height",
  "min-width",
  "move-to",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "page-policy",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "pitch",
  "pitch-range",
  "play-during",
  "position",
  "presentation-level",
  "quotes",
  "region-fragment",
  "rendering-intent",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "richness",
  "right",
  "rotation",
  "rotation-point",
  "ruby-align",
  "ruby-overhang",
  "ruby-position",
  "ruby-span",
  "shape-image-threshold",
  "shape-outside",
  "shape-margin",
  "size",
  "speak",
  "speak-as",
  "speak-header",
  "speak-numeral",
  "speak-punctuation",
  "speech-rate",
  "stress",
  "string-set",
  "tab-size",
  "table-layout",
  "target",
  "target-name",
  "target-new",
  "target-position",
  "text-align",
  "text-align-last",
  "text-combine-horizontal",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-style",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-height",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-outline",
  "text-overflow",
  "text-shadow",
  "text-space-collapse",
  "text-transform",
  "text-underline-position",
  "text-wrap",
  "top",
  "transform",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "volume",
  "white-space",
  "widows",
  "width",
  "word-break",
  "word-spacing",
  "word-wrap",
  "wrap-flow",
  "wrap-through",
  "writing-mode",
  "z-index"
]

function unique(a) {
  var hash = {},
    len = a.length,
    result = []

  for (var i = 0; i < len; i++) {
    if (!hash[a[i]]) {
      hash[a[i]] = true
      result.push(a[i])
    }
  }
  return result
}

var str = unique(allProp).sort()
fs.writeFile("array.js", JSON.stringify(str), function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Output saved to array.js.")
  }
})


