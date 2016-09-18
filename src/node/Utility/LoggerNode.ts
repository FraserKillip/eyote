import { ReceivingNode, SendingNode } from '../Node';
export class LoggerNode extends SendingNode<any> implements ReceivingNode<any>{
    receiveData(data: any) {
        console.log(this.name, data);

        this.sendData(data);
    }

    kill(): void {
    }
}
