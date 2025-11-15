import React from "react";
import "../App.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 flex flex-col">
      

      {/*  Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-blue-700 leading-tight">
            Build, Grow, and Succeed with{" "}
            <span className="text-blue-500">MyBrand</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Empower your journey with cutting-edge technology and modern UI that
            delivers fast, secure, and beautiful experiences.
          </p>
          <div className="space-x-4">
            <a
              href="/register"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transform hover:-translate-y-1 transition-all"
            >
              Start for Free
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://png.pngtree.com/png-clipart/20240701/original/pngtree-office-worker-boy-use-laptop-png-image_15457989.png"
            alt="Hero Illustration"
            className="w-96 md:w-[450px] rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/*  Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">
            🚀 Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "⚡ Fast Performance",
                desc: "Optimized architecture ensures blazing-fast load times.",
              },
              {
                title: "🔒 Secure Platform",
                desc: "Your data is protected with advanced encryption and firewalls.",
              },
              {
                title: "🎨 Stunning UI",
                desc: "Enjoy a visually appealing, user-friendly modern interface.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-tr from-blue-50 to-white rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">
            💬 What Our Users Say
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Khan",
                text: "MyBrand helped me launch my startup in weeks! The UI is just perfect.",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "James Lee",
                text: "Super fast and secure platform. Their support team is amazing.",
                img: "https://randomuser.me/api/portraits/men/77.jpg",
              },
              {
                name: "Amina Rahman",
                text: "It’s the perfect mix of design and performance. Highly recommended!",
                img: "https://randomuser.me/api/portraits/women/45.jpg",
              },
            ].map((user, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-blue-100 object-cover"
                />
                <p className="text-gray-600 italic mb-3">“{user.text}”</p>
                <h4 className="font-semibold text-blue-700">{user.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔔 Call To Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h3>
        <p className="mb-6 text-blue-100">
          Join thousands of creators using MyBrand to power their ideas.
        </p>
        <a
          href="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get Started Now
        </a>
      </section>

      {/* 🌍 Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h4 className="text-xl font-semibold">MyBrand</h4>
          <p className="text-blue-200">
            Designed with ❤️ using React & Tailwind CSS
          </p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="#" className="hover:text-blue-300">Facebook</a>
            <a href="#" className="hover:text-blue-300">Twitter</a>
            <a href="#" className="hover:text-blue-300">LinkedIn</a>
          </div>
          <p className="text-sm text-blue-300 mt-4">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
