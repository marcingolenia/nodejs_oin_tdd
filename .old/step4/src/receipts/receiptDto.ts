type ReceiptDto = {
    Id: string,
    IssueDate: Date,
    Amount: number,
    PayedOn: Date | undefined,
  }

export let mapToDto = (domainObj: Receipt): ReceiptDto => ({
    Id: domainObj.Id,
    IssueDate: domainObj.IssueDate,
    Amount: domainObj.Amount,
    PayedOn: domainObj.PayedOn
  })