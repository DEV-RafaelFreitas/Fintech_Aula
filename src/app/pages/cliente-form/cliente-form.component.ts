import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };
  confirmarSenha:string ="";
  senha:string="";

  cadastrar() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return; 
    }
    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
    console.log(this.cliente);
  }
}
