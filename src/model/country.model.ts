// Required properties

export interface Country {
  name: {
    common: string;
    official: string;
  };
  currencies: {
    [key: string]: { name: string; symbol: string };
  };
  population: number;
  capital: [string];
  flags: [string];
}
