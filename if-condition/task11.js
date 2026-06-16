function login(username,password)
{
    if(username=='admin' && password=="12345")
    {
        console.log("Login SuccessFull")
    }
    if(username!="admin"&&password!="12345")
    {
        console.log("Invalid Credentials")
    }
}
login('admin','12345');