/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ContactForm } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import submittedContacts from "@/data/contact-form-submissions.json";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/lib/email";

function saveDataToJsonFile<T>(filePath: string, payload: T) {
  const currentData = existsSync(filePath)
    ? JSON.parse(readFileSync(filePath, "utf-8"))
    : [];
  currentData.push(payload);
  writeFileSync(filePath, JSON.stringify(currentData, null, 2));
}

export async function GET() {
  return NextResponse.json({
    success: true,
    data: submittedContacts,
  });
}

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, message, phone } =
    (await request.json()) as ContactForm;

  const data = {
    createdAt: new Date().toISOString(),
    firstName,
    lastName,
    email,
    content: message,
    phone,
  };

  const emailHtml = render(
    <EmailTemplate clientEmail={email} messageFromWeb={message} phone={phone} />
  );

  await sendEmail({ email, message, firstName }, emailHtml);
  saveDataToJsonFile("./src/data/contact-form-submissions.json", data);

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully!",
    data,
  });
}

const sendEmail = async (options: any, html: any) => {
  const transporter = nodemailer.createTransport({
    // @ts-expect-error error
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.FROM_NAME}, <${process.env.FROM_EMAIL}>`, // sender address
    to: process.env.CLIENT_EMAIL,
    subject: `MESSAGE FROM ${options?.firstName} ${options?.lastName}`,
    html,
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};
