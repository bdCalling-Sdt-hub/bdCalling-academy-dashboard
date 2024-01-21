export const IMAGE_BASE_URL = `http://192.168.10.13:8000`;
export const imageUrl = (image: string) => {
  return `${IMAGE_BASE_URL}/${image}`;
};
