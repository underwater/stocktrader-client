import { Component, OnInit } from '@angular/core';
import { PricingViewModel } from '../../../view-models/pricing.view-model';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'liveMode'
})
export class LiveModePipe implements PipeTransform {
    transform(value: boolean): any {
        return value ? 'ON' : 'OFF';
    }
}

@Component({
    selector: 'pricing',
    templateUrl: 'pricing.component.html'
})
export class PricingComponent implements OnInit {
    live: boolean = false;

    async refresh() {
        await this.vm.refresh();
    }

    constructor(public vm: PricingViewModel) { }

    async ngOnInit() {
        if (!this.vm.initialized) {
            await this.vm.init();
        }
    }

    toggleLiveMode() {
        this.live = !this.live;
    }
}
