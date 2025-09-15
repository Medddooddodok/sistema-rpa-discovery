/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <span className="material-icons text-3xl">flash_on</span>
          <span className="text-xl font-bold">Sistema RPA</span>
        </div>
        <Link
          href="https://github.com/ArcGabicho/sistema-rpa-discovery"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border space-x-2 border-gray-700 rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition"
        >
          <span className="material-icons">folder</span>
          <span>Repositorio</span>
        </Link>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Bot Factura Electrónica */}
        <div className="grid-item p-8 col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-gray-700/50 text-xs px-3 py-1 rounded-full">
            Factura Electrónica
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Bot Factura Electrónica</h2>
            <p className="text-gray-400 mb-6">
              Automatiza la generación y envío de facturas electrónicas.<br />
              <span className="font-mono">C++ · CMake</span>
            </p>
            <Link className="font-semibold hover:underline" href="/bot/factura">
              Ver detalles →
            </Link>
          </div>

        </div>
        {/* Bot Inventario Financiero */}
        <div className="grid-item p-8 col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-gray-700/50 text-xs px-3 py-1 rounded-full">
            Inventario Financiero
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Bot Inventario Financiero</h2>
            <p className="text-gray-400 mb-6">
              Gestiona y actualiza el inventario financiero de tu empresa.<br />
              <span className="font-mono">C++ · CMake</span>
            </p>
            <Link className="font-semibold hover:underline" href="/bot/inventario">
              Ver detalles →
            </Link>
          </div>

        </div>
        {/* Bot Conciliación Bancaria */}
        <div className="grid-item p-8 col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-gray-700/50 text-xs px-3 py-1 rounded-full">
            Conciliación Bancaria
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Bot Conciliación Bancaria</h2>
            <p className="text-gray-400 mb-6">
              Automatiza la conciliación de movimientos bancarios y registros contables.<br />
              <span className="font-mono">C++ · CMake</span>
            </p>
            <Link className="font-semibold hover:underline" href="/bot/conciliacion">
              Ver detalles →
            </Link>
          </div>

        </div>
        {/* Bot Reportes Financiero */}
        <div className="grid-item p-8 col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-gray-700/50 text-xs px-3 py-1 rounded-full">
            Reportes Financiero
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Bot Reportes Financiero</h2>
            <p className="text-gray-400 mb-6">
              Genera reportes financieros automáticos y personalizados.<br />
              <span className="font-mono">C++ · CMake</span>
            </p>
            <Link className="font-semibold hover:underline" href="/bot/reportes">
              Ver detalles →
            </Link>
          </div>

        </div>
        <div className="grid-item p-8 col-span-1 md:col-span-1 lg:col-span-1 row-span-2 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <img
            alt="Futuristic bot series text"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvak-fjzdcvcbJqnyxroDj0SXM6AP3PrWMZ4LvdLz7r9xB1vDWlef3Hbz0E1fCuk3-gri0rqYpvhF1IqO4aG4kx0fR6qoA2fxCXsMnSTKfUd2JhKd6cTounLc88aA7OOqrdQ_dHJH99S-JKZdm8U_wcTZC4uZNITPr3W5WS4t0DbBgfMnR1DFwzBw6Rwx1Y-Aftgg1PE1QY859p8MjjV5hPqqXUF-PiRdE7UoRepqdsETcoTtC8O1a7gQdTHUEibqE797zkMX3jHo"
          />
          <div className="relative z-10">
            <h2 className="text-5xl font-extrabold tracking-tighter">Bots</h2>
            <p className="text-5xl font-bold text-gray-400">Demostrativos</p>
          </div>
        </div>
        {/* Bot Auditoria Transacciones */}
        <div className="grid-item p-8 col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-gray-700/50 text-xs px-3 py-1 rounded-full">
            Auditoria Transacciones
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Bot Auditoria Transacciones</h2>
            <p className="text-gray-400 mb-6">
              Audita y verifica transacciones financieras para mayor seguridad.<br />
              <span className="font-mono">C++ · CMake</span>
            </p>
            <Link className="font-semibold hover:underline" href="/bot/auditoria">
              Ver detalles →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
