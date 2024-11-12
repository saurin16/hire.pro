'use client'
import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: "AI-Powered Screening",
    description: "Let AI handle initial candidate screening to save time",
    icon: "🤖"
  },
  {
    title: "Custom Assessments",
    description: "Create tailored tests for any role",
    icon: "✍️"
  },
  {
    title: "Automated Scheduling",
    description: "End email tag with smart calendar integration",
    icon: "📅"
  },
  {
    title: "Data-Driven Insights",
    description: "Make better decisions with advanced analytics",
    icon: "📊"
  },
  {
    title: "Onboarding Workflow",
    description: "Streamline the onboarding process",
    icon: "🎯"
  },
  {
    title: "Collaboration Tools",
    description: "Keep your hiring team aligned",
    icon: "👥"
  }
];

const FadeScaleElement: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Run only on the client to prevent hydration issues
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-4'}`}
    >
      {children}
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeScaleElement>
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
        </FadeScaleElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeScaleElement key={feature.title} delay={index * 100}>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </FadeScaleElement>
          ))}
        </div>
      </div>
    </section>
  );
}
