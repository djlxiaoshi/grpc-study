/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:27
 * @LastEditTime: 2021-06-14 14:02:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/server.js
 */ 
const grpc = require('grpc');
const hello_proto = require('./definition');
/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    // 这个实际就是客户端中的callback，callback的第一个参数是error
  callback(null, {message: 'Hello ' + call.request.name});
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */

const server = new grpc.Server();
server.addService(hello_proto.Greeter.service, {
  sayHello: sayHello,
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

server.start();
