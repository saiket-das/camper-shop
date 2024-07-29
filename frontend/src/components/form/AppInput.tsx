import { Controller, useFormContext } from "react-hook-form";

type AppInputProps = {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
};

const AppInput = ({
  type,
  name,
  label,
  placeholder,
  required = true,
}: AppInputProps) => {
  const { control } = useFormContext(); // Use useFormContext to get the control object

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
        control={control}
        render={({ field }) => (
          <input
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1  ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
            id={name}
            placeholder={placeholder}
            type={type}
            required={required}
            onChange={(e) => {
              if (type === "file") {
                if (e.target.files && e.target.files[0]) {
                  field.onChange(e.target.files[0]);
                }
              } else {
                field.onChange(e.target.value);
              }
            }}
          />
        )}
      />
    </div>
  );
};

export default AppInput;
