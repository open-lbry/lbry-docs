---
title: FAQ
description: Frequently asked questions about the LBRY network and its applications.
---

Frequently asked questions about the LBRY network and its applications.

## LBRY Desktop

### How to set custom hub?

https://tech.lbry.nu/resources/daemon-settings

Edit daemon_settings.yml file in LBRY app data directory (`~/Library/Application Support/LBRY` for MacOS, `%localappdata%\lbry\lbrynet` for Windows, `~/.local/share/lbry/lbrynet` for Linux) by adding following content,

```yaml
lbryum_servers:
  - hub.lbry.grin.io:50001
  - s1.lbry.network:50001
  - a-hub1.odysee.com:50001
  - b-hub1.odysee.com:50001
  - c-hub1.odysee.com:50001
  - s-hub1.odysee.com:50001
```


