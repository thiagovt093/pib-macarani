"use client";

import Footer from "@/src/components/Footer";
import { NavigationMenuDemo } from "@/src/components/NavBar";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

interface ScheduleItemProps {
  title: string;
  time: string;
}

interface CardItemProps {
  title: string;
  schedule: ScheduleItemProps[];
}

export default function HomePage() {
  const cardsData: CardItemProps[] = [
    {
      title: "Domingo",
      schedule: [
        { title: "Escola Bíblica Dominical - (EBD)", time: "09:00" },
        { title: "Culto de Adoração", time: "10:00" },
        { title: "Culto de Adoração", time: "18:30" },
      ],
    },
    {
      title: "Quarta",
      schedule: [{ title: "Culto de Adoração", time: "19:30" }],
    },
    {
      title: "Quinta",
      schedule: [
        { title: "Pequenos Grupos Multiplicadores - (PGM)", time: "19:30" },
      ],
    },
    {
      title: "Sábado",
      schedule: [{ title: "Culto de Oração", time: "06:00" }],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-3">
            <Image
              alt="Logo PIB"
              src={"/favicon.png"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="hidden sm:inline text-lg font-bold text-gray-800">
              PRIMEIRA IGREJA BATISTA DE MACARANI
            </span>
          </div>

          <NavigationMenuDemo />
        </div>
      </header>

      <section className="relative w-full py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/event.jpg"
              alt="Evento de Aniversário"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/20" />

            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white z-10 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
                Feliz 43 Anos da PIB!
              </h2>
              <p className="text-lg md:text-xl max-w-xl mb-6">
                Participe conosco e viva momentos de
                <strong> fé, música e comunhão</strong>!
              </p>
              <Button
                className="
                    bg-yellow-400 text-gray-900 
                    font-semibold text-lg h-12 px-8 
                    hover:bg-yellow-500 transition-colors
                  "
              >
                Saiba mais!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card className="p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-linear-to-r from-yellow-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-0 relative z-10">
              <h4 className="text-2xl font-bold mb-2 text-yellow-600 group-hover:text-yellow-700 transition-colors">Missões</h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                Apoie nossa Campanha de Missões Nacionais e Estaduais.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-linear-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-0 relative z-10">
              <h4 className="text-2xl font-bold mb-2 text-blue-600 group-hover:text-blue-700 transition-colors">Cultos</h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                Veja os horários dos nossos encontros semanais.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-linear-to-r from-green-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-0 relative z-10">
              <h4 className="text-2xl font-bold mb-2 text-green-600 group-hover:text-green-700 transition-colors">Contribua</h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                Faça sua oferta e dízimo de forma rápida e segura.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-yellow-400 text-black flex flex-col items-center justify-center py-24 w-full">
        <h2 className="text-5xl font-extrabold mb-3 mt-4 text-black tracking-tight">
          Nossa Agenda Semanal
        </h2>
        <p className="max-w-lg text-center text-xl text-gray-800 mb-12 font-medium">
          Fique por dentro do que vai acontecer na nossa comunidade!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-8 max-w-4xl mx-auto px-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className={`
                transition-all 
                duration-300 
                hover:-translate-y-1 
                hover:shadow-2xl 
                hover:scale-[1.01] 
                bg-white rounded-xl shadow-lg
              `}
            >
              <CardHeader className="p-4">
                <CardTitle
                  className="
                    text-center 
                    text-2xl 
                    font-extrabold 
                    text-black 
                    pb-1 
                    mb-2
                  "
                >
                  {card.title}
                </CardTitle>
                <div className="w-full h-1 bg-yellow-400 mx-auto mb-4"></div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                {card.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-semibold text-black text-lg mr-2">
                      {item.title}
                    </span>
                    <span className="text-gray-500 font-medium text-lg shrink-0 text-right">
                      {item.time}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="
          relative
          w-full
          h-96
          flex
          flex-col
          items-center
          justify-center
          text-white
          overflow-hidden
      "
      >
        <div className="absolute inset-0 z-0">
          <Image
            alt="Campanha de Missões"
            src={"/campanha_2025.jpg"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <p className="text-xl md:text-2xl font-semibold mb-2 uppercase tracking-wider">
            A <strong>Primeira Igreja Batista de Macarani</strong> na Missão:
          </p>
          <h3 className="text-4xl font-bold md:text-6xl inline-block pb-1">
            Campanha de Missões Nacionais
          </h3>
          <p className="mt-2 text-lg italic font-light">
            Participe do esforço Batista para conquistar a Pátria para Cristo.
          </p>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-16 px-4 md:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Nosso Compromisso: Multiplicar Discípulos no Brasil
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            A <strong>Primeira Igreja Batista de Macarani</strong> tem um
            compromisso inegociável com a Grande Comissão. Por isso, aderimos
            anualmente à Campanha de Missões Nacionais e Estaduais, uma
            iniciativa que apoia centenas de missionários nos estados
            brasileiros.
          </p>
          <p className="mb-4 text-lg leading-relaxed font-semibold">
            Como você pode fazer parte dessa missão através da sua igreja:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>
              <strong>Orando:</strong> Use o Guia de Oração da Campanha
              (disponível na secretaria) para clamar por nossos missionários.
            </li>
            <li>
              <strong>Contribuindo:</strong> Entregue sua Oferta Missionária no
              ofertório ou por PIX. Para que sua oferta seja identificada como
              &quot;Missões Nacionais/Estaduais&quot;, pedimos que{" "}
              <span className="font-bold text-red-600">
                acrescente R$ 0,01 (um centavo)
              </span>{" "}
              ao valor total.
            </li>
            <li>
              <strong>Mobilizando:</strong> Participe dos nossos eventos de
              mobilização e evangelismo em Macarani.
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white text-base p-5"
            >
              <a href="#">Fazer Oferta (PIX)</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-chart-2 p-5 text-base"
            >
              <a
                href="https://missoesnacionais.org.br/a-campanha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais no Site Oficial da Campanha
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-white dark:bg-gray-800 flex flex-col justify-end">
          <Footer />
        </div>
      </section>
    </main>
  );
}
