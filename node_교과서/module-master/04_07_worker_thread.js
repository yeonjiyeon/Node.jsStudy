const {
    Worker, isMainThread, parentPort,
} =require('worker_threads');

if(isMainThread){// 부모일 때(기존에 동작하던 싱글스레드)
    const worker = new Worker(__filename);//현재 파일 실행시키는 중
    worker.on('message', message => console.log('from worker', message));
    //워커에게 메시지 받기
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');//워커에 데이터보내기
}else{ // 워커일 때
    parentPort.on('message', (value) => {//메시지 받기,
        console.log('from worker', value);
        parentPort.postMessage('pong');//부모에게 데이터보내기
        parentPort.close();//부모와 연결종료
    });
}