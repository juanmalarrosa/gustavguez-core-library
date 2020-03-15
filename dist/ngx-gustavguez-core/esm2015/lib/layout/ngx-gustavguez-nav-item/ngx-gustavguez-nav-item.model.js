import { StringUtility } from '../../utilities/string.utility';
import { ArrayUtility } from '../../utilities/array.utility';
export class NgxGustavguezNavItemModel {
    constructor(display, icon, action, childs) {
        this.display = display;
        this.icon = icon;
        this.action = action;
        this.childs = childs;
        this.id = StringUtility.randomString();
        this.isLink = !ArrayUtility.hasValue(childs);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0ubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE1BQU0sT0FBTyx5QkFBeUI7SUFLbEMsWUFDVyxPQUFnQixFQUNoQixJQUFhLEVBQ2IsTUFBZSxFQUNmLE1BQW9DO1FBSHBDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUE4QjtRQUUzQyxJQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdVdGlsaXR5IH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3N0cmluZy51dGlsaXR5JztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWwge1xuXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gICAgcHVibGljIGlzTGluazogYm9vbGVhbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGRpc3BsYXk/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpY29uPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgYWN0aW9uPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY2hpbGRzPzogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbFtdXG4gICAgKXtcbiAgICAgICAgdGhpcy5pZCA9IFN0cmluZ1V0aWxpdHkucmFuZG9tU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuaXNMaW5rID0gIUFycmF5VXRpbGl0eS5oYXNWYWx1ZShjaGlsZHMpO1xuICAgIH1cbn0iXX0=