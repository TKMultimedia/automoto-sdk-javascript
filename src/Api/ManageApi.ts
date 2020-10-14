import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IGarageTypeResponse from '../ResponseModel/IGarageTypeResponse';
import IVehicleCategoryResponse from '../ResponseModel/IVehicleCategoryResponse';
import IServiceListResponse from '../ResponseModel/IServiceListResponse';
import IPlan from '../Model/IPlan';
import IPaymentMethod from '../Model/IPaymentMethod';
import ILicensedInsurance from '../Model/ILicensedInsurance';
import IInsuranceAccepted from '../Model/IInsuranceAccepted';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */
class ManageApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getGarageType(): AxiosPromise<IGarageTypeResponse[]> {
    return this.http.get('type-garage');
  }

  public getVehicleCategories(): AxiosPromise<IVehicleCategoryResponse[]> {
    return this.http.get('category-vehicle');
  }

  public getServiceList(page: number, limit: number): AxiosPromise<IServiceListResponse> {
    return this.http.get('service-master', {
      params: {
        page,
        limit
      }
    });
  }

  public getPlanPacks(): AxiosPromise<IPlan[]> {
    return this.http.get('fee-vehicle');
  }

  public getPaymentMethods(): AxiosPromise<IPaymentMethod[]> {
    return this.http.get('payment-method');
  }

  public getLicensedInsurances(): AxiosPromise<ILicensedInsurance[]> {
    return this.http.get('licensed-insurance');
  }

  public getInsurancesAccepted(): AxiosPromise<IInsuranceAccepted[]> {
    return this.http.get('insurance-accepted');
  }
}

export default ManageApi;
