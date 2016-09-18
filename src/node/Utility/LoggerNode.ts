import { MonoReceivingNode, SendingNode } from '../Node';
export class LoggerNode extends SendingNode<any> implements MonoReceivingNode<any>{
    receiveData(data: any) {
        console.log(this.name, data);

        this.sendData(data);
    }

    kill(): void {
    }
}
