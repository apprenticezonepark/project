import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class appservice {
    config_sc: any = "https://api.uat.afarmmart.com/pos/v1";
    config: any;
    ExternalToken: 'Bearer JnqAOGQ99dypVjE'
    constructor(private http: HttpClient) {
        this.config = "http://10.0.130.101:8080/dev/trainee/spserv/v1/";
    }

    private extAuthorizationHeader(): any {
        return { headers: new HttpHeaders().set('Authorization', this.ExternalToken) };
    }

    getitemall(): Promise<any> {
        return this.http.get(this.config + 'hp/utilty/getselect_item?item_name=น&current_page=0&page_size=4&langid=2').toPromise();
    }

    getpage(pageitem): Promise<any> {
        return this.http.get(this.config + 'hp/utilty/getselect_item?item_name=น&current_page='+pageitem+'&page_size=4&langid=2').toPromise();
    }

    getitemall2(): Promise<any> {
        return this.http.get(this.config + 'hp/utilty/getselect_item?item_name=น&current_page=0&page_size=2&langid=2').toPromise();
    }

    getpage2(page): Promise<any> {
        return this.http.get(this.config + 'hp/utilty/getselect_item?item_name=น&current_page='+page+'&page_size=2&langid=2').toPromise();
    }

    getreco() : Promise<any> {
        let _rc_doc_type = "100123";
        let _page = "1";
        let _page_size = "20";
        return this.http.get(this.config_sc + '/mkp/product/recommend/list/100123/1/3/2',
        Object.assign({
            params: new HttpParams({
                fromObject: {
                    rc_doc_type: _rc_doc_type,
                    current_page: _page,
                    page_size: _page_size
                }
            }) 
        }) 
        ).toPromise();
    } 
}
