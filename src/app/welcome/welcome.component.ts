import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Welcome Message'
  welcomeMessageFromService: string
  name = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(//Subcribes whatever is done
      response => this.handleSuccessfulResponse(response),//by the observable is successful,get the response and specific method
      error => this.handleSuccessfulError(error)
      

    );

    //console.log('last line of getWelcomeMessage')
    //console.log("get welcome message")
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(//Subcribes whatever is done
      response => this.handleSuccessfulResponse(response),//by the observable is successful,get the response and specific method
      error => this.handleSuccessfulError(error)
      

    );

    //console.log('last line of getWelcomeMessage')
    //console.log("get welcome message")
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleSuccessfulError(error){
    //console.log(error)
    //console.log(error.error)
    //console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message

  }

}
