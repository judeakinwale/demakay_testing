import { PageLayout } from "@/template";
import React from "react";
import styles from "./styles.module.css";
import { ReviewCard, ReviewFormWrapper } from "@/components/molecules";
import { fetchReviews } from "@/components/organisms/reviews";

export default async function Testimonials() {
  const response = await fetchReviews();
  return (
    <PageLayout
      pageName="Testimonials"
      subText="Here are some of our reviews. To view more, check out our Google, Facebook, and Alignable profiles."
      title="Trusted Companies"
    >
      <div className="main__container pt-14 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response?.reviews?.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <div className={styles.banner}>
        <div className="main__container flex flex-col items-center justify-between h-full text-center py-14">
          <div className="flex flex-col items-center gap-6">
            <h4 className="lg:text-6xl md:text-4xl sm:2xl text-white">
              Got a minute? Share your thoughts.
            </h4>
            <h4 className="lg:text-3xl md:text-xl sm:lg text-white">
              We&apos;re always improving, and your feedback helps us do just
              that. Leave a quick review and let others know what to expect.
            </h4>
          </div>
          <ReviewFormWrapper />
        </div>
      </div>
    </PageLayout>
  );
}
