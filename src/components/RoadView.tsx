import React from "react";
import { useDrop } from "react-dnd";
import { Road } from "../models/road";
import { ItemTypes, roadWidth } from "../utils/constants";
import { getRoadPos } from "../utils/position_utils";

interface RoadViewProps {
	road: Road;
	totalRoads: number;
	moveCar: (carId: number) => void;
}

function RoadView({ road, totalRoads, moveCar }: RoadViewProps) {
	const { id, dir } = road;
	const [, drop] = useDrop(() => ({
		accept: ItemTypes.CAR,
		drop: (item: { id: number }) => {
			moveCar(item.id);
		},
	}));
	return (
		<div
			style={{ ...getRoadPos(dir, totalRoads, id), height: `${roadWidth}px` }}
			className='bg-gray-300 border-y-2 border-gray-500 absolute'
			ref={drop}
		>
			road {id}
		</div>
	);
}

export default RoadView;
