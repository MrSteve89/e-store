import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
    .collection('users')
    .doc('pW6zynHOLfJjBFu4RRsK')
    .collection('cartItems')
    .doc('LqCjW4GhvbBM826XpYkz');

firestore.doc('/users/pW6zynHOLfJjBFu4RRsK/cartItems/LqCjW4GhvbBM826XpYkz');    