import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Album } from "@/components/atoms/Album";
import { TAboutTemplate } from "./About.types";
import "./About.css";

export const AboutTemplate: TAboutTemplate = ({ albums }) => (
  <Container>
    <section className="about-section">
      <div className="about-image-wrapper">
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
      <div className="about-content">
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
    <section className="about-albums-section">
      <h2>Albums I&apos;ve been listening to this month</h2>
      <div className="about-albums-grid">
        {albums.map(({ artist, image, name }) => (
          <div key={name} className="about-album-item">
            <Album
              artist={artist}
              imageSrc={image[3]["#text"]}
              name={name}
            />
          </div>
        ))}
      </div>
    </section>
  </Container>
);
