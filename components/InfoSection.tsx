export default function InfoSection() {
  return (
    <section className="min-h-screen px-10 py-40 space-y-40 section">

      <div>
        <h2 className="text-5xl font-bold">O que é um buraco negro?</h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Uma região do espaço onde a gravidade colapsa o próprio tempo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border border-white/10 rounded-xl">
          Singularidade
        </div>
        <div className="p-6 border border-white/10 rounded-xl">
          Horizonte de eventos
        </div>
        <div className="p-6 border border-white/10 rounded-xl">
          Distorção temporal
        </div>
      </div>

    </section>
  );
}