import { SendingNode, ReceivingNode } from '../node/Node';
export class MultiplyNode extends SendingNode<number> implements ReceivingNode<number> {

    constructor(identifier: string, name: string, private factor: number) {
        super(identifier, name);
    }

    kill(): void {
    }

    receiveData(data: number) {
        this.sendData(data * this.factor);
    }

}
