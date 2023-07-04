import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Album } from "@/components/atoms/Album";
import { TAboutTemplate } from "./About.types";

export const AboutTemplate: TAboutTemplate = ({ albums }) => (
  <Container>
    <section className="grid grid-cols-2 gap-4">
      <div className="relative">
        <Image
          src="/ianHeadshot.jpeg"
          alt="Ian Holden headshot"
          priority
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="my-8">
        <h1>About Me</h1>
        <p>My name is Ian Holden.</p>
        <p>I&apos;m a Software Engineer.</p>
        <p>
          I started my professional career as an Optimisation Executive after
          completing my degree in Computer Science.
        </p>
        <p>
          I gained skills, working with in-house and external Analytics tools
          before joining a small Research & Development team. As an R&D
          Engineer, I built hybrid applications using Ionic with Angular.
        </p>
        <p>
          I am currently working as a Software Engineer, developing frontend
          systems and managing integrations within a microservices architecture.
        </p>
      </div>
    </section>
    <section>
      <h2>Albums I&apos;ve been listening to this month</h2>
      <div className="columns-3">
        {albums.map(({ artist, image, name }) => (
          <Album
            artist={artist}
            imageSrc={image[3]["#text"]}
            key={name}
            name={name}
          />
        ))}
      </div>
    </section>
  </Container>
);
