import { Marquee, ReviewCard } from "@/components/molecules";
import type { ReviewCardProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Button, Tag } from "@/components/atoms";
import googleIcon from "@/assets/svgs/google.svg";
import Link from "next/link";
import { routes } from "@/utils/api-routes";

export const fetchReviews = async (): Promise<{
  success: boolean;
  count: number;
  reviews: ReviewCardProps[];
  error?: unknown;
}> => {
  try {
    const response = await fetch(routes.REVIEWS);
    if (!response.ok) {
      return {
        success: false,
        count: 0,
        reviews: [],
      };
      // throw new Error("Network response was not ok -> " + response.statusText);
    }
    return await response.json();
  } catch (error) {
    return {
      success: false,
      count: 0,
      reviews: [],
      error,
    };
    // throw new Error(
    //   `Failed to fetch reviews: ${error instanceof Error ? error.message : "Unknown error"}`
    // );
  }
};

export default async function Reviews() {
  const response = await fetchReviews();
  const reviews = response?.reviews || [];
  return (
    <div className="main__container pt-14 pb-14">
      <div className="sm:flex-col sm:gap-6 sm:items-start flex w-full md:items-center md:flex-row md:justify-between mb-8">
        <div>
          <Tag text="Testimonials" variant="secondary" />
          <h4 className="text-5xl sm:text-3xl mt-3 lg:w-[80%] leading-tight">
            Why Our Clients Love to Work with Us!
          </h4>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#f8f7f3] rounded-lg h-12 w-12 flex items-center justify-center">
              <Image
                src={googleIcon}
                alt="Google Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-500">5.0</p>
              <p className="text-sm text-gray-500">Google Reviews</p>
            </div>
          </div>
          <Link href={"/testimonials"}>
            <Button text="Read all testimonials" style={{ width: 200 }} />
          </Link>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map(({ id, ...reviewProps }) => (
            <ReviewCard key={id} width="350" {...reviewProps} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map(({ author, quote, id }) => (
            <ReviewCard key={id} quote={quote} author={author} />
          ))}
        </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
      </div>
    </div>
  );
}
