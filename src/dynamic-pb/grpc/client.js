/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:18
 * @LastEditTime: 2021-06-14 14:01:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/client.js
 */ 

const grpc = require('grpc');

const hello_proto = require('./definition');

const client = new hello_proto.Greeter('localhost:50051',
                                      grpc.credentials.createInsecure());

client.sayHello({name: 'lxl'}, function(err, response) {
  console.log('Greeting:', response.message);
});
