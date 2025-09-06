"use client";

import { Button } from "@/components/ui/button";

const sections = [
  { id: "despre", label: "Despre" },
  { id: "itinerarii", label: "Itinerarii" },
  { id: "contact", label: "Contact" },
  { id: "blog", label: "Blog", href: "/blog" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
          <a href="#top" className="font-semibold text-lg">
            Călătorii cu Suflet în Turcia
          </a>
          <nav className="hidden md:flex gap-4 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={s.href ? s.href : `#${s.id}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild>
              <a href="#contact">Descoperim împreună, creștem împreună!</a>
            </Button>
          </div>
        </div>
      </header> /////

     
      {/* Despre */}
      <section id="despre" className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Despre mine</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/poza-profil.jpg" // 🖼️ aici pui poza ta editată
            alt="Ghid spiritual"
            className="rounded-2xl shadow-lg"
          />
          <p className="text-gray-700 leading-relaxed">
            Sunt pasionată de locurile sacre și de călătoriile care aduc liniște
            și claritate. Organizăm trasee cu suflet, într-un ritm blând, pentru
            cei care vor să descopere Turcia dintr-o perspectivă diferită.
          </p>
        </div>
      </section>

      {/* Itinerarii */}
      <section id="itinerarii" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Itinerarii propuse</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
                alt="Nemrut"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Muntele Nemrut</h3>
                <p className="text-gray-600">
                  Apus magic printre statui colosale, cu opriri scurte și
                  cazări confortabile.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
                alt="Cappadocia"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cappadocia</h3>
                <p className="text-gray-600">
                  Valea Ihlara, Derinkuyu și peisaje vulcanice spectaculoase.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1578926078643-1e2322d7dfe1?q=80&w=1600&auto=format&fit=crop"
                alt="Göbekli Tepe"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Göbekli Tepe</h3>
                <p className="text-gray-600">
                  Cel mai vechi templu cunoscut – inițiere într-o călătorie
                  spirituală unică.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600 mb-6">
          Scrie-mi pe WhatsApp sau lasă un mesaj și îți răspund în cel mai scurt timp.
        </p>
        <Button asChild size="lg">
          <a href="https://wa.me/40743146013" target="_blank" rel="noopener noreferrer">
            Scrie pe WhatsApp
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Călătorii cu Suflet în Turcia
      </footer>
    </div>
  );
}
