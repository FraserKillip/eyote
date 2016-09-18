import { SendingNode, MonoReceivingNode } from '../Node';
export class NumberParseNode extends SendingNode<number> implements MonoReceivingNode<string> {
    kill(): void {
    }

    receiveData(data: string) {
        const num = Number.parseFloat(data);
        if (num != null) this.sendData(num);
    }
}
