module.exports = initialValue = [
  {
    type: "h1",
    children: [
      {
        text: "🌳 Blocks",
      },
    ],
    id: "1",
  },
  {
    type: "p",
    children: [
      {
        text: "Easily create headings of various levels, from H1 to H6, to structure your content and make it more organized.",
      },
    ],
    id: "2",
  },
  {
    type: "blockquote",
    children: [
      {
        text: "Create blockquotes to emphasize important information or highlight quotes from external sources.",
      },
    ],
    id: "3",
  },
  {
    type: "code_block",
    lang: "javascript",
    children: [
      {
        type: "code_line",
        children: [
          {
            text: "// Use code blocks to showcase code snippets",
          },
        ],
      },
      {
        type: "code_line",
        children: [
          {
            text: "function greet() {",
          },
        ],
      },
      {
        type: "code_line",
        children: [
          {
            text: "  console.info('Hello World!');",
          },
        ],
      },
      {
        type: "code_line",
        children: [
          {
            text: "}",
          },
        ],
      },
    ],
    id: "4",
  },
  {
    type: "p",
    children: [
      {
        text: "Each block is a React component in which you can manage the state:",
      },
    ],
    id: "5",
  },
  {
    type: "action_item",
    checked: true,
    children: [
      {
        text: 'Create a "banana language" translation plugin',
      },
    ],
    id: "6",
  },
  {
    type: "action_item",
    checked: true,
    children: [
      {
        text: 'Create a "detect sarcasm" plugin (good luck with that)',
      },
    ],
    id: "7",
  },
  {
    type: "action_item",
    children: [
      {
        text: "Create an AI auto-complete plugin",
      },
    ],
    id: "8",
  },
  {
    type: "h2",
    children: [
      {
        text: "🔗 Link",
      },
    ],
    id: "9",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        type: "a",
        url: "https://en.wikipedia.org/wiki/Hypertext",
        children: [
          {
            text: "hyperlinks",
          },
        ],
      },
      {
        text: " within your text to reference external sources or provide additional information using the Link plugin.",
      },
    ],
    id: "10",
  },
  {
    type: "p",
    children: [
      {
        text: "Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.",
      },
    ],
    id: "11",
  },
  {
    type: "h1",
    children: [
      {
        text: "🌱 Marks",
      },
    ],
    id: "12",
  },
  {
    type: "p",
    children: [
      {
        text: "Add style and emphasis to your text using the mark plugins, which offers a variety of formatting options.",
      },
    ],
    id: "13",
  },
  {
    type: "p",
    children: [
      {
        text: "Make text ",
      },
      {
        text: "bold",
        bold: true,
      },
      {
        text: ", ",
      },
      {
        text: "italic",
        italic: true,
      },
      {
        text: ", ",
      },
      {
        text: "underlined",
        underline: true,
      },
      {
        text: ", or apply a ",
      },
      {
        text: "combination",
        bold: true,
        italic: true,
        underline: true,
      },
      {
        text: " of these styles for a visually striking effect.",
      },
    ],
    id: "14",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        text: "strikethrough",
        strikethrough: true,
      },
      {
        text: " to indicate deleted or outdated content.",
      },
    ],
    id: "15",
  },
  {
    type: "p",
    children: [
      {
        text: "Write code snippets with inline ",
      },
      {
        text: "code",
        code: true,
      },
      {
        text: " formatting for easy readability.",
      },
    ],
    id: "16",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        text: "m",
        color: "white",
        backgroundColor: "#df4538",
      },
      {
        text: "u",
        color: "white",
        backgroundColor: "#e2533a",
      },
      {
        text: "l",
        color: "white",
        backgroundColor: "#e6603d",
      },
      {
        text: "t",
        color: "white",
        backgroundColor: "#e96f40",
      },
      {
        text: "i",
        color: "white",
        backgroundColor: "#ec7d43",
      },
      {
        text: "p",
        color: "white",
        backgroundColor: "#ef8a45",
      },
      {
        text: "l",
        color: "white",
        backgroundColor: "#f29948",
      },
      {
        text: "e",
        color: "white",
        backgroundColor: "#f5a74b",
      },
      {
        text: " ",
      },
      {
        text: "font",
        color: "rgb(252, 109, 38)",
      },
      {
        text: " and ",
      },
      {
        text: "background",
        color: "white",
        backgroundColor: "rgb(252, 109, 38)",
      },
      {
        text: " colors to create vibrant and eye-catching text.",
      },
    ],
    id: "17",
  },
  {
    type: "p",
    children: [
      {
        text: "Highlight",
        highlight: true,
      },
      {
        text: " important information for better clarity.",
      },
    ],
    id: "18",
  },
  {
    type: "p",
    children: [
      {
        text: "Press ",
      },
      {
        text: "⌘ + B",
        kbd: true,
      },
      {
        text: " to apply bold mark or ",
      },
      {
        text: "⌘ + I",
        kbd: true,
      },
      {
        text: " for italic mark.",
      },
    ],
    id: "19",
  },
  {
    type: "h2",
    children: [
      {
        text: "＠ Mention",
      },
    ],
    id: "20",
  },
  {
    type: "p",
    children: [
      {
        text: "Mention and reference other users or entities within your text using @-mentions.",
      },
    ],
    id: "21",
  },
  {
    type: "p",
    children: [
      {
        text: "Try mentioning ",
      },
      {
        type: "mention",
        children: [
          {
            text: "",
          },
        ],
        value: "BB-8",
      },
      {
        text: " or ",
      },
      {
        type: "mention",
        children: [
          {
            text: "",
          },
        ],
        value: "Boba Fett",
      },
      {
        text: ".",
      },
    ],
    id: "22",
  },
  {
    type: "h2",
    children: [
      {
        text: "🙂 Emoji's",
      },
    ],
    id: "23",
  },
  {
    type: "p",
    children: [
      {
        text: "Express yourself with a touch of fun 🎉 and emotion 😃.",
      },
    ],
    id: "24",
  },
  {
    type: "p",
    children: [
      {
        text: "Pick from the toolbar or write after the colon to open the combobox :",
      },
    ],
    id: "25",
  },
  {
    type: "h2",
    align: "right",
    children: [
      {
        text: "Alignment",
      },
    ],
    id: "26",
  },
  {
    type: "p",
    align: "right",
    children: [
      {
        text: "Align text within blocks to create visually appealing and balanced layouts.",
      },
    ],
    id: "27",
  },
  {
    type: "h3",
    align: "center",
    children: [
      {
        text: "Center",
      },
    ],
    id: "28",
  },
  {
    type: "p",
    align: "justify",
    children: [
      {
        text: "Create clean and balanced layouts by justifying block text, providing a professional and polished look.",
      },
    ],
    id: "29",
  },
  {
    type: "h2",
    children: [
      {
        text: "Line Height",
      },
    ],
    id: "30",
  },
  {
    type: "p",
    children: [
      {
        text: "Control the line height of your text to improve readability and adjust the spacing between lines.",
      },
    ],
    id: "31",
  },
  {
    type: "p",
    lineHeight: 2,
    children: [
      {
        text: "Choose the ideal line height to ensure comfortable reading and an aesthetically pleasing document.",
      },
    ],
    id: "32",
  },
  {
    type: "h2",
    children: [
      {
        text: "Indentation",
      },
    ],
    id: "33",
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Easily control the indentation of specific blocks to highlight important information and improve visual structure.",
      },
    ],
    id: "34",
  },
  {
    type: "p",
    indent: 2,
    children: [
      {
        text: "For instance, this paragraph looks like it belongs to the previous one.",
      },
    ],
    id: "35",
  },
  {
    type: "h2",
    children: [
      {
        text: "Indent List",
      },
    ],
    id: "36",
  },
  {
    type: "p",
    children: [
      {
        text: "Create indented lists with multiple levels of indentation and customize the list style type for each level.",
      },
    ],
    id: "37",
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: true,
    children: [
      {
        text: "Todo 1",
      },
    ],
    id: "38",
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "fire",
    children: [
      {
        text: "Icon 1",
      },
    ],
    id: "39",
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "fire",
    children: [
      {
        text: "Icon 2",
      },
    ],
    id: "40",
  },
  {
    type: "p",
    indent: 3,
    listStyleType: "todo",
    checked: false,
    children: [
      {
        text: "Todo 2",
      },
    ],
    id: "41",
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "upper-roman",
    children: [
      {
        text: "Roman 1",
      },
    ],
    id: "42",
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "decimal",
    children: [
      {
        text: "Decimal 11",
      },
    ],
    id: "43",
  },
  {
    type: "p",
    indent: 3,
    listStyleType: "decimal",
    children: [
      {
        text: "Decimal 111",
      },
    ],
    id: "44",
  },
  {
    type: "p",
    indent: 3,
    listStyleType: "decimal",
    listStart: 2,
    children: [
      {
        text: "Decimal 112",
      },
    ],
    id: "45",
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "decimal",
    listStart: 2,
    children: [
      {
        text: "Decimal 12",
      },
    ],
    id: "46",
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "decimal",
    listStart: 3,
    children: [
      {
        text: "Decimal 13",
      },
    ],
    id: "47",
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "upper-roman",
    listStart: 2,
    children: [
      {
        text: "Roman 2",
      },
    ],
    id: "48",
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "decimal",
    children: [
      {
        text: "Decimal 11",
      },
    ],
    id: "49",
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "decimal",
    listStart: 2,
    children: [
      {
        text: "Decimal 12",
      },
    ],
    id: "50",
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "upper-roman",
    listStart: 3,
    children: [
      {
        text: "Roman 3",
      },
    ],
    id: "51",
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "upper-roman",
    listStart: 4,
    children: [
      {
        text: "Roman 4",
      },
    ],
    id: "52",
  },
  {
    type: "h2",
    children: [
      {
        text: "Horizontal Rule",
      },
    ],
    id: "53",
  },
  {
    type: "p",
    children: [
      {
        text: "Add horizontal rules to visually separate sections and content within your document.",
      },
    ],
    id: "54",
  },
  {
    type: "hr",
    children: [
      {
        text: "",
      },
    ],
    id: "55",
  },
  {
    type: "h2",
    children: [
      {
        text: "📸 Image",
      },
    ],
    id: "56",
  },
  {
    type: "p",
    children: [
      {
        text: "Add images by either uploading them or providing the image URL:",
      },
    ],
    id: "57",
  },
  {
    type: "img",
    children: [
      {
        text: "",
      },
    ],
    url: "https://source.unsplash.com/kFrdX5IeQzI",
    width: "75%",
    id: "58",
  },
  {
    type: "p",
    children: [
      {
        text: "Customize image captions and resize images.",
      },
    ],
    id: "59",
  },
  {
    type: "h2",
    children: [
      {
        text: "📺 Embed",
      },
    ],
    id: "60",
  },
  {
    type: "p",
    children: [
      {
        text: "Embed various types of content, such as videos and tweets:",
      },
    ],
    id: "61",
  },
  {
    type: "media_embed",
    children: [
      {
        text: "",
      },
    ],
    url: "https://www.youtube.com/watch?v=MyiBAziEWUA",
    id: "62",
  },
  {
    type: "media_embed",
    children: [
      {
        text: "",
      },
    ],
    url: "https://twitter.com/zbeyens/status/1677214892212776960",
    id: "63",
  },
  {
    type: "h2",
    children: [
      {
        text: "🏓 Table",
      },
    ],
    id: "64",
  },
  {
    type: "p",
    children: [
      {
        text: "Create customizable tables with resizable columns and rows, allowing you to design structured layouts.",
      },
    ],
    id: "65",
  },
  {
    type: "table",
    colSizes: [100, 100, 100, 100],
    marginLeft: 20,
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Plugin",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Element",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Inline",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Void",
                    bold: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Heading",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "No",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Image",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "No",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Mention",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    id: "66",
  },
  {
    type: "h2",
    children: [
      {
        text: "🦚 Toggle",
      },
    ],
    id: "67",
  },
  {
    type: "p",
    children: [
      {
        text: "Create toggles with multiple levels of indentation",
      },
    ],
    id: "68",
  },
  {
    type: "toggle",
    id: "dlks89",
    children: [
      {
        text: "Level 1 toggle",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Inside level 1 toggle",
      },
    ],
    id: "69",
  },
  {
    type: "toggle",
    indent: 1,
    id: "kjdd12",
    children: [
      {
        text: "Level 2 toggle",
      },
    ],
  },
  {
    type: "p",
    indent: 2,
    children: [
      {
        text: "Inside level 2 toggle",
      },
    ],
    id: "70",
  },
  {
    type: "p",
    children: [
      {
        text: "After toggles",
      },
    ],
    id: "71",
  },
  {
    type: "h2",
    children: [
      {
        text: "🏃‍♀️ Autoformat",
      },
    ],
    id: "72",
  },
  {
    type: "p",
    children: [
      {
        text: "Empower your writing experience by enabling autoformatting features. Add Markdown-like shortcuts that automatically apply formatting as you type.",
      },
    ],
    id: "73",
  },
  {
    type: "p",
    children: [
      {
        text: "While typing, try these mark rules:",
      },
    ],
    id: "74",
  },
  {
    type: "ul",
    children: [
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "**",
                code: true,
              },
              {
                text: " or ",
              },
              {
                text: "__",
                code: true,
              },
              {
                text: " on either side of your text to add **bold* mark.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "*",
                code: true,
              },
              {
                text: " or ",
              },
              {
                text: "_",
                code: true,
              },
              {
                text: " on either side of your text to add *italic mark.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "`",
                code: true,
              },
              {
                text: " on either side of your text to add `inline code mark.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "~~",
                code: true,
              },
              {
                text: " on either side of your text to add ~~strikethrough~ mark.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Note that nothing happens when there is a character before, try on:*bold",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "We even support smart quotes, try typing ",
              },
              {
                text: "\"hello\" 'world'",
                code: true,
              },
              {
                text: ".",
              },
            ],
          },
        ],
      },
    ],
    id: "75",
  },
  {
    type: "p",
    children: [
      {
        text: "At the beginning of any new block or existing block, try these (block rules):",
      },
    ],
    id: "76",
  },
  {
    type: "ul",
    children: [
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "*",
                code: true,
              },
              {
                text: ", ",
              },
              {
                text: "-",
                code: true,
              },
              {
                text: " or ",
              },
              {
                text: "+",
                code: true,
              },
              {
                text: "followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create a bulleted list.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "1.",
                code: true,
              },
              {
                text: " or ",
              },
              {
                text: "1)",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: "to create a numbered list.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: ">",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create a block quote.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "```",
                code: true,
              },
              {
                text: " to create a code block.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "---",
                code: true,
              },
              {
                text: " to create a horizontal rule.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "#",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create an H1 heading.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "##",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create an H2 sub-heading.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "###",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create an H3 sub-heading.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "####",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create an H4 sub-heading.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "#####",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create an H5 sub-heading.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "Type ",
              },
              {
                text: "######",
                code: true,
              },
              {
                text: " followed by ",
              },
              {
                text: "space",
                code: true,
              },
              {
                text: " to create an H6 sub-heading.",
              },
            ],
          },
        ],
      },
    ],
    id: "77",
  },
  {
    type: "h2",
    children: [
      {
        text: "Soft Break ⇧⏎",
      },
    ],
    id: "78",
  },
  {
    type: "p",
    children: [
      {
        text: "Customize how soft breaks (line breaks within a paragraph) are handled using configurable rules",
      },
    ],
    id: "79",
  },
  {
    type: "ul",
    children: [
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "hotkey – Use hotkeys like ⇧⏎ to insert a soft break anywhere within a paragraph.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "query – Define custom rules to limit soft breaks to specific block types.",
              },
            ],
          },
        ],
      },
    ],
    id: "80",
  },
  {
    type: "blockquote",
    children: [
      {
        text: "Try here ⏎",
      },
    ],
    id: "81",
  },
  {
    type: "code_block",
    children: [
      {
        type: "code_line",
        children: [
          {
            text: "And here ⏎ as well.",
          },
        ],
      },
    ],
    id: "82",
  },
  {
    type: "h2",
    children: [
      {
        text: "Exit Break ⏎",
      },
    ],
    id: "83",
  },
  {
    type: "p",
    children: [
      {
        text: "Configure how exit breaks (line breaks between blocks) behave using simple rules:",
      },
    ],
    id: "84",
  },
  {
    type: "ul",
    children: [
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "hotkey – Use hotkeys like ⌘⏎ to move the cursor to the next block",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "query – Specify block types where exit breaks are allowed.",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "before – Choose whether the cursor exits to the next or previous block",
              },
            ],
          },
        ],
      },
    ],
    id: "85",
  },
  {
    type: "blockquote",
    children: [
      {
        text: "Try here ⌘⏎",
      },
    ],
    id: "86",
  },
  {
    type: "code_block",
    children: [
      {
        type: "code_line",
        children: [
          {
            text: "And in the middle ⌘⏎ of a block.",
          },
        ],
      },
    ],
    id: "87",
  },
  {
    type: "p",
    children: [
      {
        text: "Exit breaks also work within nested blocks:",
      },
    ],
    id: "88",
  },
  {
    type: "table",
    colSizes: [100, 100, 100, 100],
    marginLeft: 20,
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Plugin",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Element",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Inline",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Void",
                    bold: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Heading",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "No",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Image",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "No",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Mention",
                    bold: true,
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Yes",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    id: "89",
  },
  {
    type: "h2",
    children: [
      {
        text: "Cursor Overlay",
      },
    ],
    id: "90",
  },
  {
    type: "p",
    children: [
      {
        text: "Try to drag over text: you will see a black cursor on the drop target: color and other styles are customizable!",
      },
    ],
    id: "91",
  },
  {
    type: "h2",
    children: [
      {
        text: "Tabbable",
      },
    ],
    id: "92",
  },
  {
    type: "p",
    children: [
      {
        text: "Ensure a smooth tab navigation experience within your editor with the Tabbable plugin.",
      },
    ],
    id: "93",
  },
  {
    type: "p",
    children: [
      {
        text: "Properly handle tab orders for void nodes, allowing for seamless navigation and interaction. Without this plugin, DOM elements inside void nodes come after the editor in the tab order.",
      },
    ],
    id: "94",
  },
  {
    type: "tabbable_element",
    children: [
      {
        text: "",
      },
    ],
    id: "95",
  },
  {
    type: "tabbable_element",
    children: [
      {
        text: "",
      },
    ],
    id: "96",
  },
  {
    type: "p",
    children: [
      {
        text: "Place your cursor here and try pressing tab or shift+tab.",
      },
    ],
    id: "97",
  },
  {
    type: "ul",
    children: [
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "List item 1",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "List item 2",
              },
            ],
          },
        ],
      },
      {
        type: "li",
        children: [
          {
            type: "lic",
            children: [
              {
                text: "List item 3",
              },
            ],
          },
        ],
      },
    ],
    id: "98",
  },
  {
    type: "code_block",
    lang: "javascript",
    children: [
      {
        type: "code_line",
        children: [
          {
            text: "if (true) {",
          },
        ],
      },
      {
        type: "code_line",
        children: [
          {
            text: "// <- Place cursor at start of line and press tab",
          },
        ],
      },
      {
        type: "code_line",
        children: [
          {
            text: "}",
          },
        ],
      },
    ],
    id: "99",
  },
  {
    type: "p",
    children: [
      {
        text: "In this example, the plugin is disabled when the cursor is inside a list or a code block. You can customise this using the ",
      },
      {
        text: "query",
        code: true,
      },
      {
        text: " option.",
      },
    ],
    id: "100",
  },
  {
    type: "tabbable_element",
    children: [
      {
        text: "",
      },
    ],
    id: "101",
  },
  {
    type: "p",
    children: [
      {
        text: "When you press tab at the end of the editor, the focus should go to the button below.",
      },
    ],
    id: "102",
  },
  {
    type: "h2",
    children: [
      {
        text: "💬 Comments",
      },
    ],
    id: "103",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        text: "comments to your content",
        comment: true,
        comment_1: true,
      },
      {
        text: " to provide additional context, insights, or ",
      },
      {
        text: "collaborate",
        comment: true,
        comment_2: true,
      },
      {
        text: "  with others",
      },
    ],
    id: "104",
  },
  {
    type: "h2",
    children: [
      {
        text: "Deserialize HTML",
      },
    ],
    id: "105",
  },
  {
    type: "p",
    children: [
      {
        text: "By default, when you paste content into the Slate editor, it will utilize the clipboard's ",
      },
      {
        text: "'text/plain'",
        code: true,
      },
      {
        text: "data. While this is suitable for certain scenarios, there are times when you want users to be able to paste content while preserving its formatting. To achieve this, your editor should be capable of handling ",
      },
      {
        text: "'text/html'",
        code: true,
      },
      {
        text: "data.",
      },
    ],
    id: "106",
  },
  {
    type: "p",
    children: [
      {
        text: "To experience the seamless preservation of formatting, simply copy and paste rendered HTML rich text content (not the source code) from another website into this editor. You'll notice that the formatting of the pasted content is maintained.",
      },
    ],
    id: "107",
  },
  {
    type: "h2",
    children: [
      {
        text: "Deserialize Markdown",
      },
    ],
    id: "108",
  },
  {
    type: "p",
    children: [
      {
        text: "Copy and paste Markdown content from popular Markdown editors like ",
      },
      {
        type: "a",
        url: "https://markdown-it.github.io/",
        children: [
          {
            text: "markdown-it.github.io/",
          },
        ],
      },
      {
        text: " into the editor for easy conversion and editing.",
      },
    ],
    id: "109",
  },
  {
    type: "h2",
    children: [
      {
        text: "Deserialize Docx",
      },
    ],
    id: "110",
  },
  {
    type: "p",
    children: [
      {
        text: "Easily import content from Microsoft Word documents by simply copying and pasting the Docx content into the editor.",
      },
    ],
    id: "111",
  },
  {
    type: "h2",
    children: [
      {
        text: "Deserialize CSV",
      },
    ],
    id: "112",
  },
  {
    type: "p",
    children: [
      {
        text: "Copy and paste CSV content into a table.",
      },
    ],
    id: "113",
  },
  {
    type: "h2",
    children: [
      {
        text: "Trailing Block",
      },
    ],
    id: "114",
  },
  {
    type: "p",
    children: [
      {
        text: "Always have a trailing paragraph at the end of your editor.",
      },
    ],
    id: "115",
  },
  {
    type: "h2",
    children: [
      {
        text: "Excalidraw",
      },
    ],
    id: "116",
  },
  {
    type: "p",
    children: [
      {
        text: "Unleash your creativity with the Excalidraw plugin, which enables you to embed and draw diagrams directly within your editor.",
      },
    ],
    id: "117",
  },
  {
    type: "p",
    children: [
      {
        text: "",
      },
    ],
    id: "ijckc",
  },
];
