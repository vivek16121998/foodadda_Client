import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatSupportService } from './chat-support.service';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.css']
})
export class ChatSupportComponent {

  messages: ChatMessage[] = [];
  userInput: string = '';
  loading: boolean = false;
  private sessionIdKey = 'chatSessionId';

  @ViewChild('chatWindow') private chatWindow!: ElementRef;

   constructor(private service: ChatSupportService,private http: HttpClient) {}

   ngOnInit(): void {
    this.sessionIdKey = uuidv4();
    console.log(this.sessionIdKey)

    this.messages.push({ sender: 'bot', text: "Hello! I'm FoodAdda Chat Support Assistant, here to help you. How can I assist you today?"});

  }
   


 

  scrollToBottom(): void {
    try {
      this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
    } catch {}
  }

  // sendMessage() {
  //   if (!this.userInput.trim()) return;
  
  //   // Add user message
  //   this.messages.push({ sender: 'user', text: this.userInput });
  //   const messageToSend = this.userInput;
  //   this.userInput = '';
  //   this.loading = true;
  
  //   setTimeout(() => this.scrollToBottom(), 0); // scroll after user msg
  
  //   this.service.agentResponse(this.sessionIdKey, messageToSend).subscribe(
  //     (res) => {
  //       this.messages.push({ sender: 'bot', text: res.response || 'No response' });
  //       this.loading = false;
  
  //       setTimeout(() => this.scrollToBottom(), 0); // scroll after bot msg
  //     },
  //     error => {
  //       this.messages.push({ sender: 'bot', text: 'Error: Could not get response.' });
  //       this.loading = false;
  
  //       setTimeout(() => this.scrollToBottom(), 0);
  //     }
  //   );
  // }
  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ sender: 'user', text: this.userInput });
    const messageToSend = this.userInput;
    this.userInput = '';
    this.loading = true;
    setTimeout(() => this.scrollToBottom(), 0); // scroll after user msg

    // Call your backend API with sessionId
    const apiUrl = 'https://hgjb2d75yj.execute-api.ap-south-1.amazonaws.com/dev/ask';
    const payload = {
      userInput: messageToSend,
      sessionId: this.sessionIdKey  // 👈 send session ID
    };

    this.http.post<any>(apiUrl, payload).subscribe({
      next: (res) => {
        this.messages.push({ sender: 'bot', text: res.response || 'No response' });
        this.loading = false;
        setTimeout(() => this.scrollToBottom(), 0); // scroll after bot msg
      },
      error: () => {
        this.messages.push({ sender: 'bot', text: 'Error: Could not get response.' });
        this.loading = false;
        setTimeout(() => this.scrollToBottom(), 0);
      }
    });
  }
  
}
