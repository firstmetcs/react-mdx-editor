import React from 'react'
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  imagePlugin,
  tablePlugin,
  diffSourcePlugin,
  linkDialogPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ListsToggle,
  Separator,
  InsertImage,
  InsertTable,
  CreateLink,
  CodeToggle,
  InsertCodeBlock,
  InsertThematicBreak,
  DiffSourceToggleWrapper,
  StrikeThroughSupSubToggles,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  codeBlockPlugin,
  codeMirrorPlugin,
  linkPlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import i18next from 'i18next'
// eslint-disable-next-line import/no-webpack-loader-syntax
import markdown from '!!raw-loader!./assets/live-demo-contents.md'
import './App.css'
import zh_cn from './Editori18n'

void i18next.init({
  lng: 'zh_cn', // if you're using a language detector, do not define the lng option
  // debug: true,
  resources: {
    zh_cn: {
      translation: zh_cn,
    },
  },
})

function Editor() {
  return (
    <MDXEditor
      className="prose max-w-none full-screen-mdxeditor"
      autoFocus={{ defaultSelection: 'rootEnd' }}
      markdown={markdown}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper options={['rich-text', 'source']}>
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === 'codeblock',
                    contents: () => <ChangeCodeMirrorLanguage />,
                  },

                  {
                    fallback: () => (
                      <>
                        {' '}
                        <UndoRedo />
                        <Separator />
                        <BoldItalicUnderlineToggles
                          options={['Bold', 'Italic']}
                        />
                        <CodeToggle />
                        <Separator />
                        <StrikeThroughSupSubToggles
                          options={['Strikethrough']}
                        />
                        <Separator />
                        <ListsToggle />
                        <Separator />
                        <BlockTypeSelect />
                        <Separator />
                        <CreateLink />
                        <InsertImage />
                        <Separator />
                        <InsertTable />
                        <InsertThematicBreak />
                        <Separator />
                        <InsertCodeBlock />
                      </>
                    ),
                  },
                ]}
              ></ConditionalContents>
            </DiffSourceToggleWrapper>
          ),
        }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        imagePlugin({
          imageAutocompleteSuggestions: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
          ],
          imageUploadHandler: async () =>
            Promise.resolve('https://picsum.photos/200/300'),
        }),
        tablePlugin(),
        diffSourcePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        codeBlockPlugin({
          defaultCodeBlockLanguage: 'txt',
          codeBlockEditorDescriptors: [],
        }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: 'JavaScript',
            jsx: 'JavaScript (React)',
            css: 'CSS',
            txt: 'Plain Text',
            ts: 'TypeScript',
            tsx: 'TypeScript (React)',
            '': 'Unspecified',
          },
        }),
      ]}
      translation={(key, defaultValue, interpolations) => {
        return i18next.t(key, defaultValue, interpolations) as string
      }}
    />
  )
}

export default Editor
