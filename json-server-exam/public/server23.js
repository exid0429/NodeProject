const http = require('http');
//createServer 메서드뒤에 listen 메서드를 붙이고 클라에게 공개할 포트번호와
//포트 연결 완료 후 실행될 콜백 함수를 넣는다.
//이제 이 파일을 실행하면 서버는 8080포트에서 요청이 오기를 기다린다.

const server = http.createServer((req,res) => {
    //res => res.writeHead, res.write, res.end
    //res.writeHead는 응답에 대한 정보를 기록.
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>안녕 노드 공부 어렵지? 그래도 힘내</h1>');
    res.end('<p>Hello Node!</p>');
});
server.listen(8080);

//listen 메서드에 콜백함수를 넣는대신 listening 이벤트 리스너를 붙여도 된다.
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중');
});

server.on('error',(error) => {
    console.log(error);
})

//이렇게 할수도 있고
// .listen(8080, () =>{
//     console.log('8080번 포트에서 서버 작동대기중이다.');
// });


