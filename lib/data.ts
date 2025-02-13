import blogDown from "@/public/bun.jpg";
import easyResume from "@/public/easyResume.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const projectsData = [
  {
    title: "Location Tracker Application",
    description:
      "Simple Location Tracking Web Backend built with Leaflet and Socket.io ",
    tags: ["Nest Js", "Leaflet", "Socket.io"],
    imageUrl: easyResume,
    githubUrl: "https://github.com/bikky-kc013/nest-location-tracker.git",
    liveUrl: "#",
  },
  {
    title: "Bun Application for Load Testing",
    description:
      "A simple bun application for the load testing and latency recuction test",
    tags: ["Bun", "Express", "Docker", "Postgres"],
    imageUrl: blogDown,
    githubUrl: "https://github.com/bikky-kc013/express_bun_app.git",
    liveUrl: "#",
  },
  //   {
  //     title: "Express Bun Application",
  //     description:
  //       "EduGuardian is an all-in-one content aggregator that hosts resources and roadmaps for devs.",
  //     tags: ["Express", "Bun Js"],
  //     imageUrl: eduguardian,
  //     githubUrl: "https://github.com/k2maan/eduguardian",
  //     // liveUrl: "https://eduguardian.vercel.app/",
  //   },
] as const;
