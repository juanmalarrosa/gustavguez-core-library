import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { NumberUtility } from '../utilities/number.utility';
let PrettyNumberPipe = class PrettyNumberPipe {
    transform(value) {
        return NumberUtility.valid(value) ? NumberUtility.format(value) : '0';
    }
};
PrettyNumberPipe = __decorate([
    Pipe({
        name: 'prettyNumber'
    })
], PrettyNumberPipe);
export { PrettyNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5LW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUs1RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUU1QixTQUFTLENBQUMsS0FBVTtRQUNuQixPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN2RSxDQUFDO0NBRUQsQ0FBQTtBQU5ZLGdCQUFnQjtJQUg1QixJQUFJLENBQUM7UUFDTCxJQUFJLEVBQUUsY0FBYztLQUNwQixDQUFDO0dBQ1csZ0JBQWdCLENBTTVCO1NBTlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVtYmVyVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9udW1iZXIudXRpbGl0eSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3ByZXR0eU51bWJlcidcbn0pXG5leHBvcnQgY2xhc3MgUHJldHR5TnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcblx0XHRyZXR1cm4gTnVtYmVyVXRpbGl0eS52YWxpZCh2YWx1ZSkgPyBOdW1iZXJVdGlsaXR5LmZvcm1hdCh2YWx1ZSkgOiAnMCc7XG5cdH1cblxufVxuIl19