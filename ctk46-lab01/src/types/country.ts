export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  capital?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  area: number;
  maps: {
    googleMaps: string;
  };
}
