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
  },
  GITHUB: {
    title: "Github",
    icon: {
      source: <BsGithub />,
      alt: "github",
    },
  },
  WHATSAPP: {
    title: "Whatsapp",
    icon: {
      source: <IoLogoWhatsapp />,
      alt: "whatsapp",
    },
  },
  INSTA: {
    title: "Instagram",
    icon: {
      source: <AiFillInstagram />,
      alt: "instagram",
    },
  },
  FACE: {
    title: "Facebook",
    icon: {
      source: <FaFacebookSquare />,
      alt: "facebook",
    },
  },
  TWITTER: {
    title: "Twitter",
    icon: {
      source: <BsTwitter />,
      alt: "twitter",
    },
  },
  MESSE: {
    title: "Messenger",
    icon: {
      source: <BsMessenger />,
      alt: "messenger",
    },
  },
};

export type FeedbackProps = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackProps | null>(null);

  return (
    <div className="bg-black-figma p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypesStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <h1>Hello</h1>
      )}
      <footer>
        Made by
        <span className=" ml-1 text-yellow-figma">Danilo Miranda</span>
      </footer>
    </div>
  );
}
