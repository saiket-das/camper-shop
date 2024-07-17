import { Controller } from "react-hook-form";

type AppInputProps = {
  type: string;
  name: string;
  label?: string;
};

const AppInput = ({ type, name, label }: AppInputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        )}
      />
    </div>
  );
};

export default AppInput;
