interface ProgressProps {
  nameLangued: string;
  porcentege: string;
  value: string;
}

export default function Progress({
  nameLangued,
  porcentege,
  value,
}: ProgressProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-base-100">{nameLangued}</span>
        <span className="text-base-100">{porcentege}%</span>
      </div>
      <progress
        className="progress progress-accent w-96"
        value={value}
        max="100"
      />
    </div>
  );
}
