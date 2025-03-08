interface DetailItemProps {
  label: string
  value: string | number
}

export default function DetailItem ({ label, value }: DetailItemProps) {
  return (
    <div>
      <p className="font-semibold text-gray-800">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}