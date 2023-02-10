import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
import { collection, getDoc, getFirestore, getDocs, query, orderBy, doc, where, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyBqegR8sj4De8TK2YLCAM3VWT2j-ilmvho',
  authDomain: 'tugas-akhir-4871c.firebaseapp.com',
  projectId: 'tugas-akhir-4871c',
  storageBucket: 'tugas-akhir-4871c.appspot.com',
  messagingSenderId: '7131296116',
  appId: '1:7131296116:web:f484270ae02a79ca697c21',
  measurementId: 'G-TFPTTCBQDV'
})

const db = getFirestore(app);
const storage = getStorage(app);

async function ShopItemFetch(itemId) {
  var itemFetches;

  if (arguments.length === 0) {
    itemFetches = getDocs(query(collection(db, 'shopItems'), orderBy('createdAt', 'desc')))
      .then((snapshot) => {
        let itemsData = [];
        snapshot.docs.forEach((doc) => {
          itemsData.push({ ...doc.data(), id: doc.id })
        });
        return itemsData;
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  else {
    itemFetches = [];
    const itemSnap = await getDoc(doc(db, 'shopItems', itemId));

    if (itemSnap.exists()) {
      console.log(itemSnap.data())
      itemFetches.push(itemSnap.data())
    }
    else {
      alert('No such document!');
    }
  }

  return itemFetches;
}

function AddToCart(item_name, item_price, item_quantity, userId) {
  setDoc(doc(collection(db, 'usersCollection', userId, 'userCart')), {
    p_name: item_name,
    price: item_price,
    quantity: item_quantity
  })
};

async function UserAuth(userName, passWord) {
  const auth = getDocs(query(collection(db, 'usersCollection'), where('username', '==', userName)))
    .then((snapshot) => {
      let authResult = [];
      snapshot.docs.forEach((doc) => {
        if (doc.data().password === passWord) {
          // console.log('success');
          if (doc.data().role === '0') {
            authResult.push({ status: 'admin', usernm: userName, id: doc.id })
          } else {
            authResult.push({ status: 'success', usernm: userName, id: doc.id })
          }
        }
        else {
          // console.log('failed');
          authResult.push({ status: 'failed' })
        }
      });
      return authResult;
    })
    .catch(err => {
      console.log(err.message)
    });

  // console.log(auth);
  return auth;
}

async function CartItems(userId) {
  const cart = getDocs(collection(db, 'usersCollection', userId, 'userCart'))
    .then((snapshot) => {
      let cartsResult = [];
      snapshot.docs.forEach((doc) => {
        cartsResult.push({ ...doc.data(), id: doc.id })
      });
      return cartsResult;
    })
    .catch(err => {
      console.log(err.message)
    });

  // console.log(cart);
  return cart;
}

async function UserData(userId) {
  var userFetches;

  if (arguments.length === 0) {
    userFetches = getDocs(collection(db, 'usersCollection'))
      .then((snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id })
        });
        return users;
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  else {
    userFetches = [];
    const userSnap = await getDoc(doc(db, 'usersCollection', userId));

    if (userSnap.exists()) {
      userFetches.push(userSnap.data())
    }
    else {
      alert('No such document!');
    }
  }

  return userFetches;
}

async function UserAdd(nAme, userName, eMail, phoneNum, addRess, passWord) {
  await setDoc(doc(collection(db, 'usersCollection')), {
    name: nAme,
    username: userName,
    email: eMail,
    number: phoneNum,
    address: addRess,
    password: passWord,
    role: '1'
  })
}

function UserDelete(userId) {
  const userCartRef = collection(db, 'usersCollection', userId, 'userCart');
  const userTransRef = collection(db, 'usersCollection', userId, 'transaction');

  if (userCartRef) {
    getDocs(userCartRef)
      .then((snapshot) => {
        snapshot.docs.forEach((userDoc) => {
          deleteDoc(doc(db, 'userCart', userDoc.id));
        })
      });
  }

  if (userTransRef) {
    getDocs(userTransRef)
      .then((snapshot) => {
        snapshot.docs.forEach((userDoc) => {
          deleteDoc(doc(db, 'transaction', userDoc.id));
        })
      });
  }

  deleteDoc(doc(db, 'usersCollection', userId));
}

function UserUpdate(userId, nAme, userName, eMail, phoneNum, addRess, passWord) {
  setDoc(doc(db, 'usersCollection', userId), {
    name: nAme,
    username: userName,
    email: eMail,
    number: phoneNum,
    address: addRess,
    password: passWord
  })
}

function ItemAdd(itemName, dEsc, pRice, caTegory, imageURL) {
  setDoc(doc(collection(db, 'shopItems')), {
    item_nm: itemName,
    item_desc: dEsc,
    item_price: pRice,
    item_pic: imageURL,
    category: caTegory,
    createdAt: serverTimestamp()
  })
}

function ItemUpdate(itemId, itemName, dEsc, pRice, caTegory, imageURL) {
  setDoc(doc(db, 'shopItems', itemId), {
    item_nm: itemName,
    item_desc: dEsc,
    item_price: pRice,
    item_pic: imageURL,
    category: caTegory
  })
}

function ItemDelete(itemId) {
  deleteDoc(doc(db, 'shopItems', itemId));
}

export { ShopItemFetch, UserAuth, CartItems, AddToCart, UserData, UserAdd, ItemAdd, UserDelete, ItemDelete, UserUpdate, ItemUpdate, storage };
