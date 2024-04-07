import { Injectable } from '@angular/core';

interface paragraph {
  header: string;
  text: string;
  src: string;
  visbility1: string;
  visbility2: string;
}
interface formContent{
  fname: string;
  fNameText: string;
  lName: string;
  lNameText: string;
  topic: string;
  topicText: string;
  submitV: string;
}

@Injectable({
  providedIn: 'root'
})

export class SService {
PolishArray: paragraph[] = [
    {
      header: "Doświadczenie",
        text: "Content of the first object",
        src: "https://media.istockphoto.com/id/1438159416/photo/car-automobile-insurance-and-warranty-car-services-concept-smart-document-and-digital.webp?b=1&s=170667a&w=0&k=20&c=UD0bNVHh1kJlPwqRN7KCFahE5nzmfgEykYwjB0_YQzE=",
        visbility1: "",
        visbility2: "display:none"
    },
    {
      header: "Zainteresowania:",
        text: `Fascynuje mnie świat automatyzacji i technologii, dlatego poświęcam wiele czasu na zgłębianie wiedzy z tego obszaru. Interesuję się zarówno automatyzacją w przemyśle, jak i w życiu codziennym, szukając nowych sposobów usprawnienia procesów i podnoszenia efektywności.
        
        Regularne treningi siłowe są dla mnie nie tylko sposobem na utrzymanie zdrowia i kondycji fizycznej, ale także pasją. Przez wiele lat zgłębiałem tajniki kulturystyki, zdobywając wiedzę zarówno teoretyczną, jak i praktyczną, która przynosi mi wiele satysfakcji i radości.
     
        Od lat jestem zagorzałym fanem uniwersum Warhammer 40k. Fascynuje mnie bogactwo tej fantastyki oraz strategiczne elementy gier bitewnych. Spędzam wiele czasu na malowaniu figurek, czytaniu książek z tego uniwersum oraz rozgrywaniu emocjonujących bitew na planszy.
        Hobby horcing to dla mnie nie tylko relaksujący sposób spędzania czasu, ale także szansa na rozwijanie umiejętności manualnych oraz czerpanie inspiracji z natury i otaczającego świata. Uwielbiam poznawać nowe techniki i tworzyć unikalne dzieła, które wyrażają moją pasję i kreatywność.`,
        src: "https://warhammer40000.com/wp-content/uploads/2023/07/q2AbCEAP5wfRAgzw.jpeg",
        visbility1: "display:none",
        visbility2: ""
    },
    {
      header: "Edukacja",
        text: "Content of the third object",
        src: "https://www.trinet.com.pl/wp-content/uploads/2023/03/czapka-licencjata-na-ksiazkach-940x529.jpg",
        visbility1: "",
        visbility2: "display:none"
    }
];

EnglishArray: paragraph[] = [
  {
    header: "Expirience",
      text: "Content of the first object",
      src: "https://media.istockphoto.com/id/1438159416/photo/car-automobile-insurance-and-warranty-car-services-concept-smart-document-and-digital.webp?b=1&s=170667a&w=0&k=20&c=UD0bNVHh1kJlPwqRN7KCFahE5nzmfgEykYwjB0_YQzE=",
      visbility1: "",
      visbility2: "display:none"
  },
  {
    header: "My intrests:",
      text: `
      I am fascinated by the world of automation and technology, which is why I dedicate a lot of time to deepening my knowledge in this area. I am interested in both industrial automation and everyday life automation, constantly seeking new ways to streamline processes and increase efficiency. Regular strength training is not only a way for me to maintain health and physical fitness but also a passion. For many years, I have delved into the secrets of bodybuilding, acquiring both theoretical and practical knowledge that brings me a lot of satisfaction and joy. I have been a dedicated fan of the Warhammer 40k universe for years. The richness of this fantasy world and the strategic elements of tabletop games fascinate me. I spend a lot of time painting miniatures, reading books from this universe, and engaging in exciting battles on the tabletop. Horseback riding hobby is not only a relaxing way to spend time but also an opportunity to develop manual skills and draw inspiration from nature and the surrounding world. I love learning new techniques and creating unique works that express my passion and creativity.`,
      src: "https://warhammer40000.com/wp-content/uploads/2023/07/q2AbCEAP5wfRAgzw.jpeg",
      visbility1: "display:none",
      visbility2: ""
  },
  {
    header: "Education",
      text: "Content of the third object",
      src: "https://www.trinet.com.pl/wp-content/uploads/2023/03/czapka-licencjata-na-ksiazkach-940x529.jpg",
      visbility1: "",
      visbility2: "display:none"
  }
  
];

formContentPL: formContent={
  fname: "Imie",
  fNameText: "Wpisz imie...",
  lName:  "Nazwisko",
  lNameText: "Wpisz nazwisko...",
  topic: "Treść",
  topicText: "  Wiadomość + informacje kontaktowe...",
  submitV: "WYŚLIJ"
} 
formContentEN: formContent={
  fname: "First Name",
  fNameText: "Input first name...",
  lName:  "Second Name",
  lNameText: "Input second name...",
  topic: "Content",
  topicText:" Message + contact info...",
  submitV: "SEND"
} 

  getPolishParagraphContent()  {
    return this.PolishArray

  }

  getEnglishParagraphContent()  {
    return this.EnglishArray
  }

  getPolishFormContent(){
    return this.formContentPL
  }

  getEnglishFormContent(){
    return this.formContentEN
  }

  


}
