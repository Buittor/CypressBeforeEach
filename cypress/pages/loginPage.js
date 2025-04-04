module.exports=function(){
    var userCredentials = {
        usertrue: 'standard_user',
        passwordtrue: 'secret_sauce',
        passwordfalse: 'secret_sauce123',
        errorMessage:'Username and password do not match any user in this service',
        checkoutMessage:'Checkout: Your Information'
    }
    var selectorLogin = {
        username: '#user-name',
        password: '#password',
        loginButton: '#login-button'
    }
    return {userCredentials, selectorLogin}
}
