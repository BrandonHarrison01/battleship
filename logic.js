let db = firebase.firestore();

function register() {
	const email = document.getElementById("registerEmail").value;
	const password = document.getElementById("registerPassword").value;
	const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        console.log('passwords do not match')
            return
    }

	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((res) => {
			const uid = firebase.auth().currentUser.uid;

			console.log(uid, "res");
			db.collection("users").doc(uid).set({ searching: false });
		})
        .catch(err => console.log(err))
}
