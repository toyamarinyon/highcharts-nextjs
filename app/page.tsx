"use client";

import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import "highcharts/es-modules/Series/Sankey/SankeySeries.js";
import "highcharts/css/highcharts.css";
import React, { useMemo, useRef } from "react";
import "./page.css";
import { apiDataToSankeyData, data } from "./data";

// The integration exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

export default function Page() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options = useMemo<Highcharts.Options>(() => {
    const sankeyData = apiDataToSankeyData(data);
    console.log("???");
    console.log(sankeyData);

    return {
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
      series: sankeyData,
    };
  }, []);

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
