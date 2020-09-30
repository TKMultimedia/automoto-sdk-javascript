import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IEmployee from '../Model/IEmployee';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';
import IGetEmloyeeRequestParams from '../RequestModel/IGetEmployeeRequestParams';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class EmployeeApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createEmployee(employee: IEmployee): AxiosPromise<IGeneralResponse> {
    return this.http.post('company/employee', employee);
  }

  public getContactPerson(): AxiosPromise<IEmployee> {
    return this.http.get('company/contact-person');
  }

  public getEmployees(
    page: number,
    limit: number,
    textSearch?: string): AxiosPromise<{ count: number; rows: IEmployee[] }> {
    let params: IGetEmloyeeRequestParams = {
      limit,
      page
    };

    if (typeof textSearch !== 'undefined') {
      params = {
        ...params,
        text_search: textSearch
      };
    }

    return this.http.get('company/employee', { params });
  }

  public updateEmployee(employee: IEmployee): AxiosPromise<IGeneralResponse> {
    return this.http.put('company/employee', employee);
  }

  public assignEmployee(employeeCompanyId: number, vehicleId: number): AxiosPromise<IGeneralResponse> {
    return this.http.post('company/employee/allocation', {
      employee_company_id: employeeCompanyId,
      vehicle_id: vehicleId
    });
  }
}

export default EmployeeApi;
