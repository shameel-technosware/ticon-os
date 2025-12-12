'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login submitted:', formData);
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
            {/* Login Section Start */}
            <div className="login-section">
                {/* Background Shapes */}
                <div className="login-shape">
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
                        <div className="col-lg-5 col-md-7 col-sm-9">
                            {/* Login Card */}
                            <div className="login-card">
                                {/* Logo */}
                                <div className="login-logo text-center mb-4">
                                    <a href="/">
                                        <img src="/assets/images/logo-2.png" alt="TiCON Global" />
                                    </a>
                                </div>

                                {/* Heading */}
                                <div className="heading-one text-center mb-5">
                                    <span className="heading-one-subtitle gradient-text-1">Welcome Back</span>
                                    <h2 className="heading-one-title" style={{ fontSize: '42px' }}>Sign In</h2>
                                    <p>Access your TiCON account</p>
                                </div>

                                {/* Login Form */}
                                <form onSubmit={handleSubmit} className="login-form">
                                    {/* Email Input */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control login-input"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password Input */}
                                    <div className="form-group mb-4">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control login-input"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Remember Me & Forgot Password */}
                                    <div className="form-options mb-4 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="rememberMe"
                                                name="rememberMe"
                                                className="form-check-input"
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="rememberMe" className="form-check-label">
                                                Remember Me
                                            </label>
                                        </div>
                                        <a href="/forgot-password" className="forgot-link">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="btn-style-one w-100 mb-4">
                                        <span>Sign In</span>
                                    </button>

                                    {/* Divider */}
                                    <div className="login-divider mb-4">
                                        <span>Or continue with</span>
                                    </div>

                                    {/* Social Login Buttons */}
                                    <div className="social-login mb-4">
                                        <button type="button" className="social-btn google-btn">
                                            <i className="fab fa-google"></i>
                                            <span>Google</span>
                                        </button>
                                        <button type="button" className="social-btn linkedin-btn">
                                            <i className="fab fa-linkedin-in"></i>
                                            <span>LinkedIn</span>
                                        </button>
                                    </div>

                                    {/* Sign Up Link */}
                                    <div className="signup-link text-center">
                                        <p>
                                            Don't have an account? <a href="/signup" className="signup-link-text">Sign Up</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login Section End */}

            <style jsx>{`
        .login-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9ff 0%, #e8f4f8 100%);
          padding: 40px 0;
          overflow: hidden;
        }

        .login-shape {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
        }

        .login-shape .shape {
          position: absolute;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .login-shape .shape-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .login-shape .shape-2 {
          top: 20%;
          right: 10%;
          animation-delay: 1s;
        }

        .login-shape .shape-3 {
          bottom: 20%;
          left: 10%;
          animation-delay: 2s;
        }

        .login-shape .shape-4 {
          bottom: 10%;
          right: 5%;
          animation-delay: 1.5s;
        }

        .login-shape .shape-5 {
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

        .login-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 50px 40px;
          box-shadow: 0 20px 60px rgba(50, 47, 179, 0.1);
          position: relative;
          overflow: hidden;
        }

        .login-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(-45deg, #5BCFF2 20%, #417DD2 50%, #322fb3 100%);
        }

        .login-logo {
          margin-bottom: 30px;
        }

        .login-logo img {
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

        .login-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e8ecf4;
          border-radius: 10px;
          font-size: 15px;
          color: #343c55;
          transition: all 0.3s ease;
          background: #f8f9ff;
        }

        .login-input:focus {
          outline: none;
          border-color: #4fcbf1;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(79, 203, 241, 0.1);
        }

        .login-input::placeholder {
          color: #9ca3af;
        }

        .form-options {
          font-size: 14px;
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
        }

        .forgot-link {
          color: #4fcbf1;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .forgot-link:hover {
          color: #322fb3;
        }

        .login-divider {
          position: relative;
          text-align: center;
          margin: 30px 0;
        }

        .login-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e8ecf4;
        }

        .login-divider span {
          position: relative;
          background: #ffffff;
          padding: 0 15px;
          color: #717788;
          font-size: 14px;
        }

        .social-login {
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

        .signup-link p {
          color: #717788;
          margin: 0;
          font-size: 14px;
        }

        .signup-link-text {
          color: #4fcbf1;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .signup-link-text:hover {
          color: #322fb3;
        }

        @media only screen and (max-width: 767px) {
          .login-card {
            padding: 40px 25px;
          }

          .heading-one-title {
            font-size: 36px !important;
          }

          .social-login {
            grid-template-columns: 1fr;
          }
        }

        @media only screen and (max-width: 479px) {
          .login-card {
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
