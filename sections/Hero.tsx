import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import SplineContainer from "site/components/Hero/Spline.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  /**
   * @title Image Frontend
   */
  imageFrontend?: ImageWidget;
  /**
   * @title Image Backend
   */
  imageBackend?: ImageWidget;
  background?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  imageFrontend = "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1724973076~exp=1724976676~hmac=2d31274651c17f585c4092e48d0abdcafedbd5c9214cf24f555ca60f7808ceba&w=826",
  imageBackend = "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?t=st=1724973112~exp=1724976712~hmac=8b2bda322a8b8fe541ac44dfd1608a3d0b76a152d753d7ca064dce7b57813e71&w=826",
  background = "",
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  console.log(SplineContainer )

  if(image) {
    return (
      <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              height={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
              image
                ? "lg:w-1/2 lg:max-w-xl"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block lg:text-[80px] text-4xl leading-none font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            <p class="text-lg md:text-md leading-[150%]">
              {description}
            </p>
            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
          </div>
        </div>
    )
  }
  const tecnology = [
    { id: 1, text: "React", color: "#61DAFB" },
    { id: 2, text: "Tailwind CSS", color: "#38B2AC" },
    { id: 3, text: "VTEX", color: "#319795" },
    { id: 4, text: "Deco", color: "#FFC042" },
    { id: 5, text: "CSS", color: "#212121" },
    { id: 6, text: "SASS", color: "#CC6699" },
  ]
  return (
    <nav class="lg:mx-auto mx-4 flex h-[80vh] relative" style={{backgroundimage: background}}>
        <SplineContainer />
        
    </nav>
  );
}

// {/* <!-- Primeira Div --> */}
// <div class="hover:scale-105 origin-bottom-left cursor-pointer z-50 p-8 gap-4 bg-[#e3e3e3] bg-no-repeat absolute bottom-0 left-0 flex flex-col justify-end items-start flex-1 transition-all duration-200 ease-in-out" >
// <h2 class="inline-block 2xl:text-[48px] text-4xl leading-none font-black">
//   Front-end & <br></br> Product Design
// </h2>
// <p class="text-lg md:text-md leading-[150%] max-w-80">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim ac velit lobortis bibendum vel non erat. Donec vitae massa at neque fermentum iaculis.
// </p>
// <div class="flex gap-4">
//   {tecnology.map(({text, color})=>(
//     <p style={{color, borderColor: color }}
//      class="px-4 py-2 border text-base">{text}</p>
//   ))}
// </div>
// </div>

// {/* <!-- Segunda Div --> */}
// <div class="hover:scale-105 origin-bottom-right cursor-pointer z-50 p-8 gap-4 bg-[#e3e3e3] bg-no-repeat absolute bottom-0 right-0 flex flex-col justify-end items-end flex-1 transition-all duration-200 ease-in-out">
// <h2 class="inline-block 2xl:text-[48px] text-4xl leading-none font-black text-right">
//   Back-end & <br></br> Machine Learning 
// </h2>
// <p class="text-lg md:text-md leading-[150%] max-w-80 text-right">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim ac velit lobortis bibendum vel non erat. Donec vitae massa at neque fermentum iaculis.
// </p>
// <div class="flex gap-4">
//   {tecnology.map(({text, color})=>(
//     <p style={{color, borderColor: color }}
//      class="px-4 py-2 border text-base">{text}</p>
//   ))}
// </div>
// </div>

