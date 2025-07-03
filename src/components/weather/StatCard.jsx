export default function StatCard({ title, value, icon, className = "" }) {
  return (
    <div className={`bg-dark-800 p-4 rounded-lg text-center ${className}`}>
      <div className="text-xl mb-2 flex justify-center text-primary">{icon}</div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
