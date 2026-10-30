# magicRules


个人维护的 Mihomo 远程分流规则集，适用于 Clash Verge Rev、FlClash 等兼容 Mihomo 的客户端。

## 规则集

| 文件 | 策略 | 说明 |
|---|---|---|
| `direct.yaml` | DIRECT | 指定域名直连 |
| `proxy.yaml` | ♻️ 自动选择 | 指定域名使用代理 |
| `reject.yaml` | REJECT | 拦截指定域名 |

规则使用 Mihomo Classical 格式。

## 使用方法

### Clash Verge Rev

1. 进入「订阅 → 全局扩展脚本」。
2. 复制 [`scripts/mihomo.js`](./scripts/mihomo.js) 的内容。
3. 保存并应用配置。
4. 在「规则 → 规则集合」中确认三个远程规则集加载成功。

### FlClash

1. 进入当前订阅的扩展设置。
2. 切换到「脚本模式」。
3. 复制 `scripts/mihomo.js` 的内容并保存。
4. 检查规则集合是否加载成功。

如果客户端的脚本入口要求不同，需要调整导出函数格式。

## 更新规则

直接修改 GitHub 上对应的 YAML 文件并提交。

Mihomo 每隔 3600 秒检查一次远程规则集更新，无须手动重新配置客户端。

## 注意事项

- 自定义规则优先于机场订阅原有规则。
- 规则按照 DIRECT → PROXY → REJECT 的顺序匹配。
- 策略组名称必须与当前订阅一致。
- 请勿在公开仓库中提交订阅密钥、访问令牌或其他敏感信息。

## License

MIT
