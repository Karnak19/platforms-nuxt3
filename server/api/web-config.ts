import { InitConfig } from "@origins-digital/types/ott";

export default defineEventHandler(async () => {
  const config = await $fetch<InitConfig>(
    `https://dev-cms-service.onrewind.tv/ott/kentico/config`,
    {
      headers: {
        "x-account-key": useRuntimeConfig().xAccountKey,
      },
    }
  );

  return config;
});
