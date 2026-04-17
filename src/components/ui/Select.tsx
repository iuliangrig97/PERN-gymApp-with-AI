import { type SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  ref?: React.Ref<HTMLSelectElement>;
}

export const Select = ({
  label,
  error,
  id,
  options,
  ref,
  ...props
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={id}>{label}</label>}

      <select
        ref={ref}
        id={id}
        {...props}
        className={`border-2 px-4 py-1 rounded-2xl focus:bg-gray-800 cursor-pointer w-full ${props.className || ""}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

Select.displayName = "Select";
