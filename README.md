# WebServer

- See https://qiita.com/makoto1899/items/ef15372d4cf4621a674e
- openssl ca -config *config_file* -out *cert_file* -infiles *certificat_signing_request*
- openssl pkcs12 -export -inkey *key_file* -in *cert_file* -out *pfx_file*
