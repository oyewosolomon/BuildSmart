import React, { useEffect, useRef } from 'react';
import './style.css'; 
const AboutUs: React.FC = () => {
  const randomImageUrl = `https://source.unsplash.com/1600x900/?construction,architecture`;
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-visible');
            entry.target.classList.remove('opacity-0');
          } else {
            // Uncomment below if you want elements to hide again when scrolling up
            entry.target.classList.remove('animate-fade-in-visible');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    contentRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      contentRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Helper function to add ref to the array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current[index] = el;
    }
  };

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${randomImageUrl})` }}
      >
        <div className="absolute inset-0 bg-blue-700 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white opacity-0 transition-opacity duration-500"
          ref={(el) => addToRefs(el, 0)}
        >
          About Us
        </h2>
        <div className="max-w-4xl mx-auto text-center text-white">
          <p 
            className="text-xl mb-8 opacity-0 transition-all duration-500 translate-y-6"
            ref={(el) => addToRefs(el, 1)}
          >
            At <span className="font-semibold text-blue-300">BuildSmart Technologies</span>, our mission is to revolutionize the construction industry by providing innovative, data-driven solutions that empower teams to build smarter, faster, and more efficiently.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { value: "$5B+", label: "Projects Managed Annually" },
              { value: "30%", label: "Reduction in Project Delays" },
              { value: "100+", label: "Global Clients" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300 opacity-0 transition-all duration-500 translate-y-6"
                ref={(el) => addToRefs(el, 2 + index)}
              >
                <h3 className="text-4xl font-bold text-blue-300">{stat.value}</h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values and Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Our Mission", 
                content: "To empower construction teams with cutting-edge technology that simplifies project management, enhances collaboration, and delivers measurable results."
              },
              { 
                title: "Our Values", 
                content: (
                  <ul className="list-disc list-inside">
                    <li><span className="font-semibold">Innovation:</span> Constantly pushing the boundaries of technology.</li>
                    <li><span className="font-semibold">Collaboration:</span> Working hand-in-hand with our clients.</li>
                    <li><span className="font-semibold">Efficiency:</span> Maximizing resources to minimize waste.</li>
                    <li><span className="font-semibold">Reliability:</span> Delivering on our promises, every time.</li>
                  </ul>
                )
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300 opacity-0 transition-all duration-500 translate-y-6"
                ref={(el) => addToRefs(el, 5 + index)}
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">{item.title}</h3>
                <div className="text-gray-200">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default AboutUs;