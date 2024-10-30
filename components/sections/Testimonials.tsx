import { testimonials } from "@/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
export const Testimonials = () => {
  const firstCol = testimonials.slice(0, 3);
  const secCol = testimonials.slice(3, 6);
  const thirdCol = testimonials.slice(6, 9);
  const TestmonialsCols = (props: {
    className?: string;
    testimonials: typeof testimonials;
  }) => (
    <div
      className={twMerge(
        "flex flex-col gap-5 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]",
        props.className
      )}
    >
      {props.testimonials.map(({ imageSrc, name, text, username }, i) => (
        <div key={i} className="card">
          <div>{text}</div>
          <div className="flex gap-6 items-center mt-5">
            <div>
              <Image
                src={imageSrc}
                alt={name}
                width={45}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <div>
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonial</div>
        </div>
        <h2 className="h2 mt-5">What our users says</h2>
        <p className="p-text mt-5">
          From intuitive design to powerful features, our app has become an
          essential tool for users around the world.
        </p>
        <div className="flex justify-center items-center gap-6">
          <TestmonialsCols testimonials={firstCol} />
          <TestmonialsCols testimonials={secCol} className="hidden md:flex" />
          <TestmonialsCols testimonials={thirdCol} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};
