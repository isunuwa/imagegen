import { useEffect, useState } from "react";
import type { UsageAnalyticsResponse } from "../types/index";

const PERIODS = ["24h", "7d", "30d", "90d"] as const;

export default function UsageAnalytics() {
  const [period, setPeriod] = useState<"24h" | "7d" | "30d" | "90d">("7d");
  const [data, setData] = useState<UsageAnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_IMAGEGEN_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    async function fetchUsage() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${API_BASE_URL}/v1/dashboard/usage?period=${period}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) throw new Error(`API error ${res.status}`);

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Failed to load usage analytics");
      } finally {
        setLoading(false);
      }
    }

    fetchUsage();
  }, [period]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-purple-600">
          Usage Analytics
        </h2>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as any)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          {PERIODS.map((p) => (
            <option key={p} value={p}>
              Last {p}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="px-4 py-2 bg-purple-50 border rounded-lg text-sm">
          Loading usage analytics…
        </div>
      )}

      {error && !loading && (
        <div className="px-4 py-2 bg-yellow-50 border rounded-lg text-sm text-yellow-700">
          {error}
        </div>
      )}

      {!loading && !error && data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily usage */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Daily Usage</h3>
            {data.daily_usage.map((d) => (
              <div key={d.date} className="flex justify-between text-sm py-1">
                <span>{d.date}</span>
                <span>
                  {d.calls} calls · {d.credits} credits
                </span>
              </div>
            ))}
          </div>

          {/* Provider usage */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Provider Usage</h3>
            {data.provider_usage.map((p) => (
              <div
                key={p.provider}
                className="flex justify-between text-sm py-1"
              >
                <span>{p.provider}</span>
                <span>
                  {p.calls} calls · {p.credits} credits
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
