import { Component, Input, EventEmitter, Output } from '@angular/core';

import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';

@Component({
	selector: 'ngx-gustavguez-submit',
	templateUrl: './ngx-gustavguez-submit.component.html',
	styleUrls: ['./ngx-gustavguez-submit.component.scss']
})
export class NgxGustavguezSubmitComponent {
	// Input
	@Input() text: string;
	@Input() loadingText: string;
	@Input() loading: string;
	@Input() status: NgxGustavguezStatusEnum;

	// Output
	@Output() onClick: EventEmitter<void> = new EventEmitter();

	// Custom events
	onDoClick(): void {
		this.onClick.emit();
	}
}
