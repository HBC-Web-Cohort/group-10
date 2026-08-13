export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover"
        width={1200}
        height={900}
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
        <p className="eyebrow text-gold-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-sand sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand/85 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
