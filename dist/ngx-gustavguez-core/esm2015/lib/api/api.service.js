import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormUtility } from '../utilities/form.utility';
import { ArrayUtility } from '../utilities/array.utility';
import { ApiResponseModel } from './api-response.model';
import { ApiDataResponseStrategyModel } from './api-response-strategies/api-data-response-strategy.model';
import { ApiRootResponseStrategyModel } from './api-response-strategies/api-root-response-strategy.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let ApiService = class ApiService {
    // Service constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
        // Load data strategy by default
        this.apiResponseStrategies = [
            new ApiDataResponseStrategyModel(),
            new ApiRootResponseStrategyModel()
        ];
        // Set as active
        this.activeApiResponseStrategy = this.apiResponseStrategies[0];
    }
    // Setters
    setApiURL(apiURL) {
        this.apiURL = apiURL;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    // Add strategy method
    addApiResponseStrategy(strategy) {
        if (strategy.getName()) {
            this.apiResponseStrategies.push(strategy);
        }
    }
    // Change active strategy
    changeApiResponseStrategy(strategyName) {
        let hasChanged = false;
        ArrayUtility.every(this.apiResponseStrategies, (strategy) => {
            // Check name
            if (strategy.getName() === strategyName) {
                this.activeApiResponseStrategy = strategy;
                // Mark has changed
                hasChanged = true;
            }
            return !hasChanged;
        });
        return hasChanged;
    }
    // Fetch
    fetchData(uri, params) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            }),
            params: params
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Fetch
    getObj(uri, id) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + '/' + id;
        // Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Delete an object using DELETE
    deleteObj(uri, id) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + (id ? '/' + id : '');
        // Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        // Map response
        map(() => true));
    }
    // Create an object with POST
    createObj(uri, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri;
        // Check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        // Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Parse response
    parseResponse(response) {
        // Current response
        const resp = new ApiResponseModel();
        // CHECK RESPONSE
        resp.data = this.activeApiResponseStrategy.parseJSON(response);
        // Return api response model
        return resp;
    }
};
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7QUFLMUcsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQVF0QixzQkFBc0I7SUFDdEIsWUFDUyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzlCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMscUJBQXFCLEdBQUc7WUFDNUIsSUFBSSw0QkFBNEIsRUFBRTtZQUNsQyxJQUFJLDRCQUE0QixFQUFFO1NBQ2xDLENBQUM7UUFFRixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsVUFBVTtJQUNILFNBQVMsQ0FBQyxNQUFjO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxjQUFjLENBQUMsV0FBbUI7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFX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QUFXLENBQUM7YUFDM0IsSUFBSTtRQUNKLGVBQWU7UUFDZixHQUFHLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUI7SUFDVCxhQUFhLENBQUMsUUFBYTtRQUNsQyxtQkFBbUI7UUFDbkIsTUFBTSxJQUFJLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUV0RCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9ELDRCQUE0QjtRQUM1QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRCxDQUFBOztZQXJLcUIsVUFBVTs7O0FBVm5CLFVBQVU7SUFIdEIsVUFBVSxDQUFDO1FBQ1gsVUFBVSxFQUFFLE1BQU07S0FDbEIsQ0FBQztHQUNXLFVBQVUsQ0ErS3RCO1NBL0tZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybVV0aWxpdHkgfSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybS51dGlsaXR5JztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcbmltcG9ydCB7IEFwaVJlc3BvbnNlTW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlIH0gZnJvbSAnLi9hcGktcmVzcG9uc2Utc3RyYXRlZ2llcy9hcGktcmVzcG9uc2Utc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwaURhdGFSZXNwb25zZVN0cmF0ZWd5TW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1kYXRhLXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsJztcbmltcG9ydCB7IEFwaVJvb3RSZXNwb25zZVN0cmF0ZWd5TW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1yb290LXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cblx0Ly8gTW9kZWxzXG5cdHByaXZhdGUgYXBpVVJMOiBzdHJpbmc7XG5cdHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBhY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5OiBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlO1xuXHRwcml2YXRlIGFwaVJlc3BvbnNlU3RyYXRlZ2llczogQXBpUmVzcG9uc2VTdHJhdGVneUludGVyZmFjZVtdO1xuXG5cdC8vIFNlcnZpY2UgY29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG5cdFx0Ly8gTG9hZCBkYXRhIHN0cmF0ZWd5IGJ5IGRlZmF1bHRcblx0XHR0aGlzLmFwaVJlc3BvbnNlU3RyYXRlZ2llcyA9IFtcblx0XHRcdG5ldyBBcGlEYXRhUmVzcG9uc2VTdHJhdGVneU1vZGVsKCksXG5cdFx0XHRuZXcgQXBpUm9vdFJlc3BvbnNlU3RyYXRlZ3lNb2RlbCgpXG5cdFx0XTtcblxuXHRcdC8vIFNldCBhcyBhY3RpdmVcblx0XHR0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kgPSB0aGlzLmFwaVJlc3BvbnNlU3RyYXRlZ2llc1swXTtcblx0fVxuXG5cdC8vIFNldHRlcnNcblx0cHVibGljIHNldEFwaVVSTChhcGlVUkw6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYXBpVVJMID0gYXBpVVJMO1xuXHR9XG5cblx0cHVibGljIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG5cdH1cblxuXHQvLyBBZGQgc3RyYXRlZ3kgbWV0aG9kXG5cdHB1YmxpYyBhZGRBcGlSZXNwb25zZVN0cmF0ZWd5KHN0cmF0ZWd5OiBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlKTogdm9pZCB7XG5cdFx0aWYgKHN0cmF0ZWd5LmdldE5hbWUoKSkge1xuXHRcdFx0dGhpcy5hcGlSZXNwb25zZVN0cmF0ZWdpZXMucHVzaChzdHJhdGVneSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hhbmdlIGFjdGl2ZSBzdHJhdGVneVxuXHRwdWJsaWMgY2hhbmdlQXBpUmVzcG9uc2VTdHJhdGVneShzdHJhdGVneU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGxldCBoYXNDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0XHRBcnJheVV0aWxpdHkuZXZlcnkodGhpcy5hcGlSZXNwb25zZVN0cmF0ZWdpZXMsIChzdHJhdGVneTogQXBpUmVzcG9uc2VTdHJhdGVneUludGVyZmFjZSkgPT4ge1xuXHRcdFx0Ly8gQ2hlY2sgbmFtZVxuXHRcdFx0aWYgKHN0cmF0ZWd5LmdldE5hbWUoKSA9PT0gc3RyYXRlZ3lOYW1lKSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlQXBpUmVzcG9uc2VTdHJhdGVneSA9IHN0cmF0ZWd5O1xuXG5cdFx0XHRcdC8vIE1hcmsgaGFzIGNoYW5nZWRcblx0XHRcdFx0aGFzQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gIWhhc0NoYW5nZWQ7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGhhc0NoYW5nZWQ7XG5cdH1cblxuXHQvLyBGZXRjaFxuXHRwdWJsaWMgZmV0Y2hEYXRhKHVyaTogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pLFxuXHRcdFx0cGFyYW1zOiBwYXJhbXNcblx0XHR9O1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRmV0Y2hcblx0cHVibGljIGdldE9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQuZ2V0KHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGFuIG9iamVjdCB1c2luZyBQQVRDSFxuXHRwdWJsaWMgcGFydGlhbFVwZGF0ZU9iaih1cmk6IHN0cmluZywgaWQ6IG51bWJlciwgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmkgKyAnLycgKyBpZDtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQucGF0Y2godXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRGVsZXRlIGFuIG9iamVjdCB1c2luZyBERUxFVEVcblx0cHVibGljIGRlbGV0ZU9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArIChpZCA/ICcvJyArIGlkIDogJycpO1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5kZWxldGUodXJsLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKCgpID0+IHRydWUpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIFBPU1Rcblx0cHVibGljIGNyZWF0ZU9iaih1cmk6IHN0cmluZywgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmk7XG5cblx0XHQvLyBDaGVjayBmb3JtIGRhdGFcblx0XHRpZiAoRm9ybVV0aWxpdHkubmVlZEZvcm1EYXRhKG9iaikpIHtcblx0XHRcdG9iaiA9IEZvcm1VdGlsaXR5Lmpzb25Ub0Zvcm1EYXRhKG9iaik7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wb3N0KHVybCwgb2JqLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vIFBhcnNlIHJlc3BvbnNlXG5cdHByaXZhdGUgcGFyc2VSZXNwb25zZShyZXNwb25zZTogYW55KTogQXBpUmVzcG9uc2VNb2RlbCB7XG5cdFx0Ly8gQ3VycmVudCByZXNwb25zZVxuXHRcdGNvbnN0IHJlc3A6IEFwaVJlc3BvbnNlTW9kZWwgPSBuZXcgQXBpUmVzcG9uc2VNb2RlbCgpO1xuXG5cdFx0Ly8gQ0hFQ0sgUkVTUE9OU0Vcblx0XHRyZXNwLmRhdGEgPSB0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kucGFyc2VKU09OKHJlc3BvbnNlKTtcblxuXHRcdC8vIFJldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRyZXR1cm4gcmVzcDtcblx0fVxuXG59XG4iXX0=