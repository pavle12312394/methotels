import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];

  @Input() title: string;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    console.log('init rooms');

    // povezem ovaj niz rooms, sa nizom iz servisa, i da se pretplatim na njega
    this.roomService.getRooms().subscribe((rooms) => {

      this.rooms = rooms;
    });
  }

  shuffleArray() {
    let currentIndex = this.rooms.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.rooms[currentIndex], this.rooms[randomIndex]] = [
        this.rooms[randomIndex], this.rooms[currentIndex]];
    }
  }

}
