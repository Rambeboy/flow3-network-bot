import 'fs';
import _0x1cd558 from 'chalk';
import _0x20aa8f from './src/main/flow3bot.js';
import { getRandomProxy, loadProxies } from './src/main/proxy.js';
import { logMessage } from './src/utils/logger.js';
import { privateKey } from './accounts/accounts.js';
async function main() {
  console.log();
  console.log("FLOW3 NETWORK BOT");
  console.log("AUTHOR : NOFAN RAMBE");
  console.log("WELCOME & ENJOY SIR!");
  console.log();
  try {
    const _0x28a8c6 = accounts.length;
    const _0x69c793 = loadProxies();
    if (!_0x69c793) {
      logMessage(null, null, "Failed to load proxies, using default IP", "error");
    }
    const _0x144baa = await Promise.all(accounts.map(async (_0xb73a13, _0xfb779) => {
      const _0x53c852 = await getRandomProxy();
      return new _0x20aa8f(_0xb73a13, _0x53c852, _0xfb779 + 0x1, _0x28a8c6);
    }));
    while (true) {
      logMessage(null, null, "Starting new process, Please wait...", 'process');
      try {
        const _0x27ee6c = await Promise.all(_0x144baa.map(async _0x572bf7 => {
          try {
            console.log(_0x1cd558.white('-'.repeat(0x55)));
            const _0x537ec3 = await _0x572bf7.processKeepAlive();
            return {
              'points': {
                'total': _0x537ec3.points.total || 0x0,
                'today': _0x537ec3.points.today || 0x0
              },
              'keepAlive': _0x537ec3.keepAlive || false,
              'proxy': _0x572bf7.proxy || "N/A"
            };
          } catch (_0xaf70a3) {
            logMessage(null, null, "Failed to process account: " + _0xaf70a3.message, 'error');
            return {
              'points': {
                'total': 0x0,
                'today': 0x0
              },
              'keepAlive': false,
              'proxy': "N/A"
            };
          }
        }));
        console.log("\n" + '═'.repeat(0x46));
        _0x27ee6c.forEach(_0x2a6e73 => {
          logMessage(null, null, "Today Points: " + _0x2a6e73.points.today, "success");
          logMessage(null, null, "Total Points: " + _0x2a6e73.points.total, "success");
          const _0x1f250f = _0x2a6e73.keepAlive ? _0x1cd558.green("✔ Sharing Bandwidth Success") : _0x1cd558.red("✖ Sharing Bandwidth Failed");
          logMessage(null, null, "Sharing Bandwidth: " + _0x1f250f, "success");
          logMessage(null, null, "Proxy: " + _0x2a6e73.proxy, 'success');
          console.log('─'.repeat(0x46));
        });
        logMessage(null, null, "Process completed, waiting for 1 minute before starting new sharing bandwidth", "success");
        await new Promise(_0x4362fe => setTimeout(_0x4362fe, 0xea60));
      } catch (_0x3f2597) {
        logMessage(null, null, "Main process failed: " + _0x3f2597.message, "error");
      }
    }
  } catch (_0x406cd8) {
    logMessage(null, null, "Main process failed: " + _0x406cd8.message, "error");
  }
}
main();
