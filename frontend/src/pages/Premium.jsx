import React from 'react';
import { Check, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Premium = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Priority Job Listings',
      description: 'Get early access to new job postings before they go public.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast-track Applications',
      description: 'Your applications are highlighted and reviewed first by employers.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Resume Review',
      description: 'Get expert feedback on your resume to improve your chances.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Career Coaching',
      description: 'One-on-one sessions with industry experts to guide your career.',
    },
  ];

  const plans = [
    {
      name: 'Monthly',
      price: '$29',
      period: 'month',
      features: [
        'Priority Job Listings',
        'Fast-track Applications',
        'Resume Review (1x)',
        'Career Coaching (1x)',
      ],
    },
    {
      name: 'Quarterly',
      price: '$79',
      period: '3 months',
      features: [
        'Priority Job Listings',
        'Fast-track Applications',
        'Resume Review (3x)',
        'Career Coaching (3x)',
        'Save 10%',
      ],
      popular: true,
    },
    {
      name: 'Annual',
      price: '$299',
      period: 'year',
      features: [
        'Priority Job Listings',
        'Fast-track Applications',
        'Resume Review (12x)',
        'Career Coaching (12x)',
        'Save 15%',
        'Exclusive Events',
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Unlock Your Career Potential
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get exclusive access to premium features and accelerate your job search journey.
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="glass-card p-6 space-y-4">
            <div className="text-[#003366]">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Pricing Plans */}
      <section className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card p-8 space-y-6 ${
              plan.popular ? 'ring-2 ring-[#ffaa33]' : ''
            }`}
          >
            {plan.popular && (
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-[#ffaa33] text-white">
                Most Popular
              </span>
            )}
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#0088cc]" />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/payment-gateway" state={{ courseTitle: `Premium Plan (${plan.name})` }} className="neu-button w-full px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0088cc] text-white flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Premium; 