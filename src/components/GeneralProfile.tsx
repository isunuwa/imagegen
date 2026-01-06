import { useEffect, useMemo, useState } from "react";
import type { Profile } from "../types";
import { Input } from "./Input";

export function GeneralProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [originalProfile, setOriginalProfile] = useState<Profile | null>(null);
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_IMAGEGEN_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    async function fetchProfile() {
      try {
        const res = await fetch(`${API_BASE_URL}/v1/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to load profile");

        const data = await res.json();

        setProfile(data);
        setOriginalProfile(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const isDirty = useMemo(() => {
    if (!profile || !originalProfile) return false;

    return (
      profile.full_name !== originalProfile.full_name ||
      profile.email !== originalProfile.email ||
      password.length > 0
    );
  }, [profile, originalProfile, password]);

  const handleSave = async () => {
    if (!profile) return;

    const token = localStorage.getItem("auth_token");
    if (!token) return;

    try {
      setSaving(true);
      setError(null);

      const payload: any = {
        ...profile,
      };

      if (password) {
        payload.password = password;
      }

      const res = await fetch(`${API_BASE_URL}/v1/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to update profile");

      const updated = await res.json();

      setProfile(updated);
      setOriginalProfile(updated);
      setPassword("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDiscard = () => {
    if (!originalProfile) return;

    setProfile(originalProfile);
    setPassword("");
  };

  if (loading) return <p>Loading profile…</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return null;

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-purple-600 font-bold">Your Profile</h1>
          <p className="text-foreground mt-1">
            Manage your personal information
          </p>
        </div>

        {/* Action buttons */}
        {isDirty && (
          <div className="flex gap-2">
            <button
              onClick={handleDiscard}
              className="rounded-full outline outline-red-500 text-red-500 py-1 px-4"
            >
              Discard
            </button>

            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-full outline outline-purple-500 text-purple-500 py-1 px-4 disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        )}
      </div>

      {/* Personal Information */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <h3 className="text-purple-500">Personal Information</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={profile.full_name}
            onChange={(v) => setProfile({ ...profile, full_name: v })}
          />
          <Input
            label="Email"
            value={profile.email}
            onChange={(v) => setProfile({ ...profile, email: v })}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Leave empty to keep current"
          />
        </div>
      </div>
    </div>
  );
}
