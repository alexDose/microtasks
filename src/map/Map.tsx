import React from "react";

type NewComponentType = {
    topCars: Array<TopCarType>
}
type TopCarType = {
    manufacturer: string
    model: string
}

export const Map = (props: NewComponentType) => {
    return (
        <table>
            {props.topCars.map((m, index) =>
                <tr key={index}>
                    <th>{m.manufacturer}</th>
                    <th>{m.model}</th>
                </tr>
            )}
        </table>
    )
}