function login(username,password)
{
    if(username=='admin')
    {
        if(password=='12345')
        {
            console.log('Login Successful')
        }
        else
        {
            console.log('Invalid password')
        }
    }
    else
    {
        console.log('Invalid password')
    }
}
login('admin','12354')