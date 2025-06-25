import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d9x1wzr", // from EmailJS
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
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Got a project or opportunity? Let’s connect!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto grid gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {done && (
          <p className="text-green-600 dark:text-green-400 mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
