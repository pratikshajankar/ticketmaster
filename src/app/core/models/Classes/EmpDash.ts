export class EmployeeDash{
    "totalTickets": number;
    "totalUnAssignedTickets": number;
    "totalAssignedTickets":number;
    "totalInProgressTickets": number;
    "totalClosedTickets": number;

    constructor(){
        this.totalTickets=0;
        this.totalUnAssignedTickets=0;
        this.totalAssignedTickets=0;
        this.totalInProgressTickets=0;
        this.totalClosedTickets=0;
    }
}