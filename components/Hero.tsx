export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">

      {/* fundo espacial */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-40"
        src="/videos/space.mp4"
      />

      {/* buraco negro */}
      <div className="blackhole w-[320px] h-[320px] rounded-full bg-gradient-to-br from-black via-purple-900 to-black blur-2xl shadow-[0_0_150px_#7c3aed]" />

      {/* textos */}
      <div className="absolute text-center">
        <h1 className="title text-5xl md:text-7xl opacity-0 translate-y-10">
          EVENT HORIZON
        </h1>

        <p className="subtitle text-gray-400 mt-4 opacity-0">
          Onde o espaço e o tempo deixam de existir
        </p>
      </div>

    </section>
  );
}