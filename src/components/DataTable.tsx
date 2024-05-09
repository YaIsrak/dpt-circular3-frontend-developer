import {
    Table, TableBody, TableCell, TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { DataType } from '../../Type.typing'



export default function DataTable() {
    const [data, setData] = useState<DataType>()

    useEffect(() => {
        const fetchData = async () => {
            const file = await fetch("../../data/LHR_CDG_ADT1_TYPE_1.txt")
            const text = await file.text()
            const parsedData = JSON.parse(text)
            setData(parsedData)
        }
        fetchData()
    }, [])



    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-neutral-200">
                    <TableHead>FLIGHT</TableHead>
                    <TableHead>AIRCRAFT</TableHead>
                    <TableHead>CLASS</TableHead>
                    <TableHead>FARE</TableHead>
                    <TableHead>ROUTE</TableHead>
                    <TableHead>DEPARTURE</TableHead>
                    <TableHead>ARRIVAL</TableHead>
                    <TableHead>DURATION</TableHead>
                    <TableHead>PRICE</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* TODO:Single Data */}
                {data?.flightOffer.map((flight, i) => (
                    <TableRow key={i} className="border-red-500">
                        {/* Flight */}
                        <TableCell className="p-2">
                            {flight.itineraries[0].segments.map((segment, i) => (
                                <div key={i}>{segment.carrierCode} {segment.aircraft}</div>
                            ))}
                        </TableCell>
                        {/* Aircraft */}
                        <TableCell className="p-2">
                            {flight.itineraries[0].segments.map((segment, i) => (
                                <div key={i}>{segment.flightNumber}</div>
                            ))}
                        </TableCell>
                        {/* Class */}
                        <TableCell className="p-2">
                            {flight.class[0].map((c, i) => (
                                <div key={i}>{c}</div>
                            ))}
                        </TableCell>
                        {/* Fare */}
                        <TableCell className="p-2">
                            {flight.fareBasis[0].map((fare, i) => (
                                <div key={i}>{fare}</div>
                            ))}
                        </TableCell>
                        {/* Route */}
                        <TableCell className="p-2">
                            {flight.itineraries[0].segments.map((segment, i) => (
                                <div key={i}>{segment.departure.iataCode} - {segment.arrival.iataCode}</div>
                            ))}
                        </TableCell>
                        {/* Departure */}
                        <TableCell className="p-2">
                            {flight.itineraries[0].segments.map((segment, i) => (
                                <div key={i}>{segment.departure.at}</div>
                            ))}
                        </TableCell>
                        {/* Arrival */}
                        <TableCell className="p-2">
                            {flight.itineraries[0].segments.map((segment, i) => (
                                <div key={i}>{segment.arrival.at}</div>
                            ))}
                        </TableCell>
                        {/* Duration */}
                        <TableCell className="p-2">
                            <div>{flight.itineraries[0].duration}</div>
                        </TableCell>
                        {/* Price */}
                        <TableCell className="p-2">
                            <div>{flight.price}</div>
                            <Button size={"sm"} className="bg-indigo-900">Select</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
