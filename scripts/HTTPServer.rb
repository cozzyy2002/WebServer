require 'webrick'
require 'webrick/https'
require 'openssl'

server = WEBrick::HTTPServer.new({
  DocumentRoot: './',
  Port: 8443,
  SSLEnable: true,
  SSLCertificate: OpenSSL::X509::Certificate.new(File.open('./ssl/status_server/server.crt').read),
  SSLPrivateKey: OpenSSL::PKey::RSA.new(File.open('./ssl/status_server/server.key').read),
})

#server.mount_proc '/' do |req, res|
#  print #{req.host}
#end

Signal.trap(:INT) { server.shutdown }
server.start

