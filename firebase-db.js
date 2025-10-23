// Firebase 初期化
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Firestoreを使う場合

// データを書き込む例（商品追加）
function addProduct(name, price) {
  db.collection("products").add({
    name: name,
    price: price
  }).then(() => {
    alert("商品を追加しました！");
  }).catch(error => {
    console.error(error);
  });
}
