import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.table(form); // demo only
    alert('Form logged in console (fake submit)');
  };

  return (
    <div className="page-container">
      <form
        onSubmit={handleSubmit}
        className="form-box"
      >
        <h1 className="text-2xl font-semibold text-center text-indigo-600">
          Create your account
        </h1>

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

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

        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-3 text-white font-medium hover:bg-indigo-500 transition"
        >
          Register
        </button>

        <p className="text-sm">
          Already have an account?{' '}
          <a href="/" className="link-button">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
