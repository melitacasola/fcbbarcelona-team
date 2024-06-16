import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Card {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})


export class CardDetailsComponent implements OnInit {
  card: Card | undefined;

  cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description 1' },
    { id: 2, title: 'Card 2', description: 'Description 2' },
    { id: 3, title: 'Card 3', description: 'Description 3' }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.card = this.cards.find(card => card.id === id);
  }
}
