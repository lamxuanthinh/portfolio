"use client";

import { CONTACT_EMAIL } from "@/constants/mail";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
    const { ref } = useSectionInView("#contact");

    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>{"Contact Me"}</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                {"Feel free to contact me directly through this form"}
            </p>

            <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
                    name="subject"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Your subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <SubmitBtn text="Submit" />
            </form>
        </motion.section>
    );
}
