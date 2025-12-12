'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signUp, findReferrer, updateReferrer } from '@/lib/supabase';

interface PasswordStrength {
    score: number;
    label: string;
    color: string;
}

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: '',
        agreeToTerms: false
    });
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
        score: 0,
        label: '',
        color: ''
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Calculate password strength
    useEffect(() => {
        if (!formData.password) {
            setPasswordStrength({ score: 0, label: '', color: '' });
            return;
        }

        let score = 0;
        const password = formData.password;

        // Length check
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;

        // Character variety checks
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^a-zA-Z0-9]/.test(password)) score++;

        let label = '';
        let color = '';

        if (score <= 2) {
            label = 'Weak';
            color = '#ef4444';
        } else if (score <= 4) {
            label = 'Medium';
            color = '#f59e0b';
        } else {
            label = 'Strong';
            color = '#10b981';
        }

        setPasswordStrength({ score, label, color });
    }, [formData.password]);

    // Check if passwords match
    useEffect(() => {
        if (!formData.confirmPassword) {
            setPasswordsMatch(true);
            return;
        }
        setPasswordsMatch(formData.password === formData.confirmPassword);
    }, [formData.password, formData.confirmPassword]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (!formData.agreeToTerms) {
            setError('Please agree to the terms and conditions');
            return;
        }

        if (!passwordsMatch) {
            setError('Passwords do not match');
            return;
        }

        if (passwordStrength.score <= 2) {
            setError('Please use a stronger password');
            return;
        }

        setLoading(true);

        try {
            // Step 1: Check for referrer if referral code is provided
            let referrerId = null;
            if (formData.referralCode.trim()) {
                const referrer = await findReferrer(formData.referralCode.trim());
                if (!referrer) {
                    setError('Invalid referral code. You can continue without it or enter a valid code.');
                    setLoading(false);
                    return;
                }
                referrerId = referrer.id;
            }

            // Step 2: Sign up the user
            const { data, error: signUpError } = await signUp(
                formData.email,
                formData.password,
                formData.fullName
            );

            if (signUpError) {
                setError(signUpError.message);
                setLoading(false);
                return;
            }

            // Step 3: Update referrer_id if referrer exists
            if (referrerId && data.user) {
                const { error: updateError } = await updateReferrer(data.user.id, referrerId);
                if (updateError) {
                    console.error('Failed to update referrer:', updateError);
                    // Don't fail the signup, just log the error
                }
            }

            setSuccess('Account created successfully! Redirecting...');
            setTimeout(() => {
                router.push('/');
            }, 2000);

        } catch (err: any) {
            setError(err.message || 'An error occurred during signup');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <>
            {/* Signup Section Start */}
            <div className="signup-section">
                {/* Background Shapes */}
                <div className="signup-shape">
                    <div className="shape shape-1">
                        <img src="/assets/images/slider/slidertwo-shape/shape-1.png" alt="Shape" />
                    </div>
                    <div className="shape shape-2">
                        <img src="/assets/images/slider/slidertwo-shape/shape-3.png" alt="Shape" />
                    </div>
                    <div className="shape shape-3">
                        <img src="/assets/images/slider/slidertwo-shape/shape-4.png" alt="Shape" />
                    </div>
                    <div className="shape shape-4">
                        <img src="/assets/images/slider/slidertwo-shape/shape-6.png" alt="Shape" />
                    </div>
                    <div className="shape shape-5">
                        <img src="/assets/images/slider/slidertwo-shape/shape-9.png" alt="Shape" />
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center align-items-center min-vh-100">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            {/* Signup Card */}
                            <div className="signup-card">
                                {/* Logo */}
                                <div className="signup-logo text-center mb-4">
                                    <a href="/">
                                        <img src="/assets/images/logo-2.png" alt="TiCON Global" />
                                    </a>
                                </div>

                                {/* Heading */}
                                <div className="heading-one text-center mb-5">
                                    <span className="heading-one-subtitle gradient-text-1">Join TiCON</span>
                                    <h2 className="heading-one-title" style={{ fontSize: '42px' }}>Create Account</h2>
                                    <p>Start your journey with us today</p>
                                </div>

                                {/* Error/Success Messages */}
                                {error && (
                                    <div className="alert alert-error">
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span>{error}</span>
                                    </div>
                                )}
                                {success && (
                                    <div className="alert alert-success">
                                        <i className="fas fa-check-circle"></i>
                                        <span>{success}</span>
                                    </div>
                                )}

                                {/* Signup Form */}
                                <form onSubmit={handleSubmit} className="signup-form">
                                    {/* Full Name Input */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="fullName" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            className="form-control signup-input"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control signup-input"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password Input */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control signup-input"
                                            placeholder="Create a password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password Strength Indicator */}
                                    {formData.password && (
                                        <div className="password-strength-container mb-4">
                                            <div className="password-strength-bar">
                                                <div
                                                    className="password-strength-fill"
                                                    style={{
                                                        width: `${(passwordStrength.score / 6) * 100}%`,
                                                        backgroundColor: passwordStrength.color
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="password-strength-label" style={{ color: passwordStrength.color }}>
                                                <i className="fas fa-shield-alt"></i>
                                                <span>Password Strength: {passwordStrength.label}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Confirm Password Input */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className={`form-control signup-input ${formData.confirmPassword && !passwordsMatch ? 'input-error' : ''} ${formData.confirmPassword && passwordsMatch ? 'input-success' : ''}`}
                                            placeholder="Confirm your password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        {formData.confirmPassword && !passwordsMatch && (
                                            <div className="validation-message error-message">
                                                <i className="fas fa-times-circle"></i>
                                                <span>Passwords do not match</span>
                                            </div>
                                        )}
                                        {formData.confirmPassword && passwordsMatch && (
                                            <div className="validation-message success-message">
                                                <i className="fas fa-check-circle"></i>
                                                <span>Passwords match</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Referral Code Input (Optional) */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="referralCode" className="form-label">
                                            Referral Code <span className="optional-label">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="referralCode"
                                            name="referralCode"
                                            className="form-control signup-input"
                                            placeholder="Enter referral code"
                                            value={formData.referralCode}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Terms and Conditions */}
                                    <div className="form-check mb-4">
                                        <input
                                            type="checkbox"
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            className="form-check-input"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="agreeToTerms" className="form-check-label">
                                            I agree to the <a href="/terms" className="terms-link">Terms and Conditions</a>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn-style-one w-100 mb-4"
                                        disabled={loading}
                                    >
                                        <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
                                    </button>

                                    {/* Divider */}
                                    <div className="signup-divider mb-4">
                                        <span>Or sign up with</span>
                                    </div>

                                    {/* Social Signup Buttons */}
                                    <div className="social-signup mb-4">
                                        <button type="button" className="social-btn google-btn">
                                            <i className="fab fa-google"></i>
                                            <span>Google</span>
                                        </button>
                                        <button type="button" className="social-btn linkedin-btn">
                                            <i className="fab fa-linkedin-in"></i>
                                            <span>LinkedIn</span>
                                        </button>
                                    </div>

                                    {/* Login Link */}
                                    <div className="login-link text-center">
                                        <p>
                                            Already have an account? <a href="/login" className="login-link-text">Sign In</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Signup Section End */}

            <style jsx>{`
        .signup-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9ff 0%, #e8f4f8 100%);
          padding: 40px 0;
          overflow: hidden;
        }

        .signup-shape {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
        }

        .signup-shape .shape {
          position: absolute;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .signup-shape .shape-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .signup-shape .shape-2 {
          top: 20%;
          right: 10%;
          animation-delay: 1s;
        }

        .signup-shape .shape-3 {
          bottom: 20%;
          left: 10%;
          animation-delay: 2s;
        }

        .signup-shape .shape-4 {
          bottom: 10%;
          right: 5%;
          animation-delay: 1.5s;
        }

        .signup-shape .shape-5 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 0.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .signup-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 50px 40px;
          box-shadow: 0 20px 60px rgba(50, 47, 179, 0.1);
          position: relative;
          overflow: hidden;
        }

        .signup-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(-45deg, #5BCFF2 20%, #417DD2 50%, #322fb3 100%);
        }

        .signup-logo {
          margin-bottom: 30px;
        }

        .signup-logo img {
          max-width: 180px;
          height: auto;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #343c55;
          margin-bottom: 8px;
          display: block;
        }

        .optional-label {
          font-size: 12px;
          font-weight: 400;
          color: #717788;
          font-style: italic;
        }

        .signup-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e8ecf4;
          border-radius: 10px;
          font-size: 15px;
          color: #343c55;
          transition: all 0.3s ease;
          background: #f8f9ff;
        }

        .signup-input:focus {
          outline: none;
          border-color: #4fcbf1;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(79, 203, 241, 0.1);
        }

        .signup-input.input-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .signup-input.input-error:focus {
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
        }

        .signup-input.input-success {
          border-color: #10b981;
          background: #f0fdf4;
        }

        .signup-input.input-success:focus {
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
        }

        .signup-input::placeholder {
          color: #9ca3af;
        }

        .password-strength-container {
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .password-strength-bar {
          width: 100%;
          height: 6px;
          background: #e8ecf4;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .password-strength-fill {
          height: 100%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 3px;
        }

        .password-strength-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .password-strength-label i {
          font-size: 14px;
        }

        .validation-message {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          font-size: 13px;
          font-weight: 500;
          animation: slideDown 0.3s ease;
        }

        .error-message {
          color: #ef4444;
        }

        .success-message {
          color: #10b981;
        }

        .validation-message i {
          font-size: 14px;
        }

        .alert {
          padding: 15px 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
          animation: slideDown 0.3s ease;
        }

        .alert-error {
          background: #fef2f2;
          color: #ef4444;
          border: 2px solid #fecaca;
        }

        .alert-success {
          background: #f0fdf4;
          color: #10b981;
          border: 2px solid #bbf7d0;
        }

        .alert i {
          font-size: 18px;
        }

        .form-check-input {
          width: 18px;
          height: 18px;
          border: 2px solid #e8ecf4;
          border-radius: 4px;
          cursor: pointer;
        }

        .form-check-input:checked {
          background-color: #4fcbf1;
          border-color: #4fcbf1;
        }

        .form-check-label {
          color: #717788;
          margin-left: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .terms-link {
          color: #4fcbf1;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .terms-link:hover {
          color: #322fb3;
        }

        .signup-divider {
          position: relative;
          text-align: center;
          margin: 30px 0;
        }

        .signup-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e8ecf4;
        }

        .signup-divider span {
          position: relative;
          background: #ffffff;
          padding: 0 15px;
          color: #717788;
          font-size: 14px;
        }

        .social-signup {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 20px;
          border: 2px solid #e8ecf4;
          border-radius: 10px;
          background: #ffffff;
          color: #343c55;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          border-color: #4fcbf1;
          background: #f8f9ff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(79, 203, 241, 0.2);
        }

        .social-btn i {
          font-size: 18px;
        }

        .google-btn:hover {
          border-color: #ea4335;
          color: #ea4335;
        }

        .linkedin-btn:hover {
          border-color: #0077b5;
          color: #0077b5;
        }

        .login-link p {
          color: #717788;
          margin: 0;
          font-size: 14px;
        }

        .login-link-text {
          color: #4fcbf1;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .login-link-text:hover {
          color: #322fb3;
        }

        .btn-style-one:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media only screen and (max-width: 767px) {
          .signup-card {
            padding: 40px 25px;
          }

          .heading-one-title {
            font-size: 36px !important;
          }

          .social-signup {
            grid-template-columns: 1fr;
          }
        }

        @media only screen and (max-width: 479px) {
          .signup-card {
            padding: 30px 20px;
          }

          .heading-one-title {
            font-size: 30px !important;
          }
        }
      `}</style>
        </>
    );
}
