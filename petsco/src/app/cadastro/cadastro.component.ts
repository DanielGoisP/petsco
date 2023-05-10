import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  formCadastro!: FormGroup;
  user: any[] = [];
  userAtual: any = {
    id: null,
    nome: 'Daniel Gois',
    email: 'danielgoispimenta@hotmail.com',
    senha: '123456',
    cpf: '54573175873',
    telefone: '13991820718 ',
    cep: '11355020',
    numero: '1222',
    rua: 'alice machado',
    cidade: 'são vicente',
    bairro: 'nautica',
    estado: 'sp',
  };

  constructor(private fb: FormBuilder, private server: ServerService) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [this.userAtual.nome, Validators.required],
      email: [this.userAtual.email, Validators.required],
      senha: [this.userAtual.senha, Validators.required],
      cpf: [this.userAtual.cpf, Validators.required],
      telefone: [this.userAtual.telefone, Validators.required],
      cep: [this.userAtual.cep , Validators.required],
      numero: [this.userAtual.numero , Validators.required],
      rua: [this.userAtual.rua , Validators.required],
      cidade: [this.userAtual.cidade , Validators.required],
      bairro: [this.userAtual.bairro , Validators.required],
      estado: [this.userAtual.estado , Validators.required],
    });
  }


  createUser(){

    const newUser = {
      nome: this.formCadastro.get("nome")?.value,
      senha: this.formCadastro.get("senha")?.value,
      email: this.formCadastro.get("email")?.value,
      cpf: this.formCadastro.get("cpf")?.value,
      telefone: this.formCadastro.get("telefone")?.value,
      cep: this.formCadastro.get("cep")?.value,
      numero: this.formCadastro.get("numero")?.value,
      rua: this.formCadastro.get("rua")?.value,
      cidade: this.formCadastro.get("cidade")?.value,
      bairro: this.formCadastro.get("bairro")?.value,
      estado: this.formCadastro.get("estado")?.value,
    };
    this.server.createUser(newUser).then(()=>{
    });
  }
}
