"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { ToastAction } from "./ui/toast";
import { toast } from "./ui/use-toast";
import { CommandDialog } from "./ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function ButtonDemo() {
  return (
    <div>
      <div className="my-3 text-center"> Size:default</div>
      <div className=" flex w-fit gap-5 ">
        <Button
          variant="default"
          onClick={() => {
            toast({
              // variant: "destructive",
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57  ",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          default
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57  ",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          destructive
        </Button>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
      </div>

      {/* ________________Button__sm_______________ */}
      <div className="my-3 text-center"> Size: small</div>
      <div className=" flex w-fit gap-5 ">
        <Button variant="default" size={"sm"}>
          default1
        </Button>
        <Button variant="destructive" size={"sm"}>
          destructive1
        </Button>
        <Button variant="primary" size={"sm"}>
          primary1
        </Button>
        <Button variant="secondary" size={"sm"}>
          secondary1
        </Button>
        <Button variant="outline" size={"sm"}>
          outline
        </Button>
        <Button variant="ghost" size={"sm"}>
          ghost1
        </Button>
        <Button variant="link" size={"sm"}>
          link1
        </Button>
      </div>
      {/* __________Button___lg____________________ */}
      <div className="my-3 text-center"> Size: large</div>
      <div className=" flex w-fit gap-5 ">
        <Button variant="default" size={"lg"}>
          default
        </Button>
        <Button variant="destructive" size={"lg"}>
          destructive
        </Button>
        <Button variant="primary" size={"lg"}>
          primary
        </Button>
        <Button variant="secondary" size={"lg"}>
          secondary
        </Button>
        <Button variant="outline" size={"lg"}>
          outline
        </Button>
        <Button variant="ghost" size={"lg"}>
          ghost
        </Button>
        <Button variant="link" size={"lg"}>
          link
        </Button>
      </div>
      {/* __________Button__icon _____________________ */}
      <div className="my-3 text-center"> Size: icon</div>
      <div className=" m-auto flex w-fit gap-7 ">
        <Button variant="default" size={"icon"}>
          <Icons.plus className="h-6 w-6" />
        </Button>
        <Button variant="destructive" size={"icon"}>
          <Icons.plus className="h-6 w-6" />
        </Button>
        <Button variant="primary" size={"icon"}>
          <Icons.plus className="h-6 w-6" />
        </Button>
        <Button variant="secondary" size={"icon"}>
          <Icons.plus className="h-6 w-6" />
        </Button>
        <Button variant="outline" size={"icon"}>
          <Icons.plus className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size={"icon"}>
          <Icons.plus className="h-6 w-6" />
        </Button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="link" size={"icon"}>
                <Icons.info className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library Lorem ipsum dolor sit amet consectetur</p>
              <p>Add to library Lorem ipsum dolor sit amet consectetur</p>
              <p>Add to library Lorem ipsum dolor sit amet consectetur</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
