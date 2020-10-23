import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ICheckAppointmentRequest from '../RequestModel/ICheckAppointmentRequest';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';
import { ICreateAppointmentRequest } from '../RequestModel/ICreateAppointmentRequest';
import IAppointmentListResponse from '../ResponseModel/IAppointmentListResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class AppointmentApi extends AbstractApi {
  public checkAppointment(requestModel: ICheckAppointmentRequest): AxiosPromise<IGeneralResponse> {
    return this.http.post('check-time-appointment', requestModel);
  }

  public makeAppointment(requestModel: ICreateAppointmentRequest): AxiosPromise<IGeneralResponse> {
    return this.http.post('appointment', requestModel);
  }

  public getListAppointment(page: number, limit: number): AxiosPromise<IAppointmentListResponse> {
    return this.http.get('appointment', { params: { page, limit } });
  }
}

export default AppointmentApi;
