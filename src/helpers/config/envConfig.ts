export const getBaseUrl = (): string => {
  return process.env.BACKEND_URL || "https://online-work-platform-backend.vercel.app/api/v1";
  // return "https://online-work-platform-backend.vercel.app/api/v1";
};

export const envConfig = {
  siteUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",
  google: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    callback_url: process.env.GOOGLE_CALLBACK_URL,
  },
  github: {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    callback_url: process.env.GITHUB_CALLBACK_URL,
  },
};
