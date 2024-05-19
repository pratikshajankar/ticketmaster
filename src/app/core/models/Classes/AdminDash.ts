export class AdminDash{
    "totalTickets": number;
    "totalAssignedTickets":number;
    "totalInProgressTickets": number;
    "totalClosedTickets": number;
    constructor(){
        this.totalTickets=0;
        this.totalAssignedTickets=0;
        this.totalInProgressTickets=0;
        this.totalClosedTickets=0;
    }
}