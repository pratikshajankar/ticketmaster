export const RoleConstant={

    menus:[
            {
                path:'employee',
                text:'employee',
                roles:['Admin Department Employee']
            },
            {
                path:'department',
                text:'department',
                roles:['Admin Department Employee']
            },
            {
                path:'createticket',
                text:'createticket',
                roles:['Employee','Admin Department Employee','Department Head']
            },
            {
                path:'dashboard',
                text:'dashboard',
                roles:['Employee','Admin Department Employee','Department Head']
            }
    ]

}