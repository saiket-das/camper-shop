import { FieldValues } from "react-hook-form";
import AppForm from "../../components/form/AppForm";
import AppInput from "../../components/form/AppInput";
import uploadToCloudinary from "../../utils/uploadToCloudinary";
import { usePostProductMutation } from "../../redux/features/product/productApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AppRoutes from "../../utils/AppRoutes";
import { useState } from "react";

const Dashbaord = () => {
  const [loading, setLoading] = useState(false);
  const [product] = usePostProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    const toastId = toast.loading("Loadding...");
    const {
      name,
      price,
      description,
      category,
      stock,
      image_1,
      image_2,
      image_3,
      image_4,
    } = data;
    if (image_1 && image_2 & image_3 && image_4) {
      const imageFiles = [image_1, image_2, image_3, image_4];
      try {
        const uploadPromises = Array.from(imageFiles).map((file) =>
          uploadToCloudinary(file)
        );
        const uploadResults = await Promise.all(uploadPromises);
        const imageUrls = uploadResults.map((result) => result);
        console.log(imageUrls);

        const productData = {
          name: name,
          price: parseInt(price),
          stock: parseInt(stock),
          description: description,
          category: category,
          images: imageUrls,
        };
        console.log(productData);
        await product(productData);
        toast.success("Added Successfully!", { id: toastId, duration: 2000 });
        setLoading(false);
        navigate(AppRoutes.HOME);
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
      }
    }
  };

  return (
    <div>
      <AppForm onSubmit={onSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
          <div className="sm:col-span-4">
            <AppInput
              type="text"
              name="name"
              placeholder="Enter product name"
              label="Product name*"
            />
          </div>
          <div className="sm:col-span-4">
            <AppInput
              type="number"
              name="price"
              placeholder="Enter product price"
              label="Product price*"
            />
          </div>
          <div className="sm:col-span-8">
            <AppInput
              type="text"
              name="description"
              placeholder="Enter product description"
              label="Product description*"
            />
          </div>
          <div className="sm:col-span-4">
            <AppInput
              type="number"
              name="stock"
              placeholder="Enter product stock"
              label="Product stock*"
            />
          </div>
          <div className="sm:col-span-4">
            <AppInput
              type="text"
              name="category"
              placeholder="Enter product category"
              label="Product category*"
            />
          </div>

          <div className="sm:col-span-2">
            <AppInput
              type="file"
              name="image_1"
              placeholder="Upload your image "
              label="Image 1"
            />
          </div>
          <div className="sm:col-span-2">
            <AppInput
              type="file"
              name="image_2"
              placeholder="Upload your image 2"
              label="Image 2"
            />
          </div>
          <div className="sm:col-span-2">
            <AppInput
              type="file"
              name="image_3"
              placeholder="Upload your image 3"
              label="Image 3"
            />
          </div>
          <div className="sm:col-span-2">
            <AppInput
              type="file"
              name="image_4"
              placeholder="Upload your image 4"
              label="Image 4"
            />
          </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button
            className={`rounded-lg w-full max-w-[250px] py-2 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 ${
              loading ? "cursor-not-allowed opacity-50" : "hover:bg-primary-600"
            }`}
            disabled={loading}
          >
            {/* {loading && (
              <svg
                aria-hidden="true"
                className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 pr-4"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )} */}
            Add new product
          </button>
        </div>
      </AppForm>
    </div>
  );
};

export default Dashbaord;
