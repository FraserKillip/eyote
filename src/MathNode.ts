import { DuoReceivingNode, SendingNode } from './node/Node';
export class MathNode extends SendingNode<number> implements DuoReceivingNode<number, number> {
    identifier: string;
    name: string;

    private queueA: number[] = [];
    private queueB: number[] = [];

    constructor(identifier: string, name: string) {
        super(identifier, name);
    }

    kill(): void {
    }

    receiveData(data: number) {
        console.log('Math a', data);
        this.queueA.push(data);
        this.process();
    }

    receiveData2(data: number) {
        console.log('Math b', data);
        this.queueB.push(data);
        this.process();
    }

    private process() {
        if (this.queueA.length === 0 || this.queueB.length === 0) return;

        this.sendData(this.queueA.shift() * this.queueB.shift());
    }

}
