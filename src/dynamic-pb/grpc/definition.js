/*
 * @Author: your name
 * @Date: 2020-07-09 16:07:18
 * @LastEditTime: 2021-06-14 14:01:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /grpc-study/src/client.js
 */ 

var PROTO_PATH = __dirname + '/hello.proto';

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
var hello_proto = grpc.loadPackageDefinition(packageDefinition).hello;

module.exports = hello_proto;