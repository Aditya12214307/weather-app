export default function Input({ ...props }) {
  return (
    <input
      className="w-full px-4 py-2 rounded-lg bg-dark-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  );
}
