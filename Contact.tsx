import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-light mb-12 text-center">
            Get in Touch
          </h1>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-light mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-light mb-2">Email Us</h3>
              <p className="text-gray-400">contact@luxmode.com</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-light mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Fashion Avenue, Paris</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Column */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2"
                alt="Contact"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-light mb-4">
                  Let's Create Together
                </h2>
                <p className="text-gray-300">
                  Join us in shaping the future of fashion. Whether you're a
                  model, designer, or brand, we're here to bring your vision to
                  life.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-light mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
