import React from 'react'
import Editor from './MDXEditor'
import './App.css'

function App() {
  return (
    <div className="prose lg:max-w-7xl 2xl:max-w-[90rem] mx-auto">
      <div className="prose flex gap-4 px-4 pt-4 pb-2 border-neutral-border border-dashed border-b-[1px] mb-2 md:mb-9 max-w-none sticky top-0 bg-white z-10">
        <img
          src="https://blog.firstmetcs.net/img/f.png"
          alt=""
          style={{ height: 40 }}
          className="block mb-4 md:mb-0"
        />
        <nav
          className="md:flex flex-grow font-mono font-normal pb-1"
          style={{ alignItems: 'flex-end' }}
        >
          <ul className="md:flex gap-6 pb-4 md:pb-0 not-prose">
            <li>
              <a href="/editor/demo">Home page</a>
            </li>
            <li>
              <a className="text-accent-text" href="#">
                App News Editor
              </a>
            </li>
            <li>
              <a href="#">News list</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
          </ul>
        </nav>
      </div>
      <Editor />
    </div>
  )
}

export default App
