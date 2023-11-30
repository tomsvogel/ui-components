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
    <div className="mb-7">
      <div className="my-3 text-center"> Size:default</div>
      <p className=" text-left">toast ist bei N.03 und N.04 </p>
      <div className=" flex w-fit gap-5 ">
        <div className=" space-y-2">
          <div>N.03</div>
          <Button
            variant="default"
            onClick={() => {
              toast({
                // variant: "destructive",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57  ",
                action: (
                  <ToastAction altText="Goto schedule to undo">
                    Undo
                  </ToastAction>
                ),
              });
            }}
          >
            default
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.04</div>
          <Button
            variant="destructive"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57  ",
                action: (
                  <ToastAction altText="Goto schedule to undo">
                    Undo
                  </ToastAction>
                ),
              });
            }}
          >
            destructive
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.05</div>
          <Button variant="primary">primary</Button>
        </div>
        <div className=" space-y-2">
          <div>N.06</div>
          <Button variant="secondary">secondary</Button>
        </div>
        <div className=" space-y-2">
          <div>N.07</div>
          <Button variant="outline">outline</Button>
        </div>
        <div className=" space-y-2">
          <div>N.08</div>
          <Button variant="ghost">ghost</Button>
        </div>
        <div className=" space-y-2">
          <div>N.09</div>
          <Button variant="link">link</Button>
        </div>
      </div>

      {/* ________________Button__sm_______________ */}
      <div className="my-3 text-center"> Size: small</div>
      <div className=" flex w-fit gap-5 ">
        <div className=" space-y-2">
          <div>N.10</div>
          <Button variant="default" size={"sm"}>
            default
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.11</div>
          <Button variant="destructive" size={"sm"}>
            destructive
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.12</div>
          <Button variant="primary" size={"sm"}>
            primary
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.13</div>
          <Button variant="secondary" size={"sm"}>
            secondary
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.14</div>
          <Button variant="outline" size={"sm"}>
            outline
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.15</div>
          <Button variant="ghost" size={"sm"}>
            ghost
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.16</div>
          <Button variant="link" size={"sm"}>
            link
          </Button>
        </div>
      </div>
      {/* __________Button___lg____________________ */}
      <div className="my-3 text-center"> Size: large</div>
      <div className=" flex w-fit gap-5 ">
        <div className=" space-y-2">
          <div>N.17</div>
          <Button variant="default" size={"lg"}>
            default
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.18</div>
          <Button variant="destructive" size={"lg"}>
            destructive
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.19</div>
          <Button variant="primary" size={"lg"}>
            primary
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.20</div>
          <Button variant="secondary" size={"lg"}>
            secondary
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.21</div>
          <Button variant="outline" size={"lg"}>
            outline
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.22</div>
          <Button variant="ghost" size={"lg"}>
            ghost
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.23</div>
          <Button variant="link" size={"lg"}>
            link
          </Button>
        </div>
      </div>
      {/* __________Button__icon _____________________ */}
      <div className="my-3 text-center"> Size: icon</div>
      <div className=" m-auto flex w-fit h-8 gap-10 ">
        <div className=" space-y-2">
          <div>N.24</div>
          <Button className=" w-10 h-10" variant="default" size={"icon"}>
            <Icons.plus className="h-8 w-8" />
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.25</div>
          <Button variant="destructive" size={"icon"}>
            <Icons.plus className="h-6 w-6" />
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.26</div>
          <Button variant="primary" size={"icon"}>
            <Icons.plus className="h-6 w-6" />
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.27</div>
          <Button variant="secondary" size={"icon"}>
            <Icons.plus className="h-6 w-6" />
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.28</div>
          <Button variant="outline" size={"icon"}>
            <Icons.plus className="h-6 w-6" />
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.29</div>
          <Button variant="ghost" size={"icon"}>
            <Icons.plus className="h-6 w-6" />
          </Button>
        </div>
        <div className=" space-y-2">
          <div>N.30</div>
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
    </div>
  );
}
