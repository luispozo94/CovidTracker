import React from 'react';
import AnalyticsChart from './component/AnalyticsChart'
import ListOfStats from './component/ListOfStats'
import Navbar from './component/Navbar'

//app is lifting the stats,chart and navbar state 
const App = () => {
	return (
		<div className="font-inter bg-gray-900 min-h-screen pb-36">
			<Navbar />
			<div
				className="w-full flex items-center justify-center flex-col xl:flex-row mt-20"
				style={{
					minHeight: '70vh',
				}}
			>
				<ListOfStats />
				<AnalyticsChart />
			</div>
		</div>
	);
};

export default App;
