/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:27
 * @LastEditTime: 2020-07-09 17:18:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/server.js
 */ 
var PROTO_PATH = __dirname + '/../protos/helloworld.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    // 这个实际就是客户端中的callback，callback的第一个参数是error
  callback(null, {message: 'Hello ' + call.request.name});
}

function sayHelloAgain(call, callback) {
    callback(null, {message: 'Hello again, ' + call.request.name})
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, {
    sayHello: sayHello,
    sayHelloAgain: sayHelloAgain
  });

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();