import React, { useState } from 'react';
import { Play, Save, Download, Copy, Maximize2 } from 'lucide-react';

const CodeEditor = () => {
  const [code, setCode] = useState(`// Welcome to PromptStack IDE
import React from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1>Hello, World!</h1>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
    </div>
  );
};

export default MyComponent;`);

  const [activeTab, setActiveTab] = useState('App.jsx');
  const [tabs] = useState(['App.jsx', 'Component.jsx', 'utils.js']);

  const handleRunCode = () => {
    console.log('Running code...', code);
    // Here you would implement code execution logic
  };

  const handleSaveCode = () => {
    console.log('Saving code...', code);
    // Here you would implement save logic
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    console.log('Code copied to clipboard');
  };

  return (
    <div className="h-full bg-base-100 flex flex-col">
      {/* Editor Header */}
      <div className="bg-base-200 border-b border-base-300">
        {/* Tabs */}
        <div className="flex items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm border-r border-base-300 ${
                activeTab === tab 
                  ? 'bg-base-100 text-primary' 
                  : 'hover:bg-base-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Toolbar */}
        <div className="flex items-center justify-between p-2 border-t border-base-300">
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleRunCode}
              className="btn btn-success btn-sm"
            >
              <Play size={16} />
              Run
            </button>
            <button 
              onClick={handleSaveCode}
              className="btn btn-primary btn-sm"
            >
              <Save size={16} />
              Save
            </button>
            <button 
              onClick={handleCopyCode}
              className="btn btn-ghost btn-sm"
            >
              <Copy size={16} />
              Copy
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <select className="select select-bordered select-sm">
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>Python</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
            <button className="btn btn-ghost btn-sm">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full p-4 bg-base-100 text-base-content font-mono text-sm resize-none focus:outline-none"
          style={{
            fontFamily: 'Consolas, "Courier New", monospace',
            lineHeight: '1.5',
            tabSize: 2,
          }}
          placeholder="Start typing your code here..."
        />
        
        {/* Line Numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-base-200 border-r border-base-300 p-4">
          {code.split('\n').map((_, index) => (
            <div key={index} className="text-xs text-base-content/50 leading-6">
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-base-200 p-2 border-t border-base-300 text-xs text-base-content/70">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>Line {code.split('\n').length}, Column 1</span>
            <span>UTF-8</span>
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Spaces: 2</span>
            <span className="text-success">● Saved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
