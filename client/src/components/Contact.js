import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d9x1wzr",
        "template_tao1iao",
        form.current,
        "ccJEH5OcOGYtXPm7_"
      )
      .then(
        () => {
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-center"
    >
      <h2 className="text-4xl font-bold mb-3 text-blue-700 dark:text-white">
        Contact Me
      </h2>
      <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
        If you have an opening or a project opportunity, feel free to reach out to me.
      </p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto grid gap-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800"
          whileFocus={{ scale: 1.02 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="mt-2 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition shadow-md"
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
        {done && (
          <p className="text-green-600 dark:text-green-400 mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>

      <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Nagarjun Reddy. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
