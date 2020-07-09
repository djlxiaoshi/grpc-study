/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:18
 * @LastEditTime: 2020-07-09 17:18:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/client.js
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

function main() {
  var client = new hello_proto.Greeter('localhost:50051',
                                       grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello2({name: user}, function(err, response) {
    console.log('Greeting:', response.message);
  });

  client.sayHelloAgain({name: 'djlxs'}, function(err, response) {
    console.log(response.message);
  });
}

main();