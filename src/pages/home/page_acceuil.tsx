import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ResetIcon, TargetIcon } from "@radix-ui/react-icons";
import { ComboboxDemo } from "@/components/combobox/combobox";
import HotelCards from "@/components/hotels/hotels";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

function PageAcceuil() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  ); // State for date picker
  const [maxPrice, setMaxPrice] = useState([100]); // State for price slider
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState(null);
  const hotelsRef = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();

  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat h-svh flex flex-col justify-center items-center">
        <div className="flex flex-col w-5/6 items-center justify-center ">
          <div className="rounded-xl bg-white  p-10 w-5/6 flex flex-row justify-start items-center flex-wrap gap-20">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Search Hotels for your Holiday
              </h1>
            </div>
            <div className="flex flex-row w-full gap-5 justify-center items-center">
              <div className="flex flex-col justify-start items-center w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Select your destination
                </h4>
                <ComboboxDemo value={value} setValue={setValue} />
              </div>

              <div className="flex flex-col justify-start items-center w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Select your destination
                </h4>
                <Popover>
                  <PopoverTrigger asChild>
                    <Input
                      placeholder="Pick a date"
                      value={selectedDate ? format(selectedDate, "PPP") : ""}
                      readOnly
                      className="cursor-pointer"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-2">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-5 w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Max Price: ${maxPrice}
                </h4>
                <Slider
                  value={maxPrice}
                  onValueChange={setMaxPrice}
                  max={3000}
                  step={10}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full gap-2">
              {search && (
                <Button
                  onClick={() => {
                    setValue(null);
                    setSearch(false);
                    setMaxPrice([0]);
                  }}
                >
                  <ResetIcon />
                </Button>
              )}
              <Button
                className="w-1/3"
                onClick={() => {
                  if (value !== null) {
                    setSearch(true);
                    if (hotelsRef.current) {
                      window.scrollTo({
                        top: hotelsRef.current.offsetTop,
                        left: 0,
                        behavior: "smooth",
                      });
                    }
                  } else {
                    toast({
                      variant: "destructive",
                      title: "Attention ,",
                      description: "You have to choose Destination first",
                      action: (
                        <ToastAction altText="Goto schedule to undo">
                          Undo
                        </ToastAction>
                      ),
                    });
                  }
                }}
              >
                <TargetIcon /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div ref={hotelsRef}>
        <HotelCards />
      </div>
      <Toaster />
    </>
  );
}

export default PageAcceuil;
