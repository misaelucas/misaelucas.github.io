import React from "react";
import Header from "../components/Header";
import { useState } from "react";

const Blog = () => {
  const [isHome, setHome] = useState(true);
  const contact = true;
  const books = true;

  const blogPosts = [
    {
      id: 1,
      date: "14 de Julho",
      content: (
        <div className="font-mono">
          <p className="mb-4 mt-2 text-lg">
            Nos últimos meses eu tenho investido a maior parte do tempo (tentando) cuidar da minha saúde mental, entre eiras e beiras, conquistei estabilidade suficiente para amar minhas idiossincrasias, depois de tanto tempo.. !!!!
          </p>

          <p className="mb-4 mt-2 text-lg">
            Imagino que a ideia de referências seja um tanto boba, pois todo escritor decente preza exclusivamente pela emoção, pela experiência, pelo correlato objetivo. Ainda tô tentando abandonar minha vaidade intelectual (COITADOOOO), mas é um negócio difícil assimilar a sabedoria "não só na memória, senão nos olhos, no coração, no estômago." Esse aqui vale referenciar, o livro me ajudou muito - Siddharta, de Hermann Hesse.
          </p>

          <p className="mb-4 mt-2 text-lg">
            Diariamente, estou gastando quase que meu dia inteiro programando p/ fazer o deploy de um projeto grande, mas daí hoje vi uma notícia que me deu vontade de voltar a escrever. Fui refatorar meu site pessoal (que não tem nada kkk) para criar um blog e falar sobre esse negócio que rolou na UFSC (meu coração se encheu de animosidade, há anos eu não assisto TV ou mídia tradicional e sou extremamente leigo politicamente, + penso que um amplo entendimento da natureza humana em harmonia c/ um repertório filosófico é suficiente p/ tratar de um espectro enorme desses assuntos) e dei até risada de como meu código era ruim. Fico feliz de perceber o progresso. Tô refatorando ele, e vou fazer um texto desses assuntos aí. Daí: deu vontade de escrever, fui refatorar o código, lembrei que ia esquecer se não anotasse, esqueci os assuntos importantes, kkkkkk. É só uma catarse, e pros meus amigos, não é hipomania não, nem outros negocinhos. Dei uma limpada no meu instagram, é muito zoada a forma como isso aqui é usado majoritariamente.
          </p>

          <p className="mb-4 mt-2 text-lg">
            "Ocasionalmente, deixo cair uma xícara de chá para quebrar no chão de propósito. Não fico satisfeito quando não se recompõe. Algum dia, talvez, aquela xícara retornará"
          </p>

          <p className="mb-4 mt-2 text-lg font-bold">
            A tua vida inspira outras vidas.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Header home={isHome} contact={contact} books={books} />
      <div className="flex justify-center">
        {blogPosts.map((post) => (
          <div key={post.id} className="text-center max-w-2xl mx-auto p-4 text-white">
            <h3 className="text-2xl font-bold mb-2">{post.date}</h3>
            {post.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
