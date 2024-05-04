import { KEY_DRAG_OVER_CURSOR } from '@/lib/plate/plugins/dragOverCursorPlugin';
import { alignValue } from '@/lib/plate/values/alignValue';
import { autoformatValue } from '@/lib/plate/values/autoformatValue';
import { basicElementsValue } from '@/lib/plate/values/basicElementsValue';
import { basicMarksValue } from '@/lib/plate/values/basicMarksValue';
import { commentsValue } from '@/lib/plate/values/commentsValue';
import { cursorOverlayValue } from '@/lib/plate/values/cursorOverlayValue';
import { deserializeCsvValue } from '@/lib/plate/values/deserializeCsvValue';
import { deserializeDocxValue } from '@/lib/plate/values/deserializeDocxValue';
import { deserializeHtmlValue } from '@/lib/plate/values/deserializeHtmlValue';
import { deserializeMdValue } from '@/lib/plate/values/deserializeMdValue';
import { emojiValue } from '@/lib/plate/values/emojiValue';
import { excalidrawValue } from '@/lib/plate/values/excalidrawValue';
import {
  exitBreakValue,
  trailingBlockValue,
} from '@/lib/plate/values/exitBreakValue';
import { fontValue } from '@/lib/plate/values/fontValue';
import { highlightValue } from '@/lib/plate/values/highlightValue';
import { horizontalRuleValue } from '@/lib/plate/values/horizontalRuleValue';
import { indentListValue } from '@/lib/plate/values/indentListValue';
import { indentValue } from '@/lib/plate/values/indentValue';
import { kbdValue } from '@/lib/plate/values/kbdValue';
import { lineHeightValue } from '@/lib/plate/values/lineHeightValue';
import { linkValue } from '@/lib/plate/values/linkValue';
import { listValue, todoListValue } from '@/lib/plate/values/listValue';
import { mediaValue } from '@/lib/plate/values/mediaValue';
import { mentionValue } from '@/lib/plate/values/mentionValue';
import { placeholderValue } from '@/lib/plate/values/placeholderValue';
import { singleLineValue } from '@/lib/plate/values/singleLineValue';
import { softBreakValue } from '@/lib/plate/values/softBreakValue';
import { tabbableValue } from '@/lib/plate/values/tabbableValue';
import { tableValue } from '@/lib/plate/values/tableValue';
import { toggleValue } from '@/lib/plate/values/toggleValue';
import { KEY_ALIGN } from '@udecode/plate-alignment';
import { KEY_AUTOFORMAT } from '@udecode/plate-autoformat';
import {
  KEY_EXIT_BREAK,
  KEY_SINGLE_LINE,
  KEY_SOFT_BREAK,
} from '@udecode/plate-break';
import { KEY_CAPTION } from '@udecode/plate-caption';
import { KEY_COMBOBOX } from '@udecode/plate-combobox';
import { MARK_COMMENT } from '@udecode/plate-comments';
import { KEY_DND } from '@udecode/plate-dnd';
import { KEY_EMOJI } from '@udecode/plate-emoji';
import { ELEMENT_EXCALIDRAW } from '@udecode/plate-excalidraw';
import { MARK_BG_COLOR, MARK_FONT_SIZE } from '@udecode/plate-font';
import { MARK_HIGHLIGHT } from '@udecode/plate-highlight';
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule';
import { KEY_INDENT } from '@udecode/plate-indent';
import { KEY_LIST_STYLE_TYPE } from '@udecode/plate-indent-list';
import { MARK_KBD } from '@udecode/plate-kbd';
import { ELEMENT_COLUMN_GROUP } from '@udecode/plate-layout';
import { KEY_LINE_HEIGHT } from '@udecode/plate-line-height';
import { ELEMENT_LINK } from '@udecode/plate-link';
import { ELEMENT_TODO_LI } from '@udecode/plate-list';
import { ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED } from '@udecode/plate-media';
import { ELEMENT_MENTION } from '@udecode/plate-mention';
import { KEY_NODE_ID } from '@udecode/plate-node-id';
import { KEY_NORMALIZE_TYPES } from '@udecode/plate-normalizers';
import { KEY_RESET_NODE } from '@udecode/plate-reset-node';
import { KEY_BLOCK_SELECTION } from '@udecode/plate-selection';
import { KEY_DESERIALIZE_CSV } from '@udecode/plate-serializer-csv';
import { KEY_DESERIALIZE_DOCX } from '@udecode/plate-serializer-docx';
import { KEY_DESERIALIZE_MD } from '@udecode/plate-serializer-md';
import { KEY_TABBABLE } from '@udecode/plate-tabbable';
import { ELEMENT_TABLE } from '@udecode/plate-table';
import { ELEMENT_TOGGLE } from '@udecode/plate-toggle';
import { KEY_TRAILING_BLOCK } from '@udecode/plate-trailing-block';

export type ValueId = keyof typeof customizerPlugins | 'tableMerge';

// cmdk needs lowercase
export const customizerPlugins = {
  align: {
    id: 'align',
    label: 'Align',
    value: alignValue,
    route: '/docs/alignment',
    plugins: [KEY_ALIGN],
  },
  autoformat: {
    id: 'autoformat',
    label: 'Autoformat',
    value: autoformatValue,
    route: '/docs/autoformat',
    plugins: [KEY_AUTOFORMAT],
  },
  basicnodes: {
    id: 'basicnodes',
    label: 'Basic Nodes',
    value: [...basicElementsValue, ...basicMarksValue],
    route: '/docs/basic-elements',
    plugins: [],
  },
  basicmarks: {
    id: 'basicmarks',
    label: 'Basic Marks',
    value: [...basicElementsValue, ...basicMarksValue],
    route: '/docs/basic-marks',
    plugins: [],
  },
  blockselection: {
    id: 'blockselection',
    label: 'Block Selection',
    value: mediaValue,
    route: '/docs/block-selection',
    plugins: [
      KEY_NODE_ID,
      KEY_BLOCK_SELECTION,
      ELEMENT_IMAGE,
      ELEMENT_MEDIA_EMBED,
    ],
  },
  caption: {
    id: 'caption',
    label: 'Caption',
    value: mediaValue,
    route: '/docs/caption',
    plugins: [KEY_CAPTION],
  },
  combobox: {
    id: 'combobox',
    label: 'Combobox',
    route: '/docs/combobox',
    plugins: [KEY_COMBOBOX],
  },
  comment: {
    id: 'comment',
    label: 'Comment',
    value: commentsValue,
    route: '/docs/comments',
    plugins: [MARK_COMMENT],
  },
  cursoroverlay: {
    id: 'cursoroverlay',
    label: 'Cursor Overlay',
    value: cursorOverlayValue,
    route: '/docs/cursor-overlay',
    plugins: [KEY_DRAG_OVER_CURSOR],
  },
  deserializecsv: {
    id: 'deserializecsv',
    label: 'Deserialize CSV',
    value: deserializeCsvValue,
    route: '/docs/serializing-csv',
    plugins: [KEY_DESERIALIZE_CSV],
  },
  deserializedocx: {
    id: 'deserializedocx',
    label: 'Deserialize DOCX',
    value: deserializeDocxValue,
    route: '/docs/serializing-docx',
    plugins: [KEY_DESERIALIZE_DOCX],
  },
  deserializehtml: {
    id: 'deserializehtml',
    label: 'Deserialize HTML',
    value: deserializeHtmlValue,
    route: '/docs/serializing-html',
    plugins: [],
  },
  deserializemd: {
    id: 'deserializemd',
    label: 'Deserialize Markdown',
    value: deserializeMdValue,
    route: '/docs/serializing-md',
    plugins: [KEY_DESERIALIZE_MD],
  },
  dnd: {
    id: 'dnd',
    label: 'Drag & Drop',
    value: [],
    route: '/docs/components/draggable',
    plugins: [KEY_DND],
  },
  emoji: {
    id: 'emoji',
    label: 'Emoji',
    value: emojiValue,
    route: '/docs/emoji',
    plugins: [KEY_EMOJI],
  },
  excalidraw: {
    id: 'excalidraw',
    label: 'Excalidraw',
    value: excalidrawValue,
    route: '/docs/excalidraw',
    plugins: [ELEMENT_EXCALIDRAW],
  },
  exitbreak: {
    id: 'exitbreak',
    label: 'Exit Break',
    value: exitBreakValue,
    route: '/docs/exit-break',
    plugins: [KEY_EXIT_BREAK],
  },
  font: {
    id: 'font',
    label: 'Font',
    value: fontValue,
    route: '/docs/font',
    plugins: [MARK_FONT_SIZE, MARK_BG_COLOR],
  },
  forcedlayout: {
    id: 'forcedlayout',
    label: 'Forced Layout',
    value: [],
    route: '/docs/forced-layout',
    plugins: [KEY_NORMALIZE_TYPES, KEY_TRAILING_BLOCK],
  },
  highlight: {
    id: 'highlight',
    label: 'Highlight',
    value: highlightValue,
    route: '/docs/highlight',
    plugins: [MARK_HIGHLIGHT],
  },
  hr: {
    id: 'hr',
    label: 'Horizontal Rule',
    value: horizontalRuleValue,
    route: '/docs/horizontal-rule',
    plugins: [ELEMENT_HR],
  },
  indent: {
    id: 'indent',
    label: 'Indent',
    value: indentValue,
    route: '/docs/indent',
    plugins: [KEY_INDENT],
  },
  kbd: {
    id: 'kbd',
    label: 'Keyboard Input',
    value: kbdValue,
    route: '/docs/components/kbd-leaf',
    plugins: [MARK_KBD],
  },
  lineheight: {
    id: 'lineheight',
    label: 'Line Height',
    value: lineHeightValue,
    route: '/docs/line-height',
    plugins: [KEY_LINE_HEIGHT],
  },
  link: {
    id: 'link',
    label: 'Link',
    value: linkValue,
    route: '/docs/link',
    plugins: [ELEMENT_LINK],
  },
  list: {
    id: 'list',
    label: 'List',
    value: listValue,
    route: '/docs/list',
    plugins: ['list'],
  },
  indentlist: {
    id: 'indentlist',
    label: 'Indent List',
    value: indentListValue,
    route: '/docs/indent-list',
    plugins: [KEY_LIST_STYLE_TYPE],
  },
  media: {
    id: 'media',
    label: 'Media',
    value: mediaValue,
    route: '/docs/media',
    plugins: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED],
  },
  mention: {
    id: 'mention',
    label: 'Mention',
    value: mentionValue,
    route: '/docs/mention',
    plugins: [ELEMENT_MENTION],
  },
  placeholder: {
    id: 'placeholder',
    label: 'Placeholder',
    value: placeholderValue,
    route: '/docs/components/placeholder',
    plugins: [],
  },
  playground: {
    id: 'playground',
    label: 'Playground',
    value: [],
  },
  resetnode: {
    id: 'resetnode',
    label: 'Reset Node',
    value: [],
    route: '/docs/reset-node',
    plugins: [KEY_RESET_NODE],
  },
  singleline: {
    id: 'singleline',
    label: 'Single Line',
    value: singleLineValue,
    route: '/docs/single-line',
    plugins: [KEY_SINGLE_LINE],
  },
  softbreak: {
    id: 'softbreak',
    label: 'Soft Break',
    value: softBreakValue,
    route: '/docs/soft-break',
    plugins: [KEY_SOFT_BREAK],
  },
  tabbable: {
    id: 'tabbable',
    label: 'Tabbable',
    value: tabbableValue,
    route: '/docs/tabbable',
    plugins: [KEY_TABBABLE],
  },
  table: {
    id: 'table',
    label: 'Table',
    value: tableValue,
    route: '/docs/table',
    plugins: [ELEMENT_TABLE],
  },
  todoli: {
    id: 'todoli',
    label: 'Todo List',
    value: todoListValue,
    route: '/docs/list',
    plugins: [ELEMENT_TODO_LI],
  },
  toggle: {
    id: 'toggle',
    label: 'Toggle',
    value: toggleValue,
    route: '/docs/toggle',
    plugins: [ELEMENT_TOGGLE],
  },
  trailingblock: {
    id: 'trailingblock',
    label: 'Trailing Block',
    value: trailingBlockValue,
    route: '/docs/trailing-block',
    plugins: [KEY_TRAILING_BLOCK],
  },
};
