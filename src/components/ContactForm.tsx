"use client";

import { useState, type FormEvent } from "react";
import { SendIcon } from "@/components/Icons";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  }

  const btnLabel =
    status === "sending"
      ? "Sending..."
      : status === "sent"
        ? "\u2713 Message Sent!"
        : "Send Message";

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-lg p-12 max-sm:p-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="mb-0">
          <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Jane"
            required
            className="w-full px-[18px] py-3.5 text-[0.95rem] border border-gray-200 rounded-sm bg-paper text-ink focus:border-ink focus:ring-[3px] focus:ring-black/5 outline-none transition-all duration-300"
          />
        </div>
        <div className="mb-0">
          <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            className="w-full px-[18px] py-3.5 text-[0.95rem] border border-gray-200 rounded-sm bg-paper text-ink focus:border-ink focus:ring-[3px] focus:ring-black/5 outline-none transition-all duration-300"
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jane@example.com"
          required
          className="w-full px-[18px] py-3.5 text-[0.95rem] border border-gray-200 rounded-sm bg-paper text-ink focus:border-ink focus:ring-[3px] focus:ring-black/5 outline-none transition-all duration-300"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="rentalType" className="block text-sm font-semibold mb-2 text-gray-700">
          What do you need?
        </label>
        <select
          id="rentalType"
          name="rentalType"
          required
          defaultValue=""
          className="w-full px-[18px] py-3.5 text-[0.95rem] border border-gray-200 rounded-sm bg-paper text-ink focus:border-ink focus:ring-[3px] focus:ring-black/5 outline-none transition-all duration-300"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="camera">Camera / Lens Rental</option>
          <option value="lighting">Lighting Kit</option>
          <option value="audio">Audio Equipment</option>
          <option value="studio">Studio Space</option>
          <option value="full">Full Production Kit</option>
          <option value="other">Other / Custom Request</option>
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, dates, and any specific gear you need..."
          required
          className="w-full px-[18px] py-3.5 text-[0.95rem] border border-gray-200 rounded-sm bg-paper text-ink focus:border-ink focus:ring-[3px] focus:ring-black/5 outline-none transition-all duration-300 resize-y min-h-[140px]"
        />
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`mt-5 w-full justify-center py-4 text-base rounded-full font-bold inline-flex items-center gap-2 transition-all duration-300 ${
          status === "sent"
            ? "bg-green-500 text-white"
            : "bg-accent text-[#6b5500] hover:bg-accent-hover hover:-translate-y-0.5"
        }`}
      >
        {status === "idle" && <SendIcon className="w-5 h-5" />}
        {btnLabel}
      </button>
    </form>
  );
}
