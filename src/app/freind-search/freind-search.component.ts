import { Component } from '@angular/core';

@Component({
  selector: 'app-freind-search',
  templateUrl: './freind-search.component.html',
  styleUrls: ['./freind-search.component.css']
})
export class FreindSearchComponent {

friendname=""

search = ()=>
{
  let data:any={"friendname":this.friendname}

  console.log(data)
}

}
