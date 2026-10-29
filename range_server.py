import os
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def send_head(self):
        if 'Range' not in self.headers:
            return super().send_head()

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        file_size = os.path.getsize(path)
        range_header = self.headers['Range']
        match = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not match:
            return super().send_head()

        start = int(match.group(1))
        end = int(match.group(2)) if match.group(2) else file_size - 1
        if start >= file_size or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            return None

        self.send_response(206)
        content_type = self.guess_type(path)
        self.send_header('Content-type', content_type)
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(end - start + 1))
        self.send_header('Last-Modified', self.date_time_string(os.path.getmtime(path)))
        self.end_headers()

        f = open(path, 'rb')
        f.seek(start)
        return RangeFileWrapper(f, end - start + 1)

class RangeFileWrapper:
    def __init__(self, f, length):
        self.f = f
        self.remaining = length

    def read(self, size=-1):
        if self.remaining <= 0:
            return b''
        if size < 0 or size > self.remaining:
            size = self.remaining
        data = self.f.read(size)
        self.remaining -= len(data)
        return data

    def close(self):
        self.f.close()

if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', 8088), RangeRequestHandler)
    print("Serving Threaded HTTP with Range Support on port 8088...")
    server.serve_forever()
