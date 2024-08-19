import { CommonModule} from '@angular/common';
import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SidebarService } from './_services/sideBar/sidebar.service';
import { filter } from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoPageAction,
  PoBreadcrumb
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  CommonModule,
  RouterOutlet,
  PoToolbarModule,
  PoMenuModule,
  PoPageModule,
  MatIconModule
  ],
  providers: [SidebarService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  menuItemSelected: string = '';

  public breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' }]
  };


  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });
  }

  updateBreadcrumb(): void {
    const currentRoute = this.route.root.firstChild?.snapshot;
    if (currentRoute) {
      const breadcrumbLabel = currentRoute.title || 'Home';
      const breadcrumbLink = this.router.url;
      console.log()

      this.breadcrumb.items = [
        { label: 'Contratos', link: '/home' },
        { label: breadcrumbLabel, link: breadcrumbLink }
      ];
    }
  }

   public readonly actions: Array<PoPageAction> = [
    
  ];

  menus: Array<PoMenuItem> = [
 
    { label: 'Home',  action: this.printMenuAction.bind(this), icon: 'po-icon po-icon-wallet', link: '/home' , shortLabel: 'home'},
   
  ];
  constructor(public SidebarService: SidebarService, private router: Router, private route: ActivatedRoute) {}
  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
