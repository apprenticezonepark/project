import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config_service } from './config_service';



@Injectable()
export class appservice {
    constructor(private http: HttpClient,  private config_sv: config_service ) {
    }

    private extAuthorizationHeader(): any {
        return { headers: new HttpHeaders().set('Authorization', this.config_sv.ExternalToken) };
    }

    getitemall(): Promise<any> {
        return this.http.get(this.config_sv.config_hp + 'hp/utilty/getselect_item?item_name=น&current_page=0&page_size=4&langid=2').toPromise();
    }

    getpage(pageitem): Promise<any> {
        return this.http.get(this.config_sv.config_hp + 'hp/utilty/getselect_item?item_name=น&current_page='+pageitem+'&page_size=4&langid=2').toPromise();
    }

    getitemall2(): Promise<any> {
        return this.http.get(this.config_sv.config_hp + 'hp/utilty/getselect_item?item_name=น&current_page=0&page_size=2&langid=2').toPromise();
    }

    getpage2(page): Promise<any> {
        return this.http.get(this.config_sv.config_hp + 'hp/utilty/getselect_item?item_name=น&current_page='+page+'&page_size=2&langid=2').toPromise();
    }

    getreco() : Promise<any> {
        let _rc_doc_type = "100123";
        let _page = "1";
        let _page_size = "20";
        return this.http.get(this.config_sv.config_api+ '/mkp/product/recommend/list/100123/1/3/2',
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

    getBestSeller(): Promise<any> {
        let sc_id: '103';
        let sc_type: '100123';
        let products_page: '10';

        return this.http.get(this.config_sv.config_api+ '/mkp/product/bestseller/1/3/2',
        Object.assign({
            params: new HttpParams({
                fromObject: {
                    sc_doc_id: sc_id,
                    sc_doc_type: '100123',
                    products_perpage: '10'
                }
            })
        }, this.extAuthorizationHeader())
        ).toPromise();
    } 

    FindByBestseller(): Promise<any> {
        debugger;
        let _sc_id: '103';
        let _sc_type: '100123';
        let _products_page: '10';
        let _param = new HttpParams();
        _param.set("sc_doc_id", _sc_id);
        _param.set("sc_doc_type", _sc_type);
        _param.set("products_perpage", _products_page);
        return this.http.get(this.config_sv.config_api+ '/mkp/product/bestseller/1/3/2',
            Object.assign({
                params: new HttpParams({
                    fromObject: {
                        sc_doc_id: _sc_id,
                        sc_doc_type: _sc_type,
                        products_perpage: _products_page
                    }
                })
            }, this.extAuthorizationHeader())
        ).toPromise();
    }

    // FindByBestseller(): Promise<any> {
    //     return this.http.get(Config.ExternalServiceUrl[this.mode] + `/mkp/product/bestseller/1/3/2`,
    //         Object.assign({
    //             params: new HttpParams({
    //                 fromObject: {
    //                     sc_doc_id: 103,
    //                     sc_doc_type: 100123,
    //                     products_perpage: 10
    //                 }
    //             })
    //         }, this.extAuthorizationHeader())
    //     ).toPromise()
    // }
    

}
