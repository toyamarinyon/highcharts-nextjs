"use client";

import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import "highcharts/es-modules/Series/Sankey/SankeySeries.js";
import "highcharts/css/highcharts.css";
import React, { useRef } from "react";
import "./page.css";

// The integration exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

const options: Highcharts.Options = {
	chart: {
		styledMode: true,
		className: "highcharts-light",
	},
	plotOptions: {
		sankey: {
			colorByPoint: true,
			curveFactor: 0,
			linkOpacity: 0.2,
			nodePadding: 30,
			dataLabels: {
				align: "left",
				verticalAlign: "top",
				nodeFormat: "{point.name}<br /><strong>{point.sum}</strong>",
				x: 20,
			},
		},
	},
	title: {
		text: undefined,
	},
	series: [
		{
			type: "sankey",
			keys: ["from", "to", "weight"],
			nodes: [
				{
					id: "root",
					name: "SEO 対策 上位",
					colorIndex: 0,
					column: 0,
				},
				{
					id: "gather-1",
					name: "記事タイトル1",
					colorIndex: 1,
					column: 1,
				},
				{
					id: "gather-2",
					name: "記事タイトル2",
					colorIndex: 1,
					column: 1,
				},
				{
					id: "comparison-1",
					name: "記事タイトル3",
					colorIndex: 1,
					column: 2,
				},
				{
					id: "comparison-2",
					name: "記事タイトル4",
					colorIndex: 1,
					column: 2,
				},
				{
					id: "comparison-3",
					name: "記事タイトル5",
					colorIndex: 1,
					column: 2,
				},
				{
					id: "comparison-4",
					name: "記事タイトル6",
					colorIndex: 1,
					column: 2,
				},
				{
					id: "comparison-5",
					name: "記事タイトル7",
					colorIndex: 1,
					column: 2,
				},
				{
					id: "decision-1",
					name: "記事タイトル8",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "decision-2",
					name: "記事タイトル9",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "decision-3",
					name: "記事タイトル10",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "decision-4",
					name: "記事タイトル11",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "decision-5",
					name: "記事タイトル12",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "decision-6",
					name: "記事タイトル13",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "decision-7",
					name: "記事タイトル14",
					colorIndex: 1,
					column: 3,
				},
				{
					id: "dummy-1",
					colorIndex: 1,
					column: 4,
					dataLabels: [
						{
							nodeFormat: "h",
						},
					],
					level: 4,
				},
				{
					id: "dummy-2",
					colorIndex: 1,
					column: 4,
				},
				{
					id: "dummy-3",
					colorIndex: 1,
					column: 4,
				},
				{
					id: "dummy-4",
					colorIndex: 1,
					column: 4,
				},
				{
					id: "dummy-5",
					colorIndex: 1,
					column: 4,
				},
				{
					id: "dummy-6",
					colorIndex: 1,
					column: 4,
				},
				{
					id: "dummy-7",
					colorIndex: 1,
					column: 4,
				},
			],
			data: [
				["root", "gather-1", 200],
				["root", "gather-2", 100],
				["gather-1", "comparison-1", 50],
				["gather-1", "comparison-2", 30],
				["gather-1", "comparison-3", 30],
				["gather-2", "comparison-4", 50],
				["gather-2", "comparison-5", 30],
				["gather-2", "comparison-1", 30],
				["comparison-1", "decision-1", 18],
				["comparison-1", "decision-2", 18],
				["comparison-2", "decision-3", 18],
				["comparison-2", "decision-4", 1],
				["comparison-2", "decision-2", 18],
				["root", "decision-5", 18],
				["comparison-4", "decision-6", 18],
				["comparison-4", "decision-5", 18],
				["comparison-5", "decision-6", 18],
				["comparison-5", "decision-7", 1],
			],
		},
	],
};

export default function Page() {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	return (
		<div>
			<nav className="flex items-center justify-between w-full px-[10px] bg-[#FBF8FF] h-[32px] border-b border-[#999999]">
				<div className="flex items-center w-full text-[12px] text-[#4976E6] font-bold">
					<div className="flex items-center flex-1">
						<div className="flex-1">流入キーワード</div>
						<div className="flex-1">情報収集ページ</div>
						<div className="flex-1">評価検討ページ</div>
						<div className="w-[20px] relative h-full flex">
							<div className="absolute right-0 -translate-y-[50%] w-[100px] text-right">
								意思決定ページ
							</div>
						</div>
					</div>
					<div className="w-[190px] text-center">
						<button type="button">CVを追加する</button>
					</div>
				</div>
			</nav>
			<div className="flex h-[400px]">
				<div className="flex-1 h-full">
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						ref={chartComponentRef}
					/>
				</div>
				<div className="w-[190px] flex items-center justify-center p-[24px]">
					<div className="border-dotted border-[#999999] border-[3px] h-full w-full bg-[#EBEBEB] flex items-center justify-center rounded-[4px]">
						<button
							type="button"
							className="border-[2px] border-[#4976E6] rounded-[4px] h-[40px] px-[16px] bg-[#FFFFFF] text-[#4976E6] cursor-pointer"
						>
							CVを追加
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
