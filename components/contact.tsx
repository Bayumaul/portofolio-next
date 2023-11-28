"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="bg-[#fbe2e3] absolute bottom-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#7d5353]"></div>

      <SectionHeading>Get In Touch</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Additionally, I'm currently open for freelance or part-time
        opportunities. If you have an interesting project or need extra hands on
        deck, don't hesitate to get in touch!
        <br />
        <br />
        Feel free to get in touch with me whenever you need assistance or want
        to discuss anything. I'm here to help you with pleasure! 🚀
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const dataForm = { senderEmail: email, message: message };

          if (email == "") {
            toast.error("Email is Required !");
            return;
          }

          if (message == "") {
            toast.error("Message is Required !");
            return;
          }

          const containsTest = /test/i.test(email);
          // || /test/i.test(message);

          if (containsTest) {
            toast.error(
              "Mohon maaf, input tidak valid. Harap berikan email dan pesan yang benar.\n\nWesbite sudah berjalan dengan baik jadi tidak perlu testing lagi 😁",
              {
                duration: 6000,
              }
            );
            return;
          }
          const isValidEmail =
            email.length > 4 &&
            message.length > 9 &&
            email.endsWith("@gmail.com");

          if (!isValidEmail) {
            toast.error(
              "Please provide a valid email (minimum 5 characters, ending with @gmail.com) and message minimum 10 characters."
            );
            return;
          }
          const { data, error } = await sendEmail(dataForm);
          if (error) {
            toast.error(error);
            return;
          }
          setEmail("");
          setMessage("");
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 bg-white rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-40 bg-white my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
