import React, { useState } from 'react';

const SettingsPage = () => {
  const [groqKey, setGroqKey] = useState('');
  const [blackboxToken, setBlackboxToken] = useState('');
  const [selectedModel, setSelectedModel] = useState('llama2');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">⚙️ Settings</h2>

      {/* API Keys Section */}
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body space-y-4">
          <h3 className="text-lg font-semibold">🔐 API Keys</h3>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Groq API Key</span>
            </div>
            <input 
              type="text" 
              className="input input-bordered w-full" 
              value={groqKey} 
              onChange={(e) => setGroqKey(e.target.value)} 
              placeholder="Enter your Groq API key"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Blackbox Token</span>
            </div>
            <input 
              type="text" 
              className="input input-bordered w-full" 
              value={blackboxToken} 
              onChange={(e) => setBlackboxToken(e.target.value)} 
              placeholder="Enter your Blackbox token"
            />
          </label>
        </div>
      </div>

      {/* Model Selector */}
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body space-y-4">
          <h3 className="text-lg font-semibold">🧠 Model Options</h3>

          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text">Select LLM Model</span>
            </div>
            <select 
              className="select select-bordered" 
              value={selectedModel} 
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="llama2">LLaMA 2</option>
              <option value="llama3">LLaMA 3</option>
              <option value="codellama">Code LLaMA</option>
            </select>
          </label>
        </div>
      </div>

      {/* UI Preferences */}
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body space-y-4">
          <h3 className="text-lg font-semibold">🎨 UI Preferences</h3>

          <div className="flex items-center gap-4">
            <span className="text-sm">Enable Dark Mode</span>
            <input 
              type="checkbox" 
              className="toggle toggle-md" 
              checked={darkMode} 
              onChange={(e) => setDarkMode(e.target.checked)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
