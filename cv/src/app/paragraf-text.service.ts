import { Injectable } from '@angular/core';

interface paragraph {
  header: string;
  text: string;
  src: string;
  visbility1: string;
  visbility2: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ParagrafTextService {
  PolishArray: paragraph[] = [
    {
      header: "First Object",
        text: "Content of the first object",
        src: "source1.jpg",
        visbility1: "",
        visbility2: "display:none"
    },
    {
      header: "Zainteresowania:",
        text: `Fascynuje mnie świat automatyzacji i technologii, dlatego poświęcam wiele czasu na zgłębianie wiedzy z tego obszaru. Interesuję się zarówno automatyzacją w przemyśle, jak i w życiu codziennym, szukając nowych sposobów usprawnienia procesów i podnoszenia efektywności.
        
        Regularne treningi siłowe są dla mnie nie tylko sposobem na utrzymanie zdrowia i kondycji fizycznej, ale także pasją. Przez wiele lat zgłębiałem tajniki kulturystyki, zdobywając wiedzę zarówno teoretyczną, jak i praktyczną, która przynosi mi wiele satysfakcji i radości.
     
        Od lat jestem zagorzałym fanem uniwersum Warhammer 40k. Fascynuje mnie bogactwo tej fantastyki oraz strategiczne elementy gier bitewnych. Spędzam wiele czasu na malowaniu figurek, czytaniu książek z tego uniwersum oraz rozgrywaniu emocjonujących bitew na planszy.
        Hobby horcing to dla mnie nie tylko relaksujący sposób spędzania czasu, ale także szansa na rozwijanie umiejętności manualnych oraz czerpanie inspiracji z natury i otaczającego świata. Uwielbiam poznawać nowe techniki i tworzyć unikalne dzieła, które wyrażają moją pasję i kreatywność.`,
        src: "source2.jpg",
        visbility1: "display:none",
        visbility2: ""
    },
    {
      header: "Third Object",
        text: "Content of the third object",
        src: "source3.jpg",
        visbility1: "",
        visbility2: "display:none"
    },
    {
      header: "Fourth Object",
        text: "Content of the fourth object",
        src: "source4.jpg",
        visbility1: "display:none",
        visbility2: ""
    }
];

  getPolishContent()  {
    return this.PolishArray

  }

}
