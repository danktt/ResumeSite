import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return(
    <Popover.Button className="right-5 top-5 absolute text-zinc-400 hover:text-zinc-100">
      <X weight="bold" className="w-4 h-4 "/>
    </Popover.Button>
  )
}