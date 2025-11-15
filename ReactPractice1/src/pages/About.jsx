import React from "react";
import "../App.css"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* 🌟 Header Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          We’re a passionate team dedicated to creating fast, secure, and
          beautiful digital experiences for everyone.
        </p>
      </section>

      {/* 💡 Mission & Vision Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png"
            alt="Team Work"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to empower creators, developers, and businesses by
              providing high-quality tools and platforms that make building
              modern applications effortless and enjoyable.
            </p>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where innovation is accessible to everyone —
              where ideas turn into impactful digital products without
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* 👥 Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">
            Meet Our Team
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Kowsar Ahmed",
                role: "Founder & CEO",
                img: "https://randomuser.me/api/portraits/men/46.jpg",
              },
              {
                name: "Amina Rahman",
                role: "UI/UX Designer",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "James Lee",
                role: "Backend Developer",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-gradient-to-tr from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-100 object-cover"
                />
                <h4 className="text-lg font-semibold text-blue-700">
                  {member.name}
                </h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Let’s Build the Future Together</h3>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Whether you’re an individual or a business, we’d love to collaborate
          and create something extraordinary.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      {/* 🌍 Footer */}
      <footer className="bg-blue-800 text-white py-8 text-center">
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} MyBrand — Built with ❤️ using React &
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
