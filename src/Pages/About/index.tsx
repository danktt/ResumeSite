interface dataProps {
  data?: {
    title: string;
  };
}

export default function About({ data }: dataProps) {
  return (
    <div id="about" className="h-screen bg-slate-400  hero scroll-smooth">
      <h1 className="text-white">{data?.title}</h1>
    </div>
  );
}
