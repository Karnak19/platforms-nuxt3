import { KenticoPageLayoutDTO } from "@origins-digital/types/ott";

export default defineEventHandler(async ({ res, context }) => {
  const page = await $fetch<KenticoPageLayoutDTO>(
    `https://dev-cms-service.onrewind.tv/ott/kentico/pages/${context.params.codename}`,
    {
      headers: {
        "x-account-key": useRuntimeConfig().xAccountKey,
      },
    }
  );

  return page;
});
