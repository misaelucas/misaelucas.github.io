import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Projects isEnglish={true} />
    </main>
  );
}
