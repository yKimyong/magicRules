
function main(config) {
  const baseUrl =
    "https://raw.githubusercontent.com/yKimyong/magicRules/main";

 const groups = (config["proxy-groups"] || [])
  .map(group => group.name);

const preferredGroups = [
  "♻️ 自动选择",
  "🚀 节点选择",
  "PROXY",
  "Proxy",
  "节点选择",
  "自动选择"
];

const proxyGroup =
  preferredGroups.find(name => groups.includes(name)) ||
  groups[0];

if (!proxyGroup) {
  throw new Error("当前订阅不存在可用的代理组");
}

const providers = [
  ["custom-direct", "direct.yaml", "DIRECT"],
  ["custom-proxy", "proxy.yaml", proxyGroup],
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
