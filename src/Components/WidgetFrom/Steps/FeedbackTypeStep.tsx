import { FeedbackProps, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackProps) => void;
}

export function FeedbackTypesStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Contact me by:</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full carousel ">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="hover:scale-110 ease-in-out carousel-item  flex flex-col items-center py-5 w-24  bg-gray-800 delay-100 duration-300 rounded-lg gap-2 border-2 border-transparent   hover:text-yellow-figma "
              onClick={() => onFeedbackTypeChanged(key as FeedbackProps)}
              type="button"
            >
              <i className=" h-5 gap text-3xl">{value.icon.source}</i>
              <span className="">{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
