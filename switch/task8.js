function checkRole(role)
{
    switch(role)
    {
        case 'admin':
            console.log('Full Access');
            break;
        case 'manager':
            console.log('Manage Users');
            break;
        case 'staff':
            console.log('Employee Access');
            break;
        case 'guest':
            console.log('Limited Access');
            break;
        default:
            console.log('Unknown')
    }
}
checkRole('manager')