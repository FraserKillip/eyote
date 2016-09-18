import { SendingNode } from '../Node';
export class IntervalNode extends SendingNode<number> {
    private interval: NodeJS.Timer;
    private count = 0;

    constructor(identifier: string, name: string, interval: number) {
        super(identifier, name);

        this.interval = setInterval(() => this.sendData(this.count++), interval);
    }

    kill(): void {
        clearInterval(this.interval);
    }
}
