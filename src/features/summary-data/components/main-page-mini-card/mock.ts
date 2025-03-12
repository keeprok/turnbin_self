export const smpMockData = {
	value: 3.13,
	unit: 1,
	amount: 0,
	isIncreased: false,
}
export const recMockData = {
	value: 2.13,
	unit: 1,
	amount: 0,
	isIncreased: false,
}
export const elcMockData = {
	value: 1.13,
	unit: 1,
	amount: 0,
	isIncreased: false,
}
export type TRECData = {
	_id: string
	date: string
	trade_volume: number
	average_price: number
	highest_price: number
	lowest_price: number
	closing_price: number
}

export type TSMPData = {
	_id: string
	date: string
	Land: number
	Jeju: number
	scraped_date: string
}
export type TElcGen = {
	_id: string
	date: string
	region: string
	time: string
	generation_kw: number
	cumulative_generation_kwh: number
	solar_radiation_w_m2: number
	temperature_c: number
	wind_speed_m_s: number
}
