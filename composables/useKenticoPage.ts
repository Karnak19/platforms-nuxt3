import { KenticoPageLayoutDTO } from "@origins-digital/types/ott";

export const useKenticoPage = (codename: string) =>
  useFetch<KenticoPageLayoutDTO>(`/api/page/${codename}`, {
    pick: ["components"],
  });
