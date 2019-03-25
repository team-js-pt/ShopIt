export const addProfile = (profile,userid) => {
    return async(dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      await firestore.collection('users').doc(userid).collection('profile').get().then(snapshot => {
        snapshot.forEach(doc => {
               firestore.collection('users').doc(userid).collection('profile').doc(doc.id).delete()
        });
    })
      firestore.collection('users').doc(userid).collection('profile').add({
        ...profile,
        joinedOn: new Date()
      }).then(() => {
        console.log("profile saved")
      }).catch(err => {
        console.log("error while profile saving",err)
      });
    }
  };