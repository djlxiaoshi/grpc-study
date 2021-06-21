/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:18
 * @LastEditTime: 2021-06-14 17:53:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/client.js
 */ 

const grpc = require('@grpc/grpc-js');

const messages = require('./proto/hello_pb');
const services = require('./proto/hello_grpc_pb');

const client = new services.GreeterClient('localhost:50051',
                                      grpc.credentials.createInsecure());

var request = new messages.HelloRequest();
request.setName('djlxs');

client.sayHello(request, function(err, response) {
  console.log('Greeting:', response.getMessage());
});
