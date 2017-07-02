import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { CompanyService} from 'service/service';  
import { Observable} from 'rxjs/Rx';  
import { Company } from 'data/make'; 
import { Ford } from 'data/ford'; 
import { Acura } from 'data/acura';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[CompanyService]
})
export class AppComponent implements OnInit {
  title = 'app';
  company: Company[];  
  ford:Ford;
  acura:Acura;
  selectedCompany: Object = {}; 
  carModels: Object = {};  
  nav:boolean=false;
  errorMessage: string;  
  models:Array<any>; 
 
    ///    
    constructor(private make: CompanyService) {  
        this.company = [];  
    }  
    ///    
    ngOnInit(): void {  
        let self = this;  
        self.make.getArticles().subscribe(response => this.company = response, error => this.errorMessage = < any > error); 
        self.make.getFord().subscribe(response => this.ford = response, error => this.errorMessage = < any > error);
        self.make.getAcura().subscribe(response => this.acura = response, error => this.errorMessage = < any > error);       
        
    }  
    onChange(value){      
      if(value.is_in_navigation){        
        if(value.make == this.ford.make){          
           this.models=this.ford.models;           
           console.log(this.models);
        }
       else 
        if(value.make == this.acura.make){          
           this.models=this.acura.models;           
           console.log(this.models);
        }
       }       
    }
}
    

