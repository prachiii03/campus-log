import Breadcrumb from "@/app/(components)/college-landing-page/Common/Breadcrumb";
import { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


export const metadata: Metadata = {
  title: "Contact Us",
  // description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch with Us"
        description="We’re here to help you with any questions, inquiries, or support you need. Whether you're a prospective student, a parent, an alumnus, or a partner, we’d love to hear from you. Reach out to us through any of the channels below, and we’ll get back to you as soon as possible."
      />
      <section className="bg-gray-100 dark:bg-black py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 dark:text-white">
          Get in Touch with Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-slate-300">
              <strong>Address:</strong> <br />
              Sant Gajanan Maharaj College of Engineering<br />
              Hasurwadi-Halkani Road, Gadhinglaj <br />
              Taluka:Gadhinglaj, Dist:Kolhapur,Pin - 416503 <br />
              Maharashtra, India
            </p>
            <p className="text-gray-600 dark:text-slate-300">
              <strong>Phone:</strong> <br /> +1 (123) 456-7890
            </p>
            <p className="text-gray-600 dark:text-slate-300">
              <strong>Email:</strong> <br /> sgmcoe@gmail.com
            </p>

            {/* Office Hours */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Office Hours</h3>
              <p className="text-gray-600 dark:text-slate-300">Monday to Friday: 9:00 AM – 5:00 PM</p>
              <p className="text-gray-600 dark:text-slate-300">Saturday: 10:00 AM – 4:00 PM</p>
              <p className="text-gray-600 dark:text-slate-300">Sunday: Closed</p>
            </div>
          </div>

          {/* Admissions Office */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Admissions Office</h3>
            <p className="text-gray-600 dark:text-slate-300">
              For questions regarding admissions, course offerings, or scholarships, please reach out to our Admissions Office.
            </p>
            <p className="text-gray-600 dark:text-slate-300">
              <strong>Phone:</strong> <br /> +1 (123) 456-7891
            </p>
            <p className="text-gray-600 dark:text-slate-300">
              <strong>Email:</strong> <br /> admissions@sgmcoe.edu
            </p>

            {/* Campus Visits */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Campus Visits</h3>
              <p className="text-gray-600 dark:text-slate-300">
                We welcome prospective students and their families to visit our campus. Please contact our Admissions Office to schedule a campus tour or attend one of our open house events.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Follow Us on Social Media</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/SGMCOE/" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com/sgmcoe_mahagaon" className="text-gray-500 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/sgmcoe_mahagaon/" className="text-gray-500 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com/school/collegename" className="text-gray-500 hover:text-blue-700">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800  mb-6">Get Support</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-600 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
      {/* <Contact /> */}
    </>
  );
};

export default ContactPage;