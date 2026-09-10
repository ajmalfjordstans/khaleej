'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Loader2 } from 'lucide-react';
import { forgotPasswordApi } from '@/lib/order/api';
import toast from 'react-hot-toast';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return toast.error('Email is required');
    setLoading(true);
    try {
      await forgotPasswordApi(email.trim());
      setSent(true);
    } catch {
      toast.error('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto ">
      <Link
        href="/order/login"
        className="inline-flex items-center gap-1.5 text-sm text-primary/60 hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back to sign in
      </Link>

      {sent ? (
        <div className="bg-off-white rounded-2xl p-6 text-center space-y-4 border border-tan">
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
            <Mail size={24} className="text-emerald-600" />
          </div>
          <div>
            <h2 className="font-bold text-primary text-lg">Check your inbox</h2>
            <p className="text-primary/60 text-sm mt-1.5">
              If <strong>{email}</strong> is registered, you&apos;ll receive a password reset link shortly. It expires in 60 minutes.
            </p>
          </div>
          <Link
            href="/order/login"
            className="block w-full py-3 border border-tan rounded-xl text-sm font-semibold text-primary/70 hover:bg-white text-center transition-colors"
          >
            Back to sign in
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-primary mb-1">Forgot password?</h1>
          <p className="text-sm text-primary/50 mb-6">Enter your email and we&apos;ll send you a reset link.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                autoFocus
                className="w-full border border-tan bg-white rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 text-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : 'Send reset link'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
