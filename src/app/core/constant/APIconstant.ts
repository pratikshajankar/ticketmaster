export const APIConstant={
    
    API_URL:"https://freeapi.gerasim.in/api/Tickets/",


    // login url
    GET_LOGIN:"Login",

    // employee url
    GET_ALL_ROLE:"GetAllRoles",
    GET_ALL_EMP:"GetEmployees",
    GET_EMP_BY_EMPID:"GetEmployeeById?id=",
    GET_EMP_BY_DEPTID:"GetEmployeesByDeptId?id=",
    CREATE_EMPLOYEE:"CreateEmployee",
    UPDATE_EMP:"UpdateEmployee",
    DELETE_EMP:"DeleteEmployee?id=",

    // department url
    GET_ALL_DEPARTMENT:"GetDepartments",
    CREATE_DEPARTMENT:"CreateDepartment",
    UPDATE_DEPARTMENT:"UpdateDepartment",
    DELETE_DEPARTMENT:"DeleteDepartment?id=",

    // super admin dashboard
    GET_SUPER_ADMIN_DASHBOARD:"GetSuperAdminDashboard",

    // admin employee dashboard
    GET_ADMIN_EMPLOYEE_DASHBOARD:"getAdminEmployeeDashByEmpId?empId=",

    // employee dashboard
    GET_EMP_DASHBOARD_BY_EMPID:"getEmployeeDashByEmpId?empId=",

    // department head dashboard
    GET_DEPTHEAD_DASHBOARD_BY_DEPTHEAD:"GetDeptHeadDashboardByDeptHead?deptHeadEmpId=",

    // create ticket url
    GET_ALL_TICKET:"GetAllTickets",
    CREATE_TICKET:"CreateNewTicket",
    EDIT_TICKET:"GetTicketById?ticketId=",
    DELETE_TICKET:"DeleteTicket?id=",

    GET_ASSIGNED_TICKET:"GetAssignedTicketsByEmpId?empId=",
    GET_TICKET_CREATED_BY_EMP:"GetTicketsCreatedByEmpId?empId=",
    GET_TICKETS_BY_DEPTHEAD:"GetAllTicketsByDeptHead?deptHeadEmpId=",
    GET_NEW_TICKET:"getNewTickets?deptHeadEmpId=",

    GET_REQ_BY_FILTER:"GetRequestByFilter",
    ASSIGN_REQ:"AssignRequest",


    START_TICKET:"startTicket?id=",
    CLOSE_TICKET:"closeTicket?id=",


}