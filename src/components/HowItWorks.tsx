'use client'
import React, { useState, useEffect } from 'react';

const steps = [
  {
    title: "Smart Candidate Review",
    description: "AI-powered screening that identifies top candidates automatically",
    icon: "🎯"
  },
  {
    title: "Custom Assessments",
    description: "Create role-specific tests to evaluate candidates effectively",
    icon: "📝"
  },
  {
    title: "Interview Scheduling",
    description: "Automated scheduling that syncs with everyone's calendar",
    icon: "📅"
  },
  {
    title: "Candidate Dashboard",
    description: "Track applications and progress in real-time",
    icon: "📊"
  }
];

// Wraps the fade-in animation in a client-only component to avoid hydration mismatch
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only apply animation on the client side
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Only run fade-in on the client */}
        <FadeInSection>
          <div className="text-3xl font-bold text-center mb-12">
            How It Works
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeInSection key={step.title} delay={index * 200}>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
