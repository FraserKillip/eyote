export class Connection<T> {
    constructor(private sender: (data: T) => void) {}

    sendData(data: T) {
        this.sender(data)
    }
}
