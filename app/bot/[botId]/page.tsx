"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const bots = {
  factura: {
    name: "Bot Factura Electrónica",
    description: "Automatiza la generación y envío de facturas electrónicas.",
    stack: "C++ · CMake",
    repo: "bot-factura-electronica",
    exe: "/download/bot_factura_electronica.exe",
    color: "bg-blue-700/50",
  },
  inventario: {
    name: "Bot Inventario Financiero",
    description: "Gestiona y actualiza el inventario financiero de tu empresa.",
    stack: "C++ · CMake",
    repo: "bot-inventario-financiero",
    exe: "/download/bot_inventario_financiero.exe",
    color: "bg-green-700/50",
  },
  conciliacion: {
    name: "Bot Conciliación Bancaria",
    description: "Automatiza la conciliación de movimientos bancarios y registros contables.",
    stack: "C++ · CMake",
    repo: "bot-conciliacion-bancaria",
    exe: "/download/bot_conciliacion_bancaria.exe",
    color: "bg-yellow-700/50",
  },
  reportes: {
    name: "Bot Reportes Financiero",
    description: "Genera reportes financieros automáticos y personalizados.",
    stack: "C++ · CMake",
    repo: "bot-reportes-financieros",
    exe: "/download/bot_reportes_financieros.exe",
    color: "bg-purple-700/50",
  },
  auditoria: {
    name: "Bot Auditoria Transacciones",
    description: "Audita y verifica transacciones financieras para mayor seguridad.",
    stack: "C++ · CMake",
    repo: "bot-auditoria-transacciones",
    exe: "/download/bot_auditoria_transacciones.exe",
    color: "bg-red-700/50",
  },
};

export default function BotPage() {
  const params = useParams();
  const botId = Array.isArray(params.botId) ? params.botId[0] : params.botId;
  const bot = bots[botId as keyof typeof bots];

  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (bot) {
      fetch(
        `https://raw.githubusercontent.com/ArcGabicho/${bot.repo}/master/README.md`
      )
        .then((res) => res.text())
        .then(setReadme)
        .catch(() => setReadme("No se pudo cargar el README."))
        .finally(() => setLoading(false));
    }
  }, [bot]);

  if (!bot) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Bot no encontrado</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <span className="material-icons text-3xl">flash_on</span>
          <span className="text-xl font-bold">Sistema RPA</span>
        </div>
        <Link
          href="/"
          className="flex items-center space-x-2 border border-gray-700 rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition"
        >
          <span className="material-icons">arrow_back</span>
          <span>Volver</span>
        </Link>
      </header>

      {/* Main Article Layout */}
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <div className={`inline-block ${bot.color} text-xs px-3 py-1 rounded-full mb-6`}>
            {bot.name.replace("Bot ", "")}
          </div>
          <h1 className="text-5xl font-extrabold mb-6 text-white">{bot.name}</h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">{bot.description}</p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={bot.exe}
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold transition-colors"
              download
            >
              <span className="material-icons mr-2 text-sm">download</span>
              Descargar .exe
            </a>
            <a
              href={`https://github.com/ArcGabicho/${bot.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 border border-gray-700 rounded hover:bg-gray-800 font-semibold transition-colors"
            >
              <span className="material-icons mr-2 text-sm">code</span>
              Ver Repositorio
            </a>
          </div>
          
          {/* Tech Stack */}
          <div className="text-sm">
            <span className="inline-flex items-center px-3 py-1 bg-gray-700/50 rounded-full font-mono text-gray-300">
              {bot.stack}
            </span>
          </div>
        </header>

        {/* Documentation Section */}
        <section className="grid-item p-8 relative overflow-hidden mb-8">
          <div className="absolute top-4 left-4 bg-gray-700/50 text-xs px-3 py-1 rounded-full">
            Documentación
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6">README del Proyecto</h2>
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-400">Cargando documentación...</span>
              </div>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-4">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold text-white mb-3 mt-8">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold text-white mb-2 mt-6">{children}</h3>,
                    p: ({children}) => <p className="text-gray-400 mb-4 leading-relaxed">{children}</p>,
                    code: ({children}) => <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-300">{children}</code>,
                    pre: ({children}) => <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                    ul: ({children}) => <ul className="text-gray-400 mb-4 ml-6 list-disc">{children}</ul>,
                    ol: ({children}) => <ol className="text-gray-400 mb-4 ml-6 list-decimal">{children}</ol>,
                    li: ({children}) => <li className="mb-2">{children}</li>,
                    a: ({href, children}) => <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-gray-600 pl-4 my-4 italic text-gray-500">{children}</blockquote>,
                  }}
                >
                  {readme}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  );
}