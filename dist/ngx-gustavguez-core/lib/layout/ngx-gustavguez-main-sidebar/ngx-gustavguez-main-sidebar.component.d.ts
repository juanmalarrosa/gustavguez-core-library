import { OnInit } from '@angular/core';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { NgxGustavguezNavItemModel } from '../ngx-gustavguez-nav-item/ngx-gustavguez-nav-item.model';
export declare class NgxGustavguezMainSidebarComponent implements OnInit {
    private ngxGustavguezMainSidebarService;
    brandTitle: string;
    brandImg: string;
    userIsLogged: boolean;
    userAvatar: string;
    userName: string;
    menuItems: NgxGustavguezNavItemModel[];
    menuItemsStates: any;
    constructor(ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService);
    ngOnInit(): void;
    onMenuItemClick(menuItem: NgxGustavguezNavItemModel): void;
    onBrandLink(event: MouseEvent): void;
    onCloseSidebar(): void;
}
