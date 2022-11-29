import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-friend-view-all',
  templateUrl: './friend-view-all.component.html',
  styleUrls: ['./friend-view-all.component.css']
})
export class FriendViewAllComponent {

  constructor(private api:ServicesService)
  {
        api.fetchFriends().subscribe(

          (response)=>
          {
            this.data = response
          }

        )
  }

  data:any =[]

}
