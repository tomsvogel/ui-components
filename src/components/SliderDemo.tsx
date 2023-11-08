import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Card className={cn("w-4/6")}>
      <CardHeader>
        <p className=" text-center font-default">{"N.46"}</p>
        <CardTitle>
          <p>Slider Demo</p>
        </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[100%]", className)}
          {...props}
        />
      </CardContent>
    </Card>
  );
}
