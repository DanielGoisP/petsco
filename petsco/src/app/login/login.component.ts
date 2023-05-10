import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin!: FormGroup;
    user: any[] = [];
    userAtual: any = {
      id: null,
      email: 'danielgoispimenta@hotmail.com',
      senha: '123456',
    };

    constructor(private fb: FormBuilder, private server: ServerService) { }

    ngOnInit() {
      this.formLogin = this.fb.group({

        email: [this.userAtual.email, Validators.required],
        senha: [this.userAtual.senha, Validators.required],

      });
    }


    loginUser(){

      const newUser = {

        senha: this.formLogin.get("senha")?.value,
        email: this.formLogin.get("email")?.value,

      };
      this.server.loginUser(newUser).then(()=>{
      });
    }
  }
