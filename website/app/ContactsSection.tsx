export default function ContactsSection() {
  return (
    <div className="w-3/4 mx-auto relative mt-40 mb-40">
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-300">
          Get in touch!
        </h2>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <p className="text-slate-300 text-md text-center mb-10">
          If you have a question or just want to say hi, I'll try my best to get
          back to you!
        </p>
        <a
          href="#"
          className="border-2 border-indigo-300 py-2 px-4 rounded-md text-indigo-300 hover:text-neutral-900 hover:bg-indigo-300 font-bold"
        >
          Say Hi!
        </a>
      </div>
    </div>
  );
}
