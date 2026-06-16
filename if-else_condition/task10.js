function checkLogin(username)
{
    if(username=='admin')
    {
        console.log("welcome Admin")
    }
    else{
        console.log("Access Denied")
    }
}
checkLogin("admin")