const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Lakshitha-1629/1629/blob/main/logo/alive.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "╔══════════════════════════════════╗
        ☠️ 𝗡𝗢𝗠𝗘𝗥𝗖𝗬 – 𝗠𝗗 ☠️
           SYSTEM STATUS
╚══════════════════════════════════╝

🤖 BOT NAME   : NoMercy-MD
👑 OWNER      : Lakshitha
⚙ VERSION    : V1
🛡 MODE       : PRIVATE

━━━━━━━━━━━━━━━━━━━━
⚡ SYSTEM ONLINE
💀 ALL MODULES ACTIVE
🔥 READY TO EXECUTE COMMANDS
━━━━━━━━━━━━━━━━━━━━

🧠 AI SYSTEM : ACTIVE
📡 SERVER    : CONNECTED
🔐 SECURITY  : ENABLED

☠️ NO MERCY | NO LIMIT | NO FEAR
💀 OUT OF METRIX CYBER TEAM",
BOT_OWNER: '94751593021',  // Replace with the owner's phone number



};
