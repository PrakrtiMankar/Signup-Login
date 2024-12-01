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

function login(username, password){
    let arr = ['Prakrti', 'Khushi', 'Sanjana'];
    let present = 0;

    for(let i = 0; i<arr.length; i++){
        if(username === arr[i]){
            present++
            if(password === 'Emp@123'){
                present++;
                break;
            }
            else {
                present = 1;
                break;
            }
        }
        else{
            present = 0;
        }
    }

    if(present === 2 || present > 2){
        console.log("Login Sucessfull...")
    }
    else if(present == 1){
        console.log("Wrong password...")
    }
    else {
        console.log("User not found, Please Signup");
    }
}

login('Khushi', 'Emp@123');