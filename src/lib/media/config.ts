export function getMediaConfiguration() {
  const missing = ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"].filter((key) => !process.env[key]);
  return { configured: missing.length === 0, missing };
}
