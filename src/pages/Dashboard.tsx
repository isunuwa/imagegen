import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StatsCards from "../components/StatsCard";
import UsageAnalytics from "../components/UsageAnalytics";

import type { DashboardStats } from "../types";

const EMPTY_STATS: DashboardStats = {
  credits_remaining: 0,
  total_api_calls: 0,
  total_images_generated: 0,
  total_credits_used: 0,
  success_rate: 0,
  provider_usage: {},
  recent_activity: [],
};

const Dashboard = () => {
  const [statsData, setStatsData] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_IMAGEGEN_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setError("Not authenticated");
      setStatsData(EMPTY_STATS);
      setLoading(false);
      return;
    }

    async function fetchStats() {
      try {
        const res = await fetch(`${API_BASE_URL}/v1/dashboard/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error(`API error: ${res.status}`);

        const data = await res.json();
        setStatsData(data || EMPTY_STATS);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Failed to fetch stats");
        setStatsData(EMPTY_STATS);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <>
      <Header />

      <div className="bg-background pt-10 relative">
        <div className="min-h-screen container mx-auto py-4 px-2">
          <StatsCards data={statsData} loading={loading} error={error} />
        </div>
      </div>

      <UsageAnalytics />

      <Footer />
    </>
  );
};

export default Dashboard;
