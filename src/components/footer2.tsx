import Image from "next/image";

export function Footer2({
  logo = {
    src: "/favicon.png",
    alt: "Logo PIB",
    title: "Primeira Igreja Batista de Macarani",
    url: "#", // URL para a Home
  },
  tagline = "Crescendo em Graça e Conhecimento.",
  menuItems = [
    {
      title: "Ministérios",
      links: [
        { text: "Crianças", url: "#" },
        { text: "Jovens", url: "#" },
        { text: "Missões", url: "#" },
        { text: "Louvor", url: "#" },
      ],
    },
    {
      title: "Sobre Nós",
      links: [
        { text: "Nossa História", url: "#" },
        { text: "O que Cremos", url: "#" },
        { text: "Liderança", url: "#" },
        { text: "Contato", url: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { text: "Sermões", url: "#" },
        { text: "Devocionais", url: "#" },
        { text: "Estudos Bíblicos", url: "#" },
      ],
    },
    {
      title: "Conexão",
      links: [
        { text: "Eventos", url: "#" },
        { text: "Pedidos de Oração", url: "#" },
        { text: "Seja Membro", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Primeira Igreja Batista de Macarani. Todos os direitos reservados.",
  bottomLinks = [
    { text: "Termos de Uso", url: "#" },
    { text: "Política de Privacidade", url: "#" },
  ],
}: Footer2Props) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 border-b pb-12 mb-12 border-gray-200 dark:border-gray-700">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url} className="flex items-center gap-2">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    width={40}
                    height={40}
                    className="h-10 rounded-lg dark:invert"
                  />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {logo.title}
                  </span>
                </a>
              </div>
              <p className="mt-4 font-medium text-gray-600 dark:text-gray-400">
                {tagline}
              </p>
            </div>

            {/* Menu Items (Product, Company, Resources, Social) */}
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx} className="col-span-1">
                <h3 className="mb-4 text-lg font-extrabold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="text-gray-600 dark:text-gray-400 text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150"
                    >
                      <a href={link.url} className="font-medium">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section: Copyright and Bottom Links */}
          <div className="text-gray-600 dark:text-gray-400 flex flex-col justify-between gap-4 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex flex-wrap gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150"
                >
                  <a href={link.url} className="underline underline-offset-4">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
