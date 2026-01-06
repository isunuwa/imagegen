interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
}: InputProps) {
  return (
    <div>
      <label className="block text-gray-500 dark:text-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-1 focus:ring-purple-600
          bg-white text-gray-900 focus:border-transparent
          transition-all disabled:opacity-50"
      />
    </div>
  );
}
