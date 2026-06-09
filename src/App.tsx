import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Committees />
      <Registration />
      <StudyGuides />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              BH
            </div>
            <span className="font-bold text-lg text-gray-800">BHMUN</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 transition">About</a>
            <a href="#committees" className="text-gray-700 hover:text-yellow-600 transition">Committees</a>
            <a href="#register" className="text-gray-700 hover:text-yellow-600 transition">Register</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition">Contact</a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  const eventDate = new Date('2026-07-11').getTime();
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-2xl p-2 flex items-center justify-center">
              <div className="text-6xl">🦅</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">BHMUN</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Fourth Edition</h2>
          <p className="text-xl mb-8 opacity-90">Burn Hall Model United Nations</p>
          <p className="text-lg mb-12 opacity-80">Army Burn Hall College for Boys, Abbottabad</p>

          <div className="grid grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-semibold">📅 July 11-13, 2026</p>
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition text-lg">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">About BHMUN</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">What is BHMUN?</h3>
            <p className="text-gray-700 mb-4">
              Burn Hall Model United Nations (BHMUN) is a prestigious Model UN conference held at Army Burn Hall College for Boys, Abbottabad. Now in its fourth edition, BHMUN brings together the brightest minds to simulate real United Nations sessions.
            </p>
            <p className="text-gray-700">
              Our motto "Quo Non Ascendam" inspires delegates to reach new heights of diplomatic excellence, critical thinking, and global awareness.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Why Attend BHMUN?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✓</span>
                <span>Develop diplomatic and public speaking skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✓</span>
                <span>Network with delegates from across Pakistan</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✓</span>
                <span>Gain insights into international relations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✓</span>
                <span>Participate in real UN simulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✓</span>
                <span>Build lasting friendships with peers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Committees: React.FC = () => {
  const committees = [
    {
      name: 'UN Security Council',
      description: 'Address global security threats and peacekeeping operations',
      icon: '🛡️',
    },
    {
      name: 'General Assembly',
      description: 'Discuss sustainable development and international cooperation',
      icon: '🌍',
    },
    {
      name: 'World Health Organization',
      description: 'Focus on global health crises and pandemic response',
      icon: '🏥',
    },
    {
      name: 'UNHCR',
      description: 'Address refugee rights and humanitarian issues',
      icon: '🤝',
    },
    {
      name: 'Environmental Committee',
      description: 'Tackle climate change and environmental protection',
      icon: '🌱',
    },
    {
      name: 'Human Rights Council',
      description: 'Promote and protect fundamental human rights',
      icon: '✊',
    },
  ];

  return (
    <section id="committees" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Committees</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{committee.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{committee.name}</h3>
              <p className="text-gray-700">{committee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Registration: React.FC = () => {
  return (
    <section id="register" className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Delegate Registration</h2>
        <form className="space-y-6 bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="School/College Name"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:border-yellow-400"
            />
            <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:border-yellow-400">
              <option className="text-gray-900">Select Committee</option>
              <option className="text-gray-900">UN Security Council</option>
              <option className="text-gray-900">General Assembly</option>
              <option className="text-gray-900">World Health Organization</option>
              <option className="text-gray-900">UNHCR</option>
            </select>
          </div>
          <textarea
            placeholder="Tell us about yourself and why you want to join BHMUN"
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:border-yellow-400 h-24"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition text-lg"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

const StudyGuides: React.FC = () => {
  const guides = [
    { name: 'UN Security Council Guide', size: '2.5 MB' },
    { name: 'General Assembly Overview', size: '1.8 MB' },
    { name: 'MUN Rules of Procedure', size: '3.2 MB' },
    { name: 'Position Paper Template', size: '0.5 MB' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Study Guides & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-blue-900">{guide.name}</p>
                <p className="text-sm text-gray-500">{guide.size}</p>
              </div>
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'When is BHMUN IV Edition?',
      answer: 'BHMUN IV Edition will be held from July 11-13, 2026.',
    },
    {
      question: 'Where will the conference be held?',
      answer: 'The conference will be held at Army Burn Hall College for Boys, Abbottabad.',
    },
    {
      question: 'What is the registration fee?',
      answer: 'Please contact us for detailed information about registration fees and payment methods.',
    },
    {
      question: 'Can I participate individually or only as a delegation?',
      answer: 'Both individual and delegation registrations are accepted. Contact us for more details.',
    },
    {
      question: 'How do I prepare for BHMUN?',
      answer: 'Download our study guides, research your country and committee, and prepare a position paper.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-400 bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left font-semibold text-blue-900 hover:bg-gray-100 transition flex justify-between items-center"
              >
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>bhmun@burnhall.edu.pk</p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p>Army Burn Hall College<br />Abbottabad, Pakistan</p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <p>@BHMUN_IV on Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2">© 2026 Burn Hall Model United Nations - Fourth Edition</p>
        <p className="text-sm text-gray-400">Quo Non Ascendam</p>
      </div>
    </footer>
  );
};

export default App;
