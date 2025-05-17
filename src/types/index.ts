
export type AgeGroup = "18–30" | "31–60" | "60+";
export type PortfolioSize = "<30K" | "30K–100K" | "100K–300K" | ">300K";
export type YearlyDeposit = "<5K" | "5K–20K" | "20K–100K" | ">100K" | "Not Sure";
export type TradingStyle = "Day trading" | "Swing trading" | "Long-term" | "Passive";
export type AssetType = "Stocks" | "Bonds" | "ETFs" | "Crypto" | "Forex";
export type PreferredExchange = "Israeli" | "US" | "Both";

export interface FormData {
  age_group: AgeGroup | null;
  portfolio_size: PortfolioSize | null;
  yearly_deposit: YearlyDeposit | null;
  trading_style: TradingStyle[];
  asset_types: AssetType[];
  preferred_exchange: PreferredExchange | null;
}

export interface Recommendation {
  Recommended_Platform: string;
  Reasoning: string;
  Alternative_Options: {
    Most_Affordable_Platform: string;
    Most_Accessible_Platform: string;
  };
}
