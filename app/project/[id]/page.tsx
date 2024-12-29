import { MotionDiv } from "@/components/motion/MotionDiv";
import Nav from "@/components/nav/Nav";
import { DATA_LIST } from "@/data/data";
import Image from "next/image";

interface Params {
  id: string;
}

export default async function SingleProject({ params }: { params: Params }) {
  const { id } = params;
  const project = DATA_LIST.find((project) => project.id === parseInt(id));
  return (
    <>
      <div className="relative h-[30vh]">
        <Image
          src="/img/coding.jpg"
          layout="fill"
          alt="coding"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-between items-center text-white">
          <Nav />
          {project ? (
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-28 capitalize text-center px-4">
              {project.title}
            </h1>
          ) : (
            <h1 className="md:text-3xl sm:text-xl font-bold mb-32">
              Project not found
            </h1>
          )}
        </div>
      </div>
      <div className="new-container section-project">
        <h1 className="text-4xl text-[#cecece] font-poppins font-bold uppercase flex items-center">
          overview{" "}
          <MotionDiv
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className="headingHr ml-4"
          />
        </h1>
        <p className="text-[#cecece] font-bold font-poppins text-sm sm:text-base md:text-lg lg:text-2xl mt-4 bg-slate-800 p-4 sm:p-6">
          {project?.description}
        </p>
        <h1 className="text-4xl text-[#cecece] font-poppins font-bold uppercase flex items-center mt-8">
          Gallery{" "}
          <MotionDiv
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className="headingHr ml-4"
          />
        </h1>
        <div className="flex flex-wrap mt-8 p-2 gap-4">
          {project?.allImages && (
            <>
              import Image from "next/image";
              <Image
                width={300}
                height={300}
                src={project.allImages.first}
                alt={project.title}
                layout="responsive"
                className="w-full object-cover rounded-2xl"
              />
              <Image
                width={300}
                height={300}
                layout="responsive"
                src={project.allImages.second}
                alt={project.title}
                className="w-full rounded-2xl"
              />
              <Image
                width={300}
                height={300}
                layout="responsive"
                src={project.allImages.third}
                alt={project.title}
                className="w-full rounded-2xl"
              />
              <Image
                width={300}
                height={300}
                layout="responsive"
                src={project.allImages.fourth}
                alt={project.title}
                className="w-full rounded-2xl"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}