require 'webrick'
require 'webrick/https'
require 'openssl'

server = WEBrick::HTTPServer.new({
  DocumentRoot: './',
  Port: 443,
  SSLEnable: true,
  SSLCertificate: OpenSSL::X509::Certificate.new(File.open('../ssl/multi.test.com.crt').read),
  SSLPrivateKey: OpenSSL::PKey::RSA.new(File.open('../ssl/multi.test.com.key').read),
})

server.mount_proc '/test' do |req, res|
  res.body="<HTML><BODY><H2>I am #{req.host}</H2></BODY></HTML>"
end

Signal.trap(:INT) { server.shutdown }
server.start

