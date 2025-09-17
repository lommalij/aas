export default async function handler(req, res) {
  const { offer_id, click_id, payout, country, status, ip } = req.query;
  
  const BOT_TOKEN = "8336394759:AAGNthyfT0kKc5OJVtzM2t-Bzx8IV3LA2qo";
  const CHAT_ID = "-1002969579542";
  
  const message = `
🔥 <b>New Conversion Alert</b> 🔥

📌 Offer ID: <b>${offer_id}</b>
🆔 Click ID: <b>${click_id}</b>

💰 <b><span style="color:red; font-size:18px;">Payout: ${payout}</span></b>
🌍 Country: <b>${country}</b>
📊 Status: <b>${status}</b>
🔎 IP Address: <b>${ip}</b>

--------------------------
⚡ Powered by Akwa
`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML"
    })
  });

  res.status(200).json({ success: true, sent: message });
}
