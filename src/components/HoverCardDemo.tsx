import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";

export default function HoverCardDemo() {
  return (
    <div>
      <HoverCard closeDelay={0} openDelay={0}>
        <HoverCardTrigger asChild className=" ">
          <Button variant="link">Hover Card</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="font-default text-sm">@nextjs</h4>
              <p className="text-sm">
                The React Framework created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
