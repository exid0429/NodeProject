//모듈이란 프로그래밍에서 외부에 영향을 받지 않는 독립된, 재사용 가능한
//코드들의 묶음. 노드에서는ㄴ 파일로 구분이 된다.
//다른파일에서 작성된 코드는 서로 다른 모듈에 존재하는것으로 인식

//노드에서는 require메서드를 통해 외부 모듈을 가져오는게 가능
//require메서드는 node가 로컬 객체에 추가한 메서드로서 
//파라미터 => 추가할 모듈의 파일 경로값
//require('파일 경로');

//노드 모듈을 가져온다.
//http.createServer(): 서버 인스턴스를 만들어 반환
//http.server: 서버 클래스
//server.listen() : 서버를 클라이언트 요청 대기상태로 만듬
const http = require('http');

//localhost
const hostaddress = "127.0.0.1";
const port = 3000;

//server making
const server = http.createServer((req,res) =>{
    //요청이 오면 실행되는 콜백 함수
    res.statusCode = 200
    res.setHeader("Content-type", "text/plain");
    res.end("안녕 친구들!");
});

server.listen(port, hostaddress,() => {
    //요청 대기가 완료되면 실행되는 콜백 함수
    //터미널에 기록이 남음
    console.log(`Server 작동중 ${hostaddress}:{${port}}`);
})
