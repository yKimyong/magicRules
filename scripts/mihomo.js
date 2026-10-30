
function main(config) {
  const baseUrl =
    "https://raw.githubusercontent.com/yKimyong/magicRules/main";

  const providers = [
    ["custom-direct", "direct.yaml", "DIRECT"],
    ["custom-proxy", "proxy.yaml", "♻️ 自动选择"],
    ["custom-reject", "reject.yaml", "REJECT"]
  ];

  config["rule-providers"] ||= {};

  const rules = [];

  for (const [name, file, group] of providers) {
    config["rule-providers"][name] = {
      type: "http",
      behavior: "classical",
      format: "yaml",
      url: `${baseUrl}/${file}`,
      interval: 3600
    };

    rules.push(`RULE-SET,${name},${group}`);
  }

  config.rules = [
    ...rules,
    ...(config.rules || [])
  ];

  return config;
}
