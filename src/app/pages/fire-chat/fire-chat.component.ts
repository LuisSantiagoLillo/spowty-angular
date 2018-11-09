import { Component, OnInit } from '@angular/core';
import { ChatService, Mensaje } from '../../services/chat.service';


@Component({
  selector: 'app-fire-chat',
  templateUrl: './fire-chat.component.html',
  styleUrls: ['./fire-chat.component.css']
})
export class FireChatComponent implements OnInit {
  message: string = "";
  scroll: any;
  loading: boolean = true;
  constructor(
    public _chatService: ChatService
  ) {
    this._chatService.loadMessages();
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      setTimeout(() => {
        this.scroll = document.getElementById('app-mensajes');
        this.scroll.scrollTop = this.scroll.scrollHeight;
      },20);
    }, 1000);

  }

  sendMessage() {
    console.log(this.message);
    if (this.message.length === 0) {
      return;
    } else {
      this._chatService. addMessage(this.message)
      .then(() => {
        console.log('Mensage enviado');
        this.message = '';
        this.scroll.scrollTop = this.scroll.scrollHeight;

      })
      .catch(() => {
        console.log('Fallo en el envio');
      });

    }
  }

}
