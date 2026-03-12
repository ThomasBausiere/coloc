import { ChangeDetectionStrategy, Component } from '@angular/core';

type EquipmentItem = {
  label: string;
  icon: string;
};

@Component({
  selector: 'app-stuff',
  standalone: true,
  imports: [],
  templateUrl: './stuff.html',
  styleUrl: './stuff.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stuff {

  readonly items: EquipmentItem[] = [
    { label: 'Fibre optique', icon: 'assets/icons/optic_fiber.svg' },
    { label: 'Télévision', icon: 'assets/icons/tv.svg' },
    { label: 'Frigo', icon: 'assets/icons/fridge.svg' },
    { label: 'Four', icon: 'assets/icons/oven.svg' },
    { label: 'Lave linge', icon: 'assets/icons/washing_machine.svg' },
    { label: 'Lave-vaisselle', icon: 'assets/icons/dishwasher.svg' },
  ];

}