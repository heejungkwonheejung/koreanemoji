// // 채팅 데이터
// const chatData = {
//     1: [
//         { type: 'received', text: '안녕하세요! 오늘 날씨가 정말 좋네요.' },
//         { type: 'sent', text: '네, 정말 그래요! 산책하기 딱 좋은 날씨네요.' },
//         { type: 'received', text: '산책 좋아하세요?' },
//         { type: 'sent', text: '네, 종종 걷는 거 좋아해요.' },
//         { type: 'received', text: '다음에 함께 걸어요!' },
//         { type: 'sent', text: '좋아요! 연락드릴게요.' },
//         { type: 'received', text: '네, 기다릴게요 :)' }
//     ],
//     2: [
//         { type: 'received', text: '채팅 2의 첫 메시지입니다.' },
//         { type: 'sent', text: '네, 채팅 2에서 인사드려요!' },
//         { type: 'received', text: '여기는 무슨 내용이 있나요?' },
//         { type: 'sent', text: '무작위 채팅 내용이 준비되어 있어요.' }
//     ],
//     // 다른 채팅 데이터 추가 가능
// };

// // 채팅방 표시 함수
// function showChat(chatNumber) {
//     const chatContainer = document.getElementById('chat-display');
//     chatContainer.innerHTML = ''; // 기존 채팅 내용 초기화
//     chatContainer.classList.remove('hidden'); // 채팅 컨테이너 표시

//     // 선택된 채팅 데이터를 불러오기
//     const selectedChat = chatData[chatNumber];
//     selectedChat.forEach((message) => {
//         const chatMessage = document.createElement('div');
//         chatMessage.classList.add('chat-message', message.type);
//         chatMessage.innerText = message.text;
//         chatContainer.appendChild(chatMessage);
//     });
// }
