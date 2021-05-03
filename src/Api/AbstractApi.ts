import Axios, { AxiosInstance } from 'axios';
import Environment from '../Enum/Environment';
// import { transformRequest, transformResponse } from '../Utility/DataTransformUtility';


abstract class AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Protected Properties
  // --------------------------------------------------------------------------------------------

  /**
   * The HTTP Client
   * Use this to init all HTTP functionality
   */
  protected readonly http: AxiosInstance;

  // --------------------------------------------------------------------------------------------
  // Private Properties
  // --------------------------------------------------------------------------------------------

  private readonly ENDPOINT_DEV: string = 'https://api.oovoom.com';
  private readonly ENDPOINT_STAGING: string = 'https://api.oovoom.com';
  private readonly ENDPOINT_LIVE: string = 'https://api.oovoom.com';
  private readonly MOCK_LOCAL: string = 'http://localhost:3000';
  private readonly MOCK_ONLINE: string = 'https://automoto-mocking.herokuapp.com';

  // --------------------------------------------------------------------------------------------
  // Magic methods
  // --------------------------------------------------------------------------------------------

  /**
   * @since v2.0.0
   */
  public constructor(env: string, token?: string) {
    let baseUrl: string;

    switch (env) {
      case Environment.DEVELOPMENT:
        baseUrl = this.ENDPOINT_DEV;
        break;
      case Environment.STAGING:
        baseUrl = this.ENDPOINT_STAGING;
        break;
      case Environment.PRODUCTION:
        baseUrl = this.ENDPOINT_LIVE;
        break;
      case Environment.MOCK_LOCAL:
        baseUrl = this.MOCK_LOCAL;
        break;
      case Environment.MOCK_ONLINE:
        baseUrl = this.MOCK_ONLINE;
        break;
      default:
        throw new Error(`Invalid env "${env}" value`);
    }
    let locale = 'fr';
      if (window.localStorage) {
        const data: any = window.localStorage.getItem('AUTOMOTO_CAROWNER_language');
    
        try {
          if(data){
            locale = JSON.parse(data);
          }else {
            locale = JSON.parse(window.localStorage.getItem('AUTOMOTO_CAROWNER_auth') as any).language;
          }
        } catch {
          locale= '';
        }
      }
    let headers: { locale: string; token?: string } = {
      locale:  locale
    };

    if (typeof token !== 'undefined') {
      headers = {
        ...headers,
        token,
      };
    }

    this.http = Axios.create({
      baseURL: `${baseUrl}/`,
      headers,
      // transformRequest,
      // transformResponse
    });
  }

  // --------------------------------------------------------------------------------------------
  // Protected methods
  // --------------------------------------------------------------------------------------------

  protected static padLeft(num: number, maxLength: number): string {
    return String('0'.repeat(maxLength) + num.toString())
      .slice(-maxLength);
  }

  /**
   * @deprecated remove and use Moment format or create utility to uniform the result
   */
  protected static getDateInFormat(dateTime: Date): string {
    return dateTime
      .getFullYear()
      .toString() + '-' +
      AbstractApi.padLeft(dateTime.getMonth() + 1, 2)
        .toString() + '-' +
      AbstractApi.padLeft(dateTime.getDate(), 2)
        .toString() +
      'T' +
      AbstractApi.padLeft(dateTime.getHours(), 2)
        .toString() + ':' +
      AbstractApi.padLeft(dateTime.getMinutes(), 2)
        .toString() + ':' +
      AbstractApi.padLeft(dateTime.getSeconds(), 2)
        .toString();
  }
}

export default AbstractApi;
