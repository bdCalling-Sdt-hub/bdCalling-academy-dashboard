export const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
export const imageUrl = (image: string) => {
  return `${IMAGE_BASE_URL}/${image}`;
};
