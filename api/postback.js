export default async function handler(req, res) {
  try {
    const { offer_id, click_id, payout, country, status, ip } = req.query;


    const BOT_TOKEN = "8205003880:AAHSOeGarrCXe4azkPvBdSH9wY4wKZaBPNk";
    const CHAT_ID = "-1002730571635";

    // ✅ رسالة منسقة بالـ HTML
    const message = `
🔥 <b>New Conversion Alert</b> 🔥

📌 Offer ID: <b>${offer_id || "N/A"}</b>

🆔 Click ID: <b>${click_id || "N/A"}</b>

💰 🔴 <b>PAYOUT: ${payout || "0.00"}</b>

🌍 Country: <b>${country || "N/A"}</b>

📊 Status: <b>${status || "N/A"}</b>

🔎 IP Address: <b>${ip || "N/A"}</b>

--------------------------
⚡ Powered by Akwa
`;

    // ✅ إرسال الرسالة لتليجرام
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML"
      })
    });

    const data = await response.json();

    res.status(200).json({ success: true, telegram: data });
  } catch (error) {
    console.error("Postback error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
