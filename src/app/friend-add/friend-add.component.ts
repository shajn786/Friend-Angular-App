import { Component } from '@angular/core';

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

  readValues = ()=>
  {
    let data :any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
  }

}
