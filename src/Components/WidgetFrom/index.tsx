
import whatsappImage from "../../assets/whatsapp.svg"
import instagramImage from "../../assets/instagram.svg"
import twitterImage from "../../assets/twitter.svg"
import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypeStep";



export const feedbackTypes = {
  BUG:{
    title: "Whatsapp",
    image: {
      source: whatsappImage,
      alt: "whatsapp"
    }
  },
  IDEA:{
    title: "Instagram",
    image: {
      source: instagramImage,
      alt: "instagram"
    }
  },
  OTHER:{
    title: "Twitter",
    image: {
      source: twitterImage,
      alt: "twitter"
    }
  },
}

export type FeedbackProps = keyof typeof feedbackTypes

export function WidgetForm() {

  const [ feedbackType, setFeedbackType ] = useState<FeedbackProps | null>(null)


  return (
    <div className="bg-zinc-600 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     

      {!feedbackType ? (
        <FeedbackTypesStep  onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        <h1>Hello</h1>
      )}
      <footer>
      Made with ❤️ by
        <a
          className="underline underline-offset-2 ml-1 text-amber-600"
          target="_black"
          href="https://github.com/danktt"
        >
  
          Danilo Miranda
        </a>
      </footer>
    </div>
  );
}
