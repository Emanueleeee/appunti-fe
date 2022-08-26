
import { Appunti } from "../model/Appunti";

export class Validazione{

    static validaAppunto(appunto:Appunti):string[]
    {
        let str:string[]=[]
        let strTitolo:string[]=this.validaTitolo(appunto.titolo);
        let strSottotitolo:string[]=this.validaSottotitolo(appunto.sottotitolo);
        let strTesto:string[]=this.validaTesto(appunto.testo)
        for (let i=0; i<strTitolo.length; i++)
        {
            str.push(strTitolo[i]+"");
        }
        for (let i=0; i<strSottotitolo.length; i++)
        {
            str.push(strSottotitolo[i]);
        }
        for(let i=0;i<strTesto.length;i++)
        {
            str.push(strTesto[i])
        }
        return str;
    }


    static validaTitolo(titolo:string):string[]
    {
        let str:string[]=[];
        if(titolo=="")
        {
        str.push("titolo non Inserito\n")
        }
        if (titolo.length<3&&titolo!="")
        {
            str.push("Il titolo dev'essere di almeno 3 caratteri");
        }
        if (titolo.length>20)
        {
            str.push("Il titolo può essere di massimo 20 caratteri");
        }
        
        return str;
    }
    static validaSottotitolo(sottotitolo:string):string[]
    {
        let str:string[]=[]
        if(sottotitolo=="")
        {
        str.push("sottotitolo non Inserito\n")
        }
        if (sottotitolo.length<3&&sottotitolo!="")
        {
            str.push("il sottotitolo dev'essere di almeno 3 caratteri");
        }
        if (sottotitolo.length>20)
        {
            str.push("Il sottotitolo può essere di massimo 20 caratteri");
        }
        return str;
    }
    static validaTesto(testo:string):string[]
    {
        let str:string[]=[]
        if(testo=="")
        {
        str.push("testo non Inserito\n")
        }
        if (testo.length<20&&testo!="")
        {
            str.push("il testo dev'essere di almeno 20 caratteri");
        }
        return str;
    }



    static validaTag(tag:string):string[]{
        let str:string[]=[]

      if(tag=="")
        {
        str.push("tag non Inserito\n")
        }


      if (tag.includes(" "))
        {
            str.push("il tag non deve contenere spazi\n");
        }
        if (tag.length<3&&tag!="")
        {
          str.push("il tag dev'essere di almeno 3 caratteri\n");
        }
        if (tag.length>20)
        {
            str.push("il tag dev'essere di almeno 3 caratteri\n");
        }
        return str;
    }
   

}
