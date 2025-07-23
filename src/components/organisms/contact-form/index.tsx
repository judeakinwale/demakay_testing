"use client";

import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import styles from "./styles.module.css";
import { TextArea, TextInput } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { motion } from "framer-motion";
import type { ContactForm, ContactSubmissionResponse } from "@/types";

interface Props {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: ContactForm;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submissionResponse?: ContactSubmissionResponse;
  loading: boolean;
}

export default function ContactForm({
  handleChange,
  formData,
  handleSubmit,
  submissionResponse,
  loading,
}: Props) {
  return (
    <motion.div
      className={styles.form}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.7 }}
    >
      <div className={styles.header}>
        <h4>Contact Form</h4>
        <RiSendPlaneFill size={30} color="#d1d1ff" />
      </div>
      {submissionResponse && (
        <small
          className={`${submissionResponse.type === "error" ? styles.error : styles.success}`}
        >
          {submissionResponse.message}
        </small>
      )}
      <form onSubmit={handleSubmit} className={styles.flexForm}>
        <div className={styles.flexInput}>
          <TextInput
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <TextInput
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          text={loading ? "Please wait..." : "Submit"}
          type="submit"
          disabled={loading}
        />
        <div className={styles.divider} />
        <small>
          By submitting this form you agree to our Privacy Policy. We may
          contact you via email or phone for scheduling or marketing purposes.
        </small>
      </form>
    </motion.div>
  );
}
