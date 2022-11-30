import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""


  constructor(private api :ServicesService)
  {

  }

  readValues = ()=>
  {
    let data :any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFreind(data).subscribe(

      (response: any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("Added Successfully")
          this.DescribeYourFriend=""
          this.friendName=""
          this.friendNickName=""
          this.name=""
        }
        else {
          alert ("Not Added")
        }
      }

    )
  }

}
