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
        <div> Accordion Demo</div>
        <div className=" space-y-2">
          <div>N.31</div>
          <AccordionDemo />
        </div>
      </div>
      {/* ________________ CardWithForm ____________________ */}
      <div>Card With Form</div>
      <div className="  text-center flex gap-5">
        <div className=" space-y-2">
          <div>N.32</div>
          <CardWithForm title="Card with border" />
        </div>
        <div className=" space-y-2">
          <div>N.33</div>
          <CardWithForm
            className=" border-none shadow-none"
            title="Card without border"
          />
        </div>
        {/* ________________ CheckboxDemo ____________________ */}
        <div className="  text-center">
          <div className=" space-y-2">
            <div>N.34</div>
            <CheckboxDemo />
          </div>
        </div>
        {/* ________________ RadioGroupDemo ____________________ */}
        <div className="  text-center">
          <div className=" space-y-2">
            <div>N.35</div>
            <RadioGroupDemo />
          </div>
        </div>
      </div>
      {/* ________________ TabsDemo ____________________ */}
      <div>Tabs Demo</div>
      <div className="  text-center flex gap-5">
        <div className=" space-y-2">
          <div>N.36</div>
          <TabsDemo title="Card with border" />
        </div>
        <div className=" space-y-2">
          <div>N.37</div>
          <TabsDemo
            className=" border-none shadow-none"
            title="Card without border"
          />
        </div>
      </div>
      <div className=" flex gap-10">
        {/* ________________ CollapsibleDemo ____________________ */}

        <div className="  grid justify-center items-center ">
          <div className=" space-y-2">
            <div>N.38</div>
            <CollapsibleDemo />
          </div>
        </div>
        {/* ________________ ComboboxDemo ____________________ */}
        <div className="  text-center">
          Combobox Demo
          <div className=" space-y-2">
            <div>N.39</div>
            <ComboboxDemo />
          </div>
        </div>
        {/* ________________ CommandDemo ____________________ */}
        <div className="  text-center">
          Command Demo
          <div className=" space-y-2">
            <div>N.40</div>
            <CommandDemo />
          </div>
        </div>
        {/* ________________ PopoverDemo ____________________ */}
        <div className="  text-center">
          Popover Demo
          <div className=" space-y-2">
            <div>N.40</div>
            <PopoverDemo />
          </div>
        </div>
        {/* ________________ DropdownMenuDemo ____________________ */}
        <div className="  text-center ">
          Dropdown Menu Demo
          <div className=" space-y-2">
            <div>N.41</div>
            <DropdownMenuDemo />
          </div>
        </div>
      </div>
      <div className=" flex gap-10 mt-5">
        {/* ________________ HoverCardDemo ____________________ */}
        <div className="  text-center">
          Hover Card Demo
          <div className=" space-y-2">
            <div>N.42</div>
            <HoverCardDemo />
          </div>
        </div>
        {/* ________________ AlertDialogDemo ____________________ */}
        <div className="  text-center">
          Alert Dialog Demo
          <div className=" space-y-2">
            <div>N.43</div>
            <AlertDialogDemo />
          </div>
        </div>
        {/* ________________ DialogDemo ____________________ */}
        <div className="  text-center">
          Dialog Demo
          <div className=" space-y-2">
            <div>N.44</div>
            <DialogDemo />
          </div>
        </div>
        {/* ________________ SheetDemo ____________________ */}
        <div className="  text-center">
          Sheet Demo
          <div className=" space-y-2">
            <div>N.45</div>
            <SheetDemo />
          </div>
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
          <div className=" space-y-2">
            <div className=" text-center">N.47</div>
            <DatePickerDemo />
          </div>
        </div>
        {/* ________________ CalendarDemo ____________________ */}
        <div className=" w-1/2 ">
          <div className=" space-y-2 ">
            <div className=" text-center">N.48</div>
            <CalendarDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
