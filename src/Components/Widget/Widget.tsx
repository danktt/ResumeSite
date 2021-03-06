import { Bookmark } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "../WidgetFrom";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 md:hidden flex flex-col items-end ">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-accent rounded-full px-3 h-12 text-base-100 flex items-center group ">
        {/* <ChatTeardropDots className="w-6 h-6" /> */}
        <Bookmark className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Media
        </span>
      </Popover.Button>
    </Popover>
  );
}
