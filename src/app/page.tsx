import { AccordionDemo } from "@/components/AccordionDemo";
import AlertDialogDemo from "@/components/AlertDialogDemo";
import ButtonDemo from "@/components/ButtonDemo";
import { CalendarDemo } from "@/components/CalendarDemo";
import { CardWithForm } from "@/components/CardDemo";
import { CheckboxDemo } from "@/components/CheckboxDemo";
import { CollapsibleDemo } from "@/components/CollapsibleDemo";
import { ComboboxDemo } from "@/components/ComboboxDemo";
import { CommandDemo } from "@/components/CommandDemo";
import { DatePickerDemo } from "@/components/DatePickerDemo";
import { DialogDemo } from "@/components/DialogDemo";
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo";
import HoverCardDemo from "@/components/HoverCardDemo";
import MenubarDemo from "@/components/MenubarDemo";
import { ModeToggle } from "@/components/ModeToggle";
import { PopoverDemo } from "@/components/PopoverDemo";
import { RadioGroupDemo } from "@/components/RadioGroupDemo";
import { SheetDemo } from "@/components/SheetDemo";
import { SliderDemo } from "@/components/SliderDemo";
import TabsDemo from "@/components/TabsDemo";

export default function Home() {
  return (
    <div className="mt-5 mb-[1000px] flex flex-col gap-5 items-center">
      <div className=" flex gap-5 items-center">
        <span>Mode:</span>
        <ModeToggle />
      </div>
      {/* ________________ MenubarDemo ____________________ */}
      <div className="  text-center">
        Menubar Demo
        <MenubarDemo />
      </div>
      {/* ________________ ButtonDemo ____________________ */}
      <div className="  text-center">
        Button Demo
        <ButtonDemo />
      </div>
      {/* ________________ AccordionDemo____________________ */}
      <div className=" w-[40%] text-center">
        Accordion Demo
        <AccordionDemo />
      </div>
      {/* ________________ CardWithForm ____________________ */}
      <div>Card With Form</div>
      <div className="  text-center flex gap-5">
        <CardWithForm title="Card with border" />
        <CardWithForm
          className=" border-none shadow-none"
          title="Card without border"
        />
        {/* ________________ CheckboxDemo ____________________ */}
        <div className="  text-center">
          <CheckboxDemo />
        </div>
        {/* ________________ RadioGroupDemo ____________________ */}
        <div className="  text-center">
          <RadioGroupDemo />
        </div>
      </div>
      {/* ________________ TabsDemo ____________________ */}
      <div>Tabs Demo</div>
      <div className="  text-center flex gap-5">
        <TabsDemo title="Card with border" />
        <TabsDemo
          className=" border-none shadow-none"
          title="Card without border"
        />
      </div>
      <div className=" flex gap-10">
        {/* ________________ CollapsibleDemo ____________________ */}

        <div className=" w-[40%] grid justify-center items-center ">
          <CollapsibleDemo />
        </div>
        {/* ________________ ComboboxDemo ____________________ */}
        <div className=" w-[40%] text-center">
          Combobox Demo
          <ComboboxDemo />
        </div>
        {/* ________________ CommandDemo ____________________ */}
        <div className=" w-[40%] text-center">
          Command Demo
          <CommandDemo />
        </div>
        {/* ________________ PopoverDemo ____________________ */}
        <div className=" w-[40%] text-center flex flex-col gap-3">
          Popover Demo
          <PopoverDemo />
        </div>
        {/* ________________ DropdownMenuDemo ____________________ */}
        <div className=" w-[40%] text-center flex flex-col gap-3">
          Dropdown Menu Demo
          <DropdownMenuDemo />
        </div>
      </div>
      <div className=" flex gap-10 mt-5">
        {/* ________________ HoverCardDemo ____________________ */}
        <div className=" w-[40%] text-center">
          Hover Card Demo
          <HoverCardDemo />
        </div>
        {/* ________________ AlertDialogDemo ____________________ */}
        <div className=" w-[40%] text-center">
          Alert Dialog Demo
          <AlertDialogDemo />
        </div>
        {/* ________________ DialogDemo ____________________ */}
        <div className=" w-[40%] text-center">
          Dialog Demo
          <DialogDemo />
        </div>
        {/* ________________ SheetDemo ____________________ */}
        <div className=" w-[40%] text-center">
          Sheet Demo
          <SheetDemo />
        </div>
      </div>
      <div className="w-1/2">
        {/* ________________ SliderDemo ____________________ */}
        <div className="  ">
          <SliderDemo />
        </div>
      </div>
      <div className=" flex  gap-10">
        {/* ________________ DatePickerDemo ____________________ */}
        <div className=" w-1/2 ">
          <DatePickerDemo />
        </div>
        {/* ________________ CalendarDemo ____________________ */}
        <div className=" w-1/2 ">
          <CalendarDemo />
        </div>
      </div>
    </div>
  );
}
