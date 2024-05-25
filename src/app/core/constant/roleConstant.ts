export const RoleConstant={

    menus:[
            {
                path:'employee',
                text:'Employee',
                roles:['Admin Department Employee']
            },
            {
                path:'department',
                text:'Department',
                roles:['Admin Department Employee']
            },
            {
                path:'createticket',
                text:'Ticket',
                roles:['Employee','Admin Department Employee','Department Head']
            },
            {
                path:'dashboard',
                text:'Dashboard',
                roles:['Employee','Admin Department Employee','Department Head']
            }
    ]

}