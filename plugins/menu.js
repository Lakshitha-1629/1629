const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    desc: "Unlocks the control panel of NoMercy-MD — every command, every power, zero mercy.",
    category: "main",
    filename: __filename,
  },
  async (
    Lakshitha,
    mek,
    m,
    {
      from,
      reply
    }
  ) => {
    try {
      const categories = {};

      for (let cmdName in commands) {
        const cmdData = commands[cmdName];
        const cat = cmdData.category?.toLowerCase() || "other";
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push({
          pattern: cmdData.pattern,
          desc: cmdData.desc || "No description"
        });
      }

      let menuText = "💀 *NoMercy-MD Control Panel* 💀\n⚠️ Unauthorized access denied\n\n";

      for (const [cat, cmds] of Object.entries(categories)) {
        menuText += `\n📂 *${cat.toUpperCase()}*\n`;
        cmds.forEach(c => {
          menuText += `- .${c.pattern} : ${c.desc}\n`;
        });
      }

      await reply(menuText.trim());
    } catch (err) {
      console.error(err);
      reply("❌ Error generating menu.");
    }
  }
);
