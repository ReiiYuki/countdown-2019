import 'firebase/firestore'

import FirebaseApp from 'firebase/app'

export const firebase = FirebaseApp.initializeApp({
    apiKey: 'AIzaSyDp5453L5s4ULaF-bdwnt6UjvqFuFn7DgE',
    databaseURL: "https://count-down-b0eb5.firebaseio.com",
    projectId: "count-down-b0eb5",
})

export const firestore = firebase.firestore()
