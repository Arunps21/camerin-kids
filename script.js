const fetchInput = (selector) => {
    const data = document.querySelector(selector);
    if (!data || data.value === "") {
        return "";
    } else {
        return data.value;
    }
}

const validateField = (value, selector, regExp, errMsg, errSelector) => {
    const errorElement = document.querySelector(errSelector);
    const inputField = document.querySelector(selector);
    if (value == "") {
        errorElement.innerHTML = "Field required";
        errorElement.style.color = "red";
        inputField.style.borderBottom = "2px solid red";
    } else if (!regExp.test(value)) {
        errorElement.innerHTML = errMsg;
        errorElement.style.color = "red";
        inputField.style.borderBottom = "2px solid red";
    } else {
        errorElement.innerHTML = "";
        inputField.style.borderBottom = "2px solid green";
    }
}

document.querySelector("#stdName").addEventListener("blur", (event) => {
    const stdName = fetchInput("#stdName");
    validateField(stdName, "#stdName", /^[a-zA-Z ]+$/, "Alphabets Only", "#nameErr");
});

document.querySelector("#parentName").addEventListener("blur", (event) => {
    const parentName = fetchInput("#parentName");
    validateField(parentName, "#parentName", /^[a-zA-Z ]+$/, "Alphabets Only", "#parentErr");
});

document.querySelector("#school").addEventListener("blur", (event) => {
    const schoolName = fetchInput("#school");
    validateField(schoolName, "#school", /^[a-zA-Z ]+$/, "Alphabets Only", "#schoolErr");
});

document.querySelector("#email").addEventListener("blur", (event) => {
    const email = fetchInput("#email");
    validateField(email, "#email", /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, "Invalid email", "#emailErr");
});

document.querySelector("#cntNum").addEventListener("blur", (event) => {
    const num = fetchInput("#cntNum");
    validateField(num, "#cntNum", /^[0-9 ]{10}$/, "Numerics Only", "#numErr");
});
