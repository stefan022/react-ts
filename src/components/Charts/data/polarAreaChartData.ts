import { IApexCharts } from "../../../ts/interfaces/ICharts/IApexCharts";

export const polarAreaChartData: IApexCharts<number[]> = {
	series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
	options: {
		chart: {
			type: "polarArea",
		},
		stroke: {
			colors: ["#fff"],
		},
		fill: {
			opacity: 0.8,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	},
};
