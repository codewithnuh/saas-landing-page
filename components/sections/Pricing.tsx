import { pricingTiers } from "@/constants";
import Button from "../ui/Button";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="text-center h2">Pricing</h2>
          <p className=" p-text mt-5">
            Free forever, Upgrade for unlimited tasks,better security, and
            exclusive features.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 mt-6 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(
          (
            { buttonText, features, inverse, monthlyPrice, popular, title },
            i
          ) => (
            <div
              key={i}
              className={twMerge(
                "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#D9D6D6] max-w-xs ",
                inverse === true && "bg-black border-black text-white"
              )}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse === true && "text-white/50"
                  )}
                >
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] py-1 bg-clip-text text-transparent font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="tracking-tighter leading-none text-4xl font-bold">
                  ${monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50">
                  /month
                </span>
              </div>
              <Button
                className={twMerge(
                  "btn btn-primary w-full mt-8",
                  inverse === true && "bg-white text-black"
                )}
              >
                {buttonText}
              </Button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((features, i) => (
                  <li key={i} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{features}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};
