import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faHome, faBook, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brand:string;
  links:any[];

  constructor() { 
    this.brand = environment.logo;
    this.links=[
      {icon:faHome,path:'/home',linkText:'Home'},
      {icon:faBook,path:'/register',linkText:'Register'},
      {icon:faSearch,path:'/search',linkText:'Search'}
    ];
  }

  ngOnInit(): void {
  }

}
