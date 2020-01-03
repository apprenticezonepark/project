import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class appcomponentservice {
    config: any = "https://api.uat.afarmmart.com/pos/v1";
    constructor(private http: HttpClient) {
    }

    getmebubar(): Promise<any> {
        return this.http.get(this.config + '/mkp/utility/categoryWorkspaceBySalechannel?sc_doc_type=100123&wsp_id=1&sys_id=3&lang_id=2').toPromise();
    }

 
}
