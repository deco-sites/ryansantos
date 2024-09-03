// import type { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";

// export interface CTA {
//   id?: string;
//   href: string;
//   text: string;
//   outline?: boolean;
// }

// export interface Props {
//   /**
//    * @format rich-text
//    * @default Click here to tweak this text however you want.
//    */
//   title?: string;
//   /**
//    * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
//    */
//   description?: string;
//   image?: ImageWidget;
//   /**
//    * @title Image Frontend
//    */
//   imageFrontend?: ImageWidget;
//   /**
//    * @title Image Backend
//    */
//   imageBackend?: ImageWidget;
//   background?: ImageWidget;
//   placement?: "left" | "right";
//   cta?: CTA[];
// }

// const PLACEMENT = {
//   left: "flex-col text-left lg:flex-row-reverse",
//   right: "flex-col text-left lg:flex-row",
// };

export default function About() {

  const tecnology = [
    { id: 1, text: "React", color: "#61DAFB" },
    { id: 2, text: "Tailwind CSS", color: "#38B2AC" },
    { id: 3, text: "VTEX", color: "#319795" },
    { id: 4, text: "Deco", color: "#FFC042" },
    { id: 5, text: "CSS", color: "#212121" },
    { id: 6, text: "SASS", color: "#CC6699" },
  ]
  return (
    <div class="lg:mx-auto mx-4 flex h-[80vh] relative">
        <div className="container">
        <script
        async
        src="https://assets.streamshop.com.br/sdk-ads/liveshop-ads-video.min.js"
        ></script>
        <script
        async
        src="https://assets.streamshop.com.br/sdk-ads/liveshop-ads-carousel.min.js"
        ></script>
        <div style="width: 100%; height: 580px; max-width: 800px">
          {/* deno-lint-ignore ban-ts-comment
          @ts-ignore */}
        <liveshop-ads-carousel
          videos-width="330px"
          slugs-video="dBXLVDZM,B9hKEmHZ,2FMdPkiN,sBLteawk, DfnZOD3J"
          >
        {/* deno-lint-ignore ban-ts-comment
          @ts-ignore */}
        </liveshop-ads-carousel>
        </div>
          <div>
            <h2>About</h2>
            <p>A middle-shade between the foreground and background can help add some variety
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, neque consectetur imperdiet euismod, purus risus mattis purus, ac laoreet orci quam ac ante. Vivamus tristique laoreet ex, vel dapibus orci malesuada ut. Integer aliquet vestibulum metus vel efficitur. Vestibulum in dolor metus.</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, neque consectetur imperdiet euismod, purus risus mattis purus, ac laoreet orci quam ac ante. Vivamus tristique laoreet ex, vel dapibus orci malesuada ut. Integer aliquet vestibulum metus vel efficitur. Vestibulum in dolor metus.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, neque consectetur imperdiet euismod, purus risus mattis purus, ac laoreet orci quam ac ante.</p>
            <img src="" alt="" />
          </div>
    </div>
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

