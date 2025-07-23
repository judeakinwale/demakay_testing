"use client";

import { ContactCard } from "@/components/molecules";
import { PageLayout } from "@/template";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
import styles from "./styles.module.css";
import { SlLocationPin } from "react-icons/sl";
import { ContactForm } from "@/components/organisms";
import { Tag } from "@/components/atoms";
import { motion } from "framer-motion";
import type { ContactSubmissionResponse } from "@/types";
import { routes } from "@/utils/api-routes";

const linkCards = [
  {
    title: "Visit us at:",
    text: "Canada Office",
    icon: SlLocationPin,
    url: "https://www.google.com/maps?q=350+Queen+St,+Ottawa,+ON+K1R+5A5,+Canada",
  },
  {
    title: "Call us at:",
    text: "+1 4376-883-745",
    icon: BsTelephonePlus,
    url: "tel:+14376883745",
  },
  {
    title: "Email us at:",
    text: "info@demakayconsulting.ca",
    icon: AiOutlineMail,
    url: "mailto:info@demakayconsulting.ca",
  },
];

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function reducer<T>(
  state: T,
  action: { type: "UPDATE" | "RESET"; name?: string; payload?: string }
) {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.name!]: action.payload };
    case "RESET":
      return initialFormData;
    default:
      return state;
  }
}

export default function Contact() {
  const [formData, dispatch] = React.useReducer(reducer, initialFormData);
  const [feedback, setFeedback] = React.useState<
    ContactSubmissionResponse | undefined
  >(undefined);
  const [formLoading, setFormLoading] = React.useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE", name, payload: value });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setFormLoading(true);

    try {
      const response = await fetch(routes.CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const res = await response.json();

      if (!res?.success) {
        return setFeedback({
          type: "error",
          message: "Oops! something went wrong, Try again later.",
        });
      }
      dispatch({ type: "RESET" });
      setFeedback({
        type: "success",
        message: "Your message has successfully sent to us!",
      });
    } catch (error) {
      console.log("Error submitting contact form -> ", error);
      setFeedback({
        type: "error",
        message: "Oops! something went wrong, Try again later.",
      });
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <PageLayout
      pageName="Contact Us"
      title="Get In Touch"
      subText="We Look Forward to Connecting With You"
    >
      <div className={`main__container`}>
        <div className={styles.cardsWrapper}>
          {linkCards.map((cardItem, index) => (
            <ContactCard key={index} {...cardItem} />
          ))}
        </div>
        <div className={styles.contactFormWrapper}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.7 }}
          >
            <Tag text="Contact Us Form" variant="standalone" />
            <h2>Our Experts Always Ready to Work With You</h2>
            <p>Ask about general information. Please send us a message.</p>
            {linkCards.map((cardItem, index) => (
              <ContactCard key={index} {...cardItem} />
            ))}
          </motion.div>
          <ContactForm
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
            submissionResponse={feedback}
            loading={formLoading}
          />
        </div>
      </div>
    </PageLayout>
  );
}
