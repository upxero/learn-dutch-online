export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans text-gray-800 max-w-6xl mx-auto p-6">
      {children}
    </div>
  );
}
