import { Projects } from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cool-blue">
      <div className="cyberpunk-bg"></div>
      <nav className="cyberpunk-nav sticky top-0 z-50 flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#00ff9f]">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="space-x-6 text-white">
            <a href="#" className="cyberpunk-link">
              Home
            </a>
            <a href="#" className="cyberpunk-link">
              Contato
            </a>
            <a href="#" className="cyberpunk-link">
              Currículo
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://linkedin.com/in/misaelucas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <button className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/br.svg" alt="BR" width={24} height={24} />
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          <h1 className="cyberpunk-title">Hi, I'm Misa.</h1>
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#00ff9f] opacity-20 rounded-tr-3xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#00ff9f] opacity-20 rounded-bl-3xl"></div>
        </div>

        <p className="text-white text-lg mb-16 leading-relaxed max-w-3xl">
          Olá! Aqui, você encontrará meu trabalho, projetos, coisas que acho
          interessantes para compartilhar e talvez um pouco de literatura. Todo
          o meu trabalho é criado com uma abordagem mobile-first e um design
          minimalista.
        </p>

        <div className="relative mb-16">
          <div className="absolute -left-8 top-1/2 w-6 h-[2px] bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          <h2 className="cyberpunk-text text-3xl">Projetos</h2>
          <div className="absolute -right-8 top-1/2 w-6 h-[2px] bg-gradient-to-l from-[#00ff9f] to-transparent"></div>
        </div>

        <Projects isEnglish={false} />
      </div>
    </main>
  );
}
