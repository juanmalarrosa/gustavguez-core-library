import { __decorate } from "tslib";
import { Injectable, EventEmitter } from "@angular/core";
import { NgxGustavguezToastModel } from "./ngx-gustavguez-toast.model";
import { NgxGustavguezStatusEnum } from "../../ngx-gustavguez-status.enum";
import * as i0 from "@angular/core";
let NgxGustavguezToastsService = class NgxGustavguezToastsService {
    //Inject service
    constructor() {
        //Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    //Methods
    addError(message) {
        //Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER));
    }
    addSuccess(message) {
        //Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.SUCCESS));
    }
};
NgxGustavguezToastsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxGustavguezToastsService_Factory() { return new NgxGustavguezToastsService(); }, token: NgxGustavguezToastsService, providedIn: "root" });
NgxGustavguezToastsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NgxGustavguezToastsService);
export { NgxGustavguezToastsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ3RFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUszRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUtuQyxnQkFBZ0I7SUFDaEI7UUFKQSxnQkFBZ0I7UUFDVCxpQkFBWSxHQUEwQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xFLENBQUM7SUFFZixTQUFTO0lBQ0YsUUFBUSxDQUFDLE9BQWU7UUFDM0IsWUFBWTtRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQixJQUFJLHVCQUF1QixDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FDdkUsQ0FBQztJQUNOLENBQUM7SUFFTSxVQUFVLENBQUMsT0FBZTtRQUM3QixZQUFZO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2xCLElBQUksdUJBQXVCLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUN4RSxDQUFDO0lBQ04sQ0FBQztDQUVKLENBQUE7O0FBdkJZLDBCQUEwQjtJQUh0QyxVQUFVLENBQUM7UUFDWCxVQUFVLEVBQUUsTUFBTTtLQUNsQixDQUFDO0dBQ1csMEJBQTBCLENBdUJ0QztTQXZCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCB9IGZyb20gXCIuL25neC1ndXN0YXZndWV6LXRvYXN0Lm1vZGVsXCJcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpTdGF0dXNFbnVtIH0gZnJvbSBcIi4uLy4uL25neC1ndXN0YXZndWV6LXN0YXR1cy5lbnVtXCI7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZSB7XG5cbiAgICAvL0V2ZW50IGVtbWl0ZXJzXG4gICAgcHVibGljIG9uVG9hc3RBZGRlZDogRXZlbnRFbWl0dGVyPE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VcbiAgICBjb25zdHJ1Y3Rvcigpe31cblxuICAgIC8vTWV0aG9kc1xuICAgIHB1YmxpYyBhZGRFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgLy9PcGVuIHRvYXN0XG4gICAgICAgIHRoaXMub25Ub2FzdEFkZGVkLmVtaXQoXG4gICAgICAgICAgICBuZXcgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwobWVzc2FnZSwgTmd4R3VzdGF2Z3VlelN0YXR1c0VudW0uREFOR0VSKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICAvL09wZW4gdG9hc3RcbiAgICAgICAgdGhpcy5vblRvYXN0QWRkZWQuZW1pdChcbiAgICAgICAgICAgIG5ldyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbChtZXNzYWdlLCBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bS5TVUNDRVNTKVxuICAgICAgICApO1xuICAgIH1cblxufSJdfQ==