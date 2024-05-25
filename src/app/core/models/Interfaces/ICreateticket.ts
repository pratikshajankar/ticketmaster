export interface ITicket{
    "ticketId": 67;
    "createdDate":string;
    "expectedEndDate": string;
    "state": string;
    "severity":string;
    "contactNo": string;
    "ticketNo": string;
    "deptName":string;
    "createdByEmployee": string;
    "assignedToEmployee": string;
    "completedDate": null;
    "employeeName":string;
    "requestDetails":string;
}

export interface IEmpDept{
    "employeeId": number;
    "employeeName": string;
    "contactNo":  string;
    "emailId":  string;
    "deptId":  number;
    "password":  string;
    "gender":  string;
    "role": string;
}