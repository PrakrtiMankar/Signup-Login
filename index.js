function signup(username) {
    let arr = ['Prakrti', 'Khushi', 'Sanjana', 'Daisy'];
    let alreadyUser = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == username){
            alreadyUser++;
            break;
        }
    }

    if(alreadyUser === 1){
        console.log("User Already Registered, Please Login");
    }
    else{
        console.log("Signup Sucessfull, Please Login");

        arr.push(username);
    }
}

signup('Prakrti');
signup('Nikki');
