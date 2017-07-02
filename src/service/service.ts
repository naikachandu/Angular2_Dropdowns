import { Injectable} from '@angular/core';
import { Http,Headers, RequestOptions, Response} from '@angular/http';
import { Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Company} from 'data/make';
import { Ford} from 'data/ford';
import { Acura} from 'data/acura';
@Injectable()  
export class CompanyService {  
    private jsonFileURL: string = "assets/json/makes.json";private fordJsonFileURL: string = "assets/json/ford.json";  
    private acuraJsonFileURL: string = "assets/json/acura.json";  
    constructor(private http: Http) {}  
   
    //    
  getArticles(): Observable < Company[] > {  
        return this.http.get(this.jsonFileURL).map((response: Response) => {  
            return <Company[] > response.json()            
        }).catch(this.handleError);  
    }  
    
    //   
     //    
  getFord(): Observable < Ford > {  
        return this.http.get(this.fordJsonFileURL).map((response: Response) => {  
            return <Ford > response.json()            
        }).catch(this.handleError);  
    }  
    
    // 
    getAcura(): Observable < Acura > {  
        return this.http.get(this.acuraJsonFileURL).map((response: Response) => {  
            return <Acura> response.json()            
        }).catch(this.handleError);  
    }  
       
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}  

