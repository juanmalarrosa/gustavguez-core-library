import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';
import * as i0 from "@angular/core";
let NgxGustavguezToastsService = class NgxGustavguezToastsService {
    constructor() {
        // Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    // Methods
    addError(message) {
        // Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER));
    }
    addSuccess(message) {
        // Open toast
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUszRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUF2QztRQUVDLGlCQUFpQjtRQUNWLGlCQUFZLEdBQTBDLElBQUksWUFBWSxFQUFFLENBQUM7S0FpQmhGO0lBZkEsVUFBVTtJQUNILFFBQVEsQ0FBQyxPQUFlO1FBQzlCLGFBQWE7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckIsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQ3BFLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWU7UUFDaEMsYUFBYTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyQixJQUFJLHVCQUF1QixDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FDckUsQ0FBQztJQUNILENBQUM7Q0FFRCxDQUFBOztBQXBCWSwwQkFBMEI7SUFIdEMsVUFBVSxDQUFDO1FBQ1gsVUFBVSxFQUFFLE1BQU07S0FDbEIsQ0FBQztHQUNXLDBCQUEwQixDQW9CdEM7U0FwQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdC5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL25neC1ndXN0YXZndWV6LXN0YXR1cy5lbnVtJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlIHtcblxuXHQvLyBFdmVudCBlbW1pdGVyc1xuXHRwdWJsaWMgb25Ub2FzdEFkZGVkOiBFdmVudEVtaXR0ZXI8Tmd4R3VzdGF2Z3VlelRvYXN0TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIE1ldGhvZHNcblx0cHVibGljIGFkZEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdC8vIE9wZW4gdG9hc3Rcblx0XHR0aGlzLm9uVG9hc3RBZGRlZC5lbWl0KFxuXHRcdFx0bmV3IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKG1lc3NhZ2UsIE5neEd1c3Rhdmd1ZXpTdGF0dXNFbnVtLkRBTkdFUilcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGFkZFN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Ly8gT3BlbiB0b2FzdFxuXHRcdHRoaXMub25Ub2FzdEFkZGVkLmVtaXQoXG5cdFx0XHRuZXcgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwobWVzc2FnZSwgTmd4R3VzdGF2Z3VlelN0YXR1c0VudW0uU1VDQ0VTUylcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==