'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Quote",
    description: "Perfect for small teams",
    features: [
      "Up to 10 job postings",
      "Basic AI screening",
      "Email support",
      "Basic analytics"
    ]
  },
  {
    name: "Professional",
    price: "Quote",
    description: "For growing companies",
    features: [
      "Up to 50 job postings",
      "Advanced AI screening",
      "Priority support",
      "Advanced analytics",
      "Custom assessments"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited job postings",
      "Custom AI models",
      "24/7 dedicated support",
      "Custom analytics",
      "White-labeling",
      "API access"
    ]
  }
];

const AnimatedElement: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedElement key={plan.name} delay={index * 200}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-lg text-gray-600">/month</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
