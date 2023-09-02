# Performance test results

Brief description of the used server (choose one): HTTP/1.1 / HTTP/2

Brief description of your computer: Windows 11, intel i7 7800, 16gb ram

## No Redis Cache

### Retrieving todos

http_reqs: 5014
http_req_duration - median: 5.99ms
http_req_duration - 99th percentile: 82.76ms

## Redis Cache

### Retrieving todos

http_reqs: 7726
http_req_duration - median: 5ms
http_req_duration - 99th percentile: 27.65ms

## Reflection

Brief reflection on the results of the tests -- why do you think you saw the results you saw: Due to caching, the requests took less time than with no caching.