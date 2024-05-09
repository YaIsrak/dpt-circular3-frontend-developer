import { Minus, Plus, Search } from "lucide-react";
import { DatePicker } from "./DatePicker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function FlightSearchForm() {
    const [count, setCount] = useState(1)

    return (
        <div className="py-6">
            {/* type of trip */}
            <ToggleGroup type="single" className="gap-0">
                <ToggleGroupItem value="round-trip" className="border rounded-none border-indigo-900 data-[state=on]:bg-indigo-900 data-[state=on]:text-white">
                    Round Trip
                </ToggleGroupItem>
                <ToggleGroupItem value="one-way" className="border rounded-none border-indigo-900 data-[state=on]:bg-indigo-900 data-[state=on]:text-white">
                    One way
                </ToggleGroupItem>
                <ToggleGroupItem value="multi-city" className="border rounded-none border-indigo-900 data-[state=on]:bg-indigo-900 data-[state=on]:text-white">
                    Multi City
                </ToggleGroupItem>
            </ToggleGroup>

            <Separator className="my-4 bg-indigo-900" />

            {/* Main Form */}
            <div className="flex items-center gap-2">
                <Input placeholder="LHR" className="border-indigo-900" />
                <Input placeholder="CDG" className="border-indigo-900" />
                <DatePicker />
                <Select>
                    <SelectTrigger className="border-indigo-900" >
                        <SelectValue placeholder="Day -" />
                    </SelectTrigger>
                </Select>
                <Select>
                    <SelectTrigger className="border-indigo-900" >
                        <SelectValue placeholder="Day +" />
                    </SelectTrigger>
                </Select>
                <Select>
                    <SelectTrigger className="border-indigo-900" >
                        <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                </Select>

                <div className="flex gap-2">
                    <Button size={"icon"} variant={'link'} onClick={() => setCount((prevValue) => prevValue + 1)}><Plus /></Button>
                    <Select>
                        <SelectTrigger className="border-indigo-900" >
                            <SelectValue placeholder="Adult" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='adult'>Adult</SelectItem>
                            <SelectItem value='child'>Child</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder={`${count}`} value={count} className="border-indigo-900" />
                    <Button size={"icon"} variant={'link'} onClick={() => setCount((prevValue) => prevValue - 1)}><Minus /></Button>
                </div>
            </div>

            <Separator className="my-4 bg-indigo-900" />

            <div className="flex items-center justify-between">
                {/* Extra check Box */}
                <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="font-semibold"
                    >
                        Extra Options
                    </label>
                </div>

                {/* Radio group */}
                <RadioGroup defaultValue="option-one" className="flex font-semibold">
                    Environment
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <label htmlFor="option-one">Dummy</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <label htmlFor="option-two">PDT</label>
                    </div>
                </RadioGroup>

                {/* Search button */}
                <Button className="bg-indigo-900">Search
                    <Search className="w-4 h-4 ml-2" />
                </Button>
            </div>

            <Separator className="my-4 bg-indigo-900" />
        </div>
    )
}
