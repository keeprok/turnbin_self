import type { AxisDomainItem } from "recharts/types/util/types"

import type { ChartConfig } from "@/shadcn/components/chart"

type TChartData = {
	date: string
	smp?: number
	rec?: number
}
export type AreaChartComponentPT = {
	chartConfig: ChartConfig
	chartData: TChartData[]
	AreaDataKeyOne: string
	AreaDataKeyTwo: string
	XAixsDataKey: string

	Ymin: AxisDomainItem
	Ymax: AxisDomainItem
	// AxisDomainItem : string | number | Function | 'auto' | 'dataMin' | 'dataMax'
}
