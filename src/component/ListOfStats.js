import React from 'react';
import { report, labelColor } from '../staticData';
import StatCard from './StatCard';

//this functional component will loop over the array of stats
const ListOfStats = () => {
	return (
		<div className="w-11/12 sm:w-auto mt-10 grid  sm:grid-cols-2 gap-2">
			{report.cases.map((stat, index) => {
				return <StatCard stat={stat} key={index} labelColor={labelColor[index]} />;
			})}
		</div>
	);
};

export default ListOfStats;
