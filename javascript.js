let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    email = document.querySelector("input"),
    error = document.querySelector(".error"),
    form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    let flag = true;
    e.preventDefault();
    if (email.value.trim() == "") {
        error.innerHTML = "please enter email it cant be empty";
        flag = false;
    }
    else {
        if (emailRegex.test(email.value)) {
            error.innerHTML = "";
        }
        else {
            error.innerHTML = "please enter valid  email";
            flag = false;
        }
    }
    if (flag)
    {
        console.log("fuck ");
        form.submit();

    }
});

