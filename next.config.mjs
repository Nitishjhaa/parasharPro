import withPWA from "next-pwa";

const withPWACustom = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // PWA only in production
  buildExcludes: [/app-build-manifest\.json$/], // required for App Router
});



const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
};

export default withPWACustom(nextConfig);
