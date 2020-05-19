import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Config } from "../config/config";
import { Contributor } from "../models/contributor";
import { linksIguess } from "../models/linksIgues";
import { Bio } from "../models/bio";
import { Games, Game } from "../models/games";

//this style formats the color into a object that ngStyle accepts
function styleFromColor(backGroundColor: String, textColor: String): any {
  return {
    "background-color": backGroundColor,
    color: textColor,
  };
}

var contributors = [
  new Contributor(
    1,
    //firsName
    "Jacob",
    //lastName
    "Stanton",
    //bio
    new Bio(
      [
        new Game("Settlers of Catan"),
        new Game("Ticket to Ride")
      ],
      "12/09/1995",
      "I like the sound of roosters crowing at 4am.",
      new linksIguess
      (
      "https://github.com/zed0x5f",
      "https://www.starwars.com/databank/yoda",
      "https://www.linkedin.com/in/jacob-stanton-10221972/"
      ),
      "Greetings, I'm Jacob, and I live in Florida"
    ),
    //color
    styleFromColor("#006eff", "white"),
    //image to use
    "https://ca.slack-edge.com/T9P33872P-UMB26EV6E-f1b15a101868-512"
  ),
  new Contributor(
    2,
    "Jackie",
    "Roberts",
    new Bio(
      [
        new Game("game1"),
        new Game("game2")
      ],
      "7/24/1970",
      "I have angelic singing voice that rivals Jenn Johnson.",
      //TODO find Jackie's LinkedIn profile
      new linksIguess("https://github.com/Jackie-Roberts", "https://en.wikipedia.org/wiki/Wonder_Woman", "https://www.linkedin.com/feed/"),
      "Hi, I'm Jackie, and I live in Oklahoma"
    ),
    styleFromColor("yellow", "black"),
    "https://ca.slack-edge.com/T9P33872P-UMXPMHEAE-3b5c27f1c336-512"
  ),
  new Contributor(
    3,
    "Kayla",
    "Miller",
    new Bio(
      [
        new Game("game1"),
        new Game("game2")
      ],
      "6/15/1995",
      "I like running around Kroger in my spare time.",
      new linksIguess("https://github.com/Kayla-D-Miller", "https://en.wikipedia.org/wiki/Princess_Leia", "https://www.linkedin.com/in/kayla-miller-km/"),
      "Hey there, I'm Kayla, and I live in Georgia."
    ),
    styleFromColor("red", "white"),
    "https://ca.slack-edge.com/T9P33872P-UKW98R0NL-9b2d325d0d90-512"
  ),
  new Contributor(
    4,
    "Kamyla",
    "Andrlik",
    new Bio(
      [
        new Game("game1"),
        new Game("game2")
      ],
      "09/17/1991",
      "Hawaii has my heart but Kentucky has my stomach.",
      new linksIguess("https://github.com/kamylaandrlik", "https://en.wikipedia.org/wiki/Anna_(Frozen)", "https://www.linkedin.com/in/kamyla-andrlik-6811bb6b/"),
      "Aloha, I'm Kamyla and I live in Hawaii."
    ),
    styleFromColor("#30c230", "white"),
    "https://ca.slack-edge.com/T9P33872P-UNCD1UH6K-6e8e43a4b2fd-512"
  ),
];

@Injectable({
  providedIn: "root",
})
export class ContributorService {
  url: string = Config.apiUrl;

  getContributors(): Observable<Contributor[]> {
    //console.log(contributors);
    if (Config.weAreUsingCloud) {
      return this.http.get<Contributor[]>(this.url + "Contributors");
    } else {
      return new Observable((observer) => {
        var copy = [...contributors];
        observer.next(copy);
      });
    }
  }

  getContributor(id: number): Observable<Contributor> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Contributor>(this.url + "/Contributors/read" + id);
    } else {
      return new Observable((observer) => {
        observer.next({ ...contributors.find((p) => p.id == id) });
      });
    }
  }

  addContributor(contributor: Contributor): Observable<Contributor[]> {
    if (Config.weAreUsingCloud) {
      return this.http.post<Contributor[]>(
        this.url + "Contributors",
        contributor
      );
    } else {
      return new Observable((observer) => {
        contributors.push(contributor);
        var copy = [...contributors];
        observer.next(copy);
      });
    }
  }

  deleteContributor(id: number): Observable<Contributor[]> {
    if (Config.weAreUsingCloud) {
      return this.http.delete<Contributor[]>(
        this.url + "Contributors/delete" + id
      );
    } else {
      return new Observable((observer) => {
        contributors = contributors.filter((p) => p.id != id);
        var copy = [...contributors];
        observer.next(copy);
      });
    }
  }

  editContributor(contributor: Contributor): Observable<Contributor[]> {
    if (Config.weAreUsingCloud) {
      return this.http.put<null>(
        this.url + "/Contributors/update" + contributor.id,
        contributor
      );
    } else {
      return new Observable((observer) => {
        for (var i = 0; i < contributors.length; i++) {
          //look through the array and replace the item
          if (contributor.id == i) {
            contributors[i] = contributor;
            i = contributors.length; //we found what we wanted we can stop}
          }
        }
        var copy = [...contributors];
        observer.next(copy);
      });
    }
  }

  constructor(private http: HttpClient) {}
}
