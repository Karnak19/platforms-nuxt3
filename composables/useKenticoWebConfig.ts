import { InitConfig } from "@origins-digital/types/ott";

export const useKenticoWebConfig = (
  xAccountKey = useRuntimeConfig().xAccountKey
) =>
  useFetch<InitConfig>(
    `https://dev-cms-service.onrewind.tv/ott/kentico/config`,
    {
      headers: {
        "x-account-key": xAccountKey,
      },
    }
  );
