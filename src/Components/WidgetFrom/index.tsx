import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypeStep";

import { BsGithub, BsLinkedin, BsMessenger, BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const feedbackTypes = {
  LINKEDIN: {
    title: "Linkedin",
    icon: {
      source: <BsLinkedin />,
      alt: "linkedin",
    },
    link: "https://www.linkedin.com/in/danilo-miranda15/",
  },
  GITHUB: {
    title: "Github",
    icon: {
      source: <BsGithub />,
      alt: "github",
    },
    link: "https://github.com/danktt",
  },

  WHATSAPP: {
    title: "Whatsapp",
    icon: {
      source: <IoLogoWhatsapp />,
      alt: "whatsapp",
    },
    link: "https://contate.me/danilo-miranda",
  },
  INSTA: {
    title: "Instagram",
    icon: {
      source: <AiFillInstagram />,
      alt: "instagram",
    },
    link: "https://www.instagram.com/danilo.mirandaa_/",
  },
  FACE: {
    title: "Facebook",
    icon: {
      source: <FaFacebookSquare />,
      alt: "facebook",
    },
    link: "https://www.facebook.com/danilo.miranda.1272",
  },
  TWITTER: {
    title: "Twitter",
    icon: {
      source: <BsTwitter />,
      alt: "twitter",
    },
    link: "https://twitter.com/danktt_",
  },
  MESSE: {
    title: "Messenger",
    icon: {
      source: <BsMessenger />,
      alt: "messenger",
    },
    link: "https://www.facebook.com/messages",
  },
};

export type FeedbackProps = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackProps | null>(null);

  return (
    <div className="bg-secondary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypesStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <h1>Hello</h1>
      )}
      <footer>
        Made by
        <span className=" ml-1 text-accent">Danilo Miranda</span>
      </footer>
    </div>
  );
}
