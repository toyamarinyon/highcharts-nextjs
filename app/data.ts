import type { SeriesSankeyOptions } from "highcharts";

interface Resource {
  id: string;
  name: string;
}
interface Target {
  id: string;
  name: string;
}
interface Flow {
  resource: Resource;
  target: Target;
  value: number;
}
interface FlowGroup {
  type: string;
  flows: Flow[];
}

export function apiDataToSankeyData(
  flowGroups: FlowGroup[],
): SeriesSankeyOptions[] {
  const nodes: SeriesSankeyOptions["nodes"] = [];
  const data: SeriesSankeyOptions["data"] = [];
  let column = 0;
  for (const flowGroup of flowGroups) {
    for (const flow of flowGroup.flows) {
      if (!nodes.some((node) => node.id === flow.resource.id)) {
        nodes.push({
          id: flow.resource.id,
          name: flow.resource.name,
          colorIndex: column === 0 ? 0 : 1,
          column,
        });
      }
      data.push([
        flow.resource.id,
        flow.target.id,
        flow.value < 1 ? 1 : flow.value,
      ]);
    }
    column += 1;
  }
  return [
    {
      type: "sankey",
      keys: ["from", "to", "weight"],
      nodes,
      data,
    },
  ];
}

export const data: FlowGroup[] = [
  {
    type: "landing",
    flows: [
      {
        resource: {
          id: "軽作業 きつい",
          name: "軽作業 きつい",
        },
        target: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
        },
        value: 511,
      },
      {
        resource: {
          id: "軽作業 きつい",
          name: "軽作業 きつい",
        },
        target: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo",
        },
        value: 15,
      },
    ],
  },
  {
    type: "research",
    flows: [
      {
        resource: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo",
        },
        target: {
          id: "https://www.shigotomo.jp/zenkoku/MC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1",
        },
        value: 3.582089552238806,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo",
        },
        target: {
          id: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
        },
        value: 7.835820895522387,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo",
        },
        target: {
          id: "https://www.shigotomo.jp/apply/535",
          name: "https://www.shigotomo.jp/apply/535",
        },
        value: 0.22388059701492538,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
        },
        target: {
          id: "https://www.shigotomo.jp/zenkoku/MC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1",
        },
        value: 55.03076923076923,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
        },
        target: {
          id: "https://www.shigotomo.jp/apply/535",
          name: "https://www.shigotomo.jp/apply/535",
        },
        value: 11.792307692307693,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
          name: "https://www.shigotomo.jp/contents/articles/keisagyo-haken-hard",
        },
        target: {
          id: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
        },
        value: 137.57692307692307,
      },
    ],
  },
  {
    type: "evaluation",
    flows: [
      {
        resource: {
          id: "https://www.shigotomo.jp/zenkoku/MC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1",
        },
        target: {
          id: "https://www.shigotomo.jp/kyujin/search-detail",
          name: "https://www.shigotomo.jp/kyujin/search-detail",
        },
        value: 19.290307953901376,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/zenkoku/MC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1",
        },
        target: {
          id: "https://www.shigotomo.jp/kyujin/16312",
          name: "https://www.shigotomo.jp/kyujin/16312",
        },
        value: 1.4838698426077983,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
        },
        target: {
          id: "https://www.shigotomo.jp/kyujin/search-detail",
          name: "https://www.shigotomo.jp/kyujin/search-detail",
        },
        value: 21.046581364432893,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
          name: "https://www.shigotomo.jp/zenkoku/MC1/EC1",
        },
        target: {
          id: "https://www.shigotomo.jp/kyujin/16981",
          name: "https://www.shigotomo.jp/kyujin/16981",
        },
        value: 1.9133255785848082,
      },
    ],
  },
  {
    type: "decision",
    flows: [
      {
        resource: {
          id: "https://www.shigotomo.jp/kyujin/16312",
          name: "https://www.shigotomo.jp/kyujin/16312",
        },
        target: {
          id: "https://www.shigotomo.jp/apply/16312",
          name: "https://www.shigotomo.jp/apply/16312",
        },
        value: 0.24731164043463305,
      },
    ],
  },
  {
    type: "mcv1",
    flows: [
      {
        resource: {
          id: "https://www.shigotomo.jp/apply/535",
          name: "https://www.shigotomo.jp/apply/535",
        },
        target: {
          id: "https://www.shigotomo.jp/apply/confirm",
          name: "https://www.shigotomo.jp/apply/confirm",
        },
        value: 11.663381379273423,
      },
      {
        resource: {
          id: "https://www.shigotomo.jp/apply/16312",
          name: "https://www.shigotomo.jp/apply/16312",
        },
        target: {
          id: "https://www.shigotomo.jp/apply/confirm",
          name: "https://www.shigotomo.jp/apply/confirm",
        },
        value: 0.24731164043463305,
      },
    ],
  },
  {
    type: "mcv2",
    flows: [
      {
        resource: {
          id: "https://www.shigotomo.jp/apply/confirm",
          name: "https://www.shigotomo.jp/apply/confirm",
        },
        target: {
          id: "https://www.shigotomo.jp/apply/complete",
          name: "https://www.shigotomo.jp/apply/complete",
        },
        value: 10.562848068103213,
      },
    ],
  },
];
