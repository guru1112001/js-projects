const passwordBox=document.getElementById("password")
const length=12
const upperCase="QWERTYUIOPLKJHGFDSAZXCVBNM"
const lowerCase="qwertyuioplkjhgfdsazxcvbnm"
const specialCase="!@#$%&"
const number= "0123456789"
const allChar=upperCase+lowerCase+number+specialCase

function createpassword(){
        let password=""
        password+=upperCase[Math.floor(Math.random()*upperCase.length)]
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
        password+=number[Math.floor(Math.random()*number.length)]
        password+=specialCase[Math.floor(Math.random()*specialCase.length)]

        while(length>password.length){
            password+=allChar[Math.floor(Math.random()*allChar.length)]

        }
        passwordBox.value=password
}   

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}