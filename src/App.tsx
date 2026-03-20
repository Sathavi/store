import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShoppingBag, 
  Truck, 
  CreditCard, 
  Accessibility, 
  Star, 
  Navigation, 
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className={`w-8 h-8 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
            <div>
              <h1 className={`font-bold text-xl leading-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Thillay</h1>
              <p className={`text-xs font-medium ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>Departmental Store</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>About</a>
            <a href="#features" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>Services</a>
            <a href="#reviews" className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>Reviews</a>
            <a href="#location" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition-colors">
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-4 gap-4">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2 border-b border-gray-100">About</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2 border-b border-gray-100">Services</a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2 border-b border-gray-100">Reviews</a>
          <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-600 font-medium py-2">Visit Us</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Using a high-quality grocery store image as requested for full screen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2070&auto=format&fit=crop" 
          alt="Thillay Departmental Store Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight"
        >
          Thillay <br className="md:hidden" />
          <span className="text-emerald-400">Departmental Store</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-gray-300 mb-8"
        >
          தில்லை டெபார்ட்மெண்டல் ஸ்டோர்
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Your trusted neighborhood supermarket in Reddiyarpalayam. Quality groceries, fresh produce, and unexpected finds all at the right spot.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#location" 
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
          <a 
            href="tel:+918489033097" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            084890 33097
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">More than just a grocery store</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Reddiyarpalayam, Thillay Departmental Store has been serving our local community with dedication, quality, and a welcoming smile. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We pride ourselves on being a small supermarket with a big heart. Beyond your daily essentials, our shelves are stocked with a wide variety of unexpected products. Whether you're doing your weekly shopping or looking for something specific, you'll find it here at the right spot.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shadow-sm">74+</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm"><Star className="w-5 h-5 fill-current" /></div>
              </div>
              <p className="text-sm font-medium text-gray-500">Happy reviews from<br/>our local community</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
                alt="Fresh produce and groceries" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Quality Assured</p>
                  <p className="text-sm text-gray-500">Fresh & Best</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-emerald-600" />,
      title: "Wide Variety",
      description: "Available all kind of groceries at good quality at the right spot. Lots of unexpected products!"
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
      title: "Home Delivery",
      description: "Convenient delivery options right to your doorstep for a hassle-free shopping experience."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-600" />,
      title: "Easy Payments",
      description: "Accepting Credit Cards, Debit Cards, Google Pay, and NFC mobile payments."
    },
    {
      icon: <Accessibility className="w-8 h-8 text-emerald-600" />,
      title: "Fully Accessible",
      description: "Wheelchair-accessible entrance and car park for everyone's convenience."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need, under one roof</h3>
          <p className="text-lg text-gray-600">We pride ourselves on offering a vast selection of high-quality products with exceptional customer service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Reshma Bhandary",
      role: "Local Guide",
      text: "Being in Azeez Nagar Thillay is the closest and walkable within distance supermarket.... courteous people at the shop tooo.",
      rating: 5,
      time: "3 years ago"
    },
    {
      name: "DEVARAJ D",
      role: "Local Guide",
      text: "There is street parking available for cars also and this place in the evening is dusty but they are carrying this shop neat.",
      rating: 4,
      time: "a year ago"
    },
    {
      name: "Dr Samuel Inbaraja",
      role: "Local Guide",
      text: "Good place near my house. A small super market with lots of unexpected products.",
      rating: 5,
      time: "3 years ago"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-2">Customer Feedback</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What our community says</h3>
            <p className="text-lg text-gray-600">Don't just take our word for it. Here's what our regular customers have to say about their shopping experience.</p>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400 opacity-50'}`} />
              ))}
            </div>
            <span className="font-bold text-gray-900 ml-2">4.3</span>
            <span className="text-gray-500 text-sm">(74 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="absolute top-8 right-8 text-gray-100">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.182C16.411 14.182 15.011 14.182 15.011 10.682C15.011 7.18199 17.511 5 21.011 5C24.511 5 24.011 10.682 24.011 10.682C24.011 10.682 22.511 14.182 20.011 21H14.017ZM0.0170002 21L2.411 14.182C2.411 14.182 1.011 14.182 1.011 10.682C1.011 7.18199 3.511 5 7.011 5C10.511 5 10.011 10.682 10.011 10.682C10.011 10.682 8.511 14.182 6.011 21H0.0170002Z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700 mb-8 relative z-10 text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <span className="text-sm text-gray-400">{review.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Location & Hours</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Visit Us Today</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We are conveniently located in Reddiyarpalayam. Drop by for your daily needs, fresh produce, and a friendly shopping experience.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-emerald-600/20 rounded-2xl text-emerald-400 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white">Address</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    No 1, Main Rd, Sathya Sai Nager,<br />
                    Reddiyarpalayam, Puducherry, 605009
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-emerald-600/20 rounded-2xl text-emerald-400 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white">Business Hours</h4>
                  <p className="text-gray-300 text-lg">Open Daily • Closes 9:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-emerald-600/20 rounded-2xl text-emerald-400 shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white">Contact</h4>
                  <p className="text-gray-300 text-lg">084890 33097</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://maps.google.com/?q=Thillay+Departmental+Store+Puducherry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
          
          <div className="h-[500px] rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 relative shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=Thillay%20Departmental%20Store,%20Sathya%20Sai%20Nager,%20Reddiyarpalayam,%20Puducherry&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-emerald-500" />
          <span className="font-bold text-white text-xl">Thillay</span>
        </div>
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Thillay Departmental Store. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}
