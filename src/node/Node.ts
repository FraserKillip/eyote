import { Connection } from './Connection';
export abstract class Node {
    constructor(public identifier: string, public name: string) {}

    abstract kill(): void;
}

export interface IInputOutputNode<TInput, TOutput> extends MonoReceivingNode<TInput>, SendingNode<TOutput> {

}

export abstract class SendingNode<TOuput> extends Node {
    /**
     * Outbound connections from the node
     */
    connections: Connection<TOuput>[] = [];

    /**
     * Adds a connection from this node to the target node
     *
     * @param node
     */
    addConnection(node: Connection<TOuput>): void {
        this.connections.push(node);
    }

    sendData(data: TOuput): void {
        this.connections.forEach((connection) => connection.sendData(data));
    }
}

export interface IMonoReceivingNode<TInput> extends MonoReceivingNode<TInput> {}

export abstract class MonoReceivingNode<TInput> extends Node {
    abstract receiveData(data: TInput)
}

export abstract class DuoReceivingNode<TInputA, TInputB> extends MonoReceivingNode<TInputA> {
    abstract receiveData2(data: TInputB)
}
