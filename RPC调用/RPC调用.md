# RPC调用

Remote Procedure Call 远程过程调用

- 和Ajax 有什么相同点？
  - 都是两个计算机之间的网络通信
  - 都需要双方约定一个数据格式

- 和 Ajax 有什么不同点？
  - 不一定使用 DNS 作为寻址服务，RPC 一般在内网里互相请求。
  - 应用层协议一般不使用 HTTP，RPC 一般使用二进制协议，有性能上的优势。
  - 基于 TCP 或 UDP 协议

- 寻址/负载均衡
  - Ajax：使用DNS进行寻址
  - RPC：是哦那个特有服务进行寻址

- TCP 通信方式
  - 单工通信
  - 半双工通信
  - 全双工通信

- 二进制协议
  - 更小的数据包体积
  - 更快的编解码速率

「寻址/负载均衡」一般运维去做，多路复用和二进制协议多是BFF去做

## Node.js Buffer编解码二进制数据包

Buffer 模块的创建：

- 通过 Buffer.from 表示从现有的数据中创建 buffer
- 通过 Buffer.alloc 表示指定 buffer 的长度来创建

二进制协议编码库：Protocol Buffers。  
专门为Node.js实现的一个库：protocol-buffers

参考代码：[./buffer.js](./buffer.js)

## Node.js net 建立多路复用的RPC通道

Node.js 内置模块 net

- 单工/半双工的通信通道搭建
- 全双工的通信通道搭建
  - 关键在于应用层协议需要有标记包号的字段
  - 处理一下情况，需要有标记包长的字段
    - 粘包
    - 不完整包
  - 错误处理