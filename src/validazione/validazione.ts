import { Utente } from "src/model/Utente";

export class Validazione{

    static validaUtente(utente:Utente):string[]
    {
        let str:string[]=[]
        let strUser:string[]=this.validaUsername(utente.username);
        let strPassword:string[]=this.validaPassword(utente.password);
        let strDati:string[]=this.validaDati(utente.nome,utente.cognome,utente.email)
        for (let i=0; i<strUser.length; i++)
        {
            str.push(strUser[i]);
        }
        for (let i=0; i<strPassword.length; i++)
        {
            str.push(strPassword[i]);
        }
        for(let i=0;i<strDati.length;i++)
        {
            str.push(strDati[i])
        }
        return str;
    }

    static validaDati(nome:string,cognome:string,email:string):string[]{
      let str:string[]=[]
      if (nome.length==0)
        {
            str.push("Inserire Nome");
        }
        if (cognome.length==0)
        {
            str.push("Inserire Cognome");
        }
        if (email.length==0||!email.match(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)))
        {
            str.push("Formato email errato");
        }
        return str;
    }

    static validaUsername(username:string):string[]
    {
        let str:string[]=[];
        if (username.length<8)
        {
            str.push("L'username dev'essere di almeno 8 caratteri");
        }
        if (username.includes(" "))
        {
            str.push("L'username non deve contenere spazi");
        }
        return str;
    }
    static validaPassword(password:string):string[]
    {
        let str:string[]=[]
        if (password.length<5)
        {
            str.push("La password dev'essere di almeno 5 caratteri");
        }
        if (password.includes(" "))
        {
            str.push("La password non deve contenere spazi");
        }
        if (!/\d/.test(password))
        {
            str.push("La password deve contenere almeno un numero");
        }
        return str;
    }

    static validateData(inizio:Date , fine:Date ):Boolean{
      let d=new Date()
      if (inizio.getTime() > d.getTime() && fine.getTime() > inizio.getTime()){
          return true
       }
       else return false
    }

    static validaOspite(nome:string,cognome:string,documento:string):string{
      let str=""
      if(documento=="")
        {
        str+="Documento non Inserito\n"
        }

      if(nome=="")
        {
        str+="Inserire il nome\n"
        }

      if(cognome=="")
        {
         str+="Inserire il cognome\n"
        }

      if (documento.includes(" "))
        {
          str+="L'username non deve contenere spazi\n";
        }
        return str;
    }
    static validaDate(){

    }

    static validaGiorni(){

    }

}
