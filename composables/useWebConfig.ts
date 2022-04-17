import { InitConfig } from "@origins-digital/types/ott";

export const useWebConfig = () => {
  const config = useState<InitConfig>("webConfig");

  const setConfig = (newConfig: InitConfig) => {
    config.value = newConfig;
  };

  return { config, setConfig };
};
