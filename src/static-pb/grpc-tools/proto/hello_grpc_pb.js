// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_static$pb_grpc$tools_proto_hello_pb = require('../../../../src/static-pb/grpc-tools/proto/hello_pb.js');

function serialize_hello_HelloReply(arg) {
  if (!(arg instanceof src_static$pb_grpc$tools_proto_hello_pb.HelloReply)) {
    throw new Error('Expected argument of type hello.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloReply(buffer_arg) {
  return src_static$pb_grpc$tools_proto_hello_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hello_HelloRequest(arg) {
  if (!(arg instanceof src_static$pb_grpc$tools_proto_hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type hello.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloRequest(buffer_arg) {
  return src_static$pb_grpc$tools_proto_hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/hello.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: src_static$pb_grpc$tools_proto_hello_pb.HelloRequest,
    responseType: src_static$pb_grpc$tools_proto_hello_pb.HelloReply,
    requestSerialize: serialize_hello_HelloRequest,
    requestDeserialize: deserialize_hello_HelloRequest,
    responseSerialize: serialize_hello_HelloReply,
    responseDeserialize: deserialize_hello_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
