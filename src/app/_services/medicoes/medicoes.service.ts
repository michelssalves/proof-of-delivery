import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoesService {

  private apiUrl = 'http://vhwin1065:9023/rest/zWSMedicoes/get_all/';
  private apiUrlgetMaxPurchases = 'http://vhwin1065:9023/rest/zWSPedidos/get_max_purchases';
  private apiUrlgetMaxPurchasesTab = 'http://vhwin1065:9023/rest/zWSPedidos/get_max_purchases_tab';
  private apiUrlgetMaxPurchasesCol = 'http://vhwin1065:9023/rest/zWSPedidos/get_max_purchases_col/';
  private apiUrlgetMaxPurchasesLine = 'http://vhwin1065:9023/rest/zWSPedidos/get_max_purchases_line/';
  

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

}



