export type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactSubmissionResponse = {
  type: "success" | "error";
  message: string;
};

export type ReviewCardAuthor = {
  fullName: string;
  email: string;
  // image: string;
  organization: string;
  position: string;
};

export interface ReviewCardProps extends ReviewCardAuthor {
  id?: string;
  thoughts: string;
}
