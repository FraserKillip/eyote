export abstract class Node {
    constructor(public identifier: string, public name: string) {}

    abstract kill(): void;
}

export interface IInputOutputNode<TInput, TOutput> extends ReceivingNode<TInput>, SendingNode<TOutput> {

}

export abstract class SendingNode<TOuput> extends Node {
    /**
     * Outbound connections from the node
     */
    connections: ReceivingNode<TOuput>[] = [];

    /**
     * Adds a connection from this node to the target node
     *
     * @param node
     */
    addConnection(node: ReceivingNode<TOuput>): void {
        this.connections.push(node);
    }

    sendData(data: TOuput): void {
        this.connections.forEach((connection) => connection.receiveData(data));
    }
}

export interface IReceivingNode<TInput> extends ReceivingNode<TInput> {}

export abstract class ReceivingNode<TInput> extends Node {
    abstract receiveData(data: TInput)
}
