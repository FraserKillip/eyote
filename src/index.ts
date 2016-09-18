import * as express from 'express';
// import * as bodyParser from 'body-parser';
import { IntervalNode } from './node/Input/IntervalNode';
import { LoggerNode } from './node/Utility/LoggerNode';
import { HttpInputNode } from './node/Input/HttpInputNode';
import { Guid } from './util/Guid';
import { MultiplyNode } from './math/MultiplyNode';
import { MathNode } from './MathNode';
import { NumberParseNode } from './node/Utility/NumberParseNode';
import { Connection } from './node/Connection';

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.text({ type: '*/*' }));

//
// app.post('/in/:token', function(req, res) {
//     res.send(req.params);
// });

app.get('/out/:token', function(req, res) {
    res.send(req.params);
});

app.listen(3000, () => console.log('App running on port 3000'));

const interval = new IntervalNode(Guid.raw(), 'Interval Node', 3000);
const httpNode = new HttpInputNode('test', 'Http Node');
httpNode.register(app);
const mathNode = new MathNode(Guid.raw(), 'Math node');
const logger = new LoggerNode(Guid.raw(), 'Logger Node');
const parse = new NumberParseNode(Guid.raw(), 'Parse node');

httpNode.addConnection(new Connection<string>((data) => parse.receiveData(data)));
parse.addConnection(new Connection<number>((data) => mathNode.receiveData(data)));
interval.addConnection(new Connection<number>((data) => mathNode.receiveData2(data)));
mathNode.addConnection(new Connection<number>((data) => logger.receiveData(data)));
