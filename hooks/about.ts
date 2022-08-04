import useSWR from "swr";
import { TAboutData } from "../lib/db";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAboutData = () => {
  const { data, error } = useSWR<TAboutData>("/api/about", fetcher);

  return { data, error };
};
