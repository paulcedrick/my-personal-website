export default function ContactsSection() {
  return (
    <div id="contact-us-section" className="relative mx-auto mt-40 mb-40 w-3/4">
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-slate-300 md:text-4xl">
          Get in touch!
        </h2>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <p className="text-md mb-10 text-center text-slate-300">
          If you have a question or just want to say hi, I'll try my best to get
          back to you!
        </p>
        <a
          href="#"
          className="rounded-md border-2 border-indigo-300 py-2 px-4 font-bold text-indigo-300 hover:bg-indigo-300 hover:text-neutral-900"
        >
          Say Hi!
        </a>
      </div>
    </div>
  );
}
