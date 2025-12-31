import { useState } from "react";
import { Copy, Key, Save } from "lucide-react";

export function ApiKeys() {
  //
  const [apiKey, setApiKey] = useState("");

  const copyToClipboard = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-purple-600 font-bold">API Keys</h1>
        <p className="text-slate-400 mt-1">
          Manage your API keys for integration
        </p>
      </div>

      {/* API Keys List */}
      <div className="space-y-4">
        <div className="border border-border rounded-lg p-2 md:p-4">
          <label className="text-sm text-foreground mb-2" htmlFor="apiKey">
            API Key Name
          </label>

          <div className="flex items-center gap-2">
            <input
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
            />
            <button onClick={copyToClipboard} disabled={!apiKey} className="">
              <Copy className="w-4 h-4 text-foreground" />
            </button>
            <button className="">
              <Save className="ml-2 w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
        <div className="border border-border rounded-lg p-2 md:p-4">
          <label className="text-sm text-foreground mb-2" htmlFor="apiKey">
            API Key Name
          </label>

          <div className="flex items-center gap-2">
            <input
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
            />
            <button onClick={copyToClipboard} disabled={!apiKey} className="">
              <Copy className="w-4 h-4 text-foreground" />
            </button>
            <button className="">
              <Save className="ml-2 w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {apiKey.length === 0 && (
          <div className="text-center py-12 text-foreground">
            <Key className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No API keys yet. Create your first one above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
