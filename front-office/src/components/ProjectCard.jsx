"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImagesSliderDemo } from "./home/ImagesSliderDemo";


const ProjectCard = ({ project }) => {
  const isMp4 = !Array.isArray(project.image) && project.image.endsWith(".mp4");

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* Conditionally render video, image, or slider */}
        <div className="relative w-full xl:h-[470px] lg:h-[350px] md:h-[250px] sm:h-[230px] h-[270px] flex items-center justify-center bg-tertiary overflow-hidden">
          {Array.isArray(project.image) ? (
        
            <ImagesSliderDemo images={project.image} />
          ) : isMp4 ? (
            <video
              className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              autoPlay
              loop
              muted
            >
              <source src={project.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              className="absolute bottom-0 shadow-2xl"
              src={project.image}
              fill
              
              style={{ objectFit: "cover" }} // Style for object-fit
              alt="project preview"
              priority
            />
          )}

          {/* Button links */}
          {/* <div className="flex gap-x-4 z-10">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Github className="text-white" />
            </Link>
          </div> */}
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="text-white uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
