import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit(): void{
    this.items =  [
      {
        label: 'Menu Principal',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Caída de curvatura',
            icon: 'pi pi-calculator',
            routerLink: 'caida-curvatura'
          },
          {
            label: 'Contacto',
            icon: 'pi pi-telegram'            
          }
        ]
      }
      // {
      //   label: 'Pipes personalizados',
      //   icon: 'pi pi-cog'
      // }
  ];
  }

}
