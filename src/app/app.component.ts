import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: "Falling Leaves",
      url: 'https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: "Fall Pumpkins",
      url: 'https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHB1bXBraW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, {
      title: "Halloween",
      url: 'https://images.unsplash.com/photo-1603174381969-28cd173a9661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhhbGxvd2VlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, {
      title: "Autumn on the Mountain",
      url: 'https://images.unsplash.com/photo-1508264165352-258db2ebd59b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXV0dW1ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }
  ]
}
