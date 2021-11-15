import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const AnalyticsChart = () => {
	//use Effect is waiting chart.js to change and it will for a re-render
	useEffect(() => {
		//chart.js boiler plate also you can passed in any API calls
		const canvas = document.getElementById('chart').getContext('2d');
		window.myLine = new Chart(canvas, {
			type: 'bar',
			data: {//passing the static data of the months 
				labels: ['November 14', 'November 15', 'November 16', 'November 17', 'November 18'],
				datasets: [
					{
						label: 'Death',
						data: [0, 5, 2, 0, 3],//data will assing its values to the array of static data
						backgroundColor: '#f87171',
						borderColor: '#f87171',
					},
					{
						label: 'Active',
						data: [7, 5, 3, 5, 3],
						backgroundColor: '#6ee7b7',
						borderColor: '#6ee7b7',
					},
					{
						label: 'Recovered',
						data: [0, 5, 7, 10, 0],
						backgroundColor: '#93c5fd',
						borderColor: '#93c5fd',
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
        //adding a header to the top of the chart
				title: {
					text: 'Covid Chart',
					display: true,
					fontSize: '20',
					fontColor: 'white',
				},
				legend: {
					align: 'end',
					position: 'top',
					labels: {
						fontColor: 'white',
					},
				},
        //adding color to the months 
				scales: {
					xAxes: [
						{
							ticks: {
								fontColor: 'white',
							},
						},
					],
          //adding color to the numbers
					yAxes: [
						{
							ticks: {
								fontColor: 'white',
								callback: (tick, index, array) => {
									//added logic to only show odd numbers
									return index % 2 === 0 ? tick : '';
								},
							},
							//added dash line to the chart
							gridLines: {
								borderDash: [3],
								borderDashOffset: [10],
								color: 'rgba(255,255,255,0.3)',
								zeroLineColor: 'rgba(255,255,255,0.3)',
							},
						},
					],
				},
			},
		});
	}, []);

	return (
		<div className="w-11/12 xl:w-6/12 2xl:w-8/12 bg-gray-900 sm:ml-2 mt-10 xl:mt-0 h-96">
			<canvas id="chart" className="h-96" />
		</div>
	);
};

export default AnalyticsChart;
