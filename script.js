// ⚠️本番用のSquareアプリIDとロケーションIDを入れる
const appId = "sandbox-sq0idb-Ow_WlGnFBwEArzEzFZkaDA";
const locationId = "LTG05NC9J2PK2";

async function initializeCard(payments) {
  const card = await payments.card();
  await card.attach("#card-container");
  return card;
}

document.addEventListener("DOMContentLoaded", async function () {
  if (!window.Square) {
    alert("Square SDKが読み込めませんでした");
    return;
  }

  const payments = window.Square.payments(appId, locationId);
  const card = await initializeCard(payments);

  const payButton = document.getElementById("pay-button");
  if (payButton) {
    payButton.addEventListener("click", async () => {
      const result = await card.tokenize();
      if (result.status === "OK") {
        alert("決済完了しました！");
        window.location.href = "success.html";
      } else {
        alert("エラーが発生しました。");
      }
    });
  }
});
