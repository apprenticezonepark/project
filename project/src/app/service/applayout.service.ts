import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class appservice {
    config: any;
    constructor(private http: HttpClient) {
        this.config = "http://10.0.130.101:8080/dev/trainee/spserv/v1/";
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
}
