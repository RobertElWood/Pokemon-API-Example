import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './Pokemon';
import { RandomNumberGenerationService } from './random-number-generation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIExample';

  output : number = 0;

  resultPokemon :  Pokemon[] = [];

  SearchName : string = "";
  
  SearchIndex : number = 1;

  constructor(private rng : RandomNumberGenerationService, private pokeAPI : PokemonService) 
  {
    this.output = this.rng.GetRandomNumber(1,10);
  }

  GetRandomNum(min : number, max : number)
  {
    return Math.floor(Math.random() * max) + min;      
  }

  UpdateOutput()
  {
    return this.output = this.GetRandomNum(1, 10);
  }

  SearchPokemonByName(name: string) : void 
  {
    this.resultPokemon = [];
    this.pokeAPI.GetPokemonByName(name).subscribe((result: Pokemon) => {this.resultPokemon.push(result)});
  }

  GetRandomPokemon() : number
  {
    return this.GetRandomNum(1, 905);
  }

  SearchPokemonByIndex(index : number) : void 
  {
    this.resultPokemon = [];
    this.pokeAPI.GetPokemonByIndex(index).subscribe((result: Pokemon) => {this.resultPokemon.push(result)});
  }

}
