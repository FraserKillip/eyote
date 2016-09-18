import { SendingNode, MonoReceivingNode } from '../node/Node';
export class MultiplyNode extends SendingNode<number> implements MonoReceivingNode<number> {

    constructor(identifier: string, name: string, private factor: number) {
        super(identifier, name);
    }

    kill(): void {
    }

    receiveData(data: number) {
        this.sendData(data * this.factor);
    }

}
