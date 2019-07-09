import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { settings } from '../../../../settings';

const API_URL = settings.apiUrl;

@Injectable({
  providedIn: "root"
})
export class SalaryAllocationService {

  constructor(private _httpClient: HttpClient) { }

  getAllCompany() {
    return this._httpClient
      // .post<any[]>(API_URL + "Company/GetAllCompanies", objCompany)
      .get<any[]>(API_URL + "Company/AllCompany")
      .pipe(catchError(this.handleError));
  }

  getAllEmployeeType(objEmpType) {
    debugger;
    return this._httpClient
      .post<any[]>(
        API_URL + "LeaveAllocation/GetAllEmployeeType",
        objEmpType
      )
      .pipe(catchError(this.handleError));
  }

  getAllServices(objCompany) {
    return this._httpClient
      .post<any[]>(
        API_URL + "SalaryAllocation/GetAllDepartment",
        objCompany
      )
      .pipe(catchError(this.handleError));
  }

  getAllDesignation(objDesignation) {
    return this._httpClient
      .post<any[]>(
        API_URL + "SalaryAllocation/GetAllDesignation",
        objDesignation
      )
      .pipe(catchError(this.handleError));
  }

  getAllEmployee(objAllEmployee) {
    return this._httpClient
      .post<any[]>(
        API_URL + "SalaryAllocation/GetAllEmployee",
        objAllEmployee
      )
      .pipe(catchError(this.handleError));
  }

  addSalaryAllocation(objSalaryAllocation) {
    return this._httpClient
      .post(
        API_URL + "SalaryAllocation/CreateSalaryAllocation",
        objSalaryAllocation
      )
      .pipe(catchError(this.handleError));
  } 

  getAllSalaryByEmployee(objAllSalaryByEmployee) {
    return this._httpClient
      .post(
        API_URL + "SalaryAllocation/getAllSalaryByEmployee",
        objAllSalaryByEmployee
      )
      .pipe(catchError(this.handleError));
  }

  getAllSalaryAllocation(objAllSalaryAllocation) {
    return this._httpClient
      .post(
        API_URL + "SalaryAllocation/GetAllSalaryAllocation",
        objAllSalaryAllocation
      )
      .pipe(catchError(this.handleError));
  }
  getinvoicereport(element) {
    return this._httpClient
      .post(
        API_URL + "Invoice/GetInvoiceReport",
        element
      )
      .pipe(catchError(this.handleError));
  }

  Saveinvoicereport(element) {
    return this._httpClient
      .post(
        API_URL + "Invoice/saveInvoice",
        element
      )
      .pipe(catchError(this.handleError));
  }

  getAnexturereport(element) {
    return this._httpClient
      .post(
        API_URL + "Annexure/GetAnnexureReport",
        element
      )
      .pipe(catchError(this.handleError));
  }
  getAllSalaryCompensate(objSalaryCompensate) {
    return this._httpClient
      .post(
        API_URL + "SalaryAllocation/GetAllSalaryAllocation",
       objSalaryCompensate
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error :", errorResponse.error.message);
    } else {
      console.error("Server Side Error :", errorResponse);
    }
    return throwError(
      "There is a problem with the service. We are notified & working on it. Please try again later."
    );
  }
}
