/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
      return [
        {
          source:"/linkedIn",
          destination:'https://www.linkedin.com/in/akshitagajengi/',
          permanent: true
        },
        {
          source:"/github",
          destination:'https://github.com/akshita0810/',
          permanent: true
        },
        {
          source:"/resume",
          destination:'https://drive.google.com/file/d/1RbwXmad6KOvYnbz2wJANbt2ts7Wtv8eD/view?usp=sharing /',
          permanent: true
        },
        {
          source:"/The-Impact-of-Aca-on-Health-Insurance-Coverage",
          destination:'https://github.com/akshita0810/-The-Impact-of-Affordable-Care-Act-on-Health-Insurance-Coverage-in-USA/',
          permanent: true
        },
        {
          source:"/Netflix-in-the-Indian-OTT-Market",
          destination:'https://github.com/akshita0810/Netflix-in-the-Indian-OTT-Market/',
          permanent: true
        },
        {
          source:"/Statistical-Exploration-of-the-NBA",
          destination:'https://github.com/akshita0810/Statistical-Exploration-of-the-NBA/',
          permanent: true
        },
        {
          source:"/Crude-oil-vs-Airfare-price",
          destination:'https://github.com/akshita0810/Correlation-Analysis-of-Airfare-Price-Dynamics-in-Relation-to-Crude-Oil-Price-Fluctuations/',
          permanent: true
        }
      ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
