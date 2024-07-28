import axios from "axios";

const uploadToCloudinary = async (file: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "camper-shop");
  formData.append("folder", "camper-shop");

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/saiketdas/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};

export default uploadToCloudinary;
