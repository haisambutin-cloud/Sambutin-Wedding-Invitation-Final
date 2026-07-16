import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Login Admin — Sambutin.id" },
      { name: "robots", content: "noindex,nofollow" },
      {
        name: "description",
        content: "Halaman login admin Sambutin.id",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@sambutin.id");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate({ to: "/admin" });
      }
    };

    checkSession();
  }, [navigate]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login Error:", error);

        switch (error.message) {
          case "Invalid login credentials":
            setError("Email atau password salah.");
            break;

          case "Email not confirmed":
            setError("Email belum dikonfirmasi.");
            break;

          default:
            setError(error.message);
        }

        return;
      }

      navigate({ to: "/admin" });
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-br from-rose-50 via-white to-amber-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-rose-100 bg-white/90 p-8 shadow-xl backdrop-blur">
        <div className="mb-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-rose-500">Sambutin.id</div>

          <h1 className="mt-1 text-2xl font-serif italic">Login Admin</h1>

          <p className="mt-2 text-sm text-slate-500">Masuk untuk mengelola konten website.</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>

            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>

            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </label>

          {error && (
            <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-rose-500 py-2.5 font-medium text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Akses terbatas untuk administrator.
        </p>
      </div>
    </main>
  );
}
