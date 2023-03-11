import React from 'react'
import { useSelector } from 'react-redux'
import DestinationSingle from './DestinationSingle'
const DestinationList = () => {
    const state = useSelector((state) => state)
    return (
        <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">className</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {state.length && state.map((data) =>(
                        <DestinationSingle key={data.id} data={data}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DestinationList