import { KenticoPageLayoutDTO } from "@origins-digital/types/ott";

export const useKenticoPage = (
  codename: string,
  xAccountKey = useRuntimeConfig().xAccountKey
) =>
  useFetch<KenticoPageLayoutDTO>(
    `https://dev-cms-service.onrewind.tv/ott/kentico/pages/${codename}`,
    {
      headers: {
        "x-account-key": xAccountKey,
      },
    }
  );
