"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Form,
  addToast,
} from "@heroui/react";
import styles from "./styles.module.css";
import {
  saveReview,
  // uploadReviewImage
} from "@/utils/firebase";
import { serverTimestamp } from "firebase/firestore";

const initialFormData = {
  fullName: "",
  email: "",
  organization: "",
  position: "",
  // imageUrl: undefined as any,
  thoughts: "",
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

export default function ReviewFormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, dispatch] = React.useReducer(reducer, initialFormData);
  const [submitting, setSubmitting] = React.useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE", name, payload: value });
  }

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const payload = {
      id: Date.now().toString(),
      createdAt: serverTimestamp(),
      ...formData,
    };
    setSubmitting(true);
    // const imageUrl = await uploadReviewImage(
    //   formData?.imageUrl?.files?.[0],
    //   payload.id
    // );
    const isSuccess = await saveReview(payload);
    if (isSuccess) {
      addToast({
        title: "Review Added!",
        description:
          "🎉 Thanks for sharing your thoughts! We really appreciate your feedback.",
        endContent: (
          <Button size="sm" variant="flat">
            OK
          </Button>
        ),
      });
      onClose();
    } else {
      addToast({
        title: "Error Occurred",
        description: "Oops! Something went wrong. Please try again later.",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
    }
    setSubmitting(false);
  };

  return (
    <>
      <button className={styles.shareBtn} onClick={onOpen}>
        Share your thoughts
      </button>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Share Your Thoughts 😀
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={onSubmit}>
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    isRequired
                  />
                  <Input
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    type="email"
                    isRequired
                  />
                  <Input
                    label="Organization"
                    onChange={handleChange}
                    name="organization"
                    value={formData.organization}
                    isRequired
                  />
                  <Input
                    label="Position"
                    onChange={handleChange}
                    name="position"
                    value={formData.position}
                    isRequired
                  />
                  {/* <Input
                    label="Picture"
                    onChange={handleChange}
                    name="imageUrl"
                    value={formData.imageUrl?.files?.[0] ?? null}
                    type="file"
                    isRequired
                  /> */}
                  <Textarea
                    label="Thoughts"
                    onChange={handleChange}
                    name="thoughts"
                    value={formData.thoughts}
                    className="max-w-xs"
                    isRequired
                    isClearable
                  />
                  <div className="flex items-center justify-end w-full gap-3 mt-6">
                    <Button
                      color="danger"
                      variant="light"
                      disabled={submitting}
                      onPress={function () {
                        onClose();
                        dispatch({ type: "RESET" });
                      }}
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={submitting}
                      isLoading={submitting}
                    >
                      {submitting ? "Please wait" : "Submit"}
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
