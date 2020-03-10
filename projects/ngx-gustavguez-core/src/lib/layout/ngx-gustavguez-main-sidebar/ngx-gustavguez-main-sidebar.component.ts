import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';
import { NgxGustavguezNavItemModel } from '../ngx-gustavguez-nav-item/ngx-gustavguez-nav-item.model';

@Component({
    selector: 'ngx-gustavguez-main-sidebar',
    templateUrl: './ngx-gustavguez-main-sidebar.component.html',
    styleUrls: ['./ngx-gustavguez-main-sidebar.component.scss']
})
export class NgxGustavguezMainSidebarComponent implements OnInit {
    //Inputs
    @Input() brandTitle: string;
    @Input() brandImg: string;
    @Input() userIsLogged: boolean;
    @Input() userAvatar: string;
    @Input() userName: string;
    @Input() menuItems: NgxGustavguezNavItemModel[];

    //Models
    menuItemsStates: any;

    //Inject services
    constructor(
        private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService
    ) { }

    //On component init
    ngOnInit(): void {
        //Init vars
        this.menuItemsStates = {};
    }

    //Custom events
    onMenuItemClick(menuItem: NgxGustavguezNavItemModel) {
        //Check
        if(ArrayUtility.hasValue(menuItem.childs)) {
            //Toggle state
            this.menuItemsStates[menuItem.id] = (menuItem.id in this.menuItemsStates) ? !this.menuItemsStates[menuItem.id] : false;
        } else {
            //Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    }

    onBrandLink(event: MouseEvent) {
        event.preventDefault();
        //Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
    }

    onCloseSidebar(){
        this.ngxGustavguezMainSidebarService.changeState(false);
    }

}
