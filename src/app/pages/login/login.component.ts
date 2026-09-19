import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //3 atributos
  botaoDesabilitado:boolean= true;
  login:string='';
  senha:string='';


  //3 métodos

  fazerLogin(){
    if(this.login == "admin@email.com" && this.senha == "123"){
      alert("Bem-Vindo(a) admin!");
    }else{
      alert("Credenciais Inválidas");
    }
  }

  validarFormulario(){
    if(this.login.trim() !== '' && this.senha.trim() !==''){
      this.botaoDesabilitado = false;
    }else{
      this.botaoDesabilitado = true;
    }
  }
  onBotaoClicado(){
    alert("Confirmado!");
  }
  teclaSolta(evento:KeyboardEvent):void{
    alert(`o usuário digitou ${evento.key}`)
  }
}
