import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1jfgNr3QmLU4Gc5yAOpa0TP-vrs__ihOirNFqwgT-OFM");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
