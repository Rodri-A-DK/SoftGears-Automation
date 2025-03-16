import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Sun, Moon, Globe, Menu, X, MessageCircle, Clock, Users, MessageSquare } from 'lucide-react';
import "./index.css";

// Componente WhatsApp
const WhatsAppButton = ({ phoneNumber = "+543816677869", message = "Hola! Tengo una consulta" }) => {
  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <span className="absolute -top-10 right-0 bg-black text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chatea con nosotros
      </span>
    </a>
  );
};

function App() {
  const [activeService, setActiveService] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const services = [
    {
      title: language === "es" ? "Aplicaciones Web" : "Web Applications",
      description: language === "es"
        ? "Automatización de software para aplicaciones web con herramientas y marcos personalizados. Diseñamos soluciones a medida para tus necesidades específicas."
        : "Automation software for web applications with custom tools and frameworks. We design solutions tailored to your specific needs.",
      features: language === "es" 
        ? ["Pruebas E2E", "Pruebas de Integración", "Pruebas de UI/UX", "Pruebas de Rendimiento"]
        : ["E2E Testing", "Integration Testing", "UI/UX Testing", "Performance Testing"],
      image: "/diseño-de-interfaces-web.jpg"
    },
    {
      title: language === "es" ? "Aplicaciones Móviles" : "Mobile Applications",
      description: language === "es"
        ? "Pruebas exhaustivas en dispositivos móviles reales para garantizar la calidad de tus aplicaciones en Android e iOS."
        : "Extensive testing on real mobile devices to ensure the quality of your Android and iOS applications.",
      features: language === "es"
        ? ["Pruebas Nativas", "Pruebas Híbridas", "Pruebas de Usabilidad", "Pruebas de Compatibilidad"]
        : ["Native Testing", "Hybrid Testing", "Usability Testing", "Compatibility Testing"],
      image: "/mobiles.webp"
    },
    {
      title: language === "es" ? "Aplicaciones de Escritorio" : "Desktop Applications",
      description: language === "es"
        ? "Pruebas para sistemas complejos de escritorio con herramientas avanzadas para optimizar el rendimiento y la usabilidad."
        : "Testing for complex desktop systems with advanced tools to optimize performance and usability.",
      features: language === "es"
        ? ["Pruebas Funcionales", "Pruebas de Sistema", "Pruebas de Regresión", "Pruebas de Seguridad"]
        : ["Functional Testing", "System Testing", "Regression Testing", "Security Testing"],
      image: "/fdddcd0d-697d-426b-93b9-9a0fb8584486_removalai_preview.png"
    },
    {
      title: language === "es" ? "Soluciones Backend" : "Backend Solutions",
      description: language === "es"
        ? "Optimización de APIs y servicios backend con pruebas automatizadas que garantizan escalabilidad y confiabilidad."
        : "Optimization of APIs and backend services with automated tests that ensure scalability and reliability.",
      features: language === "es"
        ? ["Pruebas de API", "Pruebas de Carga", "Pruebas de Estrés", "Monitoreo Continuo"]
        : ["API Testing", "Load Testing", "Stress Testing", "Continuous Monitoring"],
      image: "/backend.png"
    }
  ];
  

  const stats = [
    {
      number: "100+",
      text: language === "es" ? "Proyectos Completados" : "Completed Projects"
    },
    {
      number: "50+",
      text: language === "es" ? "Clientes Satisfechos" : "Happy Clients"
    },
    {
      number: "5+",
      text: language === "es" ? "Años de Experiencia" : "Years of Experience"
    },
    {
      number: "24/7",
      text: language === "es" ? "Soporte Técnico" : "Technical Support"
    }
  ];

  const testimonials = [
    {
      name: language === "es" ? "María García" : "Mary Garcia",
      role: language === "es" ? "Directora de TI" : "IT Director",
      company: "TechCorp",
      text: language === "es" 
        ? "SoftGears ha transformado completamente nuestro proceso de pruebas automatizadas."
        : "SoftGears has completely transformed our automated testing process.",
      image: "/api/placeholder/48/48"
    },
    {
      name: language === "es" ? "Juan Pérez" : "John Smith",
      role: language === "es" ? "Gerente de QA" : "QA Manager",
      company: "DevSolutions",
      text: language === "es"
        ? "El equipo es altamente profesional y entrega resultados excepcionales."
        : "The team is highly professional and delivers exceptional results.",
      image: "/api/placeholder/48/48"
    }
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
    {/* Header */}
    <header className="fixed w-full ">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
         {/* Logo */}
          <h1 className="text-2xl font-bold hover:text-red-500 transition-colors duration-300 backdrop-blur-sm z-auto">
          <a href="#" className="focus:outline-none">
           SoftGears Automation
          </a>
          </h1>
 
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg dark:hover:bg-gray-800"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a href="#services" className="font-medium hover:text-red-500 transition-colors duration-300">
                {language === "es" ? "Servicios" : "Services"}
              </a>
              <a href="#technologies" className="font-medium hover:text-red-500 transition-colors duration-300">
                {language === "es" ? "Tecnologías" : "Technologies"}
              </a>
              <a href="#contact" className="font-medium hover:text-red-500 transition-colors duration-300">
                {language === "es" ? "Contacto" : "Contact"}
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <Globe className="text-red-500 w-5 h-5" />
                <span className="font-medium">{language === "es" ? "EN" : "ES"}</span>
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg  dark:hover:bg-gray-800 transition-all duration-300"
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-400 w-5 h-5" />
                ) : (
                  <Moon className="text-gray-600 w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={` backdrop-blur-sm  z-auto lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 py-6 backdrop-blur-sm  z-auto">
            <a
              href="#services"
              className="px-4 py-2 font-medium  dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "es" ? "Servicios" : "Services"}
            </a>
            <a
              href="#technologies"
              className="px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "es" ? "Tecnologías" : "Technologies"}
            </a>
            <a
              href="#contact"
              className="px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "es" ? "Contacto" : "Contact"}
            </a>
            
            <div className="flex items-center space-x-4 px-4 pt-4 border-t dark:border-gray-700">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg dark:bg-gray-800  dark:hover:bg-gray-700 transition-all duration-300"
              >
                <Globe className="text-red-500 w-5 h-5" />
                <span className="font-medium">{language === "es" ? "EN" : "ES"}</span>
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg  dark:hover:bg-gray-900 transition-all duration-300"
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-400 w-5 h-5" />
                ) : (
                  <Moon className="text-gray-600 w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
            {language === "es" ? "Automatización de Software" : "Software Automation"}
          </h2>
          <p className={`${isDarkMode ? "text-xl mb-12 max-w-3xl mx-auto dark bg-gray-900 text-white" : "text-xl mb-12 max-w-3xl mx-auto dark bg-white text-black"}`}>
            {language === "es"
              ? "Transformamos la calidad de tu software con soluciones de automatización innovadoras y personalizadas."
              : "We transform your software quality with innovative and customized automation solutions."}
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl ">
              {language === "es" ? "Obtener un presupuesto" : "Get a Quote"}
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl ">
              {language === "es" ? "Reservar una reunión" : "Schedule a Meeting"}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-red-500 mb-2">{stat.number}</h3>
                <p className={`${isDarkMode ? "text-xl mb-12 max-w-3xl mx-auto dark bg-gray-900 text-white" : "text-xl mb-12 max-w-3xl mx-auto dark bg-white text-black"}`}>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


<WhatsAppButton 
      />

    {/* Services Section */}
<section id="services" className="py-20">
  <div className="container mx-auto px-6">
    <h3 className="text-3xl font-bold text-center mb-8">
      {language === "es" ? "Nuestros Servicios" : "Our Services"}
    </h3>

    {/* Contenedor scrollable en móviles */}
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex gap-3 sm:gap-4 min-w-max px-4 snap-x snap-mandatory overflow-x-auto flex-nowrap sm:justify-center">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveService(index)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base whitespace-nowrap transition-all duration-300 snap-center ${
              activeService === index
                ? "bg-red-500 text-black"
                : "text-black bg-gray-200 hover:bg-red-400  items-center "
            }`}
            style={{ minWidth: "120px" }} // Asegura que los botones tengan un tamaño mínimo
          >
            {service.title}
          </button>
        ))}
      </div>
    </div>

    {/* Contenedor de detalles del servicio */}
    <div className={`${isDarkMode ? "bg-gray-800 p-8 rounded-xl shadow-lg" : " p-8 rounded-xl shadow-lg"}`}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Texto y características */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold">{services[activeService].title}</h4>
          <p
            className={`${
              isDarkMode
                ? "text-xl mb-12 max-w-3xl mx-auto dark  text-white"
                : "text-xl mb-12 max-w-3xl mx-auto  text-gray-900"
            }`}
          >
            {services[activeService].description}
          </p>
          <ul className="space-y-3">
            {services[activeService].features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={services[activeService].image}
            className="rounded-lg shadow-lg"
            alt={services[activeService].title}
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Technologies Section */}
      <section id="technologies" className="py-20 dark:bg-gray-500">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">
            {language === "es" ? "Tecnologías que utilizamos" : "Technologies We Use"}
          </h3>
          <p className={`${isDarkMode ? "text-center mb-12 max-w-3xl mx-auto dark bg-gray-900 text-white" : "text-center mb-12 max-w-3xl mx-auto dark bg-white text-black"}`}>
            {language === "es"
              ? "Trabajamos con las últimas tecnologías para garantizar soluciones robustas y escalables."
              : "We work with the latest technologies to ensure robust and scalable solutions."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
  <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src="/662d434863c5da304066ca28_IcRKaNAHLXIMk9imJ-m2euZx0ck0JTkWIYFZm6pa4bI.webp"
      className="h-56 w-auto mx-auto"
    />
  </div>
  <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src="/image.png"
      className="h-56 w-auto mx-auto"
    />
  </div>
  <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
    src="/whatsapp-ai-chatbot-04.jpg"
    
      className="h-38 w-auto mx-auto"
    />
  </div>
  <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src="/673f2a3b44c1ed4901bb43bb_6386328bea96dffacc89946b_d1.webp"
      className="h-38 w-auto mx-auto"
    />
  </div>
</div>

        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-gray-800">
        <div className="container mx-auto px-6 text">
          <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
              {language === "es" ? "Contáctanos" : "Contact Us"}
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`${isDarkMode ? "bg-gray-800 p-8 rounded-xl shadow-lg" : "bg-gray-200 p-8 rounded-xl shadow-lg"}`}>
                <h4 className={`${isDarkMode ? "text-xl mb-12 max-w-3xl mx-auto dark text-white" : "text-xl mb-12 max-w-3xl mx-auto dark text-black"}`}>
                  {language === "es" ? "Envíanos un mensaje" : "Send us a message"}
                </h4>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === "es" ? "Nombre" : "Name"}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 text-black"
                      placeholder={language === "es" ? "Tu nombre" : "Your name"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === "es" ? "Correo electrónico" : "Email"}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 text-black"
                      placeholder={language === "es" ? "Tu correo" : "Your email"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === "es" ? "Mensaje" : "Message"}
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 h-32 text-black"
                      placeholder={language === "es" ? "Tu mensaje" : "Your message"}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    {language === "es" ? "Enviar mensaje" : "Send message"}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
              <div className={`${isDarkMode ? "bg-gray-800 p-8 rounded-xl shadow-lg" : "bg-gray-200 p-8 rounded-xl shadow-lg"}`}>
                <h4 className={`${isDarkMode ? "text-xl mb-12 max-w-3xl mx-auto dark text-white" : "text-xl mb-12 max-w-3xl mx-auto dark text-black"}`}>
                    {language === "es" ? "Información de contacto" : "Contact information"}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <FaPhone className="text-red-500 text-xl" />
                      <div>
                        <p className="font-medium">
                          {language === "es" ? "Teléfono" : "Phone"}
                        </p>
                        <p className={`${isDarkMode ? "   mx-auto dark  text-white" : "  mx-auto dark  text-black"}`}>+543816677869</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaEnvelope className="text-red-500 text-xl" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className={`${isDarkMode ? "mx-auto dark  text-white" : "mx-auto dark  text-black"}`}>rodrieldkii@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaMapMarkerAlt className="text-red-500 text-xl" />
                      <div>
                        <p className="font-medium">
                          {language === "es" ? "Dirección" : "Address"}
                        </p>
                        <p className={`${isDarkMode ? "mx-auto dark  text-white" : "mx-auto dark text-black"}`}>
                          {language === "es"
                            ? "Calle Principal 123, Ciudad, País"
                            : "123 Main Street, City, Country"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className={`${isDarkMode ? "bg-gray-800 p-8 rounded-xl shadow-lg" : "bg-gray-200 p-8 rounded-xl shadow-lg"}`}>
                
                  <h4 className="text-xl font-bold mb-6">
                    {language === "es" ? "Síguenos" : "Follow us"}
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className=" dark:bg-gray-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className=" dark:bg-gray-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className=" dark:bg-gray-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-bold mb-4">SoftGears Automation</h5>
              <p className="text-gray-400">
                {language === "es"
                  ? "Transformando la calidad del software a través de la automatización inteligente."
                  : "Transforming software quality through intelligent automation."}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">
                {language === "es" ? "Servicios" : "Services"}
              </h5>
              <ul className="space-y-2 text-gray-400">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">
                {language === "es" ? "Enlaces útiles" : "Useful links"}
              </h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors duration-300">
                    {language === "es" ? "Acerca de" : "About"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors duration-300">
                    {language === "es" ? "Blog" : "Blog"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors duration-300">
                    {language === "es" ? "Carreras" : "Careers"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Newsletter</h5>
              <p className="text-gray-400 mb-4">
                {language === "es"
                  ? "Suscríbete para recibir noticias y actualizaciones."
                  : "Subscribe to receive news and updates."}
              </p>
              <div className="flex">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border-gray-700"
                  placeholder={language === "es" ? "Tu correo" : "Your email"}
                />
                <button className="px-4 py-2 bg-red-500 rounded-r-lg hover:bg-red-600 transition-colors duration-300">
                  {language === "es" ? "Enviar" : "Submit"}
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>©2025 SoftGears Automation. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;