import { useEffect, useState } from "react";
import { Copy, Delete, Key, Save } from "lucide-react";
import type { ApiKey } from "../types";

export function ApiKeys() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newKeyName, setNewKeyName] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_IMAGEGEN_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    async function fetchKeys() {
      try {
        const res = await fetch(`${API_BASE_URL}/v1/api-keys`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error(`API error ${res.status}`);

        const data = await res.json();
        setKeys(data.api_keys || []);
      } catch (err: any) {
        setError(err.message || "Failed to load API keys");
      } finally {
        setLoading(false);
      }
    }

    fetchKeys();
  }, []);

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
  };

  const handleCreateKey = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newKeyName.trim()) return;

    const token = localStorage.getItem("auth_token");
    if (!token) {
      setCreateError("Not authenticated");
      return;
    }

    try {
      setCreating(true);
      setCreateError(null);

      const res = await fetch(`${API_BASE_URL}/v1/api-keys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: newKeyName,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to create API key`);
      }

      const data = await res.json();

      // 🔹 Add new key to the list immediately
      setKeys((prev) => [data.api_key, ...prev]);

      setNewKeyName("");
    } catch (err: any) {
      setCreateError(err.message || "Failed to create key");
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="max-w-3xl space-y-4">
      <div>
        <h1 className="text-purple-600 font-bold">API Keys</h1>
        <p className="text-slate-400 mt-1">
          Manage your API keys for integration
        </p>
      </div>

      <div className="space-y-4">
        <div className="border border-border dark:border-slate-700 dark:bg-slate-800 rounded-lg p-2 md:p-4">
          <form onSubmit={handleCreateKey}>
            <label className="text-sm text-foreground" htmlFor="apiKey">
              Your API Key
            </label>

            <div className="flex items-center gap-2 mt-1">
              <input
                id="apiKey"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="Enter your API key"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all dark:bg-background dark:text-foreground"
              />
              <button
                type="submit"
                disabled={creating}
                className="flex items-center gap-1"
              >
                <Save className="w-4 h-4 dark:text-foreground hover:text-purple-600" />
              </button>
            </div>

            {creating && <span className="text-xs mt-2">Saving…</span>}

            {createError && (
              <p className="text-xs text-red-600 mt-2">{createError}</p>
            )}
          </form>
        </div>
      </div>

      {loading && (
        <div className="flex items-center gap-4 mb-4 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg text-purple-800 text-sm">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          Loading API keys
        </div>
      )}

      {error && !loading && (
        <div className="flex items-center gap-4  mb-4 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          Unable to load API keys: {error}
        </div>
      )}

      {!loading && !error && keys.length === 0 && (
        <div className="text-center py-12 text-foreground">
          <Key className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No API keys yet.</p>
        </div>
      )}

      {keys.map((k) => (
        <div
          key={k.id}
          className="border border-border rounded-lg p-4 flex items-center justify-between"
        >
          <div>
            <p className="font-medium">{k.name}</p>
            <p className="text-sm text-slate-400">Last used: {k.last_used}</p>
            <p className="text-xs text-slate-500">
              Requests: {k.requests_count}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <code className="text-sm bg-slate-100 px-2 py-1 rounded">
              {k.key.slice(0, 10)}••••{k.key.slice(-4)}
            </code>
            <button onClick={() => copyToClipboard(k.key)}>
              <Copy className="w-4 h-4 text-foreground" />
            </button>
            <button>
              <Delete className="w-4 h-4 text-foreground hover:text-red-700" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
