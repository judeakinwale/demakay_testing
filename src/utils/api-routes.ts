const allowedDomain = [
  "http://localhost:3001",
  "https://www.demakayconsulting.ca",
  "https://my-website-ten-inky-55.vercel.app",
  "https://demakay-testing.vercel.app",
];

export function checkBaseUrl(
  domain: string,
  endpoint: string
): Error | boolean {
  const isAllowed = allowedDomain.includes(domain);
  if (!isAllowed) {
    throw new Error(
      `Site Url is not allowed to access the API endpoint @ ${endpoint}`
    );
  }
  return isAllowed;
}

const baseUrl =
  process.env.MODE === "development"
    ? "http://localhost:3001"
    : "https://demakay-testing.vercel.app";

export const routes = {
  REVIEWS: `${baseUrl}/api/reviews`,
  CONTACT: `${baseUrl}/api/contact`,
};
