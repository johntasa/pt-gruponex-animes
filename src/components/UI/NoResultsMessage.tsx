export default function NoResults({message}: {message: string}) {
  return (
    <div className="text-center py-12">
      <p className="text-3xl">
        {message}
      </p>
    </div>
  );
}