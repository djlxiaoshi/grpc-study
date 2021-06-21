/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:27
 * @LastEditTime: 2021-06-14 17:51:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/server.js
 */ 
const grpc = require('@grpc/grpc-js');
const services = require('./proto/hello_grpc_pb');
const messages = require('./proto/hello_pb');
/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  const reply = new messages.HelloReply();
  reply.setMessage('Hello ' + call.request.getName())
  // 这个实际就是客户端中的callback，callback的第一个参数是error
  callback(null, reply);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */

const server = new grpc.Server();
server.addService(services.GreeterService, {
  sayHello: sayHello,
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});


