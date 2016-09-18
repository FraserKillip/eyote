import { SendingNode } from '../Node';
import * as e from 'express';
export class HttpInputNode extends SendingNode<string> {

    register(app: e.Application) {
        app.post(`/in/${this.identifier}`, (request: e.Request, response: e.Response) => {
            console.log(request.body);
            response.end()
        });

        console.log(`Http node listing on /in/${this.identifier}`);
    }

    kill(): void {
    }

}
