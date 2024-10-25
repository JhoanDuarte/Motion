/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Aquí se agregan las variables de entorno
  env: {
    API_URL: process.env.API_URL || 'https://backend-e5yd.onrender.com', // URL de tu backend
  },

  reactStrictMode: true,
};

export default nextConfig;
