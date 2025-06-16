import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(form);           // placeholder — later call your API
    alert("Fake login — check console");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-5 rounded-2xl bg-white p-8 shadow"
      >
        <h1 className="text-2xl font-semibold text-center text-indigo-600">
          Log in to VibeCode
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-2.5 text-white font-medium hover:bg-indigo-500 transition"
        >
          Log In
        </button>

        <div className="text-center text-sm">
          <span className="text-gray-600">New here?</span>{" "}
          <Link
            to="/register"
            className="inline-block mt-2 rounded-lg border border-indigo-600 px-4 py-1.5 text-indigo-600 hover:bg-indigo-50 transition"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
