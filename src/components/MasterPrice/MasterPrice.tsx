import DataTable from "../DataTable";
import FlightSearchForm from "../FlightSearchForm";

export default function MasterPrice() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Master Price</h1>
            {/* Form */}
            <FlightSearchForm />

            {/* Data */}
            <DataTable />
        </div>
    )
}
