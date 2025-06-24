import { React, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { sendContactForm } from '../services/api';


export default function Contact({ isDark, isVisible }) {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async () => {
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            setSubmitMessage('Please fill in all fields.');
            setTimeout(() => setSubmitMessage(''), 5000);
            return;
        }

        setIsSubmitting(true);

        try {
            await sendContactForm(contactForm);
            setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
            setContactForm({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitMessage('Something went wrong. Please try again.');
            console.log('Error sending message:', error);
            
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 5000);
    };



    return (
        <section id="contact" className="py-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                I'm always interested in new opportunities and exciting projects.
                                Feel free to reach out if you'd like to work together!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Mail className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300">sarvjeet31072002@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <Phone className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-300">+91 6205340146</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                        <MapPin className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Gurugram, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={contactForm.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={contactForm.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={contactForm.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <Send size={20} className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitMessage && (
                                    <div className={`p-4 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}