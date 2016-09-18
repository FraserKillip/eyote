import * as express from 'express';
// import * as bodyParser from 'body-parser';
import { IntervalNode } from './node/Input/IntervalNode';
import { LoggerNode } from './node/Utility/LoggerNode';
import { HttpInputNode } from './node/Input/HttpInputNode';
import { Guid } from './util/Guid';
import { MultiplyNode } from './math/MultiplyNode';

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

const node1 = new IntervalNode(Guid.raw(), 'Interval Node', 1000);

const multNode = new MultiplyNode(Guid.raw(), 'Multiply Node', 3);

const node2 = new LoggerNode(Guid.raw(), 'Logger Node');

node1.addConnection(multNode);
multNode.addConnection(node2);

const httpNode = new HttpInputNode('test', 'Http Node');
httpNode.addConnection(node2);
httpNode.register(app);
