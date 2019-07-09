const userMap = {
    'user@gmail.com': {
        password: 'UserPass'
    },
    'admin@gmail.com': {
        password: 'AdminPass'
    }

};
const passwordMaxLength = 6;
const passwordMinLength = 5;
let needToContinue = true;
let providedPassword;
let isStepTwo;
let isStepThree;
let approveChangePassword;
let oldPassword;
let newPassword;
let newPasswordApprove;

const providedEmail = prompt('email', '');

if (providedEmail === null || providedEmail.length === 0) {
    alert('Canceled.');
    needToContinue = false;
}

if (needToContinue && providedEmail.length < passwordMaxLength) {
    alert(`I don't know any emails having name length less than ${passwordMaxLength} symbols`);
    needToContinue = false;
}

if (Object.keys(userMap).includes(providedEmail)) {
    providedPassword = prompt('password', '');
    isStepTwo = true;

} else if (needToContinue) {
    alert('I don’t know you');
    needToContinue = false;
}

if (isStepTwo) {
    if (providedPassword === null || providedPassword.length === 0) {
        alert('Canceled.');
        needToContinue = false;
    }
    if (needToContinue && userMap[providedEmail].password === providedPassword) {
        isStepThree = true;
    } else if (needToContinue) {
        alert('Wrong password');
        needToContinue = false;
    }
}

if (isStepThree) {
    approveChangePassword = confirm('Do you want to change your password?');
    if (approveChangePassword) {
        oldPassword = prompt('please provide old password', '');
        if (oldPassword === null || oldPassword.length === 0) {
            alert('Canceled.');
            needToContinue = false;
        } else if (userMap[providedEmail].password === oldPassword) {
            newPassword = prompt('provide a new password', '');
            if (newPassword.length > passwordMinLength) {
                newPasswordApprove = prompt('repeat new password', '');
                if (newPasswordApprove === newPassword) {
                    alert('You have successfully changed your password.')
                } else {
                    alert('You wrote the wrong password.')
                }
            } else {
                alert('It’s too short password. Sorry.');
                needToContinue = false;
            }
        } else if (needToContinue) {
            alert('Wrong password');
            needToContinue = false;
        }
    } else {
        alert('You have failed the change');
        needToContinue = false;
    }
} else if(needToContinue) {
    alert('Wrong password');
    needToContinue = false;
}
