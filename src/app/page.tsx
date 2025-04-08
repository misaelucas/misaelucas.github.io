import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-cool-blue">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="space-x-4 text-white">
            <a href="#" className="hover:text-green-500">
              Home
            </a>
            <a href="#" className="hover:text-green-500">
              Contato
            </a>
            <a href="#" className="hover:text-green-500">
              Currículo
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://linkedin.com/in/misaelucas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <button className="flex items-center">
            <img src="/br.svg" alt="BR" className="w-6 h-6" />
          </button>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-white mb-8">Hi, I'm Misa.</h1>
        <p className="text-white text-lg mb-16">
          Olá! Aqui, você encontrará meu trabalho, projetos, coisas que acho
          interessantes para compartilhar e talvez um pouco de literatura. Todo
          o meu trabalho é criado com uma abordagem mobile-first e um design
          minimalista.
        </p>
        <Projects isEnglish={false} />
      </div>
    </main>
  );
}
