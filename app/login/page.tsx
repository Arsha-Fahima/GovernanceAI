'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Input, Button, Card } from '@/components/UI';
import { Phone, CheckCircle2, AlertCircle, Chrome } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(0);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) setError(error.message);
    setIsLoading(false);
  };

  const handleAdminDemo = () => {
    setPhone('9999999999');
    setStep('phone');
    // Note: User still needs to click "Send OTP" 
    // This pre-fills the "Default Admin" number
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
    
    if (!/^\+91\d{10}$/.test(formattedPhone)) {
      setError('Invalid WhatsApp number. Use +91 followed by 10 digits.');
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      phone: formattedPhone,
    });

    if (error) {
      setError(error.message);
    } else {
      setStep('otp');
      setTimer(60);
    }
    setIsLoading(false);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;

    const { data, error } = await supabase.auth.verifyOtp({
      phone: formattedPhone,
      token: otp,
      type: 'sms', // Supabase treats phone OTP as sms type
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else if (data.user) {
      // Check role and redirect
      const { data: userData, error: roleError } = await supabase
        .from('users')
        .select('role')
        .eq('whatsapp_number', formattedPhone)
        .single();

      if (roleError || !userData) {
         // If user doesn't exist, they are a new client by default (logic might vary)
         // But for production, maybe redirect to dashboard to complete profile
         router.push('/dashboard');
      } else {
        router.push(userData.role === 'admin' ? '/admin' : '/dashboard');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Governance AI</h1>
          <p className="text-gray-600 mt-2">GST Compliance Reminder System</p>
        </div>

        <Card>
          {step === 'phone' ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Login via WhatsApp</h2>
              <Input
                label="WhatsApp Number"
                placeholder="9999999999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                icon={Phone}
                disabled={isLoading}
              />
              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}
              <Button type="submit" className="w-full" isLoading={isLoading}>
                Send OTP
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <Chrome size={18} className="text-red-500" /> Google Login
                </Button>
                
                <Button 
                  type="button" 
                  variant="secondary" 
                  className="w-full text-xs"
                  onClick={handleAdminDemo}
                  disabled={isLoading}
                >
                  Use Default Admin Number
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Verify OTP</h2>
              <p className="text-sm text-gray-600 mb-4">
                OTP sent to {phone}. Check your WhatsApp.
              </p>
              <Input
                label="Enter 6-digit OTP"
                placeholder="123456"
                max={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                disabled={isLoading}
              />
              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}
              <Button type="submit" className="w-full" isLoading={isLoading}>
                Verify & Login
              </Button>
              <div className="text-center">
                {timer > 0 ? (
                  <p className="text-sm text-gray-500">Resend OTP in {timer}s</p>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-sm text-gray-500 hover:text-gray-700 mt-2"
              >
                Change Number
              </button>
            </form>
          )}
        </Card>

        <p className="mt-8 text-center text-xs text-gray-500">
          By logging in, you agree to receive automated GST reminders on WhatsApp.
        </p>
      </div>
    </div>
  );
}
