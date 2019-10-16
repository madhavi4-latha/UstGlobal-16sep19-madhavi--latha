import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
Movies=[
  {
  name : 'maleficient',
       imgUrl :'https://image.shutterstock.com/image-photo/portrait-magical-maleficent-woman-horns-260nw-1367153261.jpg'
},
{
  name : 'twilight',
       imgUrl :'https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429__340.jpg'
},
{
  name : 'angrybird',
       imgUrl :'https://cdn.pixabay.com/photo/2013/07/13/12/37/bird-159984__340.png'
}

]
  constructor() { }

  ngOnInit() {
  }

}
