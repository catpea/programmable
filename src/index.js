const EventEmitter = require('events');

import {EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import {oneDark} from "@codemirror/theme-one-dark"
import {defaultTabBinding} from "@codemirror/commands"
import {keymap} from "@codemirror/view"

class Programmable extends EventEmitter {
  constructor({parent, doc}) {
    super();
    this.editor = new EditorView({
      state: EditorState.create({
        doc,
        extensions: [basicSetup, javascript(), oneDark, keymap.of([defaultTabBinding]) ]
      }),
      parent,
    }); //
  } // constructor
}

export default Programmable;
