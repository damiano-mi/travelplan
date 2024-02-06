import { useEffect, useState } from "react";
import axios from 'axios';

interface Country {
  name: {
      common: string,
      official: string,
      nativeName: {}
  },
  tld: [],
  cca2: string,
  ccn3: string,
  cca3: string,
  cioc: string,
  independent: boolean,
  status: string,
  unMember: boolean,
  currencies: {},
  idd: {
      root: string,
      suffixes: []
  },
  capital: [],
  altSpellings: [],
  region: string,
  subregion: string,
  languages: {},
  translations: {},
  latlng: [],
  landlocked: boolean,
  borders: [],
  area: number,
  demonyms: {},
  flag: string,
  maps: {googleMaps: string, openStreetMaps: string},
  population: number,
  gini: {},
  fifa: string,
  car: {},
  timezones: [],
  continents: [],
  flags: {
      png: string,
      svg: string,
      alt: string
  },
  coatOfArms: {},
  startOfWeek: string,
  capitalInfo: {},
  postalCode: {}
}

export default function useFetch(url : string) {

  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      let isCurrent = true;
      try {
        const response = await axios.get(url);
        const countries = response.data as Country[];
        if(isCurrent)
          setData(countries);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
      return () => {isCurrent = false;}
    };
    fetchCountries();
  }, [url]);
  return {data,isLoading,error};
}
