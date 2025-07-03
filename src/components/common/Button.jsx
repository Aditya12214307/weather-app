export default function Button({ children, ...props }) {
  return (
    <button
      className="px-5 py-2 rounded-full bg-primary text-white font-medium hover:bg-violet-600 transition disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}
